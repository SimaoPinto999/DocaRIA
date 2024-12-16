(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Domingo',
        'Segunda-feira',
        'Terca-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sabado'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()

const user_index = JSON.parse(localStorage.getItem("user-index"));
var users = JSON.parse(localStorage.getItem("users"));



function goToProdutorPage() {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage
    const encodedName = encodeURIComponent(users[user_index].name);
    const pageUrl = `produtorDetails.html?id=${encodedName}`;
    window.location.href = pageUrl;
}

function goToProdutorProdutos() {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage
    const encodedName = encodeURIComponent(users[user_index].name);
    const pageUrl = `addProduto.html?id=${encodedName}`;
    window.location.href = pageUrl;
}



document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage
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
});




