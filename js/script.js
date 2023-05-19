// Audios
const audioBackground = new Audio('./sounds/backgroundGame.mp3')
const marioJumo = new Audio('./sounds/marioJump.mp3')
const gameover = new Audio('./sounds/gameOver.mp3')

// personagens e cenarios
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const modal = document.querySelector('.modal-over')
const restart = document.querySelector('.modal-over button')

restart.addEventListener('click', start)

function start() {
  window.location.reload(false);
  
}

const jump = () => {
  
  mario.classList.add('jump')
  
  setTimeout (()=>{
    mario.classList.remove('jump')
    
  }, 500)
  
}


const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const cloudPosition = +window.getComputedStyle(clouds).left.replace('px', '');
  
  if (marioPosition > 0.1 ) {
    marioJumo.play()
  }
  
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    
    
    clouds.style.animation = 'none'
    clouds.style.left = `${cloudPosition}px`
    
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`
    
    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`
    
    mario.src ='./images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    
    modal.classList.add('open');
    
    audioBackground.pause()
    gameover.play()
    
    clearInterval(loop)
  }
  
}, 10); 


audioBackground.play()
document.addEventListener('keydown', jump)