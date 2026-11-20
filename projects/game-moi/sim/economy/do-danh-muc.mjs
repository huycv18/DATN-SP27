#!/usr/bin/env node
// Đo kiểu danh mục bằng mô hình ca của gd-tech (tools/sim-ca-cang.mjs, không sửa file đó) với giá thùng và độ gọi của gd-economy.
// sim-kinh-te.py gọi: node do-danh-muc.mjs < json vào (stdin), đọc JSON in ra. Json vào: { gia: {ma: Tally}, doGoi: {ma: trọng số},
//   hang: {ma: CGO}, khongChia: [ma], danhMuc: {tên: {N: {ma: số}}}, tau: {N: số tàu}, cua: {N: số cửa neo}, tre, lan, seed }
// Một tàu chọn món theo trọng số độ gọi của món nhân độ ưa của loại tàu (khối tau.*.thich của ca-cang.json).
import { readFileSync } from 'node:fs';
import { CFG, moPhong } from '../../tools/sim-ca-cang.mjs';

export function doDanhMuc(v) {
  const cfg = structuredClone(CFG);
  cfg.hang = {};
  for (const [ma, cgo] of Object.entries(v.hang)) cfg.hang[ma] = { cgo, gia: v.gia[ma], khongChia: v.khongChia.includes(ma) };
  for (const ty of Object.values(cfg.tau)) {
    const thich = {};
    for (const ma of Object.keys(v.hang)) thich[ma] = (v.doGoi[ma] ?? 1) * (ty.thich?.[ma] ?? 1);
    ty.thich = thich;
  }
  const out = [];
  for (const [ten, theoN] of Object.entries(v.danhMuc)) {
    for (const [N, dm] of Object.entries(theoN)) {
      const soTau = v.tau[N];
      cfg.danhMuc = { [ten]: dm };
      cfg.soTauGoc = soTau; // số trong danh mục là số thật, không co giãn theo số tàu
      const r = moPhong(cfg, { N: Number(N), tre: v.tre, soTau, danhMuc: ten, cua: v.cua[N] }, v.seed, v.lan);
      out.push({ ten, N: Number(N), soTau, thung: Object.values(dm).reduce((a, b) => a + b, 0), served: r.served, skipped: r.skipped, tally: r.tally, tipPhan: r.tipPhan, pre: r.pre, giay: r.giay, diem: r.diem, thungDu: r.thungDu });
    }
  }
  return out;
}

console.log(JSON.stringify(doDanhMuc(JSON.parse(readFileSync(0, 'utf8')))));
