function converterParaTBq() {
    const valorInput = document.getElementById("valor").value;
    const unidade = document.getElementById("unidade").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!valorInput || isNaN(valorInput)) {
        alert("Por favor, insira um valor numérico.");
        return;
    }

    const valor = parseFloat(valorInput);
    let tbq;

    // Fatores de conversão para TBq (10^12)
    const escalas = {
        "Bq": valor / 1e12,
        "KBq": valor / 1e9,
        "MBq": valor / 1e6,
        "GBq": valor / 1e3,
        "TBq": valor,
        "PBq": valor * 1e3
    };

    tbq = escalas[unidade];

    // Formata para exibir até 20 casas decimais sem notação científica
    const formatado = tbq.toLocaleString('pt-BR', { 
        maximumFractionDigits: 20 
    });

    document.getElementById("tbq").textContent = formatado;
    resultadoDiv.classList.remove("hidden");
}

function copiarResultado() {
    const texto = document.getElementById("tbq").textContent;
    navigator.clipboard.writeText(texto);
    alert("Resultado copiado!");
}
