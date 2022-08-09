async function getNewsApi() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d3eb111f95mshd527b5b45c89210p11ba62jsn954d267215b6",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };
  try {
    fetch("https://livescore6.p.rapidapi.com/news/v2/list", options)
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 30; i++) {
          document.querySelector("#my_container").innerHTML += `
          <div class="card mb-3" style="max-width: 50vw;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${response.topStories[i].mainMedia.gallery.url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${response.topStories[i].mainMedia.gallery.alt}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
          `;
        }
      });
  } catch (err) {
    console.error(err);
  }
}
getTransferApi();
function newsPage() {
  localStorage.setItem("page", "News");
  document.querySelector("#my_container").innerHTML = "";
  getNewsApi();
}
// async function getApi() {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "b9434498c5msh02f3cc8d23fe076p15c697jsnf756887ac470",
//       "X-RapidAPI-Host": "sport-news-live.p.rapidapi.com",
//     },
//   };

//  try{ return await fetch("https://sport-news-live.p.rapidapi.com/news", options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     }
//     catch(err) { console.error(err)};
// }

// async function getApi() {
//   try {
//     return await fetch(" https://api-football-standings.azharimm.site/leagues/eng.1/seasons")
//       .then((res) => res.json())
//       .then((result) => console.log(result));
//   } catch (error) {
//     console.log(error);
//   }
// }
// getApi();
