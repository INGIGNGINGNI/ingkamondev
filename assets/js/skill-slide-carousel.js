$('.owl-carousel').owlCarousel({
    loop:true,
    items: 5,
    margin:20,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:0,
        },
        375:{
            items:2,
            margin: 100,
            nav:false
        },
        425:{
            items:2,
            margin:50,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },
        992:{
            nav:true,
            items: 5,
        },
        1200:{
            nav:true,
            items: 5,
        },
        1400:{
            nav:true,
            items: 5,
        },
    }
})