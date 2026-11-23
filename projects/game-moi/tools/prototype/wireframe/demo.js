"use strict";

const groups = [
  ["Menu và nhập cuộc", [["01", "Menu chính"], ["02", "Tạo thế giới"], ["04", "Tham gia thế giới"], ["05", "Cảnh tỉnh dậy"]]],
  ["Trạm Ember", [["10", "Trạm mặt cắt"], ["11", "Cửa khí"], ["12", "Kho"], ["13", "Xưởng"], ["14", "Bảng tàu và danh mục bán"], ["15", "Shop"], ["16", "Nâng cấp"], ["17", "Sửa khoang"], ["18", "Động cơ chính"], ["19", "Sổ tay"]]],
  ["Ngoài không gian", [["30", "HUD bay"], ["30b", "HUD bay khi đánh boss"], ["31", "Túi đồ"], ["33", "Bản đồ chuyến"], ["34", "Ngạt"], ["35", "Bị kéo về"], ["36", "Trở về"]]],
  ["Ca cảng và cuối ngày", [["40", "HUD ca cảng"], ["43", "Kết ca"], ["44", "Cuối ngày"]]],
  ["Hệ thống", [["50", "Menu tạm dừng"], ["51", "Cài đặt"], ["52", "Đổi phím"], ["53", "Hộp thoại truyện"], ["54", "Hộp xác nhận"]]]
];
const screens = groups.flatMap(([group, entries]) => entries.map(([id, title]) => ({ id, title, group })));
const hints = {
  "01": "Tạo thế giới mới để bắt đầu luồng chơi, hoặc chọn một màn trong danh sách.",
  "02": "Nhập tên và chọn số người. Trong demo, cả hai lựa chọn đều vào thẳng trạm.",
  "04": "Thử chọn Trạm của Bo hoặc nhập mã 7K2-Q9F.",
  "05": "Enter để bỏ qua cảnh.",
  "10": "Bấm vào khoang để tương tác. E mở Xưởng, J mở Sổ tay, Esc mở menu.",
  "11": "Kiểm tra dụng cụ rồi xác nhận ra ngoài.",
  "12": "Tìm theo tên, lọc theo nhóm hoặc chọn vật phẩm để xem.",
  "13": "Chọn công thức, chế hoặc xem nâng cấp trang bị.",
  "14": "Chọn hàng rồi xác nhận mở ca ở cảng.",
  "17": "Giữ thao tác sửa hoặc quay về trạm.",
  "18": "Chọn giai đoạn để xem trạng thái.",
  "30": "WASD để bay, E để nhặt vật liệu mẫu, Tab mở túi, M mở bản đồ.",
  "30b": "Biến thể HUD cho Scrapmaw. Esc mở menu, Tab mở túi, M mở bản đồ.",
  "31": "Chọn một món để ghim, thả hoặc dùng. Tab để đóng túi.",
  "33": "M để đóng bản đồ chuyến.",
  "34": "Chọn món ghim muốn giữ lại khi bị kéo về.",
  "40": "Chọn thùng ở quầy, bấm cửa neo tương ứng để giao.",
  "52": "Chọn một hành động rồi bấm phím mới.",
  "54": "Esc hoặc Quay lại đóng hộp xác nhận."
};
const legacyTemplates = { "18": "17", "36": "35" };
const stage = document.querySelector("#stage");
const viewport = document.querySelector("#viewport");
const list = document.querySelector("#screen-list");
const feedback = document.querySelector("#feedback");
const buttons = new Map();
let current = "01";
let root;
let history = [];
let timer;
let confirmAction;
let pauseOrigin = "10";
let flightOrigin = "30";
let waitingForKey;
let conflict;
let state;

function resetState() {
  state = {
    world: "Trạm của An", day: 6, people: 1, trip: 1, portLocked: false,
    oxygen: 187, cargo: 56, tool: 1, grabbed: false, selectedCargo: 0, savedWorld: false,
    supplies: [1, 8, 3, 5, 1],
    pinned: "Mảnh lõi (hiếm)", playerX: 610, playerY: 340, delivered: new Set(), carried: 0, portTime: 161,
    repaired: false, queue: 1, bindings: new Map(),
    art: { ember: "assets/ember.webp", near: "assets/near.webp", port: "assets/port.webp", ships: "assets/ships.webp" }
  };
}
resetState();

