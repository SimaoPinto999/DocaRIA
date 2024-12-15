const users = JSON.parse(localStorage.getItem("users"));
const products = JSON.parse(localStorage.getItem("products"));
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

    // Carregar dados da loja
function loadStoreDetails() {
    const storeName = getQueryParam("id");
    console.log(storeName);

    if (!storeName) {
        console.log("Nenhuma loja especificada!");
    }

    const store = users.find(loja => loja.name === storeName);

    if (!store) {
        console.log("Loja não encontrada!");
    }
    console.log(store);
    document.getElementById("store-name").innerText = store.name;
    document.getElementById("store-type").innerText = `Tipo de Negócio: ${store.TipoNegócio}`;
    document.getElementById("store-address").innerText = store.morada;
    document.getElementById("store-description").innerText = store.descricao || "Sem descrição (ainda!)";
    document.getElementById("store-image").src = store.foto || "";

    // Preencher a galeria de produtos
    const gallery = document.getElementById("product-gallery");
    gallery.innerHTML = ""; // Limpar galeria

    console.log("Produtos = ", products);

    products.forEach(product => {
        if (product.produtor == store.name) {
            // Criar o div do produto
            const div = document.createElement("div");
            div.style.margin = "10px";
            div.style.border = "1px solid #ddd";
            div.style.padding = "10px";
            div.style.borderRadius = "8px";
            div.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            div.style.textAlign = "center";
            div.style.transition = "transform 0.2s ease";
            div.addEventListener("mouseenter", () => {
                div.style.transform = "scale(1.05)";
            });
            div.addEventListener("mouseleave", () => {
                div.style.transform = "scale(1)";
            });

            // Adicionar a imagem
            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.name;
            img.style.display = "block";
            img.style.marginBottom = "10px";
            img.style.width = "100%";
            img.style.borderRadius = "5px";
            div.appendChild(img);

            // Adicionar o nome do produto
            const productName = document.createElement("p");
            productName.textContent = product.name;
            productName.style.marginBottom = "10px";
            div.appendChild(productName);

            // Adicionar o botão
            const button = document.createElement("button");
            button.textContent = 'Ver Produto ';
            button.className = "btn btn-primary btn-sm";
            button.style.display = "block";
            button.style.margin = "0 auto";
            button.onclick = () => {
                window.location.href = "produtos.html";
            };
            const icon = document.createElement("i");
            icon.classList.add("fa", "fa-external-link"); // Ícone de link externo
            icon.setAttribute("aria-hidden", "true");
            button.appendChild(icon);
            div.appendChild(button);

            gallery.appendChild(div);
        }
    });
}

// Carregar os detalhes ao iniciar
document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage
    console.log("Users = ", users);

    if (user_index != null) {
        console.log("Bem vindo", users[user_index].name);
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("userMenu").innerHTML = `
    <label class="nav-link text-light" id="welcomeMessage">
        Bem-vindo, ${users[user_index].name}
        <button class="btn btn-secondary btn-sm" onclick="window.location.href = 'settings.html'">
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

    loadStoreDetails();
});