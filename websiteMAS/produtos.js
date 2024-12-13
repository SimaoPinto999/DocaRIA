const products = [
    { id: 1, name: "Ovos Moles", price: 5.99, image: "https://via.placeholder.com/150", producer: "Confeitaria Aveirense" },
    { id: 2, name: "Pão de Ló", price: 7.50, image: "https://via.placeholder.com/150", producer: "Doces da Maria" },
    { id: 3, name: "Bolo Fixolas", price: 20, image: "https://via.placeholder.com/150", producer: "Zé Dos Bolos" },
    { id: 4, name: "Bolo de Cenoura", price: 25, image: "https://via.placeholder.com/150", producer: "Zé Dos Bolos" }
];

const cart = [];


function renderProducts() {
    const productList = document.getElementById('product-list');
        products.forEach(product => {
        productList.innerHTML += `
              <div class="col-md-3 text-center">
                <div class="card mb-3">
                  <img src="${product.image}" class="card-img-top" alt="${product.name}">
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price.toFixed(2)}€</p>
                    <p class="card-text">Feito por: ${product.producer}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id});"><i class="fa fa-shopping-basket" aria-hidden="true"></i> Adicionar ao Carrinho</button>
                    <p class="card-text d-none text-success" id="product${product.id}"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Item adicionado ao carrinho!</p>
                  </div>
                </div>
              </div>
            `;
        });
}
function addToCart(productId) {
    console.log("addToCart chamada!");
    console.log(productId); //debug
    
    for (i = 1; i <= produtores.length; i++) { //limpar item adcionado dos outros items
        if (i != productId) {
            document.getElementById("product" + i).classList.add('d-none');
        }
    }
    document.getElementById("product" + productId).classList.remove('d-none');

    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
        
    if (cartItem && product) {
        // Se já existir, aumenta a quantidade
        cartItem.quantity += 1;
    } else {
        // Caso contrário, adiciona ao carrinho com quantidade 1
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';
    let total = 0;

    // Renderiza cada item no carrinho
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
    console.log("cart = ",cart); //debug
}
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        // Reduz a quantidade se for maior que 1
        cart[index].quantity -= 1;
    } else {
        // Remove o item se a quantidade for 1
        cart.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function logout() {
    localStorage.removeItem("user-name"); // Remove os dados do usuário
    window.location.reload(); // Recarrega a página para atualizar a navbar
}

// Inicializar produtos
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    const user = JSON.parse(localStorage.getItem("user-name")); // Recupera o usuário do localStorage
  
    if (user) {
        // Atualiza o navbar com a mensagem de boas-vindas
        document.getElementById("loginLI").classList.add("d-none"); // Esconde o botão de login
        document.getElementById("userMenu").classList.remove("d-none"); // Mostra o menu do usuário
        document.getElementById("userMenu").innerHTML = `
            <label class="nav-link text-light" id="welcomeMessage">
                Bem-vindo, ${user}
                <button class="btn btn-secondary btn-sm">
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="logout()">
                    <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
                </button>
            </label>`;
    }
  });