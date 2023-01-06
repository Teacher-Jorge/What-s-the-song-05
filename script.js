let wordPaid = document.getElementById("wordPaid")
let btnPayed = document.getElementById('btnPayed')
let btnPaying = document.getElementById('btnPaying')
let btnPaid = document.getElementById('btnPaid')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Cumpri o que me foi imposto, vez após vez'
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 3000)

})

btnPaid.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordPaid.innerHTML = 'Paid'
    wordPaid.style.color = 'lime'
    btnPaid.style.background = 'lawngreen'
    btnPaid.style.color = 'green'
    btnPaid.disabled = 'true'
    btnPayed.disabled = 'true'
    btnPaying.disabled = 'true'
})

btnPayed.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordPaid.innerHTML = 'Payed'
    wordPaid.style.color = 'red'
    btnPayed.style.background = 'red'
    btnPayed.disabled = 'true'
})

btnPaying.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordPaid.innerHTML = 'Paying'
    wordPaid.style.color = 'red'
    btnPaying.style.background = 'red'
    btnPaying.disabled = 'true'
})