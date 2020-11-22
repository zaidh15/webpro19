function hewan(){
    let kotak = document.getElementById("foto");
    let animal = document.getElementById("binatang");

    if(!animal.value == ' '){
        kotak.innerHTML = `<img src= "${animal.value}.png"></img>`
        alert(`Ini Gambar ${animal.value}`)
    }
    return false;
}