for (const [group, entries] of groups) {
  const section = document.createElement("section");
  section.className = "screen-group";
  const heading = document.createElement("h3");
  heading.textContent = group;
  section.append(heading);
  for (const [id, title] of entries) {
    const control = document.createElement("button");
    const code = document.createElement("span");
    code.textContent = "UI-" + id.toUpperCase();
    control.type = "button";
    control.append(code, document.createTextNode(title));
    control.addEventListener("click", () => go(id, { direct: true }));
    section.append(control);
    buttons.set(id, control);
  }
  list.append(section);
}

function node(id) {
  return root.querySelector('[data-node-id="' + id + '"]');
}

function change(id, content) {
  const element = node(id);
  if (element) element.textContent = content;
}

function elements(ids) {
  return ids.map(node).filter(Boolean);
}

function notice(message) {
  feedback.textContent = message;
}

function interactive(element, label, action, selected) {
  if (!element) return;
  element.dataset.action = "true";
  element.setAttribute("aria-label", label);
  if (selected !== undefined) element.setAttribute("aria-pressed", String(selected));
  if (!(element instanceof HTMLButtonElement)) {
    element.tabIndex = 0;
    element.setAttribute("role", "button");
    element.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      action();
    });
  }
  element.addEventListener("click", action);
}

function figButton(label, action, rename) {
  const control = root.querySelector('[data-figma-button="' + label + '"]:not(.confirm-underlay *)');
  if (!control) return;
  if (rename) control.querySelector("p").textContent = rename;
  control.disabled = false;
  interactive(control, rename || label, action);
  return control;
}

function hotspot(id, label, action, selected) {
  interactive(node(id), label, action, selected);
}

function demoButton(label, action, position) {
  const control = document.createElement("button");
  control.type = "button";
  control.className = "scene-action";
  Object.assign(control.style, position);
  control.textContent = label;
  interactive(control, label, action);
  root.append(control);
  return control;
}

function inputAt(id, textId, label, value = "") {
  const box = node(id);
  if (!box) return null;
  const input = document.createElement("input");
  for (const key of ["top", "left", "width", "height"]) input.style[key] = getComputedStyle(box)[key];
  input.className = "absolute rounded-[4px] border border-[#8c8c8c] demo-input";
  input.setAttribute("aria-label", label);
  input.placeholder = label;
  input.value = value;
  box.replaceWith(input);
  node(textId)?.remove();
  return input;
}

function selectItems(ids, onSelect, initial = 0) {
  const items = elements(ids);
  items.forEach((item, index) => {
    interactive(item, item.textContent.trim(), () => {
      items.forEach(other => other.setAttribute("aria-pressed", String(other === item)));
      onSelect(item, index);
    }, index === initial);
  });
}

function artAt(element, file, darkness = 0.28) {
  if (!element) return;
  element.classList.add("concept-canvas");
  element.dataset.art = file;
  element.dataset.darkness = String(darkness);
}

function adjustArt() {
  const active = document.documentElement.dataset.look === "concept";
  stage.querySelectorAll("[data-art]").forEach(element => {
    const veil = "rgba(14, 10, 25, " + element.dataset.darkness + ")";
    element.style.backgroundImage = active ? "linear-gradient(" + veil + ", " + veil + "), url(" + element.dataset.art + ")" : "";
  });
}

function styleScene() {
  if (current === "01") {
    artAt(node("4:6"), state.art.ember, 0.66);
    node("4:7").classList.add("concept-hide");
    node("4:9").classList.add("concept-light", "menu-logo");
    for (const id of ["4:12", "4:21", "4:34", "4:37", "4:38"]) node(id)?.classList.add("concept-light");
  }
  if (current === "05") {
    artAt(node("9:97"), state.art.ships, 0.48);
    node("9:100")?.classList.add("concept-hide");
    node("9:101")?.classList.add("concept-light");
  }
  if (current === "11") artAt(node("5:88"), state.art.ships, 0.35);
  if (current === "44") artAt(node("8:217"), state.art.ships, 0.53);
  if (["30", "30b", "31", "34", "40"].includes(current)) {
    artAt(root, current === "40" ? state.art.port : state.art.near, 0.55);
    root.querySelectorAll(":scope > p").forEach(element => element.classList.add("concept-light"));
    root.querySelectorAll('[data-name^="Mảnh vỡ"], [data-name="Tàu"]').forEach(element => element.classList.add("concept-dim"));
  }
  adjustArt();
}

