"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
/*依次把数字插入到合适的位置*/
function insert_sort(arr, compare = utils_1.default_comparer) {
    const length = arr.length;
    for (let i = 0; i < length; ++i) {
        let cur_index = i;
        let pre_index = cur_index - 1;
        while (compare(arr[cur_index], arr[pre_index]) === utils_1.Ordering.Less && pre_index >= 0) {
            arr.swap(cur_index, pre_index);
            cur_index = pre_index;
            pre_index = pre_index - 1;
        }
    }
    return arr;
}
exports.default = insert_sort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0X3NvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5zZXJ0X3NvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBMkU7QUFFM0UsaUJBQWlCO0FBQ2pCLFNBQVMsV0FBVyxDQUF1QixHQUFhLEVBQUUsVUFBdUIsd0JBQWdCO0lBQ2hHLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNoQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssZ0JBQVEsQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNuRixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMvQixTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQ3RCLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0tBQ0Q7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFDRCxrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wYXJlLCBDb21wYXJlVHlwZSwgT3JkZXJpbmcsIGRlZmF1bHRfY29tcGFyZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vKuS+neasoeaKiuaVsOWtl+aPkuWFpeWIsOWQiOmAgueahOS9jee9riovXG5mdW5jdGlvbiBpbnNlcnRfc29ydDxUIGV4dGVuZHMgQ29tcGFyZTxUPj4oYXJyOiBBcnJheTxUPiwgY29tcGFyZTogQ29tcGFyZVR5cGUgPSBkZWZhdWx0X2NvbXBhcmVyKTogQXJyYXk8VD4ge1xuXHRjb25zdCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0bGV0IGN1cl9pbmRleCA9IGk7XG5cdFx0bGV0IHByZV9pbmRleCA9IGN1cl9pbmRleCAtIDE7XG5cdFx0d2hpbGUgKGNvbXBhcmUoYXJyW2N1cl9pbmRleF0sIGFycltwcmVfaW5kZXhdKSA9PT0gT3JkZXJpbmcuTGVzcyAmJiBwcmVfaW5kZXggPj0gMCkge1xuXHRcdFx0YXJyLnN3YXAoY3VyX2luZGV4LCBwcmVfaW5kZXgpO1xuXHRcdFx0Y3VyX2luZGV4ID0gcHJlX2luZGV4O1xuXHRcdFx0cHJlX2luZGV4ID0gcHJlX2luZGV4IC0gMTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFycjtcbn1cbmV4cG9ydCBkZWZhdWx0IGluc2VydF9zb3J0O1xuIl19