"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const utils_1 = require("./utils");
const bubble_sort_1 = __importDefault(require("./bubble_sort"));
const selcet_sort_1 = __importDefault(require("./selcet_sort"));
const insert_sort_1 = __importDefault(require("./insert_sort"));
const shell_sort_1 = __importDefault(require("./shell_sort"));
const quick_sort_1 = __importDefault(require("./quick_sort"));
const stdlib_sort_1 = __importDefault(require("./stdlib_sort"));
const merge_sort_1 = __importDefault(require("./merge_sort"));
const heap_sort_1 = __importDefault(require("./heap_sort"));
const arr = (0, utils_1.gen_rand_arr)(10000, [-100000, 100000]);
const ans = (0, utils_1.with_time)(stdlib_sort_1.default, [arr.clone()], "stdlib_sort");
const arr1 = (0, utils_1.with_time)(bubble_sort_1.default, [arr.clone()], "bubble_sort");
const arr2 = (0, utils_1.with_time)(selcet_sort_1.default, [arr.clone()], "slect_sort");
const arr3 = (0, utils_1.with_time)(insert_sort_1.default, [arr.clone()], "insert_sort");
const arr4 = (0, utils_1.with_time)(shell_sort_1.default, [arr.clone()], "shell_sort");
const arr5 = (0, utils_1.with_time)(quick_sort_1.default, [arr.clone()], "quick_sort");
const arr6 = (0, utils_1.with_time)(merge_sort_1.default, [arr.clone()], "merge_sort");
const arr7 = (0, utils_1.with_time)(heap_sort_1.default, [arr.clone()], "heap_sort");
// console.log(ans, arr6);
(0, assert_1.default)(JSON.stringify(ans) === JSON.stringify(arr1), "bubble_sort");
(0, assert_1.default)(JSON.stringify(ans) === JSON.stringify(arr2), "slect_sort");
(0, assert_1.default)(JSON.stringify(ans) === JSON.stringify(arr3), "insert_sort");
(0, assert_1.default)(JSON.stringify(ans) === JSON.stringify(arr4), "shell_sort");
(0, assert_1.default)(JSON.stringify(ans) === JSON.stringify(arr5), "quick_sort");
(0, assert_1.default)(JSON.stringify(ans) === JSON.stringify(arr6), "merge_sort");
(0, assert_1.default)(JSON.stringify(ans) === JSON.stringify(arr7), "heap_sort");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsbUNBQWtEO0FBQ2xELGdFQUF3QztBQUN4QyxnRUFBdUM7QUFDdkMsZ0VBQXdDO0FBQ3hDLDhEQUFzQztBQUN0Qyw4REFBc0M7QUFDdEMsZ0VBQXdDO0FBQ3hDLDhEQUFzQztBQUN0Qyw0REFBb0M7QUFFcEMsTUFBTSxHQUFHLEdBQUcsSUFBQSxvQkFBWSxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbkQsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBUyxFQUFDLHFCQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUVqRSxNQUFNLElBQUksR0FBRyxJQUFBLGlCQUFTLEVBQUMscUJBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sSUFBSSxHQUFHLElBQUEsaUJBQVMsRUFBQyxxQkFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDaEUsTUFBTSxJQUFJLEdBQUcsSUFBQSxpQkFBUyxFQUFDLHFCQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNsRSxNQUFNLElBQUksR0FBRyxJQUFBLGlCQUFTLEVBQUMsb0JBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sSUFBSSxHQUFHLElBQUEsaUJBQVMsRUFBQyxvQkFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDaEUsTUFBTSxJQUFJLEdBQUcsSUFBQSxpQkFBUyxFQUFDLG9CQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNoRSxNQUFNLElBQUksR0FBRyxJQUFBLGlCQUFTLEVBQUMsbUJBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRTlELDBCQUEwQjtBQUMxQixJQUFBLGdCQUFNLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3BFLElBQUEsZ0JBQU0sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkUsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNwRSxJQUFBLGdCQUFNLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ25FLElBQUEsZ0JBQU0sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkUsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuRSxJQUFBLGdCQUFNLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBnZW5fcmFuZF9hcnIsIHdpdGhfdGltZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgYnViYmxlX3NvcnQgZnJvbSBcIi4vYnViYmxlX3NvcnRcIjtcbmltcG9ydCBzbGVjdF9zb3J0IGZyb20gXCIuL3NlbGNldF9zb3J0XCI7XG5pbXBvcnQgaW5zZXJ0X3NvcnQgZnJvbSBcIi4vaW5zZXJ0X3NvcnRcIjtcbmltcG9ydCBzaGVsbF9zb3J0IGZyb20gXCIuL3NoZWxsX3NvcnRcIjtcbmltcG9ydCBxdWlja19zb3J0IGZyb20gXCIuL3F1aWNrX3NvcnRcIjtcbmltcG9ydCBzdGRsaWJfc29ydCBmcm9tIFwiLi9zdGRsaWJfc29ydFwiO1xuaW1wb3J0IG1lcmdlX3NvcnQgZnJvbSBcIi4vbWVyZ2Vfc29ydFwiO1xuaW1wb3J0IGhlYXBfc29ydCBmcm9tIFwiLi9oZWFwX3NvcnRcIjtcblxuY29uc3QgYXJyID0gZ2VuX3JhbmRfYXJyKDEwMDAwLCBbLTEwMDAwMCwgMTAwMDAwXSk7XG5jb25zdCBhbnMgPSB3aXRoX3RpbWUoc3RkbGliX3NvcnQsIFthcnIuY2xvbmUoKV0sIFwic3RkbGliX3NvcnRcIik7XG5cbmNvbnN0IGFycjEgPSB3aXRoX3RpbWUoYnViYmxlX3NvcnQsIFthcnIuY2xvbmUoKV0sIFwiYnViYmxlX3NvcnRcIik7XG5jb25zdCBhcnIyID0gd2l0aF90aW1lKHNsZWN0X3NvcnQsIFthcnIuY2xvbmUoKV0sIFwic2xlY3Rfc29ydFwiKTtcbmNvbnN0IGFycjMgPSB3aXRoX3RpbWUoaW5zZXJ0X3NvcnQsIFthcnIuY2xvbmUoKV0sIFwiaW5zZXJ0X3NvcnRcIik7XG5jb25zdCBhcnI0ID0gd2l0aF90aW1lKHNoZWxsX3NvcnQsIFthcnIuY2xvbmUoKV0sIFwic2hlbGxfc29ydFwiKTtcbmNvbnN0IGFycjUgPSB3aXRoX3RpbWUocXVpY2tfc29ydCwgW2Fyci5jbG9uZSgpXSwgXCJxdWlja19zb3J0XCIpO1xuY29uc3QgYXJyNiA9IHdpdGhfdGltZShtZXJnZV9zb3J0LCBbYXJyLmNsb25lKCldLCBcIm1lcmdlX3NvcnRcIik7XG5jb25zdCBhcnI3ID0gd2l0aF90aW1lKGhlYXBfc29ydCwgW2Fyci5jbG9uZSgpXSwgXCJoZWFwX3NvcnRcIik7XG5cbi8vIGNvbnNvbGUubG9nKGFucywgYXJyNik7XG5hc3NlcnQoSlNPTi5zdHJpbmdpZnkoYW5zKSA9PT0gSlNPTi5zdHJpbmdpZnkoYXJyMSksIFwiYnViYmxlX3NvcnRcIik7XG5hc3NlcnQoSlNPTi5zdHJpbmdpZnkoYW5zKSA9PT0gSlNPTi5zdHJpbmdpZnkoYXJyMiksIFwic2xlY3Rfc29ydFwiKTtcbmFzc2VydChKU09OLnN0cmluZ2lmeShhbnMpID09PSBKU09OLnN0cmluZ2lmeShhcnIzKSwgXCJpbnNlcnRfc29ydFwiKTtcbmFzc2VydChKU09OLnN0cmluZ2lmeShhbnMpID09PSBKU09OLnN0cmluZ2lmeShhcnI0KSwgXCJzaGVsbF9zb3J0XCIpO1xuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KGFucykgPT09IEpTT04uc3RyaW5naWZ5KGFycjUpLCBcInF1aWNrX3NvcnRcIik7XG5hc3NlcnQoSlNPTi5zdHJpbmdpZnkoYW5zKSA9PT0gSlNPTi5zdHJpbmdpZnkoYXJyNiksIFwibWVyZ2Vfc29ydFwiKTtcbmFzc2VydChKU09OLnN0cmluZ2lmeShhbnMpID09PSBKU09OLnN0cmluZ2lmeShhcnI3KSwgXCJoZWFwX3NvcnRcIik7XG4iXX0=