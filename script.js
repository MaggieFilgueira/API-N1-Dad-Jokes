const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
  const config = await {
    headers: {
      Accept: 'application/json',
    },
}

  const res = await ('', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

function generateJoke() {
   const config = {
     headers: {
       Accept: 'application/json',
     },
}

    fetch('https://icanhazdadjoke.com', config)
     .then((res) => res.json())
     .then((data) => {
       jokeEl.innerHTML = data.joke
    })
}