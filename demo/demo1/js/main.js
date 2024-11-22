(function () {
    'use strict';
    // Ambil parameter dari URL
    var searchParams = new URLSearchParams(window.location.search);

    // Jika parameter 'nama' ada, ubah teks elemen dengan ID 'nama-tamu'
    if (searchParams.has('kepada')) {
        var nama = searchParams.get('kepada');
        document.getElementById("kepada-tamu").innerText = nama;
    }else{
        document.getElementById("kepada-tamu").innerText = "Tamu undangan";
    }    
})();