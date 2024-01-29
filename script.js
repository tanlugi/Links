function Toggle() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imagem = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    imagem.setAttribute("src", "assets/avatarLight.jpg")
  } else {
    imagem.setAttribute("src", "assets/avatarDark.jpg")
  }
}
