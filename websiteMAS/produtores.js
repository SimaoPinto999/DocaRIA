const users = [
    {email: "cliente@docaria.com", password: "123456", name: "Junco Juoum", tipo: "Cliente"},
    {email: "produtor@docaria.com", password: "654321", name: "Maria Doces", tipo: "Cliente"}
    ];

    const products = [
        { id: 1, name: "Ovos Moles", price: 5.99, image: "https://via.placeholder.com/150", producer: "Confeitaria Aveirense" },
        { id: 2, name: "Pão de Ló", price: 7.50, image: "https://via.placeholder.com/150", producer: "Doces da Maria" },
        { id: 3, name: "Bolo Fixolas", price: 20, image: "https://via.placeholder.com/150", producer: "Zé Dos Bolos" },
        { id: 4, name: "Bolo de Cenoura", price: 25, image: "https://via.placeholder.com/150", producer: "Zé Dos Bolos" }
    ];
    
    
    const produtores = [];


function renderProdutores() {
    const produtoresList = document.getElementById('produtores-list');
    products.forEach(product => {
        if (!produtores.includes(product.producer)) {
            produtores.push(product.producer);
        }
    });
    for (i = 0; i < produtores.length; i++) {
            produtoresList.innerHTML += `
              <div class="col-md-3 text-center">
                <div class="card mb-3">
                  <img src="https://via.placeholder.com/150" class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title">${produtores[i]}</h5>
                    <button class="btn btn-primary" onclick=""><i class="fa fa-external-link-square" aria-hidden="true"></i> Explorar Loja</button>
                  </div>
                </div>
              </div>
            `;
    }
}

function logout() {
  localStorage.removeItem("user-name"); // Remove os dados do usuário
  window.location.reload(); // Recarrega a página para atualizar a navbar
}

document.addEventListener("DOMContentLoaded", () => {
  renderProdutores();
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