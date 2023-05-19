// 防抖：将函数的执行固定在某个频率内

/*时间戳实现 缺点是不能控制是否需要立即执行*/
function throttle1(fn, time) {
    let last_time = 0
    return function (...args) {
        let now = Date.now()
        if (now - last_time > time) {
            last_time = now
            return fn(...args)
        }
    }
}

/*定时器实现 缺点是不能控制是否需要后续执行*/
function throttle2(fn, time) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn(...args)
                clearTimeout(timer)
                timer = null
            }, time)
        }
    }
}

/*两者结合实现，可以控制是否立即执行和后续是否执行*/
function throttle3(fn, time, immidete = false, taild = true) {
    let last_time = 0
    let timer = null
    return function (...args) {
        let now = Date.now()
        if (!immidete && last_time === 0) {
            last_time = now
        }
        let remain = time - (now - last_time)
        if (taild) {
            if (timer !== null) return
            timer = setTimeout(() => {
                fn(...args)
                last_time = Date.now()
                clearTimeout(timer)
                timer = null
            }, remain)
        } else {
            if (remain <= 0) {
                fn(...args)
                last_time = now
            }
        }
    }
}

export { throttle1, throttle2, throttle3 }
