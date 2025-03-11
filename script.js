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
            tbq = valor / Math.pow(1000, 4);
            break;
        case "KBq":
            tbq = valor / Math.pow(1000, 3);
            break;
        case "MBq":
            tbq = valor / Math.pow(1000, 2);
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

    document.getElementById("tbq").textContent = `Terabecquerel (TBq): ${tbq}`;
}