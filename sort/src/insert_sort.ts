import { Compare, CompareType, Ordering, default_comparer } from "./utils";

/*依次把数字插入到合适的位置*/
function insert_sort<T extends Compare<T>>(arr: Array<T>, compare: CompareType = default_comparer): Array<T> {
	const length = arr.length;
	for (let i = 0; i < length; ++i) {
		let cur_index = i;
		let pre_index = cur_index - 1;
		while (compare(arr[cur_index], arr[pre_index]) === Ordering.Less && pre_index >= 0) {
			arr.swap(cur_index, pre_index);
			cur_index = pre_index;
			pre_index = pre_index - 1;
		}
	}
	return arr;
}
export default insert_sort;
