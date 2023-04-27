import { Compare, CompareType, Ordering, default_comparer } from "./utils";

/*依次选择小的数字移动到前面*/
function slect_sort<T extends Compare<T>>(arr: Array<T>, compare: CompareType = default_comparer): Array<T> {
	const length = arr.length;
	for (let i = 0; i < length; ++i) {
		let min_index = i;
		for (let j = i; j < length; ++j) {
			if (compare(arr[j], arr[min_index]) === Ordering.Less) min_index = j;
		}
		arr.swap(min_index, i);
	}
	return arr;
}

export default slect_sort;
