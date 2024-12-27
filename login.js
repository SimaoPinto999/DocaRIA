const clienteRadio = document.getElementById('registerClient');
const produtorRadio = document.getElementById('registerProdutor');
const clienteForm = document.getElementById('clienteForm');
const produtorForm = document.getElementById('produtorForm');

var users = [];

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(typeof users);
    console.log(Array.isArray(users));
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
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userType = document.querySelector('input[name="userType"]:checked').value;

    function showError(elementId, show) {
        const errorElement = document.getElementById(elementId);
        if (show) {
            errorElement.classList.remove('d-none');
        } else {
            errorElement.classList.add('d-none');
        }
    }

    if (userType === "Cliente") {
        const clienteName = document.getElementById('registerclienteName').value.trim();
        const clienteMorada = document.getElementById('registerclienteMorada').value.trim();
        const clienteEmail = document.getElementById('registerclienteEmail').value.trim();
        const clientePassword = document.getElementById('registerclientePassword').value.trim();
        const clienteFoto = document.getElementById('resgisterClienteImg');
        const file = clienteFoto.files[0];

        let base64Image = "";

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                base64Image = event.target.result;
                salvarCliente();
            };
            reader.readAsDataURL(file);
        } else {
            salvarCliente();
        }
        function salvarCliente() {
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
                const novo_user = {
                    tipo: userType,
                    name: clienteName,
                    morada: clienteMorada,
                    email: clienteEmail,
                    password: clientePassword,
                    foto: base64Image
                };

                console.log("Registrando cliente:", novo_user);

                let users = JSON.parse(localStorage.getItem('users')) || [];

                users.push(novo_user);

                localStorage.setItem('users', JSON.stringify(users));

                console.log("Users Atualizado:", JSON.parse(localStorage.getItem('users')));

                const userIndex = users.length - 1;
                console.log("Índice do usuário registrado:", userIndex);
                localStorage.setItem("user-index", userIndex);

                document.getElementById('RegistoSucesso').classList.remove('d-none');
                alert("Cliente Registrado com Sucesso!");
                window.location.href = 'index.html';
            } else {
                alert("Preencha todos os campos obrigatórios para se registrar.");
            }
        }

    } else if (userType === "Produtor") {
        const produtorName = document.getElementById('registerprodutorName').value.trim();
        const produtorMorada = document.getElementById('registerprodutorMorada').value.trim();
        const produtorNegocio = document.getElementById('inputNegocio').value;
        const produtorEmail = document.getElementById('registerprodutorEmail').value.trim();
        const produtorPassword = document.getElementById('registerprodutorPassword').value.trim();
        const produtorFoto = document.getElementById('resgisterProdutorImg');
        const produtorDescricao = document.getElementById('registerprodutorDescrição').value.trim();
        const file = produtorFoto.files[0];

        let base64ImageProdutor = "";

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                base64ImageProdutor = event.target.result;
                salvarProdutor();
            };
            reader.readAsDataURL(file);
        }
        else {
            salvarProdutor();
        }
        function salvarProdutor() {
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

            if (produtorDescricao == null || produtorDescricao == "") {
                produtorDescricao = "Sem informação.";
            }

            if (!hasError) {
                novo_user = {
                    tipo: userType,
                    name: produtorName,
                    morada: produtorMorada,
                    TipoNegócio: produtorNegocio,
                    email: produtorEmail,
                    password: produtorPassword,
                    foto: base64ImageProdutor,
                    descricao: produtorDescricao
                };
                console.log("Registrando produtor:", novo_user);

                let users = JSON.parse(localStorage.getItem('users'));
                users.push(novo_user);
                localStorage.setItem('users', JSON.stringify(users));
                console.log("Users Atualizado = ", JSON.parse(localStorage.getItem('users')));
                userIndex = users.length - 1;
                console.log(userIndex);
                localStorage.setItem("user-index", userIndex);


                document.getElementById('RegistoSucesso').classList.remove('d-none');
                alert("Produtor Registado Com Sucesso!");
                window.location.href = 'index.html';
            }
            else {
                alert("Preencha todos os campos obrigatórios para se resgistar");
            }
        }
    }
});

function renderPage() {
    users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
}

document.addEventListener('DOMContentLoaded', renderPage());