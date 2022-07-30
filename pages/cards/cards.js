const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b9434498c5msh02f3cc8d23fe076p15c697jsnf756887ac470",
    "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
  },
};
let counter =0
let cards = document.getElementById("cards");
async function getVideo() {
  return await fetch(
    "https://free-football-soccer-videos.p.rapidapi.com/",
    options
  )
    .then((response) => response.json())
    .then((response) => {
        // card1.innerHTML += response[0]["videos"][0]["embed"];
      for (let i = 0; i < 10; i++) {
      cards.innerHTML +=   `<div class="card" d-flex  style="width: 24rem">
      ${response[i]["videos"][0]["embed"]}
     <h5> ${response[i]["videos"][0]["title"]}</h5>
      <div class="card-body">
        <h4 class="card-title">${response[i]["title"]}</h4>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> `;
      }
      console.log(response);
    })
    .catch((err) => console.error(err));
}
getVideo()