"use strict";

const scene = document.querySelector("#scene");
const overlay = document.querySelector("#overlay");
const game = document.querySelector("#game");
const viewport = document.querySelector("#viewport");
const toast = document.querySelector("#toast");
const storageKey = "the-novent-game-demo-v1";
const items = {
  scrap: { name: "Phế liệu", description: "Mảnh kim loại thu hồi từ bãi vỡ.", weight: 4 },
  ice: { name: "Băng", description: "Tài nguyên thu được ngoài Dải Gần.", weight: 2 },
  cable: { name: "Cáp", description: "Cuộn dây còn dùng được.", weight: 3 },
  earth: { name: "Đồ Trái Đất", description: "Hàng đặt trước cho thương nhân ở cảng.", weight: 4 },
  core: { name: "Mảnh lõi", description: "Vật mẫu hiếm tìm thấy trong xác tàu.", weight: 3 },
  oxygen: { name: "Bình Oxy nhỏ", description: "Dùng trong chuyến bay để hồi Oxy.", weight: 2 },
  driftlife: { name: "Driftlife", description: "Sinh vật gặp ở Dải Gần." },
  crate: { name: "Thùng hàng", description: "Thùng dùng để giao hàng tại cửa neo." }
};
const field = [
  { id: "plating", item: "scrap", amount: 3, x: 500, y: 288 },
  { id: "ice", item: "ice", amount: 2, x: 786, y: 219 },
  { id: "cable", item: "cable", amount: 2, x: 940, y: 459 },
  { id: "core", item: "core", amount: 1, x: 607, y: 465 },
  { id: "drift", item: "driftlife", x: 1032, y: 322 }
];
const tools = ["Lao từ", "Dùi xung", "Súng lưới"];
const rooms = [
  ["Ngủ đông", "quarters"], ["Xưởng", "workshop"], ["Kho", "storage"],
  ["Cửa khí", "airlock"], ["Khoang neo", "repair"], ["Động cơ", "engine"]
];
const orders = [
  { item: "scrap", ship: "Loose Bolt", patience: 60 },
  { item: "earth", ship: "Tikko", patience: 45 },
  { item: "cable", ship: "Tàu vội", patience: 30 }
];
const screenNames = {
  menu: "Menu chính", intro: "Mở đầu", station: "Mặt cắt trạm", flight: "Dải Gần", port: "Ca cảng", night: "Cuối ngày"
};
const dialogNames = {
  picker: "Chọn cảnh", create: "Thế giới mới", join: "Tham gia bạn", settings: "Cài đặt",
  airlock: "Cửa khí", storage: "Kho", workshop: "Xưởng", upgrade: "Nâng cấp", repair: "Sửa Khoang neo",
  engine: "Động cơ chính", quarters: "Buồng ngủ đông", journal: "Sổ tay", manifest: "Bảng tàu và danh mục bán",
  bag: "Túi đồ", map: "Bản đồ chuyến", suffocate: "Ngạt", flightEnd: "Kết chuyến", portEnd: "Kết ca",
  shop: "Shop", dialogue: "Nói chuyện", pause: "Menu tạm dừng", confirm: "Xác nhận"
};
let saved;
let saves;
let world;
let flight;
let port;
let current = "menu";
let dialog = "";
let dialogData = {};
let returnFocus = null;
let confirmJob;
let bagSelection = "oxygen";
let storageFilter = "";
let toastTimer;
let lastTime = performance.now();
let tickTime = 0;
let introIndex = 0;
let reduced = localStorageValue("motion") === "off";
let preview = false;
const keys = new Set();

function initialWorld(name = "Station Ember", people = 1) {
  return {
    id: crypto.randomUUID(), name, people, day: 6, trips: 0, portClosed: false, repaired: false, merchantMet: false,
    manifest: ["scrap", "earth", "cable"], queue: 0, stock: { scrap: 2, ice: 1, cable: 2, earth: 2 },
    portCompleted: 0
  };
}

function localStorageValue(key) {
  try { return localStorage.getItem(storageKey + "." + key); } catch { return null; }
}

function persist(key, value) {
  try { localStorage.setItem(storageKey + "." + key, value); } catch {}
}

function readWorlds() {
  try {
    const entries = JSON.parse(localStorageValue("worlds")) || [JSON.parse(localStorageValue("world"))];
    if (!Array.isArray(entries)) return [];
    return entries.filter(row => row?.name && row?.stock && Array.isArray(row.manifest))
      .map(row => ({ ...row, id: row.id || crypto.randomUUID() }));
  } catch { return []; }
}

function saveWorld() {
  if (preview) return;
  saved = structuredClone(world);
  saves = [saved, ...saves.filter(record => record.id !== saved.id)];
  persist("worlds", JSON.stringify(saves));
}

function initFlight() {
  return { oxygen: 330, capacity: 80, inventory: { oxygen: 1 }, pinned: "", collected: new Set(),
    x: 344, y: 358, vx: 0, vy: 0, target: null, facing: 1, tool: 1, suffocating: 0, flightTime: 0 };
}

function initPort() {
  return { time: 161, elapsed: 0, earned: 0, tips: 0, carry: "", x: 350, served: new Set(), left: new Set(), boosted: new Set(), stock: { ...world.stock } };
}

saves = readWorlds();
saved = saves[0] || null;
world = saved ? structuredClone(saved) : initialWorld();
flight = initFlight();
port = initPort();
game.classList.toggle("static-motion", reduced);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}

function img(name, className = "") {
  return '<img src="assets/' + name + '.webp" alt="" draggable="false" class="' + className + '">';
}

function btn(label, action, { kind = "", value = "", disabled = false, pressed } = {}) {
  const press = pressed === undefined ? "" : ' aria-pressed="' + pressed + '"';
  return '<button type="button" class="btn ' + kind + '" data-action="' + action + '" data-value="' + value + '"' +
    (disabled ? " disabled" : "") + press + '>' + escapeHtml(label) + '</button>';
}

function stat(label, value, id = "") {
  return '<div class="stat"><span>' + label + '</span><b' + (id ? ' id="' + id + '"' : "") + '>' + value + '</b></div>';
}

function header(kicker, title, stats = "") {
  return '<header class="scene-header"><div><p class="pressure">' + kicker + '</p><h1>' + escapeHtml(title) +
    '</h1></div><div class="stats">' + stats + '</div></header>';
}