function go(id, { direct = false, replace = false, message = "" } = {}) {
  if (!buttons.has(id)) return;
  clearInterval(timer);
  waitingForKey = null;
  conflict = null;
  if (direct) {
    history = [];
    confirmAction = null;
  }
  else if (!replace && current !== id) history.push(current);
  current = id;
  const screen = screens.find(row => row.id === id);
  const template = document.getElementById("UI-" + (legacyTemplates[id] || id));
  root = template.content.firstElementChild.cloneNode(true);
  stage.replaceChildren(root);
  const activeButton = buttons.get(id);
  list.querySelector("[aria-current]")?.removeAttribute("aria-current");
  activeButton.setAttribute("aria-current", "page");
  document.querySelector("#scene-meta").textContent = "UI-" + id.toUpperCase() + " / " + screen.group;
  document.querySelector("#scene-title").textContent = screen.title;
  document.querySelector("#hint").textContent = hints[id] || "Esc để quay lại.";
  document.querySelector("#previous").disabled = screen === screens[0];
  document.querySelector("#next").disabled = screen === screens.at(-1);
  notice(message);
  setup[id]?.();
  styleScene();
  if (["30", "31", "33"].includes(id)) timer = setInterval(tickFlight, 1000);
}

function back(fallback = "10") {
  go(history.pop() || fallback, { replace: true });
}

function confirm(title, description, label, action) {
  confirmAction = { title, description, label, action, origin: current, background: root.cloneNode(true) };
  go("54");
}

function jump(offset) {
  const target = screens[screens.findIndex(screen => screen.id === current) + offset];
  if (target) go(target.id, { direct: true });
}

function launch() {
  state.oxygen = 187;
  state.cargo = 56;
  state.grabbed = false;
  state.pinned = "Mảnh lõi (hiếm)";
  state.supplies = [1, 8, 3, 5, 1];
  state.selectedCargo = 0;
  state.playerX = 610;
  state.playerY = 340;
  go("30");
}

function finishFlight() {
  state.trip += 1;
  go("10", { direct: true, message: "Đã trở về trạm." });
}

function startPort() {
  state.portLocked = true;
  state.carried = 0;
  state.delivered.clear();
  state.portTime = 161;
  go("40", { direct: true });
}

