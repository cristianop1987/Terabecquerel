function converterParaTBq() {
    const valor = parseFloat(document.getElementById("valor").value);
    const unidade = document.getElementById("unidade").value;

    if (isNaN(valor)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    let tbq;

    switch (unidade) {
        case "Bq":
            tbq = valor / Math.pow(10, 12); // 10^12
            break;
        case "KBq":
            tbq = valor / Math.pow(10, 9);  // 10^9
            break;
        case "MBq":
            tbq = valor / Math.pow(10, 6);  // 10^6
            break;
        case "GBq":
            tbq = valor / 1000;
            break;
        case "PBq":
            tbq = valor * 1000;
            break;
        default:
            alert("Unidade não suportada.");
            return;
    }

    // A mágica acontece aqui:
    // maximumFractionDigits: 20 garante que ele mostre até 20 casas decimais sem arredondar precocemente
    const resultadoFormatado = tbq.toLocaleString('pt-BR', { 
        maximumFractionDigits: 20 
    });

    document.getElementById("tbq").textContent = `Terabecquerel (TBq): ${resultadoFormatado}`;
}
