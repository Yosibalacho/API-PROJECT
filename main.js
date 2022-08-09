function switchPages(value) {
  switch (value) {
    case "Home":
      homePage();
      break;
    case "Live-Highlights":
      live_highlightsPage();
      break;
    case "Scores":
      scoresPage();
      break;
    case "News":
      newsPage();
      break;
    case "Tables":
      tablesPage();
      break;
    case "About":
      aboutPage();
      break;
    case "Contact_us":
      contact_usPage();
      break;
      case "Transfer":
      transferPage();
      break;
    default: {
      homePage();
    }
  }
}
console.log(localStorage.getItem("page"));
window.addEventListener("load", () => {
  switchPages(localStorage.getItem("page"));
});


