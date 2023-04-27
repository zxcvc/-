import { Compare, Ordering, CompareType, default_comparer } from "./utils";

/* 依次把小的数字冒泡到前面 */
function bubble_sort<T extends Compare<T>>(arr: Array<T>, compare: CompareType = default_comparer): Array<T> {
	const length = arr.length;
	for (let i = 0; i < length; ++i) {
		for (let j = length - 1; j >= i; --j) {
			const cur_index = j;
			const pre_index = cur_index - 1;
			if (pre_index < 0) {
				break;
			}
			if (compare(arr[cur_index], arr[pre_index]) === Ordering.Less) {
				arr.swap(cur_index, pre_index);
			}
		}
	}
	return arr;
}

export default bubble_sort;
