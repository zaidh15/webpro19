function kurs(){
    // mengambil value dari Element id "input_nilai"
    let inputNilai = document.getElementById("input_nilai").value;
    // mengambil value dari Element id "valas"
    let valas = document.getElementById("valas").value;
    // mendeklarasikan variable hasilNilai
    let hasilNilai;
    if (valas == "Dollar_U"){
        document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 9915;
        // membuat variabel baru dengan hasil value baru
        hasilNilai = document.getElementById("hasil_nilai").value;
        // menampilkan value baru dari nilai rupiah
        console.log(hasilNilai);
    }
    else if (valas == "Dollar_S"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 13472;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
    else if (valas == "Ringgit_M"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 874;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
    else if (valas == "Yen_J"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 120;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
    else if (valas == "Euro"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 15888;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
    else if (valas == "Riyal_AS"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 3592;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
}