"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
/* 依次把小的数字冒泡到前面 */
function bubble_sort(arr, compare = utils_1.default_comparer) {
    const length = arr.length;
    for (let i = 0; i < length; ++i) {
        for (let j = length - 1; j >= i; --j) {
            const cur_index = j;
            const pre_index = cur_index - 1;
            if (pre_index < 0) {
                break;
            }
            if (compare(arr[cur_index], arr[pre_index]) === utils_1.Ordering.Less) {
                arr.swap(cur_index, pre_index);
            }
        }
    }
    return arr;
}
exports.default = bubble_sort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlX3NvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYnViYmxlX3NvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBMkU7QUFFM0Usa0JBQWtCO0FBQ2xCLFNBQVMsV0FBVyxDQUF1QixHQUFhLEVBQUUsVUFBdUIsd0JBQWdCO0lBQ2hHLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDcEIsTUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLE1BQU07YUFDTjtZQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxnQkFBUSxDQUFDLElBQUksRUFBRTtnQkFDOUQsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDL0I7U0FDRDtLQUNEO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcGFyZSwgT3JkZXJpbmcsIENvbXBhcmVUeXBlLCBkZWZhdWx0X2NvbXBhcmVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuLyog5L6d5qyh5oqK5bCP55qE5pWw5a2X5YaS5rOh5Yiw5YmN6Z2iICovXG5mdW5jdGlvbiBidWJibGVfc29ydDxUIGV4dGVuZHMgQ29tcGFyZTxUPj4oYXJyOiBBcnJheTxUPiwgY29tcGFyZTogQ29tcGFyZVR5cGUgPSBkZWZhdWx0X2NvbXBhcmVyKTogQXJyYXk8VD4ge1xuXHRjb25zdCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0Zm9yIChsZXQgaiA9IGxlbmd0aCAtIDE7IGogPj0gaTsgLS1qKSB7XG5cdFx0XHRjb25zdCBjdXJfaW5kZXggPSBqO1xuXHRcdFx0Y29uc3QgcHJlX2luZGV4ID0gY3VyX2luZGV4IC0gMTtcblx0XHRcdGlmIChwcmVfaW5kZXggPCAwKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbXBhcmUoYXJyW2N1cl9pbmRleF0sIGFycltwcmVfaW5kZXhdKSA9PT0gT3JkZXJpbmcuTGVzcykge1xuXHRcdFx0XHRhcnIuc3dhcChjdXJfaW5kZXgsIHByZV9pbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1YmJsZV9zb3J0O1xuIl19