export function render() {
    document.querySelector('#app').innerHTML = `<h1>Vue!</h1>`
}

render()

if (import.meta.hot) {
    import.meta.hot.accept(newModule => {
        newModule.render()
    })
}
