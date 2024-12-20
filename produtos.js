const products = JSON.parse(localStorage.getItem('products'));
console.log(products);
var cart = [];
var indexs = [];
function renderProducts() {
    indexs = updateIndexes(products);
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    console.log("Items carregados!");
    products.forEach(product => {
        productList.innerHTML += `
              <div class="col-md-3 text-center">
                <div class="card mb-3">
                  <img src="${product.image}" class="card-img-top" alt="${product.name}" width="150px" height="150px">
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price.toFixed(2)}€</p>
                    <p class="card-text">Por: ${product.produtor}</p>
                    <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id});"><i class="fa fa-shopping-basket" aria-hidden="true"></i> Adicionar ao Carrinho</button>
                    <p class="card-text d-none text-success" id="product${product.id}"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Item adicionado ao carrinho!</p>
                  </div>
                </div>
              </div>
            `;
    });
}

function updateIndexes(array) {
    var NovosIndexes = [];
    for (i = 0; i < array.length; i++) {
        if (!NovosIndexes.includes(array[i].id)) {
            NovosIndexes.push(array[i].id);
        }
    }
    console.log("Novos Indexes = ", NovosIndexes);
    return NovosIndexes
}
function limparFiltros() {
    document.getElementById('filter-maker').value = '';
    document.getElementById('filter-min-preco').value = '';
    document.getElementById('filter-max-preco').value = '';
    document.getElementById('campo-busca').value = '';
    renderProducts();
}

function loadConstProducers() {
    return JSON.parse(localStorage.getItem('produtores'));
}

function loadProducers() {
    const selectElement = document.getElementById('filter-maker');

    selectElement.innerHTML = '<option value="">Todos os Fabricantes</option>';

    produtores = loadConstProducers();
    produtores.forEach(produtor => {
        const option = document.createElement('option');
        option.value = produtor.name;
        option.textContent = produtor.name;
        selectElement.appendChild(option);
    });
}

function renderProductsAtualizado(produtosFiltrados) {
    const listaProdutos = document.getElementById('product-list');
    listaProdutos.innerHTML = '';

    produtosFiltrados.forEach(product => {
        listaProdutos.innerHTML += `
              <div class="col-md-3 text-center">
                <div class="card mb-3">
                  <img src="${product.image}" class="card-img-top" alt="${product.name}" width="150px" height="150px">
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price.toFixed(2)}€</p>
                    <p class="card-text">Por: ${product.produtor}</p>
                    <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id});"><i class="fa fa-shopping-basket" aria-hidden="true"></i> Adicionar ao Carrinho</button>
                    <p class="card-text d-none text-success" id="product${product.id}"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Item adicionado ao carrinho!</p>
                  </div>
                </div>
              </div>
            `;
    });
}
function executarBusca(event) {
    event.preventDefault();

    const termoBusca = document.getElementById('campo-busca').value.toLowerCase();
    const produtosFiltrados = products.filter(produto =>
        produto.name.toLowerCase().includes(termoBusca) ||
        produto.produtor.toLowerCase().includes(termoBusca)
    );
    indexs = updateIndexes(produtosFiltrados);
    console.log("Indexs = ", indexs);
    if (produtosFiltrados.length == 0) {
        alert("Não foram encontrados produtos correspondentes à pesquisa");
    }
    renderProductsAtualizado(produtosFiltrados);
}

function limparBusca() {
    document.getElementById('filter-maker').value = '';
    document.getElementById('filter-min-preco').value = '';
    document.getElementById('filter-max-preco').value = '';
    document.getElementById('campo-busca').value = '';
    renderProducts();
}

function clearCartItems() {
    localStorage.setItem('cart', JSON.stringify([]));

    const cartList = document.querySelector('.list-group.mb-3');
    const cartCountElement = document.querySelector('.badge.bg-primary.rounded-pill');

    if (cartList) {
        cartList.innerHTML = `
            <li class="list-group-item">
                <div class="text-center">Carrinho vazio</div>
            </li>
        `;
    }

    if (cartCountElement) {
        cartCountElement.textContent = '0';
    }
    const modalCartItems = document.getElementById('cartItems');
    const modalCartTotal = document.getElementById('cartTotal'); 

    if (modalCartItems) {
        modalCartItems.innerHTML = `
            <li class="list-group-item">
                <div class="text-center">Carrinho vazio</div>
            </li>
        `;
    }

    if (modalCartTotal) {
        modalCartTotal.textContent = '0.00€';
    }

    alert('Todos os itens foram removidos do carrinho!');
}

function filtrarProdutos() {
    const produtorSelecionado = document.getElementById('filter-maker').value;
    const precoMinimo = parseFloat(document.getElementById('filter-min-preco').value) || 0;
    const precoMaximo = parseFloat(document.getElementById('filter-max-preco').value) || Infinity;

    console.log(produtorSelecionado);

    const produtosFiltrados = products.filter(produto => {
        const correspondeProdutor = !produtorSelecionado || produto.produtor === produtorSelecionado;
        const correspondePreco = produto.price >= precoMinimo && produto.price <= precoMaximo;
        return correspondeProdutor && correspondePreco;
    });

    indexs = updateIndexes(produtosFiltrados);
    console.log("Indexs = ", indexs);
    renderProductsAtualizado(produtosFiltrados);
}

function addToCart(productId) {
    console.log("addToCart chamada!");
    console.log(productId);
    for (i = 0; i < indexs.length; i++) { 
        console.log(indexs[i]);
        if (indexs[i] == productId) {
            document.getElementById("product" + productId).classList.remove('d-none');
        }
        else {
            document.getElementById("product" + indexs[i]).classList.add('d-none');
        }
    }

    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
        
    if (cartItem && product) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.name} - €${item.price.toFixed(2)} x ${item.quantity}
            <div>
              <button class="btn btn-secondary btn-sm me-2" onclick="decreaseQuantity(${index})">-1</button>
              <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remover</button>
            </div>
          </li>
        `;
    });

    cartTotal.textContent = `${total.toFixed(2)}€`;
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("cart = ", cart);
}
function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart')); 
    if (savedCart) {
        cart = savedCart;
        updateCart();
    }
    else {
        console.log("Carrinho não encontrado!")
    }
}
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index");
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    const user_index = JSON.parse(localStorage.getItem("user-index")); 
    users = JSON.parse(localStorage.getItem("users"));
    
    if (user_index != null) {
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("logoNav").style.width = "260px";
        document.getElementById("userMenu").innerHTML = `
            <label class="nav-link text-light" id="welcomeMessage">
                Bem-vindo, ${users[user_index].name}
                <button class="btn btn-secondary btn-sm" onclick= "window.location.href = 'settings.html'">
                  <i class="fa fa-cogs" aria-hidden="true"></i>
              </button>
                <button class="btn btn-secondary btn-sm" onclick="logout()">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                </button>
            </label>`;
    }
    loadCart();
    loadProducers();
  });