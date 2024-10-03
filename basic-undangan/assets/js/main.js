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

document.getElementById("teg-tombol-buka").addEventListener("click", function () {
  document.getElementById("teg-cover").style.display = "none";
  document.body.style.visibility = "visible"; // Tampilkan seluruh halaman
  document.getElementById("teg-audio-lagu").play();
});

document.addEventListener("scroll", menuscroll);
function menuscroll () {
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

