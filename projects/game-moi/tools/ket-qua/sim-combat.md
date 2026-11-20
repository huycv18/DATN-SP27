# Kết quả sim combat

Sinh bởi `tools/sim-combat.mjs` lúc 2026-11-20T02:00:53.238Z, hash tham số 83a0cb70, seed 1, 2000 trận mỗi ô. Chỉ số loài đọc từ `combat-driftlife.md` (Danh mục, 3.4), tham số `tools/tham-so/combat.json`.

Giả định gd-tech tự đặt: trung: xác suất một phát trúng. ne: xác suất né một đòn có báo trước (đòn không có báo trước thì né bằng nửa số này). Chưa có prototype bộ đẩy để đo S6. Thời gian trận cộng 3 giây bay tới (gd-combat đề nghị), loài Chạy trốn mỗi phát trượt mất thêm thời gian đuổi theo (cfg.chayTron). Bầy tính một con. Đòn đặc biệt chưa tính: Gulper, Storm Siphon, Brood Mother.

## 1. Thời gian hạ và bắt sống mỗi loài, Oxy mất do đòn (cả nhóm, mỗi trận)

Kịch bản tệ và tốt chỉ in cho một người. Giây P50 / P90. "Bắt xong trong 120 giây" dưới 100% nghĩa là có trận không bắt được.

