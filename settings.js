const editBtn = document.getElementById("editBtn");
const logoutBtn = document.getElementById("logoutBtn");
const inputs = document.querySelectorAll("input");
const profileName = document.getElementById("profile-name");
const profilePic = document.getElementById("profile-pic");
const passwordInput = document.getElementById("password");

const user_index = JSON.parse(localStorage.getItem("user-index"));
var users = [];


function loadUserData() {
    console.log(user_index);
    if (user_index != null) {
        profileName.innerText = users[user_index].name || "Usuário";
        if (users[user_index].foto == "" || users[user_index].foto == null || users[user_index].foto == undefined) {
            profilePic.src = "https://via.placeholder.com/150"
        }
        else {
            profilePic.src = users[user_index].foto;
        }
        document.getElementById("email").value = users[user_index].email || "";
        document.getElementById("address").value = users[user_index].morada || "";
        document.getElementById("password").value = users[user_index].password || "**********";
        document.getElementById("conta").value = users[user_index].tipo;
        document.getElementById("foto").value = users[user_index].foto;
        console.log(users[user_index].foto);
    } else {
        alert("Nenhum usuário encontrado.");
    }
}

function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index");
    alert("Saíste da tua conta com sucesso!");
    window.location.href = "login.html"
}

function saveUserData() {
    const profilePic = users[user_index].foto;
    const fotoInput = document.getElementById("foto");

    let base64Image = profilePic;
    const file = fotoInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            base64Image = event.target.result;
            saveDataToLocalStorage(base64Image);
        };
        reader.readAsDataURL(file);
    } else {
        saveDataToLocalStorage(base64Image);
    }
}

function saveDataToLocalStorage(base64Image) {
    const user = {
        name: users[user_index].name,
        foto: base64Image,
        email: document.getElementById("email").value,
        morada: document.getElementById("address").value,
        password: document.getElementById("password").value,
        tipo: document.getElementById("conta").value
    };

    users[user_index] = user;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Detalhes salvos com sucesso!");
    window.location.reload();
}

editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const isEditing = editBtn.innerText === "Salvar";

    if (isEditing) {
        saveUserData();
        inputs.forEach(input => input.classList.remove("editable"));
        passwordInput.type = 'password';
        editBtn.innerText = "Editar";
    } else {
        inputs.forEach(input => input.classList.add("editable"));
        passwordInput.type = 'text';
        editBtn.innerText = "Salvar";
    }
});

logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const confirmLogout = confirm("Tem certeza de que deseja voltar á página inicial?");
    if (confirmLogout) {
        window.location.href = "index.html";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index"));
    users = JSON.parse(localStorage.getItem("users"));

    if (users[user_index].tipo == "Produtor") {
        window.location.href = "produtorProfile.html";
    }

    if (user_index != null) {
        console.log(users);
        console.log("Bem vindo", users[user_index].name);
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("logoNav").style.width = "260px";
        document.getElementById("userMenu").innerHTML = `
    <label class="nav-link text-light" id="welcomeMessage">
        Bem-vindo, ${users[user_index].name}
        <button class="btn btn-secondary btn-sm" onclick="window.location.href = 'settings.html'">
            <i class="fa fa-cogs" aria-hidden="true"></i>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="logout()">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
        </button>
    </label>`;
    }
    else {
        console.log("Não há ninguém logado :(");
    }
    loadUserData();
});