function enviarParaWhatsApp(event) {

    event.preventDefault();

    const numeroWhatsApp = "5549991123306"; 

    const nome = document.getElementById('nome_cliente').value;
    const modelo = document.getElementById('modelo_maq').value;
    const problema = document.getElementById('desc_problema').value;

    if (!nome || !problema) {
        alert("Por favor, preencha o nome e o problema.");
        return;
    }

    const textoMensagem =`* NOVO CHAMADO TÉCNICO - SITE *
    
*👤 Cliente:* ${nome}
*🖨️ Equipamento:* ${modelo ? modelo : "Não especificado"}
*⚠️ Descrição do Problema:* ${problema}

_Enviado através do site PrintCon_`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

    window.open(url, '_blank');
}