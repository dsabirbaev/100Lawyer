const baseURL = "https://64af0de7c85640541d4e191b.mockapi.io/sneakers";




function createPost() {
    const newPost = {
        phoneNumber: $("#tel").value,
        name: $("#fname").value
    }

    fetch(`${baseURL}/exam`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: TO_JSON(newPost)
        })
        .then((res) => res.json())
        .then(data => data)
        .catch(arr => console.log('error', arr))
        .finally(() => console.log('success'))
}


$("#post").addEventListener('submit', (e) => {
    e.preventDefault();
    createPost()
    $(".form__modal").classList.add('hide');
    $(".success__modal").classList.remove('hide');
    $("#tel").value = "";
    $("#fname").value = "";
})



$(".nav").addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__question')) {
        $(".modal-wrapper").classList.toggle('hidden');
        document.body.style.cssText = "overflow: hidden"
        $(".form__modal").classList.remove('hide')
        $(".success__modal").classList.add('hide');
    }
})

$(".intro__content").addEventListener('click', (e) => {
    if (e.target.classList.contains('intro__content--connect-text')) {
        $(".modal-wrapper").classList.toggle('hidden');
        document.body.style.cssText = "overflow: hidden"
        $(".form__modal").classList.remove('hide')
        $(".success__modal").classList.add('hide');
    }
})




/////////// Exit modal ////////////////////////

$("#close").addEventListener('click', () => {
    $(".modal-wrapper").classList.add('hidden');
    document.body.style.cssText = "overflow: auto"
    document.body.style.cssText = "overflow-x: hidden"
})

$("#exit").addEventListener('click', () => {
    $(".modal-wrapper").classList.add('hidden');
    document.body.style.cssText = "overflow: auto"
    document.body.style.cssText = "overflow-x: hidden"
})

$(".modal-content__btn").addEventListener('click', () => {
    $(".modal-wrapper").classList.add('hidden');
    document.body.style.cssText = "overflow: auto"
    document.body.style.cssText = "overflow-x: hidden"
})

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
        $(".modal-wrapper").classList.add('hidden');
        document.body.style.cssText = "overflow: auto"
        document.body.style.cssText = "overflow-x: hidden"
    }

})



/////////// Menu humburger  ///////////////////


let navList = document.querySelector('.header-down'),
    navMenu = document.querySelector(".menu-btn");

navMenu.addEventListener('click', () => {
    navList.classList.toggle('swipe')
    if (navList.classList.contains('swipe')) {
        navMenu.innerHTML = `<img src="./assets/icons/menu.svg" alt="menu">`
    } else {
        navMenu.innerHTML = `<img src="./assets/icons/close.svg" alt="menu">`
    }
})


/////////////////// Carousel swiper/////////////////////////



const swiper = new Swiper('.swiper', {
    // Optional parameters

    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        1251:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        0:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
   
});