function gameFooter(left, right) {
  return '<footer class="scene-footer"><span>' + left + '</span><div>' + right + '</div></footer>';
}

function itemRow(key, amount, action, selected) {
  return '<button class="row" type="button" data-action="' + action + '" data-value="' + key + '" aria-pressed="' + selected + '">' +
    img(key) + '<strong>' + items[key].name + '</strong><small>' + escapeHtml(amount) + '</small></button>';
}

function simpleRow(label, count, action, value = "") {
  return '<button type="button" class="row" data-action="' + action + '" data-value="' + value + '"><strong>' +
    escapeHtml(label) + '</strong><span class="row-mark">' + escapeHtml(count) + '</span></button>';
}

function meter(name, label, value, maximum, type = "") {
  const fraction = Math.min(100, value / maximum * 100);
  return '<div class="meter-card"><header><strong>' + label + '</strong><span id="' + name + '-number">' + value + ' / ' +
    maximum + '</span></header><div class="meter-track ' + type + '"><i id="' + name + '-fill" style="--fill:' + fraction + '%"></i></div></div>';
}

const intros = [
  ["Một ngày ở Ember", "Khoang neo vẫn hỏng. Ra Dải Gần lấy thêm phế liệu rồi mang về trạm."],
  ["Chuẩn bị cập cảng", "Khi trở về, kiểm tra bảng tàu và chuẩn bị hàng trước khi mở ca."]
];

const renderScene = {
  menu() {
    return '<div class="menu-block"><h1>THE <span>NOVENT</span></h1><p class="subtitle">Station Ember · Bãi vỡ của Cradle</p>' +
      '<div class="menu-actions">' +
      (saved ? btn("Chơi tiếp", "continue", { kind: "main" }) : "") +
      btn("Thế giới mới", "create", { kind: saved ? "" : "main" }) +
      btn("Tham gia bạn", "join") + btn("Cài đặt", "settings", { kind: "quiet" }) + '</div></div>' +
      (saves.length ? '<section class="menu-saves"><h2>Thế giới đã lưu</h2><div>' + saves.map(record =>
        simpleRow(record.name, "Ngày " + record.day, "loadWorld", record.id)).join("") + "</div></section>" : "") +
      gameFooter(saved ? escapeHtml(saved.name) + " · Ngày " + saved.day : "Bản trình diễn tại Station Ember", "");
  },
  intro() {
    const [title, text] = intros[introIndex];
    return '<div class="intro-content"><div class="pressure">Station Ember / Ngày ' + world.day + '</div><h1>' + title +
      '</h1><p><span class="speaker">Ember</span><br>' + text + '</p>' +
      btn(introIndex ? "Vào trạm" : "Tiếp", "introNext", { kind: "main" }) + '</div>' +
      gameFooter("Một ngày mẫu trong Chương 1", btn("Bỏ qua", "introSkip", { kind: "small quiet" }));
  },
  station() {
    const list = rooms.map(([name, action]) => '<button type="button" class="room" data-action="' + action + '"><span class="room-sign">' + name +
      (action === "repair" || action === "engine"
        ? '<span class="room-state' + (action === "repair" && world.repaired ? " repaired" : "") + '">' +
          (action === "repair" && world.repaired ? "Đã sửa" : "Hỏng") + '</span>'
        : "") + '</span></button>').join("");
    return header("Trạm Ember / Ngày " + world.day, world.repaired ? "Chuẩn bị ca cảng" : "Sửa Khoang neo",
      stat("Chuyến", world.trips + " / 2") + stat("Ca cảng", world.portClosed ? "Đã đóng" : "Chưa mở")) +
      '<div class="room-grid">' + list + '</div>' + img("noor-idle", "station-pilot") +
      '<div class="station-contact">' + btn("Bảng tàu và danh mục bán", "manifest", { kind: "main" }) + '</div>' +
      '<div class="station-tools">' + btn("Sổ tay", "journal", { kind: "small quiet" }) +
      btn("Nói chuyện", "dialogue", { kind: "small quiet" }) + btn("Menu", "pause", { kind: "small quiet" }) + '</div>';
  },
  flight() {
    const loot = field.map(({ id, item, x, y }) => '<button class="field-item" data-action="field" data-value="' + id +
      '" data-field="' + id + '" aria-label="' + items[item].name + '" style="left:' + x + 'px;top:' + y + 'px"' +
      (flight.collected.has(id) ? " hidden" : "") + '>' + img(item) + '<span>' + items[item].name + '</span></button>').join("");
    return '<div class="flight-hud">' + meter("oxygen", "OXY", Math.ceil(flight.oxygen), 330) +
      meter("cargo", "TÚI", cargo(), flight.capacity, "cargo") + '</div>' +
      '<div class="flight-zone"><span class="pressure">Khu vực</span><h1>Dải Gần</h1></div>' +
      '<div class="flight-goal">' + stat("Mục tiêu", "Thu hồi vật liệu") + '</div>' +
      '<button class="waypoint airlock" type="button" data-action="returnFlight">‹ Station Ember</button>' +
      '<button class="waypoint beacon" type="button" data-action="map">Recall Beacon ›</button>' +
      loot + '<span id="jet" class="jet-glow"></span>' +
      '<img id="flightPilot" class="flight-avatar" src="assets/noor-flight.webp" alt="Noor" draggable="false">' +
      '<div class="flight-controls"><div class="controls-group">' + btn("Túi đồ", "bag", { kind: "small quiet" }) +
      btn("Bản đồ", "map", { kind: "small quiet" }) + '</div><div class="inventory-tools">' +
      tools.map((name, index) => btn((index + 1) + " " + name, "tool", { kind: "small", value: String(index + 1), pressed: flight.tool === index + 1 })).join("") +
      '</div>' + btn("Về Ember", "returnFlight", { kind: "main" }) + '</div>' +
      gameFooter("<kbd>WASD</kbd> Bay · <kbd>E</kbd> Nhặt · Bấm vào vật liệu để tiếp cận", "");
  },
  port() {
    const cards = orders.map((order, index) => {
      const allowed = world.manifest.includes(order.item) && (world.stock[order.item] ?? 0) > 0;
      const status = !allowed ? "Ngoài danh mục" : port.served.has(index) ? "Đã giao" : port.left.has(index) ? "Tàu đã rời" : "";
      return '<article class="order' + (status ? " done" : "") + '" data-order="' + index + '"><h2>' + order.ship + '</h2>' +
        '<div class="request">' + img(order.item) + items[order.item].name + '</div>' +
        (status ? '<small>' + status + '</small>' : '<div class="meter-track"><i id="patience-' + index + '" style="--fill:100%"></i></div>' +
          (index === 0 && !port.boosted.has(index) ? btn("Bơm khí", "boost", { kind: "small quiet", value: "0" }) : '<small>Đang chờ hàng</small>')) +
        '</article>';
    }).join("");
    const berthButtons = orders.map(({ item }, index) => btn("Giao cửa neo " + (index + 1), "deliver", {
      value: String(index), disabled: port.served.has(index) || port.left.has(index) || !world.manifest.includes(item)
    })).join("");
    const crates = world.manifest.filter(item => item in items).map(item => '<button class="crate" type="button" data-action="crate" data-value="' +
      item + '" aria-pressed="' + (port.carry === item) + '"' + (!port.stock[item] ? " disabled" : "") + '>' +
      img(item) + '<span>' + items[item].name + ' · ' + (port.stock[item] ?? 0) + '</span></button>').join("");
    return header("Trạm Ember / Ngày " + world.day, "Ca cảng", stat("Ca còn", timeLabel(port.time), "portClock") +
      stat("Đã giao", String(port.served.size)) + stat("Tally", String(port.earned))) +
      '<div class="port-orders">' + cards + '</div><div class="berths">' + berthButtons + '</div>' +
      '<section class="counter"><h2>Quầy cảng</h2><div class="crates">' + crates + '</div></section>' +
      img("noor-idle", "port-avatar") + '<span class="port-carry">' + (port.carry ? img("crate") : "") +
      (port.carry ? "Đang cầm: " + items[port.carry].name : "Tay đang trống") + '</span>' +
      gameFooter("<kbd>E</kbd> Nhặt · <kbd>1-3</kbd> Giao đúng cửa neo",
        (world.merchantMet ? btn("Nói chuyện với Tikko", "dialogue", { kind: "small quiet" }) : "") +
        btn("Kết ca", "endPort", { kind: "main" }));
  },
  night() {
    return header("Trạm Ember / Ngày " + world.day, "Cuối ngày", stat("Tàu đã giao", String(world.portCompleted))) +
      '<div class="intro-content"><p>Xem hàng còn trong kho hoặc chuẩn bị cho chuyến ngày mai.</p><div class="pill-row">' +
      btn("Shop", "shop") + btn("Nâng cấp", "upgrade") + btn("Sổ tay", "journal") + '</div>' +
      btn("Vào buồng ngủ", "sleep", { kind: "main" }) + '</div>' +
      gameFooter("Station Ember",
        (world.merchantMet ? btn("Nói chuyện với Tikko", "dialogue", { kind: "small quiet", value: "tikko" }) : "") +
        btn("Menu", "pause", { kind: "small quiet" }));
  }
};

