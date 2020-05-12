const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
const black_keys = ['s','d', 'g', 'h', 'j', 'l', ';']


const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if(e.repeat)
        return
    const key = e.key
    const whitekeyIndex = white_keys.indexOf(key)
    const blackkeyIndex = black_keys.indexOf(key)

    if(whitekeyIndex > -1){
        playNote(whiteKeys[whitekeyIndex])
    }
    if(blackkeyIndex > -1){
        playNote(blackKeys[blackkeyIndex])
    }
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}