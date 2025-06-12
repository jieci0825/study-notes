export function render() {
    document.querySelector('#app').innerHTML = `<h1>Vue!!</h1>`
}

// dispose 的作用，当前模块存在一个定时器，如果修改了当前模块，会因为触发热更新，但是之前的定时器还在运行，就会导致多个定时器在执行，发生意料之外的效果，所以需要清除之前的定时器，就可以通过 dispose 来清楚这些副作用
let idx = 0
// const timer = setInterval(() => {
//     console.log(++idx)
// }, 1000)

if (import.meta.hot) {
    // 清除副作用
    import.meta.hot.dispose(() => {
        timer && clearInterval(timer)
    })
}
