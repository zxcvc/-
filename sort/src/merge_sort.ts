import { Compare, CompareType, Ordering, default_comparer } from "./utils";

function merge_sort<T extends Compare<T>>(arr: Array<T>, compare: CompareType = default_comparer): Array<T> {
	const length = arr.length;
	if (length <= 1) return arr;
	const arr1 = merge_sort(arr.slice(0, length >> 1));
	const arr2 = merge_sort(arr.slice(length >> 1));
	let p1 = 0;
	let p2 = 0;
	const ans = [];
	while (p1 < arr1.length && p2 < arr2.length) {
		if (compare(arr1[p1], arr2[p2]) === Ordering.Less) {
			ans.push(arr1[p1]);
			++p1;
		} else {
			ans.push(arr2[p2]);
			++p2;
		}
	}
	while (p1 < arr1.length) {
		ans.push(arr1[p1]);
		++p1;
	}
	while (p2 < arr2.length) {
		ans.push(arr2[p2]);
		++p2;
	}
	return ans;
}

export default merge_sort;
