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
$(window).on('load', function() {
    $('.reveal').css({
        'transform' : 'translateX(0px)',
        'opacity' : 1
    });
});
// setTime
const tanggalTujuan = new Date('Mar 9, 2022 15:10:00').getTime();

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
    teks.innerHTML = 'Waktu ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

    let dalam = document.querySelector('.end .container-satu .buka .in');
    // const tulisan = document.getElementById('buka');

    if( selisih < 0 ) {
        clearInterval(hitungMundur);
        teks.innerHTML = '<p>Click Below!</p><a href="video/index.html" target="blank">Congratulations!</a>';
        // teks.innerHTML = <a href="../video/index.html">Conrratulations!</a>
        // dalam.style.display = 'block'
    }


}, 1000);