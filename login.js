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

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const userType = document.querySelector('input[name="userType"]:checked').value;

    // Função para exibir erros
    function showError(elementId, show) {
        const errorElement = document.getElementById(elementId);
        if (show) {
            errorElement.classList.remove('d-none');
        } else {
            errorElement.classList.add('d-none');
        }
    }

    if (userType === "Cliente") {
        // Coleta os dados do formulário Cliente
        const clienteName = document.getElementById('registerclienteName').value.trim();
        const clienteMorada = document.getElementById('registerclienteMorada').value.trim();
        const clienteEmail = document.getElementById('registerclienteEmail').value.trim();
        const clientePassword = document.getElementById('registerclientePassword').value.trim();
        const clienteFoto = document.getElementById('foto').value;

        // Validação
        let hasError = false;
        if (clienteName.length < 3) {
            showError('registerclienteNameError', true);
            hasError = true;
        } else {
            showError('registerclienteNameError', false);
        }

        if (clienteMorada.length < 3) {
            showError('registerclienteMoradaError', true);
            hasError = true;
        } else {
            showError('registerclienteMoradaError', false);
        }

        if (clienteEmail.length < 8) {
            showError('registerclienteEmailError', true);
            hasError = true;
        } else {
            showError('registerclienteEmailError', false);
        }

        if (clientePassword.length < 5) {
            showError('registerclientePasswordError', true);
            hasError = true;
        } else {
            showError('registerclientePasswordError', false);
        }

        if (!hasError) {
            novo_user = {
                tipo: userType,
                name: clienteName,
                morada: clienteMorada,
                email: clienteEmail,
                password: clientePassword,
                foto: clienteFoto
            };
            console.log("Registrando produtor:", novo_user);

            var users = JSON.parse(localStorage.getItem('users'));
            users.push(novo_user);
            localStorage.setItem('users', JSON.stringify(users));
            console.log("Users Atualizado = ", JSON.parse(localStorage.getItem('users')));
            userIndex = users.length - 1;
            console.log(userIndex);
            localStorage.setItem("user-index", userIndex);


            document.getElementById('RegistoSucesso').classList.remove('d-none');
            alert("Cliente Registado Com Sucesso!");
            window.location.href = 'index.html'
        }

    } else if (userType === "Produtor") {
        const produtorName = document.getElementById('registerprodutorName').value.trim();
        const produtorMorada = document.getElementById('registerprodutorMorada').value.trim();
        const produtorNegocio = document.getElementById('inputNegocio').value;
        const produtorEmail = document.getElementById('registerprodutorEmail').value.trim();
        const produtorPassword = document.getElementById('registerprodutorPassword').value.trim();
        const produtorFoto = document.getElementById('registerprodutorFoto').value;

        // Validação
        let hasError = false;
        if (produtorName.length < 3) {
            showError('registerprodutorNameError', true);
            hasError = true;
        } else {
            showError('registerprodutorNameError', false);
        }

        if (produtorMorada.length < 3) {
            showError('registerprodutorMoradaError', true);
            hasError = true;
        } else {
            showError('registerprodutorMoradaError', false);
        }

        if (produtorNegocio === "...") {
            showError('registerprodutorNegocioError', true);
            hasError = true;
        } else {
            showError('registerprodutorNegocioError', false);
        }

        if (produtorEmail.length < 8) {
            showError('registerprodutorEmailError', true);
            hasError = true;
        } else {
            showError('registerprodutorEmailError', false);
        }

        if (produtorPassword.length < 5) {
            showError('registerprodutorPasswordError', true);
            hasError = true;
        } else {
            showError('registerprodutorPasswordError', false);
        }

        if (!hasError) {
            // Simula o registro do produtor
            novo_user = {
                tipo: userType,
                name: produtorName,
                morada: produtorMorada,
                TipoNegócio: produtorNegocio,
                email: produtorEmail,
                password: produtorPassword,
                foto: produtorFoto
            };
            console.log("Registrando produtor:", novo_user);

            var users = JSON.parse(localStorage.getItem('users'));
            users.push(novo_user);
            localStorage.setItem('users', JSON.stringify(users));
            console.log("Users Atualizado = ", JSON.parse(localStorage.getItem('users')));
            userIndex = users.length - 1;
            console.log(userIndex);
            localStorage.setItem("user-index", userIndex);

            
            document.getElementById('RegistoSucesso').classList.remove('d-none');
            alert("Produtor Registado Com Sucesso!");
            window.location.href = 'index.html'
        }
    }
});

function renderPage() {
    users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
}

// Inicializar produtos
document.addEventListener('DOMContentLoaded', renderPage());