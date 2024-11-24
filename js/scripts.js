$(document).ready(function () {
    const productContainer = $("#productContainer");
    const pagination = $("#pagination");
    const productsPerPage = 6; // Jumlah produk per halaman
    let currentPage = 1;
    let productsData = [];
    let filteredProducts = []; // Menyimpan hasil pencarian

    // Memuat data dari JSON
    $.getJSON("produk.json", function (data) {
        productsData = data;
        filteredProducts = productsData; // Awalnya semua produk ditampilkan
        renderPagination(filteredProducts.length);
        renderProducts(currentPage);

        // Event handler untuk tombol pagination
        pagination.on("click", ".page-link", function () {
            currentPage = $(this).data("page");
            renderProducts(currentPage);
        });
    });

    function renderProducts(page) {
        productContainer.empty(); // Kosongkan kontainer produk
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;

        const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

        productsToDisplay.forEach((product) => {
            const productCard = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body text-center">
                            <h5 class="fw-bold">${product.name}</h5>
                            <p class="text-muted">${product.price}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-around">
                            <a href="${product.link}"><button class="btn btn-sm btn-primary preview-btn" data-name="${product.name}" data-image="${product.image}" data-price="${product.price}"><i class="bi bi-eye-fill"></i> Preview</button></a>
                            <a href="${product.Auth}"><button class="btn btn-sm btn-success checkout-btn" data-name="${product.name}" data-price="${product.price}"><i class="bi bi-bag-check-fill"></i> Gunakan</button></a>
                        </div>
                    </div>
                </div>
            `;
            productContainer.append(productCard);
        });

        // Event handler untuk tombol Checkout (Gunakan)
        $(".checkout-btn").on("click", function () {
            const name = $(this).data("name");
            const price = $(this).data("price");

            // Update alert content
            $("#alert-product-name").text(name);
            $("#alert-product-price").text(price);

            // Tampilkan alert Bootstrap
            const alertElement = $("#alert");
            alertElement.addClass("show");

            // Hide alert after 5 seconds
            setTimeout(function() {
                alertElement.removeClass("show");
            }, 5000);
        });
    }

    // Fungsi untuk merender tombol pagination
    function renderPagination(totalProducts) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        pagination.empty();

        // Membuat tombol pagination
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = `
                <li class="page-item ${i === currentPage ? "active" : ""}">
                    <a class="page-link" href="#backToTop" data-page="${i}">${i}</a>
                </li>
            `;
            pagination.append(pageItem);
        }
    }

    // Event handler untuk pencarian
    $("#searchForm").on("submit", function (e) {
        e.preventDefault(); // Mencegah reload halaman
        const searchQuery = $("#searchInput").val().toLowerCase(); // Ambil input pencarian
        filteredProducts = productsData.filter((product) =>
            product.name.toLowerCase().includes(searchQuery)
        );
        currentPage = 1; // Reset ke halaman pertama
        renderPagination(filteredProducts.length);
        renderProducts(currentPage);
    });
});


/* Fungsi untuk membuka side nav */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

/* Fungsi untuk menutup side nav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}