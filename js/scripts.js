$(document).ready(function () {
    const productContainer = $("#productContainer");
    const pagination = $("#pagination");
    const productsPerPage = 8; // Jumlah produk per halaman
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

    // Fungsi untuk merender produk berdasarkan halaman
    function renderProducts(page) {
        productContainer.empty(); // Kosongkan kontainer produk
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;

        const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

        productsToDisplay.forEach((product) => {
            const productCard = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body text-center">
                            <h5 class="fw-bold">${product.name}</h5>
                            <p class="text-muted">${product.price}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-around">
                            <button class="btn btn-primary px-3 preview-btn" data-name="${product.name}" data-image="${product.image}" data-price="${product.price}"><i class="bi bi-eye-fill"></i> Preview</button>
                            <button class="btn btn-success px-3 checkout-btn" data-name="${product.name}" data-price="${product.price}"><i class="bi bi-bag-check-fill"></i> Checkout</button>
                        </div>
                    </div>
                </div>
            `;
            productContainer.append(productCard);
        });

        // Event handler untuk tombol Checkout
        $(".checkout-btn").on("click", function () {
            const name = $(this).data("name");
            const price = $(this).data("price");
            alert(`Anda memilih produk "${name}" dengan harga ${price} untuk checkout.`);
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
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
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