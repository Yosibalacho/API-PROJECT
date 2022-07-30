function switchPages(value) {
  switch (value) {
    case "home":
      break;
    case "cards":
      break;
    case "users":
      break;
    case "about":
      break;
    case "contact_us":
      break;
    default: {
    }
  }
}
console.log(localStorage.getItem("page"));
window.addEventListener("load", () => {
  switchPages(localStorage.getItem("page"));
});











// let mydiv = document.getElementById("myD");
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b9434498c5msh02f3cc8d23fe076p15c697jsnf756887ac470",
//     "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
//   },
// };
// let hightlights;
// async function getApi() {
//   return await fetch(
//     "https://free-football-soccer-videos.p.rapidapi.com/",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//     //   mydiv.innerHTML += response[0]["videos"][0]["embed"];
//       for (let i = 0; i < 10; i++) {
//         mydiv.innerHTML += response[i]["videos"][0]["embed"];
//       }
//         // console.log(response);
//     })
//     .catch((err) => console.error(err));
// }
// getApi();
