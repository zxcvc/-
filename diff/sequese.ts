function get_sequese(arr: Array<number>): Array<number> {
	const length = arr.length;
	const dp: Array<number> = [];
	if (length <= 0) return dp;
	const pre: Array<number> = new Array(length).fill(-1);
	for (let i = 0; i < length; ++i) {
		if (i - 1 < 0 || arr[i] > arr[dp[dp.length - 1]]) {
			if (dp.length > 0) {
				pre[i] = dp[dp.length - 1];
			}
			dp.push(i);
		} else {
			let start = 0;
			let end = i - 1;
			let should_index = 0;
			while (start <= end) {
				const mid = (start + end) >> 1;
				if (arr[dp[mid]] === arr[i]) {
					should_index = mid;
					break;
				} else if (arr[dp[mid]] < arr[i]) {
					should_index = start = mid + 1;
				} else {
					end = mid - 1;
				}
			}
			if (should_index - 1 >= 0) {
				pre[i] = dp[should_index - 1];
			}
			dp[should_index] = i;
		}
	}
	let index = dp[dp.length - 1];
	const ans = [];
	while (index !== -1) {
		ans.push(index);
		index = pre[index];
	}
	return ans;
}
export default get_sequese;
