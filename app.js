const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

const handleClockDisplay = () => {
  const deg = 6
  let now = new Date()
  let hh = now.getHours() * 30
  let mm = now.getMinutes() * deg
  let ss = now.getSeconds() * deg

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`
}

setInterval(handleClockDisplay, 1000)