| Loài | Cỡ | Nhãn | Kịch bản | Số người | Giây hạ P50 / P90 | Oxy mất khi hạ | Cách bắt | Giây bắt P50 / P90 | Oxy mất khi bắt | Bắt xong trong 120 giây |
|---|---|---|---|---|---|---|---|---|---|---|
| DL-G01 Driftmoth | S | MVP | tệ | 1 | 3,3 / 5,6 | 0,0 | Súng lưới (MVP) | 3,3 / 12,2 | 0,0 | 100% |
| DL-G01 Driftmoth | S | MVP | trung bình | 1 | 3,3 / 4,1 | 0,0 | Súng lưới (MVP) | 3,3 / 6,3 | 0,0 | 100% |
| DL-G01 Driftmoth | S | MVP | trung bình | 2 | 3,3 / 4,1 | 0,0 | Súng lưới (MVP) | 3,1 / 3,3 | 0,0 | 100% |
| DL-G01 Driftmoth | S | MVP | trung bình | 3 | 3,3 / 4,0 | 0,0 | Súng lưới (MVP) | 3,1 / 3,3 | 0,0 | 100% |
| DL-G01 Driftmoth | S | MVP | trung bình | 4 | 3,3 / 4,0 | 0,0 | Súng lưới (MVP) | 3,1 / 3,2 | 0,0 | 100% |
| DL-G01 Driftmoth | S | MVP | tốt | 1 | 3,2 / 4,0 | 0,0 | Súng lưới (MVP) | 3,2 / 6,2 | 0,0 | 100% |
| DL-G02 Skitter Ray | S | MVP | tệ | 1 | 8,5 / 25,7 | 0,0 | Súng lưới (MVP) | 3,3 / 23,4 | 0,0 | 100% |
| DL-G02 Skitter Ray | S | MVP | trung bình | 1 | 8,2 / 12,8 | 0,0 | Súng lưới (MVP) | 3,3 / 10,1 | 0,0 | 100% |
| DL-G02 Skitter Ray | S | MVP | trung bình | 2 | 5,7 / 12,6 | 0,0 | Súng lưới (MVP) | 3,1 / 3,3 | 0,0 | 100% |
| DL-G02 Skitter Ray | S | MVP | trung bình | 3 | 4,1 / 8,3 | 0,0 | Súng lưới (MVP) | 3,1 / 3,3 | 0,0 | 100% |
| DL-G02 Skitter Ray | S | MVP | trung bình | 4 | 4,1 / 8,2 | 0,0 | Súng lưới (MVP) | 3,1 / 3,2 | 0,0 | 100% |
| DL-G02 Skitter Ray | S | MVP | tốt | 1 | 4,0 / 8,4 | 0,0 | Súng lưới (MVP) | 3,2 / 9,9 | 0,0 | 100% |
| DL-G03 Barnacle Maw | M | Sau MVP | tệ | 1 | 11,8 / 15,9 | 23,3 | Dùi xung rồi Phao kéo (Sau MVP) | 10,3 / 25,3 | 21,4 | 100% |
| DL-G03 Barnacle Maw | M | Sau MVP | trung bình | 1 | 8,9 / 11,3 | 9,9 | Dùi xung rồi Phao kéo (Sau MVP) | 8,7 / 10,3 | 5,6 | 100% |
| DL-G03 Barnacle Maw | M | Sau MVP | trung bình | 2 | 8,1 / 9,6 | 8,6 | Dùi xung rồi Phao kéo (Sau MVP) | 7,8 / 8,7 | 4,0 | 100% |
| DL-G03 Barnacle Maw | M | Sau MVP | trung bình | 3 | 7,2 / 8,1 | 6,7 | Dùi xung rồi Phao kéo (Sau MVP) | 7,6 / 8,1 | 3,3 | 100% |
| DL-G03 Barnacle Maw | M | Sau MVP | trung bình | 4 | 6,3 / 7,2 | 5,4 | Dùi xung rồi Phao kéo (Sau MVP) | 7,2 / 7,7 | 2,5 | 100% |
| DL-G03 Barnacle Maw | M | Sau MVP | tốt | 1 | 7,9 / 9,4 | 4,2 | Dùi xung rồi Phao kéo (Sau MVP) | 8,1 / 8,9 | 2,1 | 100% |
| DL-G04 Sting Krill | S | MVP | tệ | 1 | 3,3 / 5,6 | 0,6 | Súng lưới (MVP) | 3,3 / 12,2 | 2,1 | 100% |
| DL-G04 Sting Krill | S | MVP | trung bình | 1 | 3,3 / 4,1 | 0,2 | Súng lưới (MVP) | 3,3 / 6,3 | 0,6 | 100% |
| DL-G04 Sting Krill | S | MVP | trung bình | 2 | 3,3 / 4,1 | 0,3 | Súng lưới (MVP) | 3,1 / 3,3 | 0,1 | 100% |
| DL-G04 Sting Krill | S | MVP | trung bình | 3 | 3,3 / 4,0 | 0,2 | Súng lưới (MVP) | 3,1 / 3,3 | 0,1 | 100% |
| DL-G04 Sting Krill | S | MVP | trung bình | 4 | 3,3 / 4,0 | 0,2 | Súng lưới (MVP) | 3,1 / 3,2 | 0,0 | 100% |
| DL-G04 Sting Krill | S | MVP | tốt | 1 | 3,2 / 4,0 | 0,1 | Súng lưới (MVP) | 3,2 / 6,2 | 0,1 | 100% |
| DL-G05 Arc Eel | M | MVP (chỉ hạ) | tệ | 1 | 15,1 / 19,9 | 32,6 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 11,8 / 23,6 | 27,6 | 100% |
| DL-G05 Arc Eel | M | MVP (chỉ hạ) | trung bình | 1 | 11,2 / 13,7 | 14,3 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 11,6 / 14,8 | 12,2 | 100% |
| DL-G05 Arc Eel | M | MVP (chỉ hạ) | trung bình | 2 | 9,7 / 11,3 | 12,2 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 8,8 / 11,8 | 10,5 | 100% |
| DL-G05 Arc Eel | M | MVP (chỉ hạ) | trung bình | 3 | 8,1 / 9,6 | 9,2 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 8,6 / 8,8 | 6,8 | 100% |
| DL-G05 Arc Eel | M | MVP (chỉ hạ) | trung bình | 4 | 7,3 / 8,7 | 8,0 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 8,6 / 8,8 | 7,4 | 100% |
| DL-G05 Arc Eel | M | MVP (chỉ hạ) | tốt | 1 | 9,6 / 11,2 | 5,9 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 8,8 / 11,8 | 5,0 | 100% |
| DL-M01 Shepherd Whale | L | Sau MVP | tệ | 1 | - | - | Kim sinh thiết (Sau MVP) | 5,0 / 5,0 | 0,0 | 100% |
| DL-M01 Shepherd Whale | L | Sau MVP | trung bình | 1 | - | - | Kim sinh thiết (Sau MVP) | 5,0 / 5,0 | 0,0 | 100% |
| DL-M01 Shepherd Whale | L | Sau MVP | trung bình | 2 | - | - | Kim sinh thiết (Sau MVP) | 5,0 / 5,0 | 0,0 | 100% |
| DL-M01 Shepherd Whale | L | Sau MVP | trung bình | 3 | - | - | Kim sinh thiết (Sau MVP) | 5,0 / 5,0 | 0,0 | 100% |
| DL-M01 Shepherd Whale | L | Sau MVP | trung bình | 4 | - | - | Kim sinh thiết (Sau MVP) | 5,0 / 5,0 | 0,0 | 100% |
| DL-M01 Shepherd Whale | L | Sau MVP | tốt | 1 | - | - | Kim sinh thiết (Sau MVP) | 5,0 / 5,0 | 0,0 | 100% |
| DL-M02 Lumen Jelly | M | Sau MVP | tệ | 1 | 10,3 / 13,7 | 30,4 | Dùi xung rồi Phao kéo (Sau MVP) | 9,7 / 26,2 | 44,0 | 100% |
| DL-M02 Lumen Jelly | M | Sau MVP | trung bình | 1 | 7,9 / 9,7 | 17,7 | Dùi xung rồi Phao kéo (Sau MVP) | 7,4 / 9,3 | 14,0 | 100% |
| DL-M02 Lumen Jelly | M | Sau MVP | trung bình | 2 | 7,1 / 8,1 | 14,5 | Dùi xung rồi Phao kéo (Sau MVP) | 6,7 / 7,7 | 9,4 | 100% |
| DL-M02 Lumen Jelly | M | Sau MVP | trung bình | 3 | 6,3 / 7,3 | 12,0 | Dùi xung rồi Phao kéo (Sau MVP) | 6,3 / 6,8 | 7,8 | 100% |
| DL-M02 Lumen Jelly | M | Sau MVP | trung bình | 4 | 6,3 / 7,0 | 10,8 | Dùi xung rồi Phao kéo (Sau MVP) | 6,1 / 6,6 | 7,1 | 100% |
| DL-M02 Lumen Jelly | M | Sau MVP | tốt | 1 | 7,0 / 8,1 | 12,1 | Dùi xung rồi Phao kéo (Sau MVP) | 6,7 / 7,8 | 8,3 | 100% |
| DL-M03 Ore Grazer | M | Sau MVP | tệ | 1 | 21,4 / 26,5 | 42,4 | Dùi xung rồi Phao kéo (Sau MVP) | 90,7 / 123,0 | 179,8 | 61% |
| DL-M03 Ore Grazer | M | Sau MVP | trung bình | 1 | 15,9 / 19,1 | 18,4 | Dùi xung rồi Phao kéo (Sau MVP) | 17,6 / 35,3 | 21,2 | 100% |
| DL-M03 Ore Grazer | M | Sau MVP | trung bình | 2 | 13,7 / 15,9 | 15,7 | Dùi xung rồi Phao kéo (Sau MVP) | 9,2 / 16,3 | 8,6 | 100% |
| DL-M03 Ore Grazer | M | Sau MVP | trung bình | 3 | 11,8 / 12,9 | 12,2 | Dùi xung rồi Phao kéo (Sau MVP) | 8,2 / 8,9 | 6,0 | 100% |
| DL-M03 Ore Grazer | M | Sau MVP | trung bình | 4 | 10,4 / 11,8 | 10,7 | Dùi xung rồi Phao kéo (Sau MVP) | 7,7 / 8,3 | 5,1 | 100% |
| DL-M03 Ore Grazer | M | Sau MVP | tốt | 1 | 13,6 / 15,3 | 7,0 | Dùi xung rồi Phao kéo (Sau MVP) | 8,9 / 17,1 | 4,6 | 100% |
| DL-M04 Needle Shoal | S | Sau MVP | tệ | 1 | 5,5 / 7,9 | 1,7 | Súng lưới (MVP) | 3,3 / 12,2 | 2,1 | 100% |
| DL-M04 Needle Shoal | S | Sau MVP | trung bình | 1 | 4,7 / 5,7 | 0,7 | Súng lưới (MVP) | 3,3 / 6,3 | 0,6 | 100% |
| DL-M04 Needle Shoal | S | Sau MVP | trung bình | 2 | 3,9 / 4,1 | 0,3 | Súng lưới (MVP) | 3,1 / 3,3 | 0,1 | 100% |
| DL-M04 Needle Shoal | S | Sau MVP | trung bình | 3 | 3,9 / 4,1 | 0,3 | Súng lưới (MVP) | 3,1 / 3,3 | 0,1 | 100% |
| DL-M04 Needle Shoal | S | Sau MVP | trung bình | 4 | 3,3 / 4,0 | 0,2 | Súng lưới (MVP) | 3,1 / 3,2 | 0,1 | 100% |
| DL-M04 Needle Shoal | S | Sau MVP | tốt | 1 | 4,0 / 4,8 | 0,3 | Súng lưới (MVP) | 3,2 / 6,2 | 0,1 | 100% |
| DL-M05 Gulper | L | Sau MVP | tệ | 1 | 50,3 / 58,4 | 115,0 | Dùi xung rồi Phao kéo (Sau MVP) | 37,4 / 109,3 | 107,7 | 93% |
| DL-M05 Gulper | L | Sau MVP | trung bình | 1 | 36,6 / 41,5 | 49,9 | Dùi xung rồi Phao kéo (Sau MVP) | 10,7 / 19,8 | 14,0 | 100% |
| DL-M05 Gulper | L | Sau MVP | trung bình | 2 | 29,7 / 32,8 | 41,0 | Dùi xung rồi Phao kéo (Sau MVP) | 9,2 / 10,3 | 6,2 | 100% |
| DL-M05 Gulper | L | Sau MVP | trung bình | 3 | 25,5 / 27,9 | 33,8 | Dùi xung rồi Phao kéo (Sau MVP) | 8,4 / 9,2 | 5,1 | 100% |
| DL-M05 Gulper | L | Sau MVP | trung bình | 4 | 22,4 / 24,0 | 28,8 | Dùi xung rồi Phao kéo (Sau MVP) | 8,2 / 8,7 | 4,6 | 100% |
| DL-M05 Gulper | L | Sau MVP | tốt | 1 | 30,4 / 33,5 | 20,9 | Dùi xung rồi Phao kéo (Sau MVP) | 9,3 / 10,7 | 3,5 | 100% |
| DL-X01 Prism Wisp | S | Sau MVP | tệ | 1 | 13,7 / 31,0 | 0,0 | Súng lưới (MVP) | 3,3 / 23,4 | 0,0 | 100% |
| DL-X01 Prism Wisp | S | Sau MVP | trung bình | 1 | 9,2 / 18,0 | 0,0 | Súng lưới (MVP) | 3,3 / 10,1 | 0,0 | 100% |
| DL-X01 Prism Wisp | S | Sau MVP | trung bình | 2 | 5,7 / 12,6 | 0,0 | Súng lưới (MVP) | 3,1 / 3,3 | 0,0 | 100% |
| DL-X01 Prism Wisp | S | Sau MVP | trung bình | 3 | 4,9 / 9,1 | 0,0 | Súng lưới (MVP) | 3,1 / 3,3 | 0,0 | 100% |
| DL-X01 Prism Wisp | S | Sau MVP | trung bình | 4 | 4,1 / 8,2 | 0,0 | Súng lưới (MVP) | 3,1 / 3,2 | 0,0 | 100% |
| DL-X01 Prism Wisp | S | Sau MVP | tốt | 1 | 4,8 / 13,4 | 0,0 | Súng lưới (MVP) | 3,2 / 9,9 | 0,0 | 100% |
| DL-X02 Mirror Mantis | M | Sau MVP | tệ | 1 | 45,7 / 56,8 | 165,2 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 33,7 / 48,4 | 125,8 | 100% |
| DL-X02 Mirror Mantis | M | Sau MVP | trung bình | 1 | 33,9 / 40,1 | 72,1 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 25,9 / 34,7 | 56,2 | 100% |
| DL-X02 Mirror Mantis | M | Sau MVP | trung bình | 2 | 27,0 / 31,0 | 55,4 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 20,7 / 25,9 | 42,1 | 100% |
| DL-X02 Mirror Mantis | M | Sau MVP | trung bình | 3 | 21,9 / 24,8 | 43,6 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 17,6 / 21,2 | 35,0 | 100% |
| DL-X02 Mirror Mantis | M | Sau MVP | trung bình | 4 | 19,3 / 21,9 | 36,2 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 16,6 / 18,7 | 31,5 | 100% |
| DL-X02 Mirror Mantis | M | Sau MVP | tốt | 1 | 28,9 / 32,7 | 30,1 | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 22,8 / 27,5 | 23,4 | 100% |
| DL-X03 Storm Siphon | L | Sau MVP | tệ | 1 | 66,3 / 75,3 | 0,0 | Dùi xung rồi Phao kéo (Sau MVP) | 123,0 / 123,0 | 0,0 | 31% |
| DL-X03 Storm Siphon | L | Sau MVP | trung bình | 1 | 47,9 / 52,9 | 0,0 | Dùi xung rồi Phao kéo (Sau MVP) | 19,9 / 46,9 | 0,0 | 100% |
| DL-X03 Storm Siphon | L | Sau MVP | trung bình | 2 | 35,3 / 39,1 | 0,0 | Dùi xung rồi Phao kéo (Sau MVP) | 10,2 / 17,4 | 0,0 | 100% |
| DL-X03 Storm Siphon | L | Sau MVP | trung bình | 3 | 28,8 / 31,3 | 0,0 | Dùi xung rồi Phao kéo (Sau MVP) | 9,2 / 9,9 | 0,0 | 100% |
| DL-X03 Storm Siphon | L | Sau MVP | trung bình | 4 | 24,0 / 25,7 | 0,0 | Dùi xung rồi Phao kéo (Sau MVP) | 8,3 / 8,8 | 0,0 | 100% |
| DL-X03 Storm Siphon | L | Sau MVP | tốt | 1 | 39,9 / 43,1 | 0,0 | Dùi xung rồi Phao kéo (Sau MVP) | 10,7 / 19,3 | 0,0 | 100% |
| DL-X04 Brood Mother | L | Sau MVP | tệ | 1 | 58,3 / 67,3 | 114,6 | Dùi xung rồi Phao kéo (Sau MVP) | 73,8 / 123,0 | 150,5 | 68% |
| DL-X04 Brood Mother | L | Sau MVP | trung bình | 1 | 42,3 / 47,2 | 49,0 | Dùi xung rồi Phao kéo (Sau MVP) | 18,1 / 28,8 | 17,1 | 100% |
| DL-X04 Brood Mother | L | Sau MVP | trung bình | 2 | 31,9 / 34,5 | 37,0 | Dùi xung rồi Phao kéo (Sau MVP) | 9,3 / 10,7 | 6,2 | 100% |
| DL-X04 Brood Mother | L | Sau MVP | trung bình | 3 | 25,5 / 27,9 | 28,4 | Dùi xung rồi Phao kéo (Sau MVP) | 8,4 / 9,2 | 4,5 | 100% |
| DL-X04 Brood Mother | L | Sau MVP | trung bình | 4 | 21,6 / 23,2 | 24,0 | Dùi xung rồi Phao kéo (Sau MVP) | 7,9 / 8,4 | 3,9 | 100% |
| DL-X04 Brood Mother | L | Sau MVP | tốt | 1 | 35,1 / 37,7 | 20,2 | Dùi xung rồi Phao kéo (Sau MVP) | 9,9 / 17,4 | 4,0 | 100% |
| DL-X05 Brood Spawn | S | Sau MVP | tệ | 1 | 4,9 / 7,9 | 2,9 | Súng lưới (MVP) | 3,3 / 12,2 | 3,4 | 100% |
| DL-X05 Brood Spawn | S | Sau MVP | trung bình | 1 | 4,7 / 5,7 | 1,2 | Súng lưới (MVP) | 3,3 / 6,3 | 1,0 | 100% |
| DL-X05 Brood Spawn | S | Sau MVP | trung bình | 2 | 4,0 / 4,8 | 0,9 | Súng lưới (MVP) | 3,1 / 3,3 | 0,2 | 100% |
| DL-X05 Brood Spawn | S | Sau MVP | trung bình | 3 | 3,9 / 4,1 | 0,5 | Súng lưới (MVP) | 3,1 / 3,3 | 0,1 | 100% |
| DL-X05 Brood Spawn | S | Sau MVP | trung bình | 4 | 3,3 / 4,0 | 0,4 | Súng lưới (MVP) | 3,1 / 3,2 | 0,1 | 100% |
| DL-X05 Brood Spawn | S | Sau MVP | tốt | 1 | 4,0 / 4,8 | 0,4 | Súng lưới (MVP) | 3,2 / 6,2 | 0,3 | 100% |

