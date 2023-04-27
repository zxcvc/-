import { Compare, CompareType, Ordering, default_comparer } from "./utils";

function shell_sort<T extends Compare<T>>(arr: Array<T>, compare: CompareType = default_comparer): Array<T> {
	const length = arr.length;
	let step = length >> 1;
	while (step > 0) {
		for (let s = 0; s < step; ++s) {
			for (let i = s; i < length; i += step) {
				let cur_index = i;
				let pre_index = cur_index - step;
				while (pre_index >= 0 && compare(arr[cur_index], arr[pre_index]) === Ordering.Less) {
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
export default shell_sort;
