function Toggle() {
  const html = document.documentElement
  html.classList.toggle("light")

  let imagem = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    imagem.setAttribute("src", "assets/avatarLight")
  } else {
    imagem.setAttribute("src", "assets/avatarDark.jpg")
  }
}