## 2. S2 phần thời gian: GTĐ mỗi phút trận, bắt so với hạ (một người trung bình)

GTĐ từ `vat-pham.md` khối SPECIES. Cột ròng trừ GTĐ vật tiêu hao đã dùng (Lưới cuộn mỗi phát, Ống gây mê mỗi phát, Phao kéo hoặc Kim sinh thiết mỗi lần bắt, GTĐ từ khối ITEM). Chưa tính kéo lồng chậm. Cỡ S nên đọc theo chuyến (Lồng 3 con), không theo trận. Mục tiêu đề S2: bắt ròng gấp 1,2 đến 1,6 lần hạ.

| Loài | Đường bắt | GTĐ khi hạ | GTĐ mẫu bắt | GTĐ vật tiêu hao mỗi lần bắt | Giây hạ | Giây bắt | GTĐ mỗi phút hạ | GTĐ mỗi phút bắt | Bắt trên hạ (gộp) | Bắt trên hạ (ròng) |
|---|---|---|---|---|---|---|---|---|---|---|
| DL-G01 Driftmoth | Súng lưới (MVP) | 2,7 | 5,1 | 1,6 | 3,3 | 3,3 | 49,8 | 94,9 | 1,90 | 1,33 |
| DL-G01 Driftmoth | Dùi xung rồi bắt tay (MVP) | 2,7 | 5,1 | 0,0 | 3,3 | 5,6 | 49,8 | 55,1 | 1,10 | 1,10 |
| DL-G02 Skitter Ray | Súng lưới (MVP) | 3,1 | 5,7 | 1,6 | 8,2 | 3,3 | 22,7 | 106,0 | 4,67 | 3,41 |
| DL-G02 Skitter Ray | Dùi xung rồi bắt tay (MVP) | 3,1 | 5,7 | 0,0 | 8,2 | 5,6 | 22,7 | 61,5 | 2,71 | 2,71 |
| DL-G04 Sting Krill | Súng lưới (MVP) | 2,3 | 4,0 | 1,5 | 3,3 | 3,3 | 42,5 | 74,6 | 1,76 | 1,08 |
| DL-G04 Sting Krill | Dùi xung rồi bắt tay (MVP) | 2,3 | 4,0 | 0,0 | 3,3 | 5,6 | 42,5 | 43,3 | 1,02 | 1,02 |
| DL-G05 Arc Eel | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 6,0 | 30,7 | 21,0 | 11,2 | 11,6 | 32,1 | 159,5 | 4,96 | 1,57 |
| DL-G03 Barnacle Maw | Dùi xung rồi Phao kéo (Sau MVP) | 6,0 | 16,9 | 7,9 | 8,9 | 8,7 | 40,7 | 116,6 | 2,87 | 1,53 |
| DL-M02 Lumen Jelly | Dùi xung rồi Phao kéo (Sau MVP) | 12,0 | 25,9 | 7,9 | 7,9 | 7,4 | 91,1 | 211,5 | 2,32 | 1,61 |
| DL-M03 Ore Grazer | Dùi xung rồi Phao kéo (Sau MVP) | 14,0 | 28,9 | 7,9 | 15,9 | 17,6 | 52,8 | 98,3 | 1,86 | 1,35 |
| DL-M04 Needle Shoal | Súng lưới (MVP) | 5,5 | 10,3 | 1,5 | 4,7 | 3,3 | 71,0 | 189,4 | 2,67 | 2,27 |
| DL-M04 Needle Shoal | Dùi xung rồi bắt tay (MVP) | 5,5 | 10,3 | 0,0 | 4,7 | 5,6 | 71,0 | 109,9 | 1,55 | 1,55 |
| DL-M05 Gulper | Dùi xung rồi Phao kéo (Sau MVP) | 26,0 | 19,5 | 7,8 | 36,6 | 10,7 | 42,6 | 109,5 | 2,57 | 1,54 |
| DL-X01 Prism Wisp | Súng lưới (MVP) | 18,0 | 33,5 | 1,6 | 9,2 | 3,3 | 118,0 | 618,3 | 5,24 | 5,00 |
| DL-X01 Prism Wisp | Dùi xung rồi bắt tay (MVP) | 18,0 | 33,5 | 0,0 | 9,2 | 5,6 | 118,0 | 358,8 | 3,04 | 3,04 |
| DL-X02 Mirror Mantis | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 28,8 | 69,5 | 40,7 | 33,9 | 25,9 | 51,0 | 161,0 | 3,16 | 1,31 |
| DL-X03 Storm Siphon | Dùi xung rồi Phao kéo (Sau MVP) | 54,0 | 32,1 | 7,8 | 47,9 | 19,9 | 67,7 | 97,1 | 1,43 | 1,09 |
| DL-X04 Brood Mother | Dùi xung rồi Phao kéo (Sau MVP) | 54,0 | 32,1 | 7,8 | 42,3 | 18,1 | 76,7 | 106,5 | 1,39 | 1,05 |
| DL-X05 Brood Spawn | Súng lưới (MVP) | 12,6 | 23,0 | 1,6 | 4,7 | 3,3 | 162,6 | 425,4 | 2,62 | 2,44 |
| DL-X05 Brood Spawn | Dùi xung rồi bắt tay (MVP) | 12,6 | 23,0 | 0,0 | 4,7 | 5,6 | 162,6 | 246,9 | 1,52 | 1,52 |

