const nama = ("uwogh")
let usia = 30

let generasiHtml = document.getElementById('divGenerasi')
console.dir(generasiHtml)

function rasisUmur() {
    let generasi

    if (usia >= 12 && usia < 18) {
        generasi = 'gen z'
    } else if (usia >= 18) {
        generasi = 'gen boomer'
    } else if (usia < 12) {
        generasi = 'gen alpa'
    } else {
        console.log('waduh amonali')
    }

    return generasiHtml.innerHTML = generasi
}

rasisUmur()