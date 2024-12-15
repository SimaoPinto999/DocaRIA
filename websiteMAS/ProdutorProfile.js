const editBtn = document.getElementById("editBtn");
const logoutBtn = document.getElementById("logoutBtn");
const inputs = document.querySelectorAll("input");
const profileName = document.getElementById("profile-name");
const profilePic = document.getElementById("profile-pic");
const passwordInput = document.getElementById("password");

const user_index = JSON.parse(localStorage.getItem("user-index"));
var users = JSON.parse(localStorage.getItem("users"));

function loadUserData() {
    console.log(user_index);

    if (user_index != null) {
        profileName.innerText = users[user_index].name || "Produtor";
        profilePic.src = users[user_index].foto || "https://via.placeholder.com/150";
        document.getElementById("email").value = users[user_index].email || "";
        document.getElementById("address").value = users[user_index].morada || "";
        document.getElementById("businessType").value = users[user_index].TipoNegócio || "";
        document.getElementById("password").value = users[user_index].password || "**********";
        document.getElementById("conta").value = users[user_index].tipo;
        document.getElementById("foto").value = users[user_index].foto;
    } else {
        alert("Nenhum usuário encontrado.");
    }
}

function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index"); // Remove os dados do usuário
    window.location.reload(); // Recarrega a página para atualizar a navbar
}

// Função para salvar os dados no localStorage
function saveUserData() {
    const user = {
        name: profileName.innerText,
        foto: document.getElementById("foto").value,
        email: document.getElementById("email").value,
        morada: document.getElementById("address").value,
        TipoNegócio: document.getElementById("businessType").value,
        password: document.getElementById("password").value,
        tipo: document.getElementById("conta").value
    };

    console.log(user);
    users[user_index] = user;
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Detalhes salvos com sucesso!");
}

// Configurar os botões
editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const isEditing = editBtn.innerText === "Salvar";

    if (isEditing) {
        saveUserData();
        inputs.forEach(input => input.classList.remove("editable"));
        document.getElementById("businessType").disabled = true;
        passwordInput.type = 'password';
        editBtn.innerText = "Editar";
    } else {
        inputs.forEach(input => input.classList.add("editable"));
        document.getElementById('businessType').classList.add("editable");
        document.getElementById("businessType").disabled = false;
        passwordInput.type = 'text';
        editBtn.innerText = "Salvar";
    }
});

logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const confirmLogout = confirm("Tem certeza de que deseja voltar à página inicial?");
    if (confirmLogout) {
        window.location.href = "index.html";
    }
});

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

// Carregar dados do usuário ao iniciar
document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage

    if (user_index != null) {
        if (users[user_index].tipo !== "Produtor") {
            window.location.href = "settings.html";
        }

        console.log("Bem-vindo, produtor:", users[user_index].name);
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("userMenu").innerHTML = `
        <label class="nav-link text-light" id="welcomeMessage">
            Bem-vindo, ${users[user_index].name}
            <button class="btn btn-secondary btn-sm" onclick="window.location.href = 'produtorProfile.html'">
                <i class="fa fa-cogs" aria-hidden="true"></i>
            </button>
            <button class="btn btn-secondary btn-sm" onclick="logout()">
                <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
            </button>
        </label>`;
    }
    else {
        console.log("Não há ninguém logado :(");
        alert("Por favor, faça login para acessar esta página.");
        window.location.href = "login.html";
    }
    loadUserData();
});
