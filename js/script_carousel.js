const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > div');
const imageLength = imageItems.length;
const perView = 1;
let totalScroll = 0;
const delay = 5000;

imageWrapper.style.setProperty('--per-view', perView);

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
    totalScroll++;
    if (totalScroll == imageLength) {
        totalScroll = 0;
    }
    const widthEl = document.querySelector('.image-wrapper > div').offsetWidth;
    imageWrapper.style.transform = `translateX(-${totalScroll * widthEl}px)`;

    showCaption(totalScroll);
}

const captions = document.querySelectorAll('.image-caption');

function showCaption(index) {
    captions.forEach((caption, i) => {
        if (i === index) {
            caption.style.display = 'block';
        } else {
            caption.style.display = 'none';
        }
    });
}
