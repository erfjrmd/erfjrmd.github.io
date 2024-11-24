(function () {
  'use strict';
  var searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('kepada')) {
    var kepada = searchParams.get('kepada');
    document.getElementById("teg-kepada").innerText = kepada;
  }
  document.getElementById("teg-tombol-buka").addEventListener("click", function () {
    document.getElementById("teg-cover").style.display = "none";
    document.getElementById("teg-audio-lagu").play();
  });
})();

// Menggabungkan logika play otomatis ketika halaman pertama dibuka
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("teg-tombol-buka").addEventListener("click", function () {
    document.getElementById("teg-cover").style.display = "none";
    document.body.style.visibility = "visible";
    document.getElementById("teg-audio-lagu").play();
    isPlaying = true; // Update status pemutaran musik
    button.innerHTML = '<i class="fa fa-pause"></i>';
  });
});

// JavaScript untuk mengontrol audio dan tombol play/pause
const audio = document.getElementById('teg-audio-lagu');
const button = document.getElementById('floatingButton');
let isPlaying = false;

// Fungsi untuk play/pause
function togglePlay() {
  if (isPlaying) {
    audio.pause();
    button.innerHTML = '<i class="fa fa-play"></i>';
  } else {
    audio.play();
    button.innerHTML = '<i class="fa fa-pause"></i>';
  }
  isPlaying = !isPlaying;
}

button.addEventListener('click', togglePlay);

// JavaScript untuk membuat tombol bisa dipindah-pindah
button.addEventListener('mousedown', function (e) {
  const offsetX = e.clientX - button.getBoundingClientRect().left;
  const offsetY = e.clientY - button.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    button.style.left = pageX - offsetX + 'px';
    button.style.top = pageY - offsetY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  button.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', onMouseMove);
  });
});

document.addEventListener("scroll", menuscroll);
function menuscroll() {
  var sections = document.getElementsByClassName('as-page')
  for (var i = 0; i < sections.length; i++) {
    var posisi = sections[i].getBoundingClientRect()
    if (posisi.top > -100 && posisi.top < 100) {
      var buttons = document.getElementsByClassName('button-nav')
      var page = 0
      for (var j = 0; j < buttons.length; j++) {
        var url = new URL(buttons[j].href)
        if (url.hash === '#' + sections[i].id) {
          page = j + 1;
          buttons[j].classList.add('invert-effect')
        } else {
          buttons[j].classList.remove('invert-effect')
        }
      }
      var countPage = buttons.length
      var minPage = Math.max(1, (page - 2))
      var maxPage = Math.min((page + 2), countPage)
      if (minPage < 2) {
        maxPage = 5
      }
      if (maxPage - page < 2) {
        minPage = countPage - 4
      }
      for (var k = 1; k <= buttons.length; k++) {
        if (k < minPage || k > maxPage) {
          buttons[k - 1].classList.add("hide");
        } else {
          buttons[k - 1].classList.remove("hide");
        }
      }
    }
  }
}

menuscroll();


document.getElementById('teg-tombol-buka').addEventListener('click', function () {
  document.body.style.visibility = 'visible'; // Show body content
  document.getElementById('teg-cover').style.display = 'none'; // Hide overlay

  // Add animate.css classes to each section for animation
  document.querySelectorAll('.as-page').forEach(section => {
    section.classList.add('animate__fadeInUp'); // You can change the animation class as needed
  });
});

document.querySelectorAll('.zoom').forEach(function(element) {
  element.addEventListener('click', function() {
      // Toggle class 'scaled' when the element is clicked
      this.classList.toggle('scaled');
  });
});