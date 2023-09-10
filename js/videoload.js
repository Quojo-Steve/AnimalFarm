const vids = document.querySelector('.vids');
const images = document.querySelector('.ipart');
const imgs = document.querySelector('.imgs');
const videos = document.querySelector('.vpart');

vids.addEventListener('click', () => {
    images.style.display = 'none';
    vids.classList.add('active')
    imgs.classList.remove('active')
    videos.style.display = 'block'
});

imgs.addEventListener('click', () => {
    images.style.display = 'block';
    vids.classList.remove('active')
    imgs.classList.add('active')
    videos.style.display = 'none'
});

document.querySelectorAll('.projects video').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';
}