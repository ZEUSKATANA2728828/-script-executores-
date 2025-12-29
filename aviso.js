window.onload = function () {
    if (!sessionStorage.getItem("avisoAceito")) {
        document.body.innerHTML += `
        <div class="aviso">
            <div class="aviso-box">
                <h2>Aviso Legal</h2>
                <p>
                    O uso de scripts envolve riscos e possíveis punições.<br>
                    Todo uso é de total responsabilidade do usuário.<br>
                    O criador do site não se responsabiliza.
                </p>
                <button onclick="aceitar()">ACEITAR</button>
                <button onclick="recusar()">RECUSAR</button>
            </div>
        </div>`;
    }
}

function aceitar() {
    sessionStorage.setItem("avisoAceito", "true");
    location.reload();
}

function recusar() {
    window.location.href = "index.html";
}
