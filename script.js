let numberOfDrums = document.querySelectorAll('.drum-pad').length
const display = document.getElementById("display")

// capture button clicks
for (let i = 0;  i < numberOfDrums; i++) {
  // add event listeners
  document.querySelectorAll('.drum-pad')[i].addEventListener("click", () => {
    // play audio
    let audio = document.querySelectorAll(".clip")[i]
    audio.play()
    // display drum id
    display.textContent = document.querySelectorAll('.drum-pad')[i].id
  })
  }

// capture keyboard press key
document.addEventListener('keydown', (event) => {
  console.log(event.key)
  makeSound(event.key)
})

// function for sound generation
const makeSound = (key) => {
  // find clips
  document.querySelectorAll(".clip").forEach((clip) => {
    // match id to key
    if (clip.id.toLowerCase == key.toLowerCase) {
      // play audio
      let audio = clip
      audio.play()
      // set display contents
      const button = clip.parentElement
      display.textContent = button.id
    }
  })
}


