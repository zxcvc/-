interface Array<T> {
	swap(a: number, b: number);
	clone(): Array<T>;
}
interface Number {
	compare(other: number): Ordering;
}
interface String {
	compare(other: stirng): Ordering;
}