function renderCurrent(animate = false) {
  scene.className = "scene " + (current === "night" ? "station night" : current) + (animate ? " enter" : "") +
    (current === "flight" && flight.oxygen <= 0 ? " breathe" : "");
  scene.setAttribute("aria-label", screenNames[current]);
  scene.innerHTML = renderScene[current]();
  if (current === "flight") paintFlight();
  if (current === "port") {
    scene.querySelector(".port-avatar").style.left = port.x + "px";
    paintPort();
  }
}

function go(target) {
  closeDialog(false);
  keys.clear();
  toast.textContent = "";
  current = target;
  renderCurrent(true);
}

function notify(message) {
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.textContent = ""; }, 3200);
}

function timeLabel(seconds) {
  const whole = Math.max(0, Math.ceil(seconds));
  return Math.floor(whole / 60) + ":" + String(whole % 60).padStart(2, "0");
}

function cargo() {
  return Object.entries(flight.inventory).reduce((total, [item, count]) => total + items[item].weight * count, 0);
}

function paintMeter(name, value, maximum) {
  const label = document.getElementById(name + "-number");
  const fill = document.getElementById(name + "-fill");
  if (!label || !fill) return;
  label.textContent = value + " / " + maximum;
  fill.style.setProperty("--fill", Math.min(100, value / maximum * 100) + "%");
  fill.parentElement.classList.toggle("critical", name === "oxygen" && value <= 45);
}

function paintFlight() {
  const avatar = document.getElementById("flightPilot");
  if (!avatar) return;
  avatar.style.left = flight.x + "px";
  avatar.style.top = flight.y + "px";
  avatar.classList.toggle("face-left", flight.facing === -1);
  const jet = document.getElementById("jet");
  jet.style.left = (flight.x - 35) + "px";
  jet.style.top = (flight.y + 12) + "px";
  jet.classList.toggle("on", flight.facing === 1 && Math.hypot(flight.vx, flight.vy) > 54);
  paintMeter("oxygen", Math.ceil(flight.oxygen), 330);
  paintMeter("cargo", cargo(), flight.capacity);
}

function paintPort() {
  const time = document.getElementById("portClock");
  if (!time) return;
  time.textContent = timeLabel(port.time);
  for (const [index, order] of orders.entries()) {
    const fill = document.getElementById("patience-" + index);
    if (fill) fill.style.setProperty("--fill", Math.max(0, Math.min(100, (portPatience(index) / order.patience) * 100)) + "%");
  }
}

function movePortPilot(x) {
  const start = port.x;
  port.x = x;
  renderCurrent();
  if (!reduced && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scene.querySelector(".port-avatar").animate([{ left: start + "px" }, { left: x + "px" }], { duration: 330, easing: "ease-out" });
  }
}

function portPatience(index) {
  return orders[index].patience - port.elapsed + (port.boosted.has(index) ? orders[index].patience * .25 : 0);
}

function nearestLoot() {
  return field.filter(point => !flight.collected.has(point.id))
    .map(point => ({ ...point, distance: Math.hypot(point.x - flight.x, point.y - flight.y) }))
    .sort((a, b) => a.distance - b.distance)[0];
}

