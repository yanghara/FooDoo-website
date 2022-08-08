function init() {
let d = new Date()
    let m = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let c = document.getElementById("clock")
    c.innerText = m
    setInterval(function() {
        let d = new Date()
        let m = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        c.innerText = m
    }, 1000);
  }