const hoursHand = document.querySelector('.hand.hours')
const minutesHand = document.querySelector('.hand.minutes')
const secondsHand = document.querySelector('.hand.seconds')

//SET TIME
const setClock = () => {
  const currentDate = new Date()

  const secondsPercentage = currentDate.getSeconds() / 60 //divide por 60 para pegar a porcentagem

  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60 // multiplica por secondspercentage para que ponteiro se movimente com o passar dos segundos

  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12

  setRotation(secondsHand, secondsPercentage)
  setRotation(minutesHand, minutesPercentage)
  setRotation(hoursHand, hoursPercentage)
}

//SET ROTATION

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty('--rotation', rotationPercentage * 360)
}

setClock()

setInterval(setClock, 1000) //atualizar(chamar o setClock) a cada 1 segundo
