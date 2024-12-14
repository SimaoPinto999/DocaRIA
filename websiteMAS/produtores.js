const produtores = JSON.parse(localStorage.getItem('produtores'));
console.log(produtores);

function renderProdutores() {
    const produtoresList = document.getElementById('produtores-list');
    for (i = 0; i < produtores.length; i++) {
            produtoresList.innerHTML += `
              <div class="col-md-3 text-center">
                  <div class="card mb-3">
                    <img src="${produtores[i].foto}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${produtores[i].name}</h5>
                      <button class="btn btn-primary btn-sm" onclick="window.location.href='produtorDetails.html?id=${encodeURIComponent(produtores[i].name)}'">
                        <i class="fa fa-external-link-square" aria-hidden="true"></i> Explorar Loja
                      </button>
                    </div>
                  </div>
                </div>
            `;
    }
}
function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index"); // Remove os dados do usuário
    window.location.reload(); // Recarrega a página para atualizar a navbar
}

document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage
    users = JSON.parse(localStorage.getItem("users"));

    if (user_index != null) {
        // Atualiza o navbar com a mensagem de boas-vindas
        document.getElementById("loginLI").classList.add("d-none"); // Esconde o botão de login
        document.getElementById("userMenu").classList.remove("d-none"); // Mostra o menu do usuário
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
    renderProdutores();
});