## 3. S3: tỉ lệ thời gian Bất lực trong 60 giây khi N người dùng Dùi xung liên tục (mục tiêu dưới 70% với N = 4)

| Loài | N = 1 | N = 2 | N = 3 | N = 4 |
|---|---|---|---|---|
| DL-G03 Barnacle Maw | 18% | 23% | 27% | 32% |
| DL-M02 Lumen Jelly | 16% | 20% | 25% | 27% |
| DL-M03 Ore Grazer | 7% | 13% | 14% | 18% |
| DL-M05 Gulper | 10% | 14% | 19% | 20% |
| DL-X02 Mirror Mantis | 6% | 13% | 14% | 20% |
| DL-X03 Storm Siphon | 6% | 13% | 15% | 20% |
| DL-X04 Brood Mother | 7% | 14% | 19% | 20% |

## 4. S4: gánh mỗi người so với một mình, trung bình

Số con mỗi chuyến nhân k(N) theo dải, Sinh lực và ngưỡng nhân N / k(N) theo bảng 6b. "Hạ dồn": cả nhóm cùng hạ từng con, gánh = k(N) x giây hạ với N người / giây hạ một mình. "Chia": mỗi người làm riêng k(N) / N con, gánh = k(N) / N x hệ số Sinh lực. "Bắt dồn": như hạ dồn với bắt sống (phần 3 giây tiếp cận tính một lần mỗi con). Mục tiêu 0,9 đến 1,1. Bắt dồn trên 1,1 nghĩa là cả nhóm cùng bắt tốn hơn mỗi người tự bắt riêng.

