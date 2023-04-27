"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function shell_sort(arr, compare = utils_1.default_comparer) {
    const length = arr.length;
    let step = length >> 1;
    while (step > 0) {
        for (let s = 0; s < step; ++s) {
            for (let i = s; i < length; i += step) {
                let cur_index = i;
                let pre_index = cur_index - step;
                while (pre_index >= 0 && compare(arr[cur_index], arr[pre_index]) === utils_1.Ordering.Less) {
                    arr.swap(cur_index, pre_index);
                    cur_index = pre_index;
                    pre_index = pre_index - step;
                }
            }
        }
        step = step >> 1;
    }
    return arr;
}
exports.default = shell_sort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGxfc29ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGVsbF9zb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTJFO0FBRTNFLFNBQVMsVUFBVSxDQUF1QixHQUFhLEVBQUUsVUFBdUIsd0JBQWdCO0lBQy9GLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUN2QixPQUFPLElBQUksR0FBRyxDQUFDLEVBQUU7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3RDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDakMsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssZ0JBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQ25GLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUMvQixTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUN0QixTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDN0I7YUFDRDtTQUNEO1FBQ0QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7S0FDakI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFDRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wYXJlLCBDb21wYXJlVHlwZSwgT3JkZXJpbmcsIGRlZmF1bHRfY29tcGFyZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5mdW5jdGlvbiBzaGVsbF9zb3J0PFQgZXh0ZW5kcyBDb21wYXJlPFQ+PihhcnI6IEFycmF5PFQ+LCBjb21wYXJlOiBDb21wYXJlVHlwZSA9IGRlZmF1bHRfY29tcGFyZXIpOiBBcnJheTxUPiB7XG5cdGNvbnN0IGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cdGxldCBzdGVwID0gbGVuZ3RoID4+IDE7XG5cdHdoaWxlIChzdGVwID4gMCkge1xuXHRcdGZvciAobGV0IHMgPSAwOyBzIDwgc3RlcDsgKytzKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gczsgaSA8IGxlbmd0aDsgaSArPSBzdGVwKSB7XG5cdFx0XHRcdGxldCBjdXJfaW5kZXggPSBpO1xuXHRcdFx0XHRsZXQgcHJlX2luZGV4ID0gY3VyX2luZGV4IC0gc3RlcDtcblx0XHRcdFx0d2hpbGUgKHByZV9pbmRleCA+PSAwICYmIGNvbXBhcmUoYXJyW2N1cl9pbmRleF0sIGFycltwcmVfaW5kZXhdKSA9PT0gT3JkZXJpbmcuTGVzcykge1xuXHRcdFx0XHRcdGFyci5zd2FwKGN1cl9pbmRleCwgcHJlX2luZGV4KTtcblx0XHRcdFx0XHRjdXJfaW5kZXggPSBwcmVfaW5kZXg7XG5cdFx0XHRcdFx0cHJlX2luZGV4ID0gcHJlX2luZGV4IC0gc3RlcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRzdGVwID0gc3RlcCA+PiAxO1xuXHR9XG5cdHJldHVybiBhcnI7XG59XG5leHBvcnQgZGVmYXVsdCBzaGVsbF9zb3J0O1xuIl19