// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b9434498c5msh02f3cc8d23fe076p15c697jsnf756887ac470",
//     "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
//   },
// };
// const fixtures = document.getElementById("fixtures");

// // fetch("", options)
// //   .then((response) => response.json())
// //   .then((response) => console.log(response))
// //   .catch((err) => console.error(err));
// async function getApi() {
//   try {
//     return await fetch(
//       "https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=1",
//       options
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         for (i = 0; i < 10; i++) {
//           fixtures.innerHTML += res[i];
//         }
//         console.log(res);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// }
// getApi();

// const options2 = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b9434498c5msh02f3cc8d23fe076p15c697jsnf756887ac470",
//     "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
//   },
// };
// async function getApi2() {
//   try {
//     return await fetch(
//       "https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1",
//       options2
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         for (key in response) {
//           console.log(key.teams);
//           response[key]["teams"].forEach((item) => {
//             tbod.innerHTML += `
//              <tr><td>${item.position}</td><td>${item.name}</td></tr>
//             `;
//           });
//         }
//         console.log(response);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// }
// getApi2().then((res) => {
//   console.log(res);
// });
function tablesPage() {
  localStorage.setItem("page", "Tables");
  document.querySelector(
    "#my_container"
  ).innerHTML = `<iframe src="https://www.scorebat.com/embed/?token=MjI4MzBfMTY1OTg3OTkyMV85Zjk3MWEzYzdiNDA1Y2U0NzM5NmY3ZGUyZWY5ZjUzMjJlN2U5Nzc5" frameborder="0" width="600" height="760" allowfullscreen allow='autoplay; fullscreen' style="width:100%;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>`;
}