| Loài | Dải | N = 2 hạ dồn / chia / bắt dồn | N = 3 hạ dồn / chia / bắt dồn | N = 4 hạ dồn / chia / bắt dồn |
|---|---|---|---|---|
| DL-G01 Driftmoth | Gần | 1,32 / 1,00 / 1,26 | 1,60 / 1,00 / 1,53 | 1,93 / 1,00 / 1,81 |
| DL-G02 Skitter Ray | Gần | 0,90 / 1,00 / 1,26 | 0,80 / 1,00 / 1,53 | 0,95 / 1,00 / 1,81 |
| DL-G03 Barnacle Maw | Gần | 1,18 / 1,00 / 1,16 | 1,29 / 1,00 / 1,40 | 1,36 / 1,00 / 1,57 |
| DL-G04 Sting Krill | Gần | 1,32 / 1,00 / 1,26 | 1,60 / 1,00 / 1,53 | 1,93 / 1,00 / 1,81 |
| DL-G05 Arc Eel | Gần | 1,12 / 1,00 / 0,98 | 1,16 / 1,00 / 1,19 | 1,24 / 1,00 / 1,41 |
| DL-M02 Lumen Jelly | Giữa | 1,12 / 1,00 / 1,13 | 1,21 / 1,00 / 1,28 | 1,38 / 1,00 / 1,45 |
| DL-M03 Ore Grazer | Giữa | 1,07 / 1,00 / 0,65 | 1,12 / 1,00 / 0,69 | 1,15 / 1,00 / 0,76 |
| DL-M04 Needle Shoal | Giữa | 1,03 / 1,00 / 1,21 | 1,26 / 1,00 / 1,43 | 1,24 / 1,00 / 1,67 |
| DL-M05 Gulper | Giữa | 1,01 / 1,00 / 1,07 | 1,04 / 1,00 / 1,17 | 1,07 / 1,00 / 1,33 |
| DL-X01 Prism Wisp | Xa | 0,85 / 1,00 / 1,34 | 0,94 / 1,00 / 1,68 | 0,96 / 1,00 / 2,04 |
| DL-X02 Mirror Mantis | Xa | 1,10 / 1,00 / 1,10 | 1,14 / 1,00 / 1,19 | 1,22 / 1,00 / 1,37 |
| DL-X03 Storm Siphon | Xa | 1,02 / 1,00 / 0,71 | 1,06 / 1,00 / 0,81 | 1,07 / 1,00 / 0,89 |
| DL-X04 Brood Mother | Xa | 1,04 / 1,00 / 0,71 | 1,06 / 1,00 / 0,81 | 1,09 / 1,00 / 0,93 |
| DL-X05 Brood Spawn | Xa | 1,20 / 1,00 / 1,34 | 1,48 / 1,00 / 1,68 | 1,52 / 1,00 / 2,04 |

## 5. S5: boss BS-1 Scrapmaw (combat-driftlife.md 3.7, mục tiêu một mình 1 đến 2 phút)

Sinh lực 600 nhân 1 + 0,6 (N - 1). Oxy mỗi người = hao nền 1 mỗi giây cộng Oxy mất do đòn chia đều, so với bình chương 1 (330). Nguồn: combat-driftlife.md 3.7 dòng BS-1 (gd-combat sửa 2026-11-20 sau QA vòng 2): Sinh lực 600, quét 8, húc 12, phóng điện lõi 8 báo trước 1,3, thân chỉ nhận sát thương khi Choáng ở pha 1, pha 2 nhận mọi lúc (gd-combat chốt lại 2026-11-20), Xua đi cắt 2 đoạn Dây nối, đoạn 2 chỉ khi Sinh lực dưới 50%. Hệ số co-op boss 1 + 0,6 (N - 1) ở 6b. Krill phun ra dùng số DL-G04. Pha 1 phun 2 DL-G04 mỗi lần, hồi chiêu 20 s, tối đa 3 con sống (gd-combat 2026-11-20 sau S5). Húc pha 2 10 Oxy (gd-combat chốt 2026-11-20), mục tiêu thời lượng một mình 1 đến 2 phút.

Giả định gd-tech: pDu: xác suất người chơi dụ Scrapmaw vào vùng lõi khi lõi phóng điện ở pha 2. banKrillKhi: người chơi bắn Krill khi có từ 3 con sống. Pha 1 thân chỉ trúng đạn khi Choáng (đọc theo câu "Mỗi Neo đứt thì Choáng 4 s, thân đánh được"). Pha 2 thân trúng đạn bình thường pDu theo kịch bản tệ 0,3, trung bình 0,5, tốt 0,7.

