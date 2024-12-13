function validateForm() {
    (() => {
        'use strict'

        // Seleciona todos os formulários que requerem validação
        const forms = document.querySelectorAll('.needs-validation')

        // Adiciona evento de validação em cada formulário
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })();
}

function loadCartForCheckout() {
    const savedCart = localStorage.getItem('cart');
    const cartList = document.querySelector('.list-group.mb-3');
    const cartCountElement = document.querySelector('.badge.bg-primary.rounded-pill');
    const promoInput = document.querySelector('.input-group input');
    const promoButton = document.querySelector('.input-group button');
    let total = 0;
    let itemCount = 0;
    let discountApplied = false;

    if (savedCart) {
        const cart = JSON.parse(savedCart);
        cartList.innerHTML = '';

        // Renderiza os itens do carrinho
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            itemCount += item.quantity;
            cartList.innerHTML += `
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 class="my-0 fw-bold">${item.name}</h6>
                        <small class="text-body-secondary">Quantidade: ${item.quantity}</small>
                        <div>
                            <button class="btn btn-sm btn-secondary me-2" onclick="updateQuantity(${index}, -1)">-</button>
                            <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <span class="text-body-secondary">${(item.price * item.quantity).toFixed(2)}&euro;</span>
                </li>
            `;
        });

        cartList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">
                <span class="fw-bold">Total (&euro;)</span>
                <strong id="cart-total">${total.toFixed(2)}&euro;</strong>
            </li>
        `;

        promoButton.addEventListener('click', () => {
            const promoCode = promoInput.value.trim();
            if (promoCode === "FREE" && !discountApplied) {
                total *= 0;
                document.getElementById('cart-total').innerText = `${total.toFixed(2)}`;
                discountApplied = true;
                document.getElementById('erroCodigo').classList.add('d-none');
            } else if (discountApplied) {
                alert("A promoção já foi aplicada!");
            } else {
                document.getElementById('erroCodigo').classList.remove('d-none');
            }
        });
    }
    else {

        cartList.innerHTML = `
            <li class="list-group-item">
                <div class="text-center">Carrinho vazio</div>
            </li>
        `;
    }

    cartCountElement.textContent = itemCount;
}

function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index"); // Remove os dados do usuário
    window.location.reload(); // Recarrega a página para atualizar a navbar
}
function updateQuantity(index, delta) {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const cart = JSON.parse(savedCart);
        cart[index].quantity += delta;

        // Remove o item se a quantidade for 0 ou menor
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }

        // Atualiza o localStorage e recarrega o carrinho
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartForCheckout();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index"));
    users = JSON.parse(localStorage.getItem("users")); // Recupera o usuário do localStorage

    if (user_index != null) {
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("userMenu").innerHTML = `
            <label class="nav-link text-light" id="welcomeMessage">
                Bem-vindo, ${users[user_index].name}
                <button class="btn btn-secondary btn-sm" onclick= "window.location.href = 'settings.html'">
                  <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="logout()">
                    <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
                </button>
            </label>`;
    }
    loadCartForCheckout();
});
