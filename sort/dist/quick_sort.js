"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function quick_sort(arr, compare = utils_1.default_comparer) {
    return _quick_sort(arr, 0, arr.length - 1, compare);
}
function _quick_sort(arr, left, right, compare) {
    if (right - left <= 0)
        return arr;
    const pivot = arr[left];
    let low = left;
    let hight = right;
    while (low < hight) {
        while (low < hight) {
            if (compare(arr[hight], pivot) === utils_1.Ordering.Less) {
                arr[low] = arr[hight];
                break;
            }
            else {
                --hight;
            }
        }
        while (low < hight) {
            if (compare(arr[low], pivot) === utils_1.Ordering.Greater) {
                arr[hight] = arr[low];
                break;
            }
            else {
                ++low;
            }
        }
    }
    arr[low] = pivot;
    _quick_sort(arr, left, low, compare);
    _quick_sort(arr, low + 1, right, compare);
    return arr;
}
exports.default = quick_sort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tfc29ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWlja19zb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTJFO0FBRTNFLFNBQVMsVUFBVSxDQUF1QixHQUFhLEVBQUUsVUFBdUIsd0JBQWdCO0lBQy9GLE9BQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUNELFNBQVMsV0FBVyxDQUF1QixHQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxPQUFvQjtJQUMxRyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQztRQUFFLE9BQU8sR0FBRyxDQUFDO0lBQ2xDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDZixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEIsT0FBTyxHQUFHLEdBQUcsS0FBSyxFQUFFO1FBQ25CLE9BQU8sR0FBRyxHQUFHLEtBQUssRUFBRTtZQUNuQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssZ0JBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU07YUFDTjtpQkFBTTtnQkFDTixFQUFFLEtBQUssQ0FBQzthQUNSO1NBQ0Q7UUFDRCxPQUFPLEdBQUcsR0FBRyxLQUFLLEVBQUU7WUFDbkIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLGdCQUFRLENBQUMsT0FBTyxFQUFFO2dCQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixNQUFNO2FBQ047aUJBQU07Z0JBQ04sRUFBRSxHQUFHLENBQUM7YUFDTjtTQUNEO0tBQ0Q7SUFDRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQztBQUVELGtCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBhcmUsIENvbXBhcmVUeXBlLCBPcmRlcmluZywgZGVmYXVsdF9jb21wYXJlciB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIHF1aWNrX3NvcnQ8VCBleHRlbmRzIENvbXBhcmU8VD4+KGFycjogQXJyYXk8VD4sIGNvbXBhcmU6IENvbXBhcmVUeXBlID0gZGVmYXVsdF9jb21wYXJlcik6IEFycmF5PFQ+IHtcblx0cmV0dXJuIF9xdWlja19zb3J0KGFyciwgMCwgYXJyLmxlbmd0aCAtIDEsIGNvbXBhcmUpO1xufVxuZnVuY3Rpb24gX3F1aWNrX3NvcnQ8VCBleHRlbmRzIENvbXBhcmU8VD4+KGFycjogQXJyYXk8VD4sIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgY29tcGFyZTogQ29tcGFyZVR5cGUpOiBBcnJheTxUPiB7XG5cdGlmIChyaWdodCAtIGxlZnQgPD0gMCkgcmV0dXJuIGFycjtcblx0Y29uc3QgcGl2b3QgPSBhcnJbbGVmdF07XG5cdGxldCBsb3cgPSBsZWZ0O1xuXHRsZXQgaGlnaHQgPSByaWdodDtcblx0d2hpbGUgKGxvdyA8IGhpZ2h0KSB7XG5cdFx0d2hpbGUgKGxvdyA8IGhpZ2h0KSB7XG5cdFx0XHRpZiAoY29tcGFyZShhcnJbaGlnaHRdLCBwaXZvdCkgPT09IE9yZGVyaW5nLkxlc3MpIHtcblx0XHRcdFx0YXJyW2xvd10gPSBhcnJbaGlnaHRdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC0taGlnaHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlIChsb3cgPCBoaWdodCkge1xuXHRcdFx0aWYgKGNvbXBhcmUoYXJyW2xvd10sIHBpdm90KSA9PT0gT3JkZXJpbmcuR3JlYXRlcikge1xuXHRcdFx0XHRhcnJbaGlnaHRdID0gYXJyW2xvd107XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Kytsb3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGFycltsb3ddID0gcGl2b3Q7XG5cdF9xdWlja19zb3J0KGFyciwgbGVmdCwgbG93LCBjb21wYXJlKTtcblx0X3F1aWNrX3NvcnQoYXJyLCBsb3cgKyAxLCByaWdodCwgY29tcGFyZSk7XG5cdHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1aWNrX3NvcnQ7XG4iXX0=