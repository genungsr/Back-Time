let buah = ["apel", "jeruk", "mangga", "melon", "nanas"]

let metode = buah.slice(1, 4)
console.log(metode)


var angka = 10;
var timer = null;
var timeOut;
var Display = document.getElementById("angka");
var Gambar = document.createElement("img");
Gambar.src = "https://i.pinimg.com/474x/80/85/c8/8085c8fa321541100726f9637974a05f.jpg";
Gambar.style.position = "fixed";
Gambar.style.top = "0";
Gambar.style.left = "0";
Gambar.style.transform = "translate(-50%, )";
Gambar.style.width = "100vw";
Gambar.style.height = "100vh";



function pilihWaktu() {
    const pilih = document.getElementById("pilih").value;
    
    if (pilih == 10) {
        angka = 10;
        Display.innerHTML = angka;
    }
    else if (pilih == 20) {
        angka = 20;
        Display.innerHTML = angka;
    }
    else if (pilih == 30) {
        angka = 30;
        Display.innerHTML = angka;
    }
    else if (pilih == 40) {
        angka = 40;
        Display.innerHTML = angka;
    }
    else if (pilih == 50) {
        angka = 50;
        Display.innerHTML = angka;
    }
    else {
        angka = 60;
        Display.innerHTML = angka;
    }

}

function mulai() {

    timeOut = setTimeout(setTimer, 100);
}

function setTimer() {
    if (timeOut != null) {
        timer = setInterval(TampilkanAngka, 1000);
    }
    
}


function TampilkanAngka() {
    Display.innerHTML = angka--;
    if (angka < 0) {
        // stopTimer()
        Display.innerHTML = 0 + " Time Out ";
        document.body.appendChild(Gambar);
        stopInterval()
    }
}

// function stopTimer() {
    //     clearTimeout(timeOut);
//     stopInterval()
// }

function stopInterval() {
    clearInterval(timer);
}

function reset() {
    angka = 10;
    Display.innerHTML = angka;
}

