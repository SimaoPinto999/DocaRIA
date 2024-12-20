const user_index = JSON.parse(localStorage.getItem("user-index"));
var users = JSON.parse(localStorage.getItem("users"));


function goToProdutorPage() {
    const user_index = JSON.parse(localStorage.getItem("user-index"));
    const encodedName = encodeURIComponent(users[user_index].name);
    const pageUrl = `produtorDetails.html?id=${encodedName}`;
    window.location.href = pageUrl;
}

function goToProdutorProdutos() {
    const user_index = JSON.parse(localStorage.getItem("user-index"));
    const encodedName = encodeURIComponent(users[user_index].name);
    const pageUrl = `addProduto.html?id=${encodedName}`;
    window.location.href = pageUrl;
}

function loadGrafico() {
    const tempusers = JSON.parse(localStorage.getItem("users"));
    const produtor = tempusers[user_index].name;
    const encomendas = JSON.parse(localStorage.getItem("encomendas"));
    const encomendasDoProdutor = encomendas.filter(encomenda =>
        encomenda.pedido.some(item => item.produtor === produtor)
    );

    const produtoFavoritoCount = {};

    encomendasDoProdutor.forEach(encomenda => {
        encomenda.pedido.forEach(item => {
            if (item.produtor === produtor) {
                if (!produtoFavoritoCount[item.name]) {
                    produtoFavoritoCount[item.name] = 0;
                }
                produtoFavoritoCount[item.name] += item.quantity;
            }
        });
    });

    const labels = Object.keys(produtoFavoritoCount);
    const data = Object.values(produtoFavoritoCount);

    const ctx = document.getElementById('productFavoriteChart').getContext('2d');

    const productFavoriteChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Produtos Favoritos',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + ' unidades';
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
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
    loadGrafico();
});




