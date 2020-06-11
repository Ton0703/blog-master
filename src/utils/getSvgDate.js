
function getSvgDate() {
    const x = window.innerWidth
    const y = window.innerHeight
    let arr = [[Math.random() * x, 942], [1920, Math.random() * y], [Math.random() * x, 0], [0, Math.random() * y]]
    let newArr1 = arr[Math.floor(Math.random() * 4)]
    let newArr = arr.filter(i => (i !== newArr1))
    let newArr2 = newArr[Math.floor(Math.random() * 3)]
    const dash = Math.hypot(newArr1[0] - newArr2[0], newArr1[1] - newArr2[1])
    return {
        newArr1,
        newArr2,
        dash
    }
}

export default getSvgDate
