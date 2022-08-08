async function getTransferApi() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":'d3eb111f95mshd527b5b45c89210p11ba62jsn954d267215b6',
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };
  try {
    fetch("https://livescore6.p.rapidapi.com/news/v2/list", options)
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 21; i++) {
          document.querySelector(
            "#my_container"
          ).innerHTML += `<h1>${response.topStories[i].mainMedia.gallery.alt}</h1>
          <img src="${response.topStories[i].mainMedia.gallery.url}">`;
        }
        console.log(response.topStories);
      });
  } catch (err) {
    console.error(err);
  }
}
getTransferApi()
function newsPage() {
  localStorage.setItem("page", "News");
  getTransferApi()
  // document.querySelector("#my_container").innerHTML = `<iframe src="https://www.scorebat.com/embed/livescore/?token=MjI4MzBfMTY1OTg3OTQxOF8xODBjNDVjZGIzZTRiNjkxOTc0YzUyYmIyZTBiNTUyYjQ1OTFhMDdj" frameborder="0" width="600" height="760" allowfullscreen allow='autoplay; fullscreen' style="width:100%;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>`;
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
