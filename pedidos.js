const encomendas = JSON.parse(localStorage.getItem('encomendas'));
console.log("Encomendas = ", encomendas);

const user_index = JSON.parse(localStorage.getItem("user-index"));
users = JSON.parse(localStorage.getItem("users"));

var pedidosFeitos = [];

var pedidosRecebidos = [];
function filtrarPedidosPedidos(nomeProdutor) {
    return encomendas.filter(pedido => pedido.cliente === nomeProdutor);
}
function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index"); // Remove os dados do usuário
    window.location.reload(); // Recarrega a página para atualizar a navbar
}

function calcularQuantidadeTotal(pedido) {
    return pedido.reduce((total, item) => total + item.quantity, 0);
}

function obterTodosOsProdutores(encomendas) {
    const produtores = encomendas.flatMap(encomenda =>
        encomenda.pedido.map(pedido => pedido.produtor)
    );
    return [...new Set(produtores)]; // Remove duplicados
}

function obterEncomendasPorProdutor(encomendas) {
    return encomendas.filter(encomenda =>
        encomenda.pedido.some(pedido => pedido.produtor === users[user_index].name)
    );
}

function renderPedidosFeitos() {
    encomendasFeitas = filtrarPedidosPedidos(users[user_index].name);
    console.log(encomendasFeitas);
    const tableBody = document.getElementById('orders-made-body');
    tableBody.innerHTML = '';
    encomendasFeitas.forEach(pedido => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pedido.id}</td>
            <td>${calcularQuantidadeTotal(pedido.pedido)}</td>
            <td><span class="badge bg-${pedido.estado === 'Entregue' ? 'success' : pedido.estado === 'Em preparo' ? 'warning' : 'primary'}">${pedido.estado}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

function renderPedidosRecebidos() {
    pedidosRecebidos = obterEncomendasPorProdutor(encomendas);
    console.log(pedidosRecebidos);
    const tableBody = document.getElementById('orders-received-body');
    tableBody.innerHTML = '';

    pedidosRecebidos.forEach(pedido => {
        const row = document.createElement('tr');
        var nomeProdutos = [...new Set(pedido.pedido.map(p => p.name))];
        var quantidadeProdutos = pedido.pedido.map(produto => produto.quantity);
        console.log("Nome Produtos = ",nomeProdutos);
        console.log("Quantidades Produtos = ",quantidadeProdutos);
        row.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.cliente}</td>
            <td>${nomeProdutos}</td>
            <td>${quantidadeProdutos}</td>
            <td><span class="badge fw-bold bg-danger">Para fazer...</span></td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    
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
    renderPedidosFeitos();
    renderPedidosRecebidos();
});