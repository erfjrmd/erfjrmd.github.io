// For navlink in active
const links = document.querySelectorAll('.nav-link');
if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                link.classList.remove('active');
            });
            e.preventDefault();
            link.classList.add('active');
        });
    });
}

// For navbar scrolled colour
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

$(document).ready(function () {
    // Smooth scroll for nav-link and tombolkontak
    $('a.nav-link, a.tombolkontak').on('click', function (event) {
        // Check if the link is an external link
        const isExternal = this.hostname !== window.location.hostname;

        // Check if the link is not external and also has a hash
        if (!isExternal && this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 250, function () {
                window.location.hash = hash;
            });

            // Close the navbar on mobile after clicking a link
            if ($('.navbar-toggler').is(':visible')) {
                $('.navbar-toggler').click();
            }
        } else if (isExternal) {
            // Open external links in a new tab
            event.preventDefault();
            window.open(this.href, '_blank');
        } else {
            // Allow navigation to links without hash (e.g., folder links like /login/)
            window.location.href = this.href;
        }
    });

    // Scroll to top on page load
    $(window).on('load', function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#produkCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        ride: 'carousel'
    });
});

// for loading
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splashScreen');
    splashScreen.classList.add('hidden');
});

setTimeout(() => {
    const splashScreen = document.getElementById('splashScreen');
    if (!splashScreen.classList.contains('hidden')) {
        splashScreen.classList.add('hidden');
    }
}, 5000);

//kirim WA
function kirimWA() {
    var urlKirim = new URL("/6285850375136", "https://wa.me");
    urlKirim.searchParams.set('text', "Perkenalkan nama saya " + $('#sendername').val() + ".\n" + $('#message').val());

    window.open(urlKirim.toString(), '_blank');
}

//Start of Tawk.to Script
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/66b0c45e32dca6db2cba2bc4/1i4h7u4ij';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();

// year now 
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// produk
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const produkSwiper = new Swiper('#produkSwiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide', // Use 'slide' effect for smooth sliding transition
        speed: 600,
    });

    // Initialize Glightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
    });
});

// whatsapp chatt
$(function () {
    $('#myButton').floatingWhatsApp({
        phone: '6285850375136',
        popupMessage: 'Halo, ada yang bisa dibantu?',
        message: "",
        position: 'right',
        showPopup: true,
        showOnIE: false,
        headerTitle: 'CS Support',
        headerColor: '#142BCE',
        backgroundColor: 'green',
        buttonImage: '<img src="assets/images/whatsapp.svg" />'
    });
});