import { Compare, Heap } from "./utils";

function heap_sort(arr: Array<number>): Array<number> {
	let end = arr.length - 1;
	const compare = <T extends Compare<T>>(a: T, b: T) => b.compare(a);
	Heap.heapify(arr, 0, end, compare);
	while (0 <= end) {
		arr.swap(0, end);
		Heap.sink(arr, 0, --end, compare);
	}
	return arr;
}

export default heap_sort;
