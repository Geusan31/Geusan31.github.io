const teks = document.querySelector('.info-name .teks-typing span.sec-teks');
const myName = document.querySelector('.my-name');

const teksLoad = () => {
    setTimeout( () => {
        teks.textContent = "HTML";
        teks.style.left = '5.8em';
    }, 0);
    setTimeout( () => {
        teks.textContent = "CSS";
        teks.style.left = '5.8em';
    }, 4000);
    setTimeout( () => {
        teks.textContent = "Javascript";
        teks.style.left = '5.8em';
    }, 8000);

}

teksLoad();
setInterval(teksLoad, 12000);