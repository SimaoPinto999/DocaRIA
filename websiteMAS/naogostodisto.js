const clienteRadio = document.getElementById('registerClient');
const produtorRadio = document.getElementById('registerProdutor');
const clienteForm = document.getElementById('clienteForm');
const produtorForm = document.getElementById('produtorForm');

const products = [
    { id: 1, name: "Ovos Moles", price: 5.99, image: "https://via.placeholder.com/150", produtor: "Confeitaria Aveirense" },
    { id: 2, name: "Pão de Ló", price: 7.50, image: "https://via.placeholder.com/150", produtor: "Doces da Maria" },
    { id: 3, name: "Bolo Fixolas", price: 20, image: "https://via.placeholder.com/150", produtor: "Zé Dos Bolos" },
    { id: 4, name: "Bolo de Cenoura", price: 25, image: "https://via.placeholder.com/150", produtor: "Zé Dos Bolos" },
    { id: 5, name: "Queijadas de Sintra", price: 4.50, image: "https://via.placeholder.com/150", produtor: "Doçaria Real" },
    { id: 6, name: "Pastéis de Nata", price: 1.20, image: "https://via.placeholder.com/150", produtor: "Fábrica de Nata" },
    { id: 7, name: "Tarte de Amêndoa", price: 15, image: "https://via.placeholder.com/150", produtor: "Doce Dourado" },
    { id: 8, name: "Bola de Berlim", price: 2.00, image: "https://via.placeholder.com/150", produtor: "Pastelaria Praia" },
    { id: 9, name: "Toucinho do Céu", price: 18, image: "https://via.placeholder.com/150", produtor: "Sabores Celestiais" },
    { id: 10, name: "Folar de Páscoa", price: 12, image: "https://via.placeholder.com/150", produtor: "Tradições da Avó" },
    { id: 11, name: "Travesseiros de Sintra", price: 6.99, image: "https://via.placeholder.com/150", produtor: "Doçaria Real" },
    { id: 12, name: "Pudim Flan", price: 8.50, image: "https://via.placeholder.com/150", produtor: "Doces da Maria" },
    { id: 13, name: "Salame de Chocolate", price: 5.00, image: "https://via.placeholder.com/150", produtor: "Confeitaria Aveirense" },
    { id: 14, name: "Brigadeiro", price: 1.50, image: "https://via.placeholder.com/150", produtor: "Zé Dos Bolos" },
    { id: 15, name: "Leite Creme", price: 3.99, image: "https://via.placeholder.com/150", produtor: "Sabores Celestiais" },
    { id: 16, name: "Mousse de Chocolate", price: 4.50, image: "https://via.placeholder.com/150", produtor: "Doces da Maria" },
    { id: 17, name: "Tarte de Limão", price: 14, image: "https://via.placeholder.com/150", produtor: "Doce Dourado" },
    { id: 18, name: "Arroz Doce", price: 3.50, image: "https://via.placeholder.com/150", produtor: "Fábrica de Nata" },
    { id: 19, name: "Broa de Milho", price: 2.20, image: "https://via.placeholder.com/150", produtor: "Tradições da Avó" },
    { id: 20, name: "Baba de Camelo", price: 4.00, image: "https://via.placeholder.com/150", produtor: "Sabores Celestiais" }
];

const produtores = [];

const users = [
    { email: "cliente@docaria.com", password: "123456", name: "Junco Juoum", tipo: "Cliente", foto: "https://cdn.discordapp.com/attachments/777582482752274453/1317231594284650608/omaiorjuncodepoisdomeupatrao.jpg?ex=675def05&is=675c9d85&hm=0878907100dca581a86a37b127731519c377aa18691b1d82fe578fdccbe9f8b1&" },
    { email: "produtor@docaria.com", password: "654321", name: "Maria Doces", tipo: "Produtor" },
    { email: "cliente1@docaria.com", password: "abc123", name: "Carlos Mendes", tipo: "Cliente" },
    { email: "produtor1@docaria.com", password: "xyz456", name: "Joana Sobral", tipo: "Produtor" },
    { email: "cliente2@docaria.com", password: "qwerty1", name: "Ana Silva", tipo: "Cliente" },
    { email: "produtor2@docaria.com", password: "asdfgh2", name: "Pedro Rocha", tipo: "Produtor" },
    { email: "cliente3@docaria.com", password: "zxcvbn3", name: "Beatriz Cunha", tipo: "Cliente" },
    { email: "produtor3@docaria.com", password: "poiuyt4", name: "Miguel Lima", tipo: "Produtor" },
    { email: "cliente4@docaria.com", password: "mnbvcx5", name: "Clara Santos", tipo: "Cliente" },
    { email: "produtor4@docaria.com", password: "lkjhgf6", name: "Rafael Martins", tipo: "Produtor" },
    { email: "cliente5@docaria.com", password: "567890", name: "Fernanda Lopes", tipo: "Cliente" },
    { email: "produtor5@docaria.com", password: "098765", name: "Rodrigo Costa", tipo: "Produtor" }
];


let lastScrollY = window.scrollY; // Posição do scroll anterior
    const navbar = document.querySelector('.navbar-main');

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Rolando para baixo: oculta a navbar
        navbar.classList.add('navbar-hidden');
      } else {
        // Rolando para cima: exibe a navbar
        navbar.classList.remove('navbar-hidden');
      }

      // Adiciona fundo escuro após rolar
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }

      lastScrollY = window.scrollY; // Atualiza a posição do scroll
    });
// login

document.querySelectorAll('input[name="userType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'Cliente') {
            clienteForm.classList.remove('d-none');
            produtorForm.classList.add('d-none');
        } else {
            produtorForm.classList.remove('d-none');
            clienteForm.classList.add('d-none');
        }
    });
});


function validarRegisterCliente(){
    const nome = document.getElementById('registerclienteName').value.trim();
    const email = document.getElementById('registerclienteEmail').value.trim();
    const password = document.getElementById('registerclientePassword').value.trim();
    let Valido = true;

    //console.log(nome);
    //console.log(email);
    //console.log(password);

    if(nome.length < 3){
        Valido = false;
        document.getElementById('registerclienteNameError').classList.remove('d-none');
    } else {
        document.getElementById('registerclienteNameError').classList.add('d-none');
    }

    if(email.length < 8){
        Valido = false;
        document.getElementById('registerclienteEmailError').classList.remove('d-none');
    } else {
        document.getElementById('registerclienteEmailError').classList.add('d-none');
    }

    if(password.length < 5){
        Valido = false;
        document.getElementById('registerclientePasswordError').classList.remove('d-none');
    } else {
        document.getElementById('registerclientePasswordError').classList.add('d-none');
    }

    return Valido
}


function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index"); // Remove os dados do usuário
    window.location.reload(); // Recarrega a página para atualizar a navbar
}


function validarRegisterProdutor(){
    const nome = document.getElementById('registerprodutorName').value.trim();
    const tipo = document.getElementById('inputNegocio').value;
    const email = document.getElementById('registerprodutorEmail').value.trim();
    const password = document.getElementById('registerprodutorPassword').value.trim();
    let Valido = true;

    console.log(tipo);

    if(nome.length < 3){
        Valido = false;
        document.getElementById('registerprodutorNameError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorNameError').classList.add('d-none');
    }

    if(tipo == "..."){
        Valido = false;
        document.getElementById('registerprodutorNegocioError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorNegocioError').classList.add('d-none');
    }

    if(email.length < 8){
        Valido = false;
        document.getElementById('registerprodutorEmailError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorEmailError').classList.add('d-none');
    }

    if(password.length < 5){
        Valido = false;
        document.getElementById('registerprodutorPasswordError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorPasswordError').classList.add('d-none');
    }

    return Valido
}


document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage

    if (JSON.parse(localStorage.getItem("users")) == null || JSON.parse(localStorage.getItem("users")) == undefined) {
        localStorage.setItem('users', JSON.stringify(users));
        console.log("Transformei users para localStorage!");
    }

    console.log(user_index);
    console.log(users);

    products.forEach(product => {
        if (!produtores.includes(product.produtor)) {
            produtores.push(product.produtor);
        }
    });
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('produtores', JSON.stringify(produtores));

    //console.log(localStorage.getItem('products'));
    //console.log(localStorage.getItem('produtores'));

    if (user_index != null) {
        console.log("Bem vindo", users[user_index].name);
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
    else {
        console.log("Não há ninguém logado :(");
    }
});