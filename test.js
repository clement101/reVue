let target = new Date('2021-02-16 12:00')
// console.log(target.getTime())
;(function run() {
  let countDown = ((target.getTime() - new Date().getTime()) / 1000) >> 0
  console.log(countDown)
  let sec = countDown % 60
  let min = ((countDown - sec) / 60) % 60
  let hour = ((countDown - sec - min * 60) / 3600) % 24
  let day = (countDown - sec - min * 60 - hour * 3600) / 3600 / 24
  console.log(`${day}天${hour}時${min}分${sec}秒`)
  setTimeout(run, 1000)
})()
