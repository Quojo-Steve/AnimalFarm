const loadmore = document.querySelector('.btn-load-more');

let currentItems = 4
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.row .imagess')];
    e.target.classList.add('show-loader');

    for (let i = currentItems; i < currentItems+4; i++) {
        setTimeout(function () {
            e.target.classList.remove('show-loader');
            if (elementList[i]) {
                console.log(elementList[i])
                elementList[i].style.display = "block";

            }
        }, 3000)        
    }
    currentItems += 4;

    if (currentItems >= elementList.length) {
        event.target.classList.add('loaded')
    }
})