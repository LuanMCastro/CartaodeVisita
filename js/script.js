function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Alteração de imagem conforme tema
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/ligth.png")
    img.setAttribute("alt", "Foto de Luan Castro fundo escuro")
  } else {
    img.setAttribute("src", "./assets/dark.png")
    img.setAttribute("alt", "Foto de Luan Castro fundo branco")
  }
}
