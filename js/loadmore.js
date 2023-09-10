const loadmore = document.querySelector('.btn-load-more');

let currentItems = 4
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.row .imagess')];
    loadmore.style.background = "white"
    loadmore.style.color = "white"
    e.target.classList.add('show-loader');
    


    for (let i = currentItems; i < currentItems+4; i++) {
        setTimeout(function () {
            e.target.classList.remove('show-loader');
            loadmore.style.background = "dodgerblue"
            loadmore.style.color = "#1bd8d8"
            if (elementList[i]) {
                elementList[i].style.display = "block";
            }
        }, 3000)        
    }
    currentItems += 4;

    if (currentItems >= elementList.length) {
        event.target.classList.add('loaded')
    }
    
})