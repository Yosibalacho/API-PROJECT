function homePage() {
  localStorage.setItem("page","Home");
  document.querySelector("#my_container").innerHTML = `<h1>Home</h1>`;
}
