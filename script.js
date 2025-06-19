document.getElementById("btnLogin").addEventListener("click", function () {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const erro = document.getElementById("erro");


  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    erro.style.display = "none";
    alert("Login realizado com sucesso!");

  } else {
    erro.style.display = "block";
  }
});
