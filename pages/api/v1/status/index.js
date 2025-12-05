function status(request, response) {
  response.status(200).json({
    chave: "Teste 1, 2 ...",
  });
}

export default status;
