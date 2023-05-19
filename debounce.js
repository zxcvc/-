// 防抖：让函数在合适的时机执行，将多次执行压缩成一次执行

/*基本实现：缺点是无法控制是否立即执行*/
function debounce1(fn, time) {
    let timer = null
    return function (...args) {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
        }, time)
    }
}

/*优化实现  可以控制是否立即执行*/
function debounce2(fn, time, immidete = true) {
    let timer = null
    let invoked = false
    return function (...args) {
        if (timer !== null) {
            clearTimeout(timer)
        }
        if (immidete && !invoked) {
            fn(...args)
            invoked = true
        }
        timer = setTimeout(() => {
            fn(...args)
            invoked = false
        }, time)
    }
}

export { debounce1, debounce2 }
