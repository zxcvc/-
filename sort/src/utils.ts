export enum Ordering {
	Less,
	Equal,
	Greater,
}
export interface Compare<T extends Compare<T>> {
	compare(orher: T): Ordering;
}
Array.prototype.swap = function (a: number, b: number) {
	if (a >= this.length || a < 0) throw new RangeError("参数1超出范围");
	if (b >= this.length || b < 0) throw new RangeError("参数2超出范围");
	const temp = this[a];
	this[a] = this[b];
	this[b] = temp;
};
Array.prototype.clone = function (): Array<number> {
	return this.map((v) => v);
};
Number.prototype.compare = function (other: Number): Ordering {
	if (this < other) {
		return Ordering.Less;
	} else if (this > other) {
		return Ordering.Greater;
	} else {
		return Ordering.Equal;
	}
};
String.prototype.compare = function (other: string): Ordering {
	if (this < other) {
		return Ordering.Less;
	} else if (this > other) {
		return Ordering.Greater;
	} else {
		return Ordering.Equal;
	}
};

function gen_rand(min: number, max: number): number {
	if (min > max) throw new RangeError("不存在的范围");
	let range = max - min;
	let _rand = Math.random();
	let rand = Math.trunc(_rand * range + min);
	if (rand === 0) rand = Math.abs(rand);
	return rand;
}
function gen_rand_arr(length: number, range: [number, number]): Array<number> {
	const min = range[0];
	const max = range[1];
	const arr = [];
	for (let i = 0; i < length; ++i) {
		arr.push(gen_rand(min, max));
	}
	return arr;
}
function with_time<T extends (...args: any) => any>(fn: T, arg: Parameters<T>, label?: string): ReturnType<T> {
	console.time(label);
	const ret = fn.apply(null, arg);
	console.timeEnd(label);
	return ret;
}

type CompareType = <T extends Compare<T>>(a: T, b: T) => Ordering;
class Heap<T extends Compare<T>> {
	container: Array<T> = [];
	constructor(init?: Iterable<T>) {
		if (init === void 0) {
			return;
		}
		for (let item of init) {
			this.push(item);
		}
	}
	public size() {
		return this.container.length;
	}
	public push(item: T): number {
		const length = this.container.push(item);
		this.swim(length - 1);
		return length;
	}
	public pop(): T | undefined {
		if (this.is_empty()) {
			return void 0;
		}
		const first = this.container[0];
		const last = this.container.pop()!;
		if (!this.is_empty()) {
			this.container[0] = last;
			this.sink(0);
		}
		return first;
	}
	//上浮
	public swim(index: number) {
		while (
			Heap.parent_index(index) >= 0 &&
			this.compare_by_index(index, Heap.parent_index(index)) === Ordering.Less
		) {
			const parent_index = Heap.parent_index(index);
			this.swap(index, parent_index);
			index = parent_index;
		}
	}
	// 下沉
	public sink(index: number) {
		while (Heap.left_child_index(index) < this.size()) {
			let min_index = Heap.left_child_index(index);
			let right_child_index = Heap.right_child_index(index);
			if (right_child_index < this.size()) {
				if (this.compare_by_index(right_child_index, min_index) === Ordering.Less) {
					min_index = right_child_index;
				}
			}
			if (this.compare_by_index(index, min_index) !== Ordering.Greater) {
				break;
			}
			this.swap(index, min_index);
			index = min_index;
		}
	}
	static default_comparer: CompareType = <T extends Compare<T>>(a: T, b: T) => a.compare(b);
	static heapify<T extends Compare<T>>(
		arr: Array<T>,
		start: number,
		end: number,
		compare: CompareType = Heap.default_comparer
	) {
		if (end - start <= 0) return;
		let last = Heap.parent_index(end);
		while (last >= 0) {
			Heap.sink(arr, last, end, compare);
			--last;
		}
	}
	static swim<T extends Compare<T>>(arr: Array<T>, index: number, compare: CompareType = Heap.default_comparer) {
		while (Heap.parent_index(index) >= 0) {
			const parent_index = Heap.parent_index(index);
			if (compare(arr[index], arr[parent_index]) === Ordering.Less) {
				arr.swap(index, parent_index);
			}
		}
	}
	static sink<T extends Compare<T>>(
		arr: Array<T>,
		index: number,
		end: number,
		compare: CompareType = Heap.default_comparer
	) {
		while (Heap.left_child_index(index) <= end) {
			let need_swap_index = Heap.left_child_index(index);
			let right_child_index = need_swap_index + 1;
			if (right_child_index <= end) {
				if (compare(arr[right_child_index], arr[need_swap_index]) === Ordering.Less) {
					need_swap_index = right_child_index;
				}
			}
			if (compare(arr[need_swap_index], arr[index]) !== Ordering.Less) {
				break;
			}
			arr.swap(index, need_swap_index);
			index = need_swap_index;
		}
	}

	public is_empty(): boolean {
		return this.size() === 0;
	}
	private compare_by_index(a: number, b: number) {
		return this.container[a].compare(this.container[b]);
	}
	static parent_index(index: number): number {
		if (index === 0) return 0;
		return (index - 1) >> 1;
	}
	static left_child_index(index: number): number {
		return index * 2 + 1;
	}
	static right_child_index(index: number): number {
		return index * 2 + 2;
	}
	private swap(a: number, b: number) {
		this.container.swap(a, b);
	}
}

function default_comparer<T extends Compare<T>>(a: T, b: T) {
	return a.compare(b);
}

export { gen_rand_arr, with_time, Heap, default_comparer, CompareType };
