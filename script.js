document.getElementById("form-parceiro").addEventListener("submit", function (e) {
    e.preventDefault();

    const residuosMarcados = Array.from(document.querySelectorAll("input[name='residuos']:checked")).map(el => el.value);
    const parceiro = {
        nomeParceiro: document.getElementById("nome").value,
        tipoParceiro: document.getElementById("tipoParceiro").value,
        responsavelParceiro: document.getElementById("responsavelParceiro").value,
        telResponsavel: document.getElementById("telefoneResponsavel").value,
        emailResponsavel: document.getElementById("email").value,
        rua: document.getElementById("rua").value,
        numero: document.getElementById("numero").value,
        bairro: document.getElementById("bairro").value,
        papel: false,
        plastico: false,
        vidro: false,
        metal: false,
        oleoCozinha: false,
        pilhaBateria: false,
        eletronico: false,
        roupa: false,
        outros: false
    };

    

    residuosMarcados.forEach(residuo => {
            if (residuo.toLowerCase() === 'papel') {
                parceiro.papel = true;
            } else if (residuo.toLowerCase() === 'plastico') {
                parceiro.plastico = true;
            } else if (residuo.toLowerCase() === 'vidro') {
                parceiro.vidro = true;
            } else if (residuo.toLowerCase() === 'metal') {
                parceiro.metal = true;
            } else if (residuo.toLowerCase() === 'oleo de cozinha') {
                parceiro.oleoCozinha = true;
            } else if (residuo.toLowerCase() === 'pilha e bateria') {
                parceiro.pilhaBateria = true;
            } else if (residuo.toLowerCase() === 'eletronico') {
                parceiro.eletronico = true;
            } else if (residuo.toLowerCase() === 'roupa') {
                parceiro.roupa = true;
            } else if (residuo.toLowerCase() === 'outros') {
                parceiro.outros = true;
            }
    });

    fetch("https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(parceiro)
    })
        .then(res => res.json())
        .then(data => {
            alert("Parceiro cadastrado com sucesso!");
            console.log(data);
        })
        .catch(err => {
            alert("Erro ao cadastrar parceiro.");
            console.error(err);
        });
});