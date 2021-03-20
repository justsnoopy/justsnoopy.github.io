const ALL_KEYS = document.querySelectorAll('.el_piano-key')
const PIANO = document.getElementById('piano')
const ACTIVE_ELEM = document.querySelector('.el_active')

const startSound = (event) => {
    event.target.classList.add('el_active')

}

const stopSound = (event) => {
    event.target.classList.remove('el_active')
}

const startCorrespondOver = (event) => {
    if (event.target.classList.contains('el_piano-key')) {
        event.target.classList.add('el_active');
        ALL_KEYS.forEach(element => {
            element.addEventListener('click', () => playNote(element))
            if (document.activeElement === ACTIVE_ELEM) {
                element.addEventListener('mouseover', () => playNote(element))
            }
        })
    }
    
    ALL_KEYS.forEach(element => {
        element.addEventListener('mouseover', startSound)
        element.addEventListener('mouseout', stopSound)
    })
}

const stopCorrespondOver = () => {
    ALL_KEYS.forEach(element => {
        element.classList.remove('el_active')
        element.removeEventListener('mouseover', startSound)
        element.removeEventListener('mouseout', stopSound)
    })
}

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
}



PIANO.addEventListener('mousedown', startCorrespondOver, false)
PIANO.addEventListener('mouseup', stopCorrespondOver)