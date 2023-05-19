import get_sequese from "./sequese";

function diff(new_arr: Array<number>, old_arr: Array<number>) {
	let new_end = new_arr.length - 1;
	let old_end = old_arr.length - 1;
	let i = 0;
	while (i <= new_end && i <= old_end) {
		if (is_same(new_arr[i], old_arr[i])) {
			++i;
		} else {
			break;
		}
	}
	while (i <= new_end && i <= old_end) {
		if (is_same(new_arr[new_end], old_arr[old_end])) {
			--new_end;
			--old_end;
		} else {
			break;
		}
	}
	if (i > old_end) {
		// 添加缺少的
		for (let j = i; j <= new_end; ++j) {
			insert_before(old_arr, new_arr[j]);
		}
	} else if (i > new_end) {
		// 删除多余的
		let count = 0;
		for (let j = i; j <= old_end; ++j) {
			remove(old_arr, j - count);
		}
	} else {
		let new_start = i;
		let old_start = i;
		const to_be_patched = new_end - new_start + 1;
		const new_arr_value_to_index = new Map();
		const new_arr_value_to_old_arr_index = new Array(to_be_patched).fill(-1);
		for (let i = new_start; i <= new_end; ++i) {
			new_arr_value_to_index.set(new_arr[i], i);
		}
		for (let i = old_start; i <= old_end; ++i) {
			const current = old_arr[i];
			if (new_arr_value_to_index.has(current)) {
				let new_index = new_arr_value_to_index.get(current);
				new_arr_value_to_old_arr_index[new_index - new_start] = i;
			} else {
				remove(old_arr, i);
			}
		}
		const sequese = get_sequese(new_arr_value_to_old_arr_index.filter((v) => v !== -1));
		let j = 0;
		console.log(new_arr_value_to_old_arr_index);
		console.log("sequese", sequese);
		let anchor_index = old_arr.findIndex((v) => v === new_arr[new_end + 1]);
		if (anchor_index === -1) anchor_index = old_arr.length + 1;
		for (let i = to_be_patched - 1; i >= 0; --i) {
			const value = new_arr[new_start + i];
			// console.log(new_arr_value_to_old_arr_index);
			if (new_arr_value_to_old_arr_index[i] !== -1) {
				if (i === sequese[j]) {
					console.log(value);
					++j;
				} else {
					old_arr[anchor_index - 1] = value;
				}
			} else {
				insert_before(old_arr, value, anchor_index);
			}
			--anchor_index;
		}
	}
	console.log(new_end, old_end, i);
}

function is_same(valunew_end: number, valuold_end: number): boolean {
	return valunew_end === valuold_end;
}
function remove(arr: Array<number>, index: number) {
	arr[index] = NaN;
}
function insert_before(arr: Array<number>, value: number, anchor?: number) {
	if (anchor === void 0 || anchor > arr.length) {
		arr.push(value);
	} else {
		arr.splice(anchor, 1, value);
	}
}

const old_arr = [1, 2, 3, 7, 8, 9, 4, 5];
const new_arr = [1, 2, 3, 9, 7, 8, 4, 5];
diff(new_arr, old_arr);
console.log(old_arr);