function updateFlight() {
  const ids = { "30": ["7:57", "7:65", "7:55", "7:63", "7:54", "7:51"], "31": ["7:196", "7:204", "7:194", "7:202", "7:193"] }[current];
  if (!ids) return;
  const seconds = Math.round(state.oxygen);
  change(ids[0], seconds + "   ~" + Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0") + "   x1,0");
  change(ids[1], state.cargo + "/80");
  const oxygenFill = 320 * state.oxygen / 330;
  node(ids[2]).style.width = Math.max(0, oxygenFill - 67.2) + "px";
  node(ids[4]).style.width = Math.min(67.2, oxygenFill) + "px";
  if (node(ids[3])) node(ids[3]).style.width = Math.round(320 * state.cargo / 80) + "px";
  if (ids[5]) {
    const player = node(ids[5]);
    player.style.left = state.playerX + "px";
    player.style.top = state.playerY + "px";
  }
}

function collect() {
  if (state.grabbed) return notice("Mục tiêu này đã được lấy.");
  state.grabbed = true;
  state.cargo = Math.min(80, state.cargo + 4);
  state.supplies[1] += 3;
  state.supplies[2]++;
  updateFlight();
  notice("Đã nhặt Phế liệu và Băng.");
}

function tickFlight() {
  state.oxygen = Math.max(0, state.oxygen - 1);
  updateFlight();
  if (state.oxygen === 0) go("34");
}

function endPort() {
  go("43", { message: state.delivered.size + " đơn mẫu đã giao." });
}

const setup = {
  "01": () => {
    figButton("Chơi tiếp", () => go("10", { direct: true }));
    figButton("Thế giới mới", () => go("02"));
    figButton("Tham gia bạn", () => go("04"));
    figButton("Cài đặt", () => go("51"));
    figButton("Thoát game", () => confirm("Thoát demo?", "Bạn có thể chạy lại từ menu chính.", "Về menu", () => go("01", { direct: true, message: "Đã về menu chính." })));
    if (state.savedWorld) {
      change("4:12", state.world + " - Ngày " + state.day);
      change("4:24", state.world);
      change("4:25", "Ngày " + state.day);
    }
    selectItems(["4:23", "4:26", "4:29"], (item, index) => {
      state.world = item.querySelector("p").textContent;
      state.day = [state.day, 2, 1][index];
      go("10", { direct: true });
    }, -1);
  },
  "02": () => {
    const input = inputAt("4:46", "4:47", "Tên thế giới");
    input.maxLength = 28;
    change("4:63", "Bạn vẫn có thể mời người chơi khác sau khi đã vào trạm.");
    selectItems(["4:49", "4:52"], (_, index) => { state.people = index + 1; }, state.people - 1);
    const create = figButton("Tạo", () => {
      if (!input.value.trim()) return;
      state.world = input.value.trim();
      state.day = 1;
      state.trip = 1;
      state.portLocked = false;
      state.repaired = false;
      state.savedWorld = true;
      go("05");
    });
    create.disabled = true;
    input.addEventListener("input", () => { create.disabled = !input.value.trim(); });
    input.addEventListener("keydown", event => { if (event.key === "Enter" && !create.disabled) create.click(); });
    figButton("Quay lại", () => back("01"));
  },
  "04": () => {
    const input = inputAt("4:115", "4:116", "Mã phòng");
    let friend = true;
    change("4:117", "");
    const join = figButton("Vào", () => {
      if ((input.value.trim() && input.value.trim().toUpperCase() !== "7K2-Q9F") || (!friend && !input.value.trim())) {
        change("4:117", "Mã sai hoặc hết hạn.");
        return;
      }
      state.world = "Trạm của Bo";
      state.people = 2;
      go("05", { message: "Đã vào phòng mẫu." });
    });
    selectItems(["4:99", "4:101"], (_, index) => {
      friend = index === 0;
      if (!friend) input.focus();
    });
    selectItems(["4:104", "4:109"], (_, index) => {
      friend = index === 0;
      join.disabled = !friend;
      change("4:117", friend ? "" : "Phòng đầy: thế giới của Chi đã đủ người.");
    }, -1);
    input.addEventListener("input", () => { join.disabled = !input.value.trim() && !friend; });
    figButton("Quay lại", () => back("01"));
  },
  "05": () => {
    change("9:101", "Station Ember · Buồng ngủ đông");
    change("9:106", "Chương 1");
    hotspot("9:104", "Bỏ qua cảnh", () => go("10", { direct: true }));
    timer = setTimeout(() => go("10", { direct: true }), 5500);
  },
  "10": () => {
    const rooms = [["5:22", "Ngủ đông", "44"], ["5:24", "Xưởng", "13"], ["5:26", "Kho", "12"],
      ["5:28", "Cửa khí", "11"], ["5:30", "Sửa khoang neo", "17"], ["5:33", "Động cơ chính", "18"]];
    for (const [id, label, target] of rooms) hotspot(id, label, () => go(target));
    node("5:49").hidden = state.people === 1;
    change("5:60", state.portLocked ? "Đã đóng cửa khí" : "Chuyến " + Math.min(state.trip, 2) + "/2");
    change("5:80", "Xưởng: " + state.queue + " trong hàng đợi");
    if (state.repaired) change("5:32", "Đã sửa");
    hotspot("5:44", "Nói chuyện với kỹ sư", () => go("53"));
    demoButton("Bảng tàu và danh mục bán", () => go("14"), { top: "48px", left: "65px" });
    demoButton("Sổ tay", () => go("19"), { top: "48px", left: "287px" });
    if (state.portLocked) notice("Cửa khí đã khóa sau khi mở hoặc bỏ ca.");
  },
  "11": () => {
    change("5:92", "Chuyến " + Math.min(state.trip, 2) + "/2 hôm nay");
    if (state.people === 1) node("5:120").hidden = true;
    hotspot("5:110", "Đổi Súng lưới vào đai", () => {
      change("5:113", "Trong đai");
      notice("Đã chọn Súng lưới.");
    });
    figButton("Ở lại trạm", () => back());
    const leave = figButton("Xác nhận ra ngoài", launch);
    leave.disabled = state.portLocked || state.trip > 2;
    if (leave.disabled) notice(state.portLocked ? "Cửa khí đã khóa sau ca cảng." : "Đã hết lượt ra ngoài hôm nay.");
  },
  "12": () => {
    const search = inputAt("6:41", "6:42", "Tìm vật phẩm");
    const rows = elements(["6:54", "6:58", "6:62", "6:66", "6:70", "6:74", "6:78"]);
    const groupsByRow = [1, 1, 1, 2, 3, 2, 4];
    let category = 0;
    const filter = () => rows.forEach((row, index) => {
      row.hidden = (category !== 0 && groupsByRow[index] !== category) ||
        !row.textContent.toLocaleLowerCase("vi").includes(search.value.toLocaleLowerCase("vi"));
    });
    search.addEventListener("input", filter);
    selectItems(["6:43", "6:45", "6:47", "6:49", "6:51"], (_, index) => { category = index; filter(); });
    selectItems(["6:54", "6:58", "6:62", "6:66", "6:70", "6:74", "6:78"], row => notice(row.firstElementChild.textContent));
  },
  "13": () => {
    hotspot("6:97", "Nâng cấp trang bị", () => go("16"));
    selectItems(["6:100", "6:103", "6:106", "6:109", "6:112", "6:115"], row => notice("Đã chọn " + row.firstElementChild.textContent + "."));
    figButton("Chế", () => { state.queue++; notice("Đã thêm vào hàng đợi Xưởng."); });
    figButton("Nhận", () => notice("Đã nhận vật phẩm từ Xưởng."));
  },
  "14": () => {
    selectItems(["5:170", "5:174", "5:178", "5:182"], row => notice("Đã chọn " + row.firstElementChild.textContent + "."));
    figButton("Ghim hàng", () => notice("Đã ghim hàng cần chuẩn bị."));
    figButton("Quay lại", () => back());
    const skip = figButton("Bỏ ca", () => confirm("Bỏ ca cảng?", "Bỏ ca cũng hết ra ngoài hôm nay.", "Bỏ ca", () => {
      state.portLocked = true;
      go("44", { direct: true });
    }));
    const start = figButton("Mở ca", () => confirm("Mở ca cảng?", "Mở ca là hết ra ngoài hôm nay.", "Mở ca", startPort));
    skip.disabled = state.portLocked;
    start.disabled = state.portLocked;
  },
  "15": () => {
    selectItems(["6:150", "6:154", "6:158", "6:162"], row => notice("Đã chọn " + row.firstElementChild.textContent + "."));
    figButton("Đặt", () => notice("Đã ghi nhận đơn mẫu cho cuối ngày."));
  },
  "16": () => {
    selectItems(["6:180", "6:182"], row => notice(row.textContent.trim()));
    selectItems(["6:185", "6:189", "6:193", "6:197", "6:201"], row => notice(row.firstElementChild.textContent));
    const upgrade = root.querySelector('[data-figma-button="Nâng cấp"]');
    if (upgrade) upgrade.title = "Chưa đủ vật liệu trong dữ liệu mẫu.";
  },
  "17": () => {
    node("6:252").hidden = true;
    const repair = demoButton(state.repaired ? "Đã sửa khoang neo" : "Giữ để sửa", () => {}, { left: "900px", top: "620px" });
    let hold;
    function finishRepair() {
      state.repaired = true;
      repair.disabled = true;
      repair.textContent = "Đã sửa khoang neo";
      notice("Đã sửa khoang neo trong demo.");
    }
    repair.disabled = state.repaired;
    repair.addEventListener("pointerdown", () => { hold = setTimeout(finishRepair, 700); });
    for (const event of ["pointerup", "pointerleave", "pointercancel"]) repair.addEventListener(event, () => clearTimeout(hold));
    repair.addEventListener("keydown", event => { if (event.key === "Enter" && !event.repeat) hold = setTimeout(finishRepair, 700); });
    repair.addEventListener("keyup", () => clearTimeout(hold));
  },
  "18": () => {
    node("6:233").hidden = true;
    selectItems(["6:254", "6:256", "6:258", "6:260", "6:262"], (_, index) => notice(index === 0 ? "Giai đoạn 1 thuộc MVP." : "Giai đoạn này thuộc phần sau MVP."));
  },
  "19": () => selectItems(["6:271", "6:273", "6:275", "6:277"], row => notice(row.textContent.trim())),
  "30": () => {
    flightOrigin = "30";
    updateFlight();
    change("7:68", state.pinned ? "GHIM: " + state.pinned : "GHIM: Trống");
    if (state.people === 1) elements(["7:82", "7:83", "7:87"]).forEach(element => { element.hidden = true; });
    hotspot("7:50", "Nhặt vật liệu", collect);
    hotspot("7:109", "Kéo mục tiêu", collect);
    for (let i = 1; i <= 3; i++) {
      const id = ["7:74", "7:76", "7:78"][i - 1];
      hotspot(id, "Chọn dụng cụ " + i, () => selectTool(i), state.tool === i);
    }
    hotspot("7:100", "Quay về Ember", () => go("36"));
    demoButton("Túi đồ", () => go("31"), { left: "65px", top: "565px" });
    demoButton("Bản đồ", () => go("33"), { left: "157px", top: "565px" });
    demoButton("Về Ember", () => go("36"), { right: "65px", top: "565px" });
  },
  "30b": () => { flightOrigin = "30b"; },
  "31": () => {
    const names = ["Mảnh lõi (hiếm)", "Phế liệu", "Băng", "Lưới cuộn", "Bình Oxy nhỏ"];
    const rows = ["7:230", "7:234", "7:238", "7:242", "7:246"];
    const amountText = ["7:232", "7:236", "7:240", "7:244", "7:248"];
    const statusText = ["7:233", "7:237", "7:241", "7:245", "7:249"];
    const baseStatus = ["", "", "", "Vật tiêu hao", "Dùng: hồi 40 Oxy"];
    function refreshBag() {
      updateFlight();
      change("7:228", state.cargo + "/80 Khối - Nặng từ 60%");
      change("7:207", state.pinned ? "GHIM: " + state.pinned : "GHIM: Trống");
      amountText.forEach((id, index) => {
        change(id, state.supplies[index]);
        change(statusText[index], state.pinned === names[index] ? "Đang ghim" : baseStatus[index]);
      });
      const hasItem = state.supplies[state.selectedCargo] > 0;
      drop.disabled = !hasItem;
      pin.disabled = !hasItem;
      use.disabled = !hasItem || state.selectedCargo !== 4;
    }
    selectItems(rows, (_, index) => { state.selectedCargo = index; refreshBag(); }, state.selectedCargo);
    const pin = figButton("Ghim", () => {
      state.pinned = names[state.selectedCargo];
      refreshBag();
      notice("Đã ghim " + state.pinned + ".");
    });
    const drop = figButton("Thả", () => {
      state.supplies[state.selectedCargo]--;
      if (!state.supplies[state.selectedCargo] && state.pinned === names[state.selectedCargo]) state.pinned = "";
      state.cargo = Math.max(0, state.cargo - 1);
      refreshBag();
      notice("Đã thả một đơn vị " + names[state.selectedCargo] + ".");
    });
    const use = figButton("Dùng", () => {
      state.supplies[4]--;
      state.oxygen = Math.min(330, state.oxygen + 40);
      refreshBag();
      notice("Đã hồi Oxy.");
    });
    hotspot("7:258", "Đóng túi", () => closeFlightOverlay());
    refreshBag();
  },
  "33": () => hotspot("7:374", "Đóng bản đồ", () => closeFlightOverlay()),
  "34": () => {
    let remaining = 12;
    change("7:418", remaining);
    const names = ["Mảnh lõi (hiếm)", "Phế liệu", "Băng"];
    selectItems(["7:422", "7:426", "7:430"], (_, index) => {
      if (!state.supplies[index]) return notice("Không còn món này trong túi.");
      state.pinned = names[index];
      ["7:423", "7:427", "7:431"].forEach((id, item) => change(id, (item === index ? "[x] " : "[ ] ") + names[item]));
      ["7:425", "7:429", "7:433"].forEach((id, item) => change(id, item === index ? "GHIM - giữ khi bị kéo về" : "Mất nếu bị kéo về"));
      change("7:420", "Chờ cứu hoặc bay tới cửa khí. Giữ lại: " + state.pinned);
    }, names.indexOf(state.pinned));
    timer = setInterval(() => {
      change("7:418", --remaining);
      if (remaining <= 0) go("35");
    }, 1000);
  },
  "35": () => {
    change("7:446", state.pinned || "Không có gì được ghim");
    const next = figButton("Tiếp tục", finishFlight);
    next.disabled = true;
    timer = setTimeout(() => {
      next.disabled = false;
      change("7:459", "");
    }, 1500);
  },
  "36": () => {
    change("7:441", "Trở về trạm");
    change("7:442", "Chuyến " + state.trip + " - Oxy còn " + state.oxygen);
    change("7:443", "ĐÃ CHUYỂN VÀO KHO");
    change("7:446", state.cargo + "/80 Khối");
    elements(["7:448", "7:449", "7:459"]).forEach(element => { element.hidden = true; });
    figButton("Tiếp tục", finishFlight);
  },
  "40": () => {
    for (const [index, id] of ["8:144", "8:146", "8:149"].entries()) hotspot(id, "Nhặt thùng ở ô " + (index + 1), () => pickCrate(index + 1));
    for (const [index, id] of ["8:108", "8:121", "8:133"].entries()) hotspot(id, "Giao ở cửa neo " + (index + 1), () => deliver(index + 1));
    hotspot("8:136", "Bơm khí", () => { node("8:136").hidden = true; notice("Đã xử lý bơm khí."); });
    demoButton("Kết ca", endPort, { right: "66px", bottom: "40px" });
    updatePort();
    timer = setInterval(() => {
      if (--state.portTime <= 0) return endPort();
      updatePort();
    }, 1000);
  },
  "43": () => {
    change("8:172", "Kết ca - Ngày " + state.day);
    if (state.portLocked) {
      change("8:177", state.delivered.size + "/3");
      change("8:180", 3 - state.delivered.size);
      change("8:198", state.delivered.has(2) ? "Đã giao" : "Chưa giao");
      for (const id of ["8:186", "8:189", "8:192", "8:195"]) change(id, "Chưa tính");
      change("8:199", "Thùng về kho: " + (3 - state.delivered.size));
      node("8:202").hidden = true;
    }
    figButton("Tiếp tục", () => go("44"));
  },
  "44": () => {
    change("8:225", "Cuối ngày - Ngày " + state.day);
    node("8:219").hidden = state.people === 1;
    change("8:243", "Hàng đợi qua đêm: " + state.queue);
    [["8:228", "Shop", "15"], ["8:231", "Nâng cấp", "16"], ["8:234", "Sổ tay", "19"], ["8:237", "Nói chuyện", "53"]]
      .forEach(([id, label, target]) => hotspot(id, label, () => go(target)));
    figButton("Vào buồng ngủ", () => {
      state.day++;
      state.trip = 1;
      state.portLocked = false;
      go("10", { direct: true, message: "Ngày " + state.day + " đã bắt đầu." });
    });
  },
  "50": () => {
    figButton("Tiếp tục", () => go(pauseOrigin, { replace: true }));
    figButton("Mời bạn", () => notice("Mã phòng mẫu: 7K2-Q9F"));
    figButton("Sổ tay", () => go("19"));
    figButton("Cài đặt", () => go("51"));
    figButton("Về menu chính", () => confirm("Về menu chính?", "Phần đang làm dở trong chuyến hoặc ca sẽ kết thúc trong demo.", "Về menu chính", () => go("01", { direct: true })));
  },
  "51": () => {
    selectItems(["9:137", "9:139", "9:141", "9:143", "9:145"], (item, index) => {
      if (index === 2) go("52");
      else notice("Đã chọn tab " + item.textContent.trim() + ".");
    });
    demoButton("Đổi phím", () => go("52"), { right: "90px", bottom: "70px" });
    demoButton("Quay lại", () => back("01"), { right: "210px", bottom: "70px" });
  },
  "52": () => {
    selectItems(["9:185", "9:190", "9:195", "9:200", "9:205", "9:210", "9:215", "9:220"], row => {
      waitingForKey = row;
      notice("Bấm phím mới cho " + row.firstElementChild.textContent.trim() + ".");
    }, -1);
    figButton("Hoán đổi", () => {
      if (!conflict) return notice("Chọn một hành động rồi bấm phím đang dùng để thử hoán đổi.");
      const previous = conflict.row.children[1].textContent;
      state.bindings.set(conflict.other.dataset.nodeId, previous);
      conflict.other.children[1].textContent = previous;
      applyBinding(conflict.row, conflict.key);
      conflict = null;
    });
    for (const [id, key] of state.bindings) {
      const selected = node(id);
      if (selected) selected.children[1].textContent = key;
    }
  },
  "53": () => {
    change("9:244", "Khoang neo còn hỏng. Kiểm tra Xưởng trước khi ra ngoài.");
    hotspot("9:247", "Tiếp", () => back());
    hotspot("9:250", "Bỏ qua cả cảnh", () => back());
  },
  "54": () => {
    const pending = confirmAction || { title: "Về menu chính?", description: "Demo quay về menu chính.", label: "Về menu", action: () => go("01", { direct: true }), origin: "10" };
    if (pending.background) {
      pending.background.inert = true;
      pending.background.setAttribute("aria-hidden", "true");
      pending.background.classList.add("confirm-underlay");
      node("9:255").replaceWith(pending.background);
    }
    change("9:258", pending.title);
    change("9:259", pending.description);
    change("9:260", "");
    const dialog = node("9:257");
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-label", pending.title);
    const cancel = figButton("Quay lại", () => {
      confirmAction = null;
      back(pending.origin);
    });
    figButton("Vẫn thoát", () => {
      confirmAction = null;
      pending.action();
    }, pending.label);
    cancel.focus({ preventScroll: true });
  }
};

function selectTool(index) {
  state.tool = index;
  elements(["7:74", "7:76", "7:78"]).forEach((item, i) => item.setAttribute("aria-pressed", String(i + 1 === index)));
}

function pickCrate(index) {
  if (state.delivered.has(index)) return notice("Đã giao thùng ở ô này.");
  if (state.carried) return notice("Tay đang bận. Giao thùng đang cầm trước.");
  state.carried = index;
  updatePort();
}

function deliver(index) {
  if (state.carried !== index) return notice("Chọn đúng thùng ở quầy trước khi giao.");
  state.delivered.add(index);
  state.carried = 0;
  updatePort();
  notice("Đã giao hàng ở cửa neo " + index + ".");
  if (state.delivered.size === 3) notice("Đã giao hết các đơn mẫu. Bấm Kết ca để xem kết quả.");
}

function updatePort() {
  const time = Math.floor(state.portTime / 60) + ":" + String(state.portTime % 60).padStart(2, "0");
  change("8:85", "Ca còn " + time);
  change("8:164", state.carried ? "Cầm: " + ["Thùng phế liệu", "Thùng đồ Trái Đất", "Thùng cáp"][state.carried - 1] + " - Cửa neo " + state.carried : "Tay đang trống");
  change("8:154", state.carried ? "Giao thùng ở cửa neo tương ứng" : "Chọn ô quầy để nhặt thùng");
  ["8:99", "8:111", "8:124"].forEach((id, index) => { node(id).hidden = state.delivered.has(index + 1); });
}

function applyBinding(row, key) {
  state.bindings.set(row.dataset.nodeId, key);
  row.children[1].textContent = key;
  notice("Đã gán " + key + " cho " + row.firstElementChild.textContent.trim() + ".");
}

function closeFlightOverlay() {
  if (history.at(-1) === flightOrigin) history.pop();
  go(flightOrigin, { replace: true });
}

function closeScreen() {
  if (current === "54") {
    confirmAction = null;
    return back("10");
  }
  if (current === "10" || ["30", "30b", "40"].includes(current)) {
    pauseOrigin = current;
    return go("50");
  }
  if (current === "50") return go(pauseOrigin, { replace: true });
  if (["31", "33"].includes(current)) return closeFlightOverlay();
  if (current === "34") return;
  if (current === "05") return go("10", { direct: true });
  if (current !== "01") back(["02", "04", "51"].includes(current) ? "01" : "10");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") { event.preventDefault(); closeScreen(); return; }
  if (event.target instanceof HTMLInputElement) return;
  if (waitingForKey && !event.repeat) {
    event.preventDefault();
    const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
    const row = waitingForKey;
    waitingForKey = null;
    const other = [...row.parentElement.children].find(item => item !== row && item.children[1]?.textContent.trim() === key);
    if (other) {
      conflict = { row, other, key };
      notice(key + " đang dùng cho " + other.firstElementChild.textContent.trim() + ".");
    } else applyBinding(row, key);
    return;
  }
  if (event.target instanceof HTMLButtonElement && ["Enter", " "].includes(event.key)) return;
  const key = event.key.toLowerCase();
  if (current === "05" && key === "enter") return go("10", { direct: true });
  if (current === "53" && ["e", "enter", " "].includes(key)) return back();
  if (current === "10" && key === "e") return go("13");
  if (current === "10" && key === "j") return go("19");
  if (["30", "30b", "31", "33"].includes(current) && ["tab", "m"].includes(key)) {
    if (key === "tab" && event.shiftKey) return;
    if (key === "tab" && event.target.closest(".topbar, .sidebar, .scene-heading")) return;
    event.preventDefault();
    const target = key === "tab" ? "31" : "33";
    if (current === target) return closeFlightOverlay();
    return go(target, { replace: current === "31" || current === "33" });
  }
  if (current === "30") {
    if (key === "e") collect();
    if (["1", "2", "3"].includes(key)) selectTool(Number(key));
    if ("wasd".includes(key) && key.length === 1) {
      state.playerX = Math.max(80, Math.min(1170, state.playerX + (key === "d" ? 13 : key === "a" ? -13 : 0)));
      state.playerY = Math.max(100, Math.min(570, state.playerY + (key === "s" ? 13 : key === "w" ? -13 : 0)));
      updateFlight();
    }
  }
  if (current === "40") {
    if (key === "e" && !state.carried) pickCrate([1, 2, 3].find(index => !state.delivered.has(index)) || 1);
    if (["1", "2", "3"].includes(key)) deliver(Number(key));
  }
});

for (const button of document.querySelectorAll("button[data-look]")) {
  button.addEventListener("click", () => {
    document.documentElement.dataset.look = button.dataset.look;
    document.querySelectorAll("button[data-look]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    adjustArt();
  });
}
document.querySelector("#previous").addEventListener("click", () => jump(-1));
document.querySelector("#next").addEventListener("click", () => jump(1));
document.querySelector("#reset").addEventListener("click", () => {
  resetState();
  confirmAction = null;
  pauseOrigin = "10";
  flightOrigin = "30";
  go("01", { direct: true });
});

new ResizeObserver(() => { stage.style.transform = "scale(" + viewport.clientWidth / 1280 + ")"; }).observe(viewport);
go("01", { direct: true });
