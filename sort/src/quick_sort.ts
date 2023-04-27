import { Compare, CompareType, Ordering, default_comparer } from "./utils";

function quick_sort<T extends Compare<T>>(arr: Array<T>, compare: CompareType = default_comparer): Array<T> {
	return _quick_sort(arr, 0, arr.length - 1, compare);
}
function _quick_sort<T extends Compare<T>>(arr: Array<T>, left: number, right: number, compare: CompareType): Array<T> {
	if (right - left <= 0) return arr;
	const pivot = arr[left];
	let low = left;
	let hight = right;
	while (low < hight) {
		while (low < hight) {
			if (compare(arr[hight], pivot) === Ordering.Less) {
				arr[low] = arr[hight];
				break;
			} else {
				--hight;
			}
		}
		while (low < hight) {
			if (compare(arr[low], pivot) === Ordering.Greater) {
				arr[hight] = arr[low];
				break;
			} else {
				++low;
			}
		}
	}
	arr[low] = pivot;
	_quick_sort(arr, left, low, compare);
	_quick_sort(arr, low + 1, right, compare);
	return arr;
}

export default quick_sort;
