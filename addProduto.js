var produtos = [];
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadProducts(produtor) {
    const tableBody = document.getElementById("productTableBody");
    tableBody.innerHTML = "";

    const filteredProducts = produtos.filter(product => product.produtor === produtor);
    filteredProducts.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td><img src="${product.image}" alt="${product.name}" class="img-thumbnail" style="width: 80px;"></td>
                    <td>${product.name}</td>
                    <td>€${product.price.toFixed(2)}</td>
                    <td class="text-end">
                        <button class="btn btn-primary btn-sm" onclick="openEditModal(${product.id})">
                            <i class="fa fa-pencil" aria-hidden="true"></i> Editar
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">
                            <i class="fa fa-trash" aria-hidden="true"></i> Excluir
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
    });
}

function addProduct(event) {
    event.preventDefault();
    const produtor = getQueryParam("id");
    const newProduct = {
        id: produtos.length + 1,
        name: document.getElementById("productName").value,
        price: parseFloat(document.getElementById("productPrice").value),
        image: document.getElementById("productImage").value,
        produtor: produtor,
    };

    produtos.push(newProduct);
    console.log("Novo produto = ", newProduct);
    loadProducts(produtor);
    localStorage.setItem('products', JSON.stringify(produtos));
    console.log("Produtos Atualizados = ", produtos)
    document.getElementById("addProductForm").reset();

    const modal = document.getElementById("addProductModal");
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
    alert("Produto adicionado com sucesso!");
}

function openEditModal(id) {
    const product = produtos.find(p => p.id === id);
    if (product) {
        document.getElementById("editProductId").value = product.id;
        document.getElementById("editProductName").value = product.name;
        document.getElementById("editProductPrice").value = product.price.toFixed(2);
        document.getElementById("editProductImage").value = product.image;

        const modal = new bootstrap.Modal(document.getElementById("editProductModal"));
        modal.show();
    }
}

function editProduct(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById("editProductId").value, 10);
    const product = produtos.find(p => p.id === id);

    if (product) {
        product.name = document.getElementById("editProductName").value;
        product.price = parseFloat(document.getElementById("editProductPrice").value);
        product.image = document.getElementById("editProductImage").value;


        const produtor = getQueryParam("id");
        loadProducts(produtor);

        const modal = document.getElementById("editProductModal");
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
        alert("Produto atualizado com sucesso!");
        localStorage.setItem('products', JSON.stringify(produtos));
        console.log(produtos);
    }
}

function deleteProduct(id) {
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
        if (confirm("Tem certeza que deseja excluir este produto?")) {
            produtos.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(produtos));
            
            const produtor = getQueryParam("id");
            loadProducts(produtor);
            alert("Produto excluído com sucesso!");
            console.log("Produtos atualizado = ", produtos);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    produtos = JSON.parse(localStorage.getItem('products'));
    console.log("Produtos = ", produtos);


    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage
    console.log(user_index);
    tempusers = JSON.parse(localStorage.getItem("users"));
    document.getElementById("banner").style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('${tempusers[user_index].foto}') no-repeat center center/cover`;

    const produtor = getQueryParam("id");
    if (produtor) {
        document.getElementById("produtorName").textContent = produtor;
        loadProducts(produtor);
    }

    if (user_index != null) {
        console.log("Bem vindo", tempusers[user_index].name);
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("userMenu").innerHTML = `
            <label class="nav-link text-light" id="welcomeMessage">
                Bem-vindo, ${tempusers[user_index].name}
                <button class="btn btn-secondary btn-sm" onclick= "window.location.href = 'settings.html'">
                  <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="logout()">
                    <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
                </button>
            </label>`;
    }
    else {
        console.log("Não há ninguém logado :(");
    }
});