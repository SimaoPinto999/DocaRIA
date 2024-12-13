const clienteRadio = document.getElementById('registerClient');
const produtorRadio = document.getElementById('registerProdutor');
const clienteForm = document.getElementById('clienteForm');
const produtorForm = document.getElementById('produtorForm');

var users = [];


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
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(typeof users); // Deve retornar "object"
    console.log(Array.isArray(users)); // Deve retornar "true"
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const userIndex = users.findIndex(u => u.email === user.email);
        localStorage.setItem("user-index", userIndex);
        console.log(userIndex);
        document.getElementById('loginLI').classList.add('d-none');
        document.getElementById('loginErro').classList.add('d-none');
        document.getElementById('userMenu').innerHTML = `<label class="nav-link text-light" id="welcomeMessage">Bem-vindo, ${user.name} <button class="btn btn-secondary btn-sm"><i class="fa fa-cogs" aria-hidden="true"></i></button></label>`;
        document.getElementById('userMenu').classList.remove('d-none');
        window.location.href = "index.html";
    }
    else {
        document.getElementById('loginErro').classList.remove('d-none');
    }
});

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

function validarRegisterProdutor(){
    const nome = document.getElementById('registerprodutorName').value.trim();
    const tipo = document.getElementById('inputNegocio').value;
    const email = document.getElementById('registerprodutorEmail').value.trim();
    const password = document.getElementById('registerprodutorPassword').value.trim();
    let Valido = true;

    console.log(tipo);
    //console.log(nome);
    //console.log(email);
    //console.log(password);

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

function renderPage() {
    users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
}

// Inicializar produtos
document.addEventListener('DOMContentLoaded', renderPage());