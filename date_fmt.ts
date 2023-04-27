function date_fmt(date: Date, fmt: string = "yyyy-mm-dd HH:MM:SS") {
	const map = new Map();
	map.set(/y+/, date.getFullYear());
	map.set(/m+/, date.getMonth() + 1);
	map.set(/d+/, date.getDate());
	map.set(/H+/, date.getHours());
	map.set(/M+/, date.getMinutes());
	map.set(/S+/, date.getSeconds());
	for (let [k, v] of map.entries()) {
		while (k.test(fmt)) {
			const len = fmt.match(k)![0].length;
			const value = v.toString().substring(0, len).padStart(len, 0);
			fmt = fmt.replace(k, value);
		}
	}
	return fmt;
}