function take(point) {
  if (!point || flight.collected.has(point.id)) return;
  if (point.item === "driftlife") {
    notify("Phát hiện Driftlife. Súng lưới nằm ở ô dụng cụ số 3.");
    return;
  }
  if (cargo() + items[point.item].weight * point.amount > flight.capacity) {
    notify("Túi đã đầy.");
    return;
  }
  flight.collected.add(point.id);
  flight.inventory[point.item] = (flight.inventory[point.item] ?? 0) + point.amount;
  scene.querySelector('[data-field="' + point.id + '"]').hidden = true;
  notify("+" + point.amount + " " + items[point.item].name);
}

function tickFlight(dt) {
  const paused = ["pause", "confirm", "picker", "settings", "flightEnd"].includes(dialog);
  if (paused) return;
  flight.flightTime += dt;
  flight.oxygen = Math.max(0, flight.oxygen - dt);
  if (flight.oxygen === 0) {
    if (dialog !== "suffocate") {
      flight.suffocating = 12;
      flight.target = null;
      scene.classList.add("breathe");
      openDialog("suffocate");
    }
    flight.suffocating -= dt;
    const count = document.getElementById("rescueClock");
    if (count) count.textContent = Math.max(0, Math.ceil(flight.suffocating));
    if (flight.suffocating <= 0) endFlight(true);
    return;
  }
  if (dialog) return;

  const x = +keys.has("d") - +keys.has("a");
  const y = +keys.has("s") - +keys.has("w");
  let vx = x * 290, vy = y * 290;
  if (x || y) flight.target = null;
  if (flight.target) {
    const dx = flight.target.x - flight.x;
    const dy = flight.target.y - flight.y;
    const distance = Math.hypot(dx, dy);
    if (distance <= 30) {
      take(flight.target);
      flight.target = null;
    } else {
      vx = dx / distance * 295;
      vy = dy / distance * 295;
    }
  }
  flight.vx += (vx - flight.vx) * Math.min(1, dt * 5);
  flight.vy += (vy - flight.vy) * Math.min(1, dt * 5);
  flight.x = Math.max(112, Math.min(1189, flight.x + flight.vx * dt));
  flight.y = Math.max(175, Math.min(575, flight.y + flight.vy * dt));
  if (Math.abs(flight.vx) > 48) flight.facing = Math.sign(flight.vx);
  paintFlight();
}

function tickPort(dt) {
  if (dialog) return;
  port.time -= dt;
  port.elapsed += dt;
  if (port.time <= 0) {
    finishPort();
    return;
  }
  if (orders.every((order, index) => port.served.has(index) || port.left.has(index) ||
    !world.manifest.includes(order.item) || !world.stock[order.item])) {
    finishPort();
    return;
  }
  for (const [index, order] of orders.entries()) {
    if (!port.served.has(index) && !port.left.has(index) && world.manifest.includes(order.item) &&
      world.stock[order.item] && portPatience(index) <= 0) {
      port.left.add(index);
      renderCurrent();
    }
  }
  paintPort();
}

function openDialog(name, data = {}) {
  if (!dialog) returnFocus = document.activeElement;
  dialog = name;
  dialogData = data;
  scene.inert = true;
  overlay.hidden = false;
  renderDialog();
}

