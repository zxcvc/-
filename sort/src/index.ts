import assert from "assert";
import { gen_rand_arr, with_time } from "./utils";
import bubble_sort from "./bubble_sort";
import slect_sort from "./selcet_sort";
import insert_sort from "./insert_sort";
import shell_sort from "./shell_sort";
import quick_sort from "./quick_sort";
import stdlib_sort from "./stdlib_sort";
import merge_sort from "./merge_sort";
import heap_sort from "./heap_sort";

const arr = gen_rand_arr(10000, [-100000, 100000]);
const ans = with_time(stdlib_sort, [arr.clone()], "stdlib_sort");

const arr1 = with_time(bubble_sort, [arr.clone()], "bubble_sort");
const arr2 = with_time(slect_sort, [arr.clone()], "slect_sort");
const arr3 = with_time(insert_sort, [arr.clone()], "insert_sort");
const arr4 = with_time(shell_sort, [arr.clone()], "shell_sort");
const arr5 = with_time(quick_sort, [arr.clone()], "quick_sort");
const arr6 = with_time(merge_sort, [arr.clone()], "merge_sort");
const arr7 = with_time(heap_sort, [arr.clone()], "heap_sort");

// console.log(ans, arr6);
assert(JSON.stringify(ans) === JSON.stringify(arr1), "bubble_sort");
assert(JSON.stringify(ans) === JSON.stringify(arr2), "slect_sort");
assert(JSON.stringify(ans) === JSON.stringify(arr3), "insert_sort");
assert(JSON.stringify(ans) === JSON.stringify(arr4), "shell_sort");
assert(JSON.stringify(ans) === JSON.stringify(arr5), "quick_sort");
assert(JSON.stringify(ans) === JSON.stringify(arr6), "merge_sort");
assert(JSON.stringify(ans) === JSON.stringify(arr7), "heap_sort");
