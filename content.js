const interval = setInterval(() => {
  const header = document.querySelector('._3auIg')
  if (header) {
    clearInterval(interval)

    const button = document.createElement('button')
    button.innerHTML = '2x'
    button.classList.add('twoTimesButton')

    let speed = 1

    button.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio')
      if (speed === 1) speed = 2
      else speed = 1

      audios.forEach((audio) => {
        audio.playbackRate = speed
      })
    })

    header.appendChild(button)
  }
}, 1000)