| Cách kết | Kịch bản | Số người | Phút P50 / P90 | Oxy mất do đòn mỗi người | Oxy mỗi người P50 / P90 | P90 so với bình chương 1 | Xong trong 10 phút |
|---|---|---|---|---|---|---|---|
| Hạ | tệ | 1 | 1,8 / 2,0 | 225 | 329 / 387 | 117% | 100% |
| Hạ | tệ | 2 | 1,3 / 1,5 | 112 | 193 / 216 | 65% | 100% |
| Hạ | trung bình | 1 | 1,2 / 1,3 | 99 | 172 / 200 | 61% | 100% |
| Hạ | trung bình | 2 | 1,0 / 1,0 | 49 | 106 / 124 | 37% | 100% |
| Hạ | trung bình | 3 | 0,9 / 0,9 | 35 | 87 / 98 | 30% | 100% |
| Hạ | trung bình | 4 | 0,8 / 0,9 | 29 | 78 / 86 | 26% | 100% |
| Hạ | tốt | 1 | 1,0 / 1,0 | 41 | 99 / 121 | 37% | 100% |
| Hạ | tốt | 2 | 0,8 / 0,8 | 20 | 67 / 80 | 24% | 100% |
| Xua đi | tệ | 1 | 1,3 / 1,8 | 176 | 253 / 356 | 108% | 80% |
| Xua đi | tệ | 2 | 1,1 / 1,4 | 88 | 150 / 204 | 62% | 74% |
| Xua đi | trung bình | 1 | 0,8 / 1,2 | 71 | 117 / 174 | 53% | 90% |
| Xua đi | trung bình | 2 | 0,7 / 0,9 | 35 | 74 / 109 | 33% | 87% |
| Xua đi | trung bình | 3 | 0,6 / 0,9 | 26 | 63 / 90 | 27% | 85% |
| Xua đi | trung bình | 4 | 0,6 / 0,8 | 21 | 55 / 81 | 24% | 82% |
| Xua đi | tốt | 1 | 0,7 / 0,9 | 31 | 72 / 99 | 30% | 97% |
| Xua đi | tốt | 2 | 0,5 / 0,7 | 15 | 48 / 67 | 20% | 91% |
