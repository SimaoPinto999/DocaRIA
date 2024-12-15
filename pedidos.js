//const encomendas = JSON.parse(localStorage.getItem('encomendas'));
const encomendas = [
    {
        "pedido": [
            {
                "id": 12,
                "name": "Mousse de Chocolate",
                "price": 4.5,
                "image": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/369562012750bd46ceaeef5d59a23229.jpg",
                "produtor": "Doces da Maria",
                "quantity": 11
            }
        ],
        "name": "Confeitaria Aveirense",
        "id": "ORD-1734284200397",
        estado: "Em preparo"
    },
    {
        "pedido": [
            {
                "id": 13,
                "name": "Torta de Limão",
                "price": 6.0,
                "image": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/369562012750bd46ceaeef5d59a23229.jpg",
                "produtor": "Confeitaria Aveirense",
                "quantity": 3
            }
        ],
        "name": "Confeitaria Aveirense",
        "id": "ORD-1734284200398",
        estado: "Em preparo"
    },
    {
        "pedido": [
            {
                "id": 14,
                "name": "Bolo de Fubá",
                "price": 5.0,
                "image": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/369562012750bd46ceaeef5d59a23229.jpg",
                "produtor": "Doces da Maria",
                "quantity": 8
            }
        ],
        "name": "Doçaria Real",
        "id": "ORD-1734284200399",
        estado: "Em preparo"
    }
];
console.log("Encomendas = ", encomendas);

const user_index = JSON.parse(localStorage.getItem("user-index"));
users = JSON.parse(localStorage.getItem("users"));

var pedidosFeitos = [];

const pedidosRecebidos = [
    { cliente: 'João Silva', produto: 'Bolo de Chocolate', quantidade: 3, data: '2024-12-14', status: 'Entregue' },
    { cliente: 'Maria Oliveira', produto: 'Bolo de Morango', quantidade: 2, data: '2024-12-13', status: 'Aguardando pagamento' },
    { cliente: 'Carlos Pereira', produto: 'Donuts', quantidade: 5, data: '2024-12-12', status: 'Entregue' },
    { cliente: 'Ana Souza', produto: 'Torta de Limão', quantidade: 4, data: '2024-12-11', status: 'Aguardando preparo' }
];
function filtrarPedidos(nomeProdutor) {
    return encomendas.filter(pedido => pedido.name === nomeProdutor);
}

function calcularQuantidadeTotal(pedido) {
    return pedido.reduce((total, item) => total + item.quantity, 0);
}

function renderPedidosFeitos() {
    encomendasFeitas = filtrarPedidos(users[user_index].name);
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
    const tableBody = document.getElementById('orders-received-body');
    tableBody.innerHTML = '';

    pedidosRecebidos.forEach(pedido => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pedido.cliente}</td>
            <td>${pedido.produto}</td>
            <td>${pedido.quantidade}</td>
            <td>${pedido.data}</td>
            <td><span class="badge bg-${pedido.status === 'Entregue' ? 'success' : pedido.status === 'Aguardando pagamento' ? 'warning' : 'primary'}">${pedido.status}</span></td>
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