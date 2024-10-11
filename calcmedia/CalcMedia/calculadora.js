document.getElementById('mediaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    const resultadoDiv = document.getElementById('resultado');
    let status = media >= 5 ? "Aprovado" : "Reprovado";

    resultadoDiv.textContent = `A média é: ${media.toFixed(2)} - Status: ${status}`;
});