function closeDialog(focus = true) {
  dialog = "";
  overlay.hidden = true;
  overlay.replaceChildren();
  scene.inert = false;
  if (focus && returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  returnFocus = null;
}

function pane(title, description, contents, actions, { compact = false, wide = false } = {}) {
  return '<section role="dialog" aria-modal="true" aria-labelledby="dialogTitle" class="dialog' +
    (compact ? " compact" : wide ? " wide" : "") + '"><header><h2 id="dialogTitle">' + escapeHtml(title) +
    '</h2>' + (description ? '<p>' + escapeHtml(description) + '</p>' : "") + '</header>' +
    contents + (actions ? '<footer>' + actions + '</footer>' : "") + '</section>';
}

function renderDialog(restoreSelector = "") {
  overlay.innerHTML = renderPanels[dialog]();
  const next = restoreSelector ? overlay.querySelector(restoreSelector) : null;
  (next || overlay.querySelector("[autofocus], input, .dialog footer button:not(:disabled), .dialog button:not(:disabled)"))?.focus({ preventScroll: true });
}

const close = () => btn("Quay lại", "close", { kind: "quiet" });
const mainButton = (name, action, options = {}) => btn(name, action, { kind: "main", ...options });

function presentStock(filter, selection, action) {
  const candidates = Object.entries(world.stock).filter(([key, amount]) => amount > 0 && items[key] &&
    items[key].name.toLocaleLowerCase("vi").includes(filter.toLocaleLowerCase("vi")));
  return candidates.length
    ? candidates.map(([key, amount]) => itemRow(key, "×" + amount, action, selection === key)).join("")
    : '<p class="hint">Không có vật phẩm phù hợp.</p>';
}

function detail(key, subtitle = "") {
  const item = items[key];
  if (!item) return "";
  return '<div class="box detail">' + img(key, "item-art") + '<h3>' + item.name + '</h3><p>' +
    item.description + '</p>' + (subtitle ? '<p>' + escapeHtml(subtitle) + '</p>' : "") + '</div>';
}

const renderPanels = {
  picker() {
    const choices = [["intro", "Mở đầu"], ["station", "Mặt cắt trạm"], ["flight", "Dải Gần"], ["port", "Ca cảng"], ["night", "Cuối ngày"]];
    return pane("Chọn cảnh", "Mở thẳng một đoạn bằng dữ liệu trình diễn.", '<div class="pair">' +
      choices.map(([id, title]) => simpleRow(title, "Mở", "jumpScene", id)).join("") + "</div>", close(), { compact: true });
  },
  create() {
    return pane("Thế giới mới", "Bắt đầu một ngày mẫu tại Station Ember.", '<label class="field">Tên thế giới<input id="worldName" maxlength="28" value="' +
      escapeHtml(dialogData.name ?? "Station Ember") + '" autocomplete="off"></label><div class="pill-row">' +
      btn("1 người", "mode", { value: "1", pressed: dialogData.people !== 2 }) +
      btn("2 người", "mode", { value: "2", pressed: dialogData.people === 2 }) +
      btn("3 người", "mode", { disabled: true }) + btn("4 người", "mode", { disabled: true }) +
      '</div><p class="hint">Các lựa chọn co-op trong bản demo dùng phòng mẫu.</p>', close() + mainButton("Tạo thế giới", "newGame"), { compact: true });
  },
  join() {
    return pane("Tham gia bạn", "Chọn phòng mẫu của một người bạn hoặc nhập mã.", '<label class="field">Mã phòng<input id="roomCode" maxlength="7" ' +
      'placeholder="7K2-Q9F" autocomplete="off"></label><div class="stack">' +
      simpleRow("Trạm của Bo", "1/2 người", "sampleRoom", "7K2-Q9F") +
      '<p class="hint">Trạm Ember Xanh đã đầy.</p></div><p id="joinError" class="warn" role="status"></p>',
      close() + mainButton("Vào trạm", "joinGame"), { compact: true });
  },
  settings() {
    return pane("Cài đặt", "Tùy chỉnh hiển thị của bản demo.", '<div class="stack">' +
      simpleRow("Hiệu ứng chuyển cảnh", reduced ? "Tắt" : "Bật", "motion") +
      simpleRow("Chế độ hiển thị", document.fullscreenElement ? "Toàn màn hình" : "Cửa sổ", "fullscreen") +
      "</div>", close(), { compact: true });
  },
  pause() {
    return pane("Menu", world.name + " · Ngày " + world.day, '<div class="stack">' +
      simpleRow("Tiếp tục", "", "close") + simpleRow("Sổ tay", "", "journal") +
      simpleRow("Cài đặt", "", "settings") + simpleRow("Về menu chính", "", "requestMenu") +
      "</div>", "", { compact: true });
  },
  airlock() {
    const locked = world.portClosed || world.trips >= 2;
    return pane("Cửa khí", locked ? (world.portClosed ? "Ca cảng đã kết thúc lượt ra ngoài hôm nay." : "Đã hết lượt ra ngoài hôm nay.") :
      "Kiểm tra bộ đồ trước khi ra Dải Gần.", '<div class="split"><div class="stack">' +
      tools.map((name, index) => simpleRow(name, "Ô " + (index + 1), "airlockTool", String(index + 1))).join("") +
      '</div><div class="box">' + stat("Bình Oxy", "330") + stat("Túi", "80 Khối") +
      '<p class="hint">Chuyến ' + Math.min(world.trips + 1, 2) + " / 2 hôm nay</p></div></div>",
      close() + mainButton("Xác nhận ra ngoài", "launch", { disabled: locked }));
  },
  bag() {
    const active = (flight.inventory[bagSelection] ?? 0) > 0;
    const contents = Object.entries(flight.inventory).filter(([, count]) => count > 0);
    return pane("Túi đồ", cargo() + " / " + flight.capacity + " Khối · Oxy tiếp tục giảm", '<div class="split"><div class="stack">' +
      (contents.length ? contents.map(([key, count]) => itemRow(key, "×" + count + (flight.pinned === key ? " · Đã ghim" : ""), "selectBag", key === bagSelection)).join("")
        : '<p class="hint">Túi trống.</p>') + "</div>" + detail(bagSelection) + "</div>",
      close() + btn("Thả", "drop", { disabled: !active }) + btn("Ghim", "pin", { disabled: !active }) +
      mainButton("Dùng", "useOxygen", { disabled: !active || bagSelection !== "oxygen" }));
  },
  map() {
    return pane("Bản đồ chuyến", "Dải Gần · Vị trí trạm và các mốc trong chuyến.", '<div class="map box">' +
      '<span class="map-dot ship">Station Ember</span><span class="map-dot path">Noor</span><span class="map-dot beacon">Recall Beacon</span></div>', close());
  },
  suffocate() {
    const candidates = Object.entries(flight.inventory).filter(([, count]) => count > 0);
    return pane("Ngạt", "Chọn món sẽ giữ lại khi được kéo về.", '<p class="warn">Đội cứu hộ đến sau <strong id="rescueClock">' +
      Math.ceil(flight.suffocating) + '</strong> giây.</p><div class="stack">' +
      candidates.map(([key, count]) => itemRow(key, "×" + count, "rescuePin", flight.pinned === key)).join("") +
      "</div>", "", { compact: true });
  },
  flightEnd() {
    const { rescued, recovered } = dialogData;
    const kept = Object.entries(recovered);
    return pane(rescued ? "Bị kéo về" : "Trở về trạm", "Chuyến " + world.trips +
      " · " + timeLabel(flight.flightTime) + " · Oxy còn " + Math.ceil(flight.oxygen),
      '<div class="box"><h3 class="chapter">Đã chuyển vào kho</h3>' +
      (kept.length ? kept.map(([key, count]) => '<p>' + items[key].name + " ×" + count + "</p>").join("")
        : "<p>Chuyến này chưa mang vật liệu về.</p>") + "</div>", mainButton("Tiếp tục", "backStation"), { compact: true });
  },
  storage() {
    const selection = dialogData.item || "scrap";
    return pane("Kho", "Vật liệu và hàng đang có ở Ember.",
      '<label class="field">Tìm vật phẩm<input id="stockSearch" value="' + escapeHtml(storageFilter) + '"></label>' +
      '<div class="split"><div class="stack" id="stockRows">' + presentStock(storageFilter, selection, "selectStock") + "</div>" +
      detail(selection) + "</div>", close());
  },
  workshop() {
    return pane("Xưởng", "Kiểm tra công thức và hàng đợi chế.", '<div class="split"><div class="box detail">' +
      img("oxygen", "item-art") + '<h3>Nạp Bình Oxy nhỏ</h3><p>Cần Ống chịu áp và Tấm kim loại.</p>' +
      '<p class="hint">Công thức mẫu trong demo.</p></div><div class="box"><h3 class="chapter">Hàng đợi</h3>' +
      '<p>' + world.queue + ' đơn nạp Bình Oxy nhỏ</p>' + btn("Nâng cấp trang bị", "upgrade", { kind: "small" }) +
      "</div></div>", close() + mainButton("Thêm đơn mẫu", "queue"));
  },
  repair() {
    const enough = (world.stock.scrap ?? 0) >= 3;
    return pane("Khoang neo", world.repaired ? "Khoang neo đã được sửa." : "Tời neo kẹt do va chạm với mảnh vỡ.",
      '<div class="split">' + detail("scrap", "Vật liệu dùng trong lượt demo: 3 Phế liệu.") +
      '<div class="box"><h3 class="chapter">' + (enough ? "Đủ vật liệu mẫu" : "Cần thu hồi thêm") +
      '</h3><p>Trong kho: ' + (world.stock.scrap ?? 0) + " Phế liệu</p></div></div>",
      close() + mainButton(world.repaired ? "Đã sửa" : "Sửa Khoang neo", "doRepair", { disabled: world.repaired || !enough }));
  },
  engine() {
    return pane("Động cơ chính", "Giai đoạn 1 cần Van tiết lưu và vật liệu từ Dải Gần.",
      '<div class="box"><p class="chapter">Đang chờ linh kiện</p><p>Kiểm tra điều kiện mua Van tiết lưu tại Shop.</p></div>',
      close() + btn("Shop", "shop"), { compact: true });
  },
  quarters() {
    return pane("Buồng ngủ đông", world.portClosed ? "Đã xong công việc hôm nay." : "Có thể ngủ sau khi kết thúc công việc cuối ngày.",
      "", close() + mainButton("Vào buồng ngủ", "sleep", { disabled: !world.portClosed }), { compact: true });
  },
  upgrade() {
    return pane("Nâng cấp", "Nâng bậc bộ đồ tại Xưởng.", '<div class="pair"><div class="box"><p class="chapter">Bình Oxy</p>' +
      '<p>Bậc hiện tại: 0</p><p class="hint">Bậc tiếp theo: 450 Oxy</p></div><div class="box"><p class="chapter">Túi</p>' +
      '<p>Bậc hiện tại: 0</p><p class="hint">Xem yêu cầu mở ở Xưởng.</p></div></div>', close());
  },
  journal() {
    return pane("Sổ tay", "Công việc tại Station Ember.", '<div class="stack"><div class="box"><h3 class="chapter">Sửa Khoang neo</h3><p>' +
      (world.repaired ? "Đã hoàn thành." : "Thu hồi phế liệu ở Dải Gần và kiểm tra Khoang neo.") +
      '</p></div><div class="box"><h3 class="chapter">Ca cảng</h3><p>' +
      (world.portClosed ? "Đã chốt ca trong ngày." : "Chuẩn bị hàng theo danh mục trước khi mở ca.") + "</p></div></div>", close(), { compact: true });
  },
  manifest() {
    const contents = orders.map(order => itemRow(order.item, (world.stock[order.item] ?? 0) + " trong kho",
      "toggleManifest", world.manifest.includes(order.item))).join("");
    return pane("Bảng tàu và danh mục bán", world.portClosed ? "Ca cảng hôm nay đã đóng." : "Chọn các loại hàng chuẩn bị bán trong ca.",
      '<div class="split"><div class="stack">' + contents +
      '</div><div class="box"><h3 class="chapter">Tàu dự kiến</h3><p>Loose Bolt · Tikko · Tàu vội</p><p class="hint">Mở hoặc bỏ ca sẽ đóng Cửa khí tới ngày mới.</p></div></div>',
      close() + btn("Bỏ ca", "requestSkipPort", { disabled: world.portClosed }) +
      mainButton("Mở ca", "requestPort", { disabled: world.portClosed || !world.manifest.some(item => (world.stock[item] ?? 0) > 0) }));
  },
  portEnd() {
    return pane("Kết ca", world.name + " · Ngày " + world.day, '<div class="pair">' + stat("Đã giao", String(port.served.size)) +
      stat("Tally nhận được", String(port.earned)) + stat("Không phục vụ", String(port.left.size)) +
      stat("Tip", String(port.tips)) + '</div><p class="hint">Hàng chưa giao được đưa lại vào kho.</p>',
      mainButton("Tiếp tục", "endDay"), { compact: true });
  },
  shop() {
    return pane("Shop", "Đơn đặt ở khoang liên lạc đến vào ngày sau.",
      '<div class="box"><h3 class="chapter">Van tiết lưu</h3><p>Linh kiện động cơ chính · 2.900 Tally</p><p class="hint">Cần Hạng cảng 3.</p></div>',
      close() + btn("Đặt hàng", "unavailable", { disabled: true }), { compact: true });
  },
  dialogue() {
    const isTikko = dialogData.speaker === "tikko";
    return pane(isTikko ? "Tikko" : "Ingrid", isTikko ? "Thương nhân Oru" : "Kỹ sư của Ember", '<div class="split"><div class="box">' +
      img(isTikko ? "tikko" : "ingrid", "portrait") + '</div><div class="box detail"><p>' +
      (isTikko ? "Chào Noor. Nếu tìm thấy đồ từ Trái Đất, nhớ báo tôi trước nhé." :
        "Khoang neo có thể sửa được. Mang phế liệu về rồi kiểm tra cụm tời ở tầng dưới.") +
      "</p></div></div>", mainButton("Tiếp tục", "close"), { compact: true });
  },
  confirm() {
    return pane(confirmJob.title, confirmJob.message, "", btn("Quay lại", "dismissConfirm", { kind: "quiet" }) +
      mainButton(confirmJob.button, "confirm"), { compact: true });
  }
};

function request(title, message, button, accept) {
  confirmJob = { title, message, button, accept, from: dialog };
  openDialog("confirm");
}

function launch() {
  if (world.portClosed || world.trips >= 2) return;
  flight = initFlight();
  if (world.stock.oxygen >= 1) {
    world.stock.oxygen--;
    flight.inventory.oxygen++;
  }
  world.trips++;
  go("flight");
  notify("Bấm vào vật liệu để Noor bay tới và thu hồi.");
}

function endFlight(rescued = false) {
  if (dialog === "flightEnd") return;
  const carried = Object.fromEntries(Object.entries(flight.inventory).filter(([key, count]) =>
    count > 0 && key !== "oxygen" && (!rescued || key === flight.pinned)));
  for (const [key, count] of Object.entries(carried)) world.stock[key] = (world.stock[key] ?? 0) + count;
  saveWorld();
  openDialog("flightEnd", { rescued, recovered: carried });
}

function startPort() {
  world.portClosed = true;
  port = initPort();
  go("port");
  notify("Chọn thùng trên quầy rồi bấm đúng cửa neo.");
}

function finishPort() {
  if (dialog === "portEnd") return;
  for (const [index, order] of orders.entries()) {
    if (world.manifest.includes(order.item) && world.stock[order.item] && !port.served.has(index)) port.left.add(index);
  }
  world.stock = { ...port.stock };
  world.portCompleted = port.served.size;
  world.tally = (world.tally ?? 0) + port.earned;
  saveWorld();
  openDialog("portEnd");
}

function dayNext() {
  if (!world.portClosed) return;
  world.day++;
  world.trips = 0;
  world.portClosed = false;
  world.portCompleted = 0;
  if (world.queue) {
    world.stock.oxygen = (world.stock.oxygen ?? 0) + world.queue;
    world.queue = 0;
  }
  saveWorld();
  go("station");
  notify("Ngày " + world.day + " · Cửa khí đã mở lại.");
}

function returnToMenu() {
  preview = false;
  go("menu");
}

const actions = {
  picker: () => openDialog("picker"),
  create: () => openDialog("create", { people: 1 }),
  continue: () => {
    preview = false;
    world = structuredClone(saved);
    go(world.portClosed ? "night" : "station");
  },
  loadWorld: id => {
    const record = saves.find(entry => entry.id === id);
    if (!record) return;
    preview = false;
    world = structuredClone(record);
    saveWorld();
    go(world.portClosed ? "night" : "station");
  },
  newGame: () => {
    const box = document.getElementById("worldName");
    const name = box.value.trim();
    if (!name) {
      box.focus();
      return notify("Nhập tên thế giới trước khi tiếp tục.");
    }
    if (saves.some(record => record.name.toLocaleLowerCase("vi") === name.toLocaleLowerCase("vi"))) {
      box.focus();
      return notify("Tên thế giới đã được dùng. Chọn một tên khác.");
    }
    preview = false;
    world = initialWorld(name, dialogData.people);
    saveWorld();
    introIndex = 0;
    go("intro");
  },
  mode: value => {
    dialogData.name = document.getElementById("worldName").value;
    dialogData.people = Number(value);
    renderDialog('[data-action="mode"][data-value="' + value + '"]');
  },
  join: () => openDialog("join"),
  sampleRoom: code => { document.getElementById("roomCode").value = code; },
  joinGame: () => {
    if (document.getElementById("roomCode").value.trim().toUpperCase() !== "7K2-Q9F") {
      document.getElementById("joinError").textContent = "Mã sai hoặc hết hạn.";
      return;
    }
    preview = true;
    world = initialWorld("Trạm của Bo", 2);
    introIndex = 0;
    go("intro");
    notify("Đã vào phòng mẫu của Bo.");
  },
  introNext: () => { if (introIndex++ === 0) renderCurrent(); else go("station"); },
  introSkip: () => go("station"),
  jumpScene: target => {
    preview = true;
    world = initialWorld();
    introIndex = 0;
    if (target === "flight") launch();
    else if (target === "port") startPort();
    else {
      if (target === "night") world.portClosed = true;
      go(target);
    }
  },
  close: () => closeDialog(),
  settings: () => openDialog("settings"),
  pause: () => openDialog("pause"),
  motion: () => {
    reduced = !reduced;
    persist("motion", reduced ? "off" : "on");
    game.classList.toggle("static-motion", reduced);
    renderDialog('[data-action="motion"]');
  },
  fullscreen: async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.querySelector("#player").requestFullscreen();
      if (dialog === "settings") renderDialog('[data-action="fullscreen"]');
    } catch { notify("Trình duyệt không cho phép toàn màn hình trong ngữ cảnh này."); }
  },
  requestMenu: () => request("Về menu chính?", "Tiến độ đã lưu được giữ lại. Phần đang thực hiện trong chuyến hoặc ca sẽ kết thúc.", "Về menu chính", returnToMenu),
  confirm: () => {
    const accept = confirmJob.accept;
    confirmJob = null;
    closeDialog(false);
    accept();
  },
  dismissConfirm: () => {
    const origin = confirmJob.from;
    confirmJob = null;
    if (origin) openDialog(origin);
    else closeDialog();
  },
  airlock: () => openDialog("airlock"),
  airlockTool: value => notify("Ô " + value + " · " + tools[Number(value) - 1]),
  launch,
  field: id => {
    const point = field.find(object => object.id === id);
    if (point) flight.target = point;
  },
  tool: value => {
    flight.tool = Number(value);
    scene.querySelectorAll('[data-action="tool"]').forEach(control =>
      control.setAttribute("aria-pressed", String(control.dataset.value === value)));
  },
  bag: () => { bagSelection = "oxygen"; openDialog("bag"); },
  map: () => openDialog("map"),
  selectBag: key => {
    bagSelection = key;
    renderDialog('[data-action="selectBag"][data-value="' + key + '"]');
  },
  drop: () => {
    if ((flight.inventory[bagSelection] ?? 0) < 1) return;
    flight.inventory[bagSelection]--;
    if (!flight.inventory[bagSelection] && flight.pinned === bagSelection) flight.pinned = "";
    paintMeter("cargo", cargo(), flight.capacity);
    renderDialog();
  },
  pin: () => {
    flight.pinned = bagSelection;
    renderDialog('[data-action="pin"]');
    notify("Đã ghim " + items[bagSelection].name + ".");
  },
  useOxygen: () => {
    if (!flight.inventory.oxygen || bagSelection !== "oxygen") return;
    flight.inventory.oxygen--;
    flight.oxygen = Math.min(330, flight.oxygen + 40);
    paintFlight();
    renderDialog();
    notify("Đã dùng Bình Oxy nhỏ.");
  },
  rescuePin: key => {
    flight.pinned = key;
    renderDialog('[data-action="rescuePin"][data-value="' + key + '"]');
  },
  returnFlight: () => endFlight(),
  backStation: () => go("station"),
  storage: () => { storageFilter = ""; openDialog("storage"); },
  selectStock: key => {
    dialogData.item = key;
    renderDialog('[data-action="selectStock"][data-value="' + key + '"]');
  },
  workshop: () => openDialog("workshop"),
  queue: () => {
    world.queue++;
    saveWorld();
    renderDialog('[data-action="queue"]');
    notify("Đã thêm đơn mẫu vào hàng đợi.");
  },
  upgrade: () => openDialog("upgrade"),
  repair: () => openDialog("repair"),
  doRepair: () => {
    if ((world.stock.scrap ?? 0) < 3 || world.repaired) return;
    world.stock.scrap -= 3;
    world.repaired = true;
    saveWorld();
    closeDialog(false);
    renderCurrent();
    notify("Khoang neo đã được sửa.");
  },
  engine: () => openDialog("engine"),
  quarters: () => openDialog("quarters"),
  shop: () => openDialog("shop"),
  journal: () => openDialog("journal"),
  dialogue: speaker => {
    if (current === "port") return notify("Tikko: Nếu tìm thấy đồ Trái Đất, nhớ báo tôi trước nhé.");
    openDialog("dialogue", { speaker: speaker || "ingrid" });
  },
  manifest: () => openDialog("manifest"),
  toggleManifest: key => {
    if (world.portClosed) return;
    world.manifest = world.manifest.includes(key) ? world.manifest.filter(item => item !== key) : [...world.manifest, key];
    saveWorld();
    renderDialog('[data-action="toggleManifest"][data-value="' + key + '"]');
  },
  requestPort: () => request("Mở ca cảng?", "Mở ca sẽ đóng Cửa khí. Bạn có thể ra ngoài lại vào ngày mai.", "Mở ca", startPort),
  requestSkipPort: () => request("Bỏ ca cảng?", "Bỏ ca sẽ đóng Cửa khí đến ngày mai.", "Bỏ ca", () => {
    world.portClosed = true;
    saveWorld();
    go("night");
  }),
  crate: key => {
    if (port.carry && port.carry !== key) return notify("Bạn đang cầm một thùng. Giao thùng này trước.");
    if (!port.stock[key]) return;
    port.carry = port.carry === key ? "" : key;
    movePortPilot(340);
    scene.querySelector('[data-action="crate"][data-value="' + key + '"]')?.focus({ preventScroll: true });
  },
  deliver: value => {
    const index = Number(value);
    const order = orders[index];
    if (port.served.has(index) || port.left.has(index)) return;
    if (port.carry !== order.item) return notify(port.carry ? "Cửa neo này gọi hàng khác." : "Chọn một thùng ở quầy trước.");
    if (!port.stock[order.item]) return;
    const base = orderPrices[order.item];
    const patience = Math.max(0, Math.min(1, portPatience(index) / order.patience));
    const tip = Math.floor(base * .25 * patience);
    port.earned += base + tip;
    port.tips += tip;
    port.served.add(index);
    if (order.item === "earth") world.merchantMet = true;
    port.stock[order.item]--;
    port.carry = "";
    movePortPilot([520, 780, 1040][index]);
    if (port.served.size === orders.length) finishPort();
    else notify("Đã giao tại cửa neo " + (index + 1) + " · +" + (base + tip) + " Tally");
  },
  boost: value => {
    const index = Number(value);
    if (port.boosted.has(index) || port.left.has(index) || port.served.has(index)) return;
    port.boosted.add(index);
    port.earned += 10;
    renderCurrent();
    notify("Đã bơm khí · +10 Tally");
  },
  endPort: () => request("Kết ca?", "Tàu chưa giao hàng sẽ rời bến, hàng chưa dùng trở về kho.", "Kết ca", finishPort),
  endDay: () => go("night"),
  sleep: dayNext
};
const orderPrices = { scrap: 42, earth: 76, cable: 40 };

document.addEventListener("click", event => {
  const target = event.target.closest("button[data-action]");
  if (!target || target.disabled) return;
  actions[target.dataset.action]?.(target.dataset.value);
});

document.addEventListener("input", event => {
  if (event.target.id === "stockSearch") {
    storageFilter = event.target.value;
    document.querySelector("#stockRows").innerHTML = presentStock(storageFilter, dialogData.item || "scrap", "selectStock");
  }
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  if (key === "escape") {
    if (["suffocate", "flightEnd", "portEnd"].includes(dialog)) return;
    if (dialog === "confirm") actions.dismissConfirm();
    else if (dialog) closeDialog();
    else if (current !== "menu") openDialog("pause");
    return;
  }
  if (dialog) {
    if (key === "m" && dialog === "map") closeDialog();
    if (key === "enter" && event.target.id === "worldName") actions.newGame();
    if (key === "enter" && event.target.id === "roomCode") actions.joinGame();
    if (key === "tab" && !overlay.hidden) {
      const focusable = [...overlay.querySelectorAll("button:not(:disabled), input:not(:disabled)")];
      const edge = event.shiftKey ? focusable[0] : focusable.at(-1);
      if (document.activeElement === edge && focusable.length) {
        event.preventDefault();
        (event.shiftKey ? focusable.at(-1) : focusable[0]).focus();
      }
    }
    return;
  }
  if (event.target.closest(".player-bar")) return;
  if (current === "port" && !event.repeat) {
    if (key === "e" && !port.carry) {
      const index = orders.findIndex((order, i) => world.manifest.includes(order.item) && port.stock[order.item] &&
        !port.served.has(i) && !port.left.has(i));
      if (index >= 0) actions.crate(orders[index].item);
    }
    if (["1", "2", "3"].includes(key)) actions.deliver(String(Number(key) - 1));
  }
  if (current === "flight") {
    if (["w", "a", "s", "d"].includes(key)) keys.add(key);
    if (event.repeat) return;
    if (key === "m") actions.map();
    if (key === "tab" && !event.shiftKey) {
      event.preventDefault();
      actions.bag();
    }
    if (key === "e") {
      const point = nearestLoot();
      if (point?.distance < 94) take(point);
      else notify("Bay tới gần vật liệu để nhặt.");
    }
    if (["1", "2", "3"].includes(key)) actions.tool(key);
  }
});

document.addEventListener("keyup", event => keys.delete(event.key.toLowerCase()));
window.addEventListener("blur", () => keys.clear());
document.addEventListener("visibilitychange", () => { lastTime = performance.now(); keys.clear(); });

function tick(now) {
  const dt = Math.max(0, Math.min(0.05, (now - lastTime) / 1000));
  lastTime = now;
  if (current === "flight") {
    tickFlight(dt);
    paintMeter("oxygen", Math.ceil(flight.oxygen), 330);
  } else if (current === "port") {
    tickTime += dt;
    if (tickTime >= 0.1) {
      tickPort(tickTime);
      tickTime = 0;
    }
  }
  requestAnimationFrame(tick);
}

new ResizeObserver(() => { game.style.transform = "scale(" + viewport.clientWidth / 1280 + ")"; }).observe(viewport);
renderCurrent(true);
requestAnimationFrame(tick);
