function validaForm() {
    var nome = document.getElementById("cNome").value.trim();
    var mail = document.getElementById("cMail").value.trim();
    var mens = document.getElementById("cMsg").value.trim();
    
    if(nome.trim() == "") {
        document.getElementById("cNome").focus();
        alert("Preencha o Campo \"Nome Completo\"!");
        return false;
    }
    else if(mail.trim() == "") {
        document.getElementById("cMail").focus();
        alert("Preencha o Campo \"E-mail\"!");
        return false;
    }  
    else if(anos < 14 || anos > 110) {
        document.getElementById("cIdad").focus();
        alert("A Idade Deverá Estar entre 14 e 110 Anos!");
        return false;
    }
    else if(mens.trim() == "") {
        document.getElementById("cMsg").focus();
        alert("Preencha a Área \"Sua Mensagem\"!");
        return false;
    }
    
    return true;
}

function validaAdm() {
    var login = document.getElementById("cLogin").value.trim();
    var senha = document.getElementById("cSenha").value.trim();
    
    if(login.trim() == "") {
        alert("Você deve preencher o campo \"Login\"!");
        document.getElementById("cLogin").focus();
        return false;
    }
    else if(senha.trim() == "") {
        alert("Você deve preencher o campo \"Senha\"!");
        document.getElementById("cSenha").focus();
        return false;
    }

    if(login.trim().toLowerCase() == "' or '1 = 1" || senha.trim().toLowerCase() == "' or '1 = 1") {
        alert("Tentando fazer SQL Injection no meu Banco de Dados?\nTá perdendo seu tempo, trouxa!");

        return false;
    }
    
    return true;
}