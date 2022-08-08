// let cards = document.getElementById("cards");
async function getVideo() {
  document.querySelector("#my_container").innerHTML = "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b9434498c5msh02f3cc8d23fe076p15c697jsnf756887ac470",
      "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
    },
  };
  return await fetch(
    "https://free-football-soccer-videos.p.rapidapi.com/",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i < 12; i++) {
        document.querySelector(
          "#my_container"
        ).innerHTML += ` <div class="card mt-3 bg-dark bg-gardiant"  style="width: 24rem">
      <div class="card-body text-light ">
      ${response[i]["videos"][0]["embed"]}
      <h5> ${response[i]["videos"][0]["title"]}</h5>
      <h5>${response[i]["competition"]["name"]}</h5>
        <h4 class="card-title">${response[i]["title"]}</h4>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
      }
      console.log(response);
    })
    .catch((err) => console.error(err));
}

function live_highlightsPage() {
  localStorage.setItem("page", "Live-Highlights");
  // document.querySelector("#my_container").innerHTML = `<h1>Live-highlights</h1>`;
  getVideo();
}
