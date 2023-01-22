// Search
const search = document.querySelector('.searching input');
const icon = document.getElementById('search');
const input = document.querySelector('.nav .container .searching input[type=text]');

icon.addEventListener('click', function() {
    search.style.left = '0';
});

if(input == 'Halo') {
    alert('Halo Juga');
}

// Scroll Animations
window.addEventListener('scroll', muncul);

function muncul() {
    let elements = document.querySelectorAll('.element');

    // perulangan
    for( let i = 0; i < elements.length; i++  ) {
        // menangkap tinggi layar
        let windowHeight = window.innerHeight;
        // menangkap jarak atas element
        let elementTopDistance = elements[i].getBoundingClientRect().top;
        // menentukan ukuran scroll untuk memunuculkan element
        let scrollSizes = 150;

        // jika element top distance kurang dari window height dikurangi scroll sizes, maka tambahkan class tampil
        if( elementTopDistance < windowHeight - scrollSizes ) {
            elements[i].classList.add('tampil');
        }
        else {
            elements[i].classList.remove('tampil');
        }
    }
}

// Scroll Animations Jquery
// Animasi saat website di refresh/load
$(window).on('load', function() {
    $('.reveal').css({
        'transform' : 'translateX(0px)',
        'opacity' : 1
    });

    $('.show').css({
        'transform' : 'scale(1)',
        'opacity' : 1
    });
});
// Akihr Animasi saat website di refresh/load

// Atur Hari Jam Menit Detik
const tanggalTujuan = new Date('Aug 17, 2022 07:00:00').getTime();

const hitungMundur = setInterval(function() {

    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor( selisih / ( 1000 * 60 * 60 * 24 ));
    const jam = Math.floor( selisih % ( 1000 * 60 * 60 * 24 ) / ( 1000 * 60 * 60 ));
    const menit = Math.floor( selisih % ( 1000 * 60 * 60 ) / ( 1000 * 60 ));
    const detik = Math.floor( selisih % ( 1000 * 60 ) / 1000 );

    const teks = document.getElementById('teks');
    teks.style.color = '#FF4D00';
    teks.style.fontWeight = "bold";
    teks.style.textShadow = "3px 3px 4px #333";
    teks.innerHTML = 'Tersisa ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

    if( selisih < 0 ) {
        clearInterval(hitungMundur);
        teks.innerHTML = '<p>Click Below!</p><a href="video/index.html" target="blank">Congratulations!</a>';
    }   
}, 1000);
// Akhir Atur Hari Jam Menit Detik

// Atur Waktu saat mau memunculkan element
const time = document.getElementById('time');
const qr = document.querySelector('.end .qr img');

setTimeout(() => {
    time.innerHTML = '10';
},5000);

setTimeout(() => {
    time.innerHTML = '9';
},7000);

setTimeout(() => {
    time.innerHTML = '8';
},9000);

setTimeout(() => {
    time.innerHTML = '7';
},11000);

setTimeout(() => {
    time.innerHTML = '6';
}, 13000);

setTimeout(() => {
    time.innerHTML = '5';
}, 15000);

setTimeout(() => {
    time.innerHTML = '4';
}, 17000);

setTimeout(() => {
    time.innerHTML = '3';
}, 19000);

setTimeout(() => {
    time.innerHTML = '2';
}, 21000);

setTimeout(() => {
    time.innerHTML = '1';
}, 23000);

setTimeout(() => {
    time.innerHTML = '0';
}, 25000);

setTimeout(() => {
    qr.style.display = 'block',
    time.style.display = 'none';
}, 25500);
// Akhir Atur Waktu saat mau memunculkan element



// Hamburger Menu
