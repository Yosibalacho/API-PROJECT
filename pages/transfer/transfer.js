async function getTransferApi() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e65da03b5bmsh17fef234819a948p15c174jsnd0f8c32a3add",
      "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
    },
  };
  try {
    fetch(
      "https://transfermarket.p.rapidapi.com/transfers/list-by-club?id=631&seasonID=2020",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let transferData = response.currentSeason.transferArrivals;
        for (let i = 0; i < transferData.length; i++) {
          document.querySelector(
            "#my_container"
          ).innerHTML += ` <div class="card mb-3" style="max-width: 350px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${transferData[i].playerImage}" class="img-fluid rounded-start" alt="...">
         
              </div>
              <div class="col-md-4">
              <img src="${transferData[i].clubImage}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><p class="">${transferData[i].playerName}</p></h5>
                  <p class="card-text"> 
                  <p class="">${transferData[i].clubName}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>`;
        }
      });
  } catch (error) {
    console.log(error);
  }
}

function transferPage() {
  localStorage.setItem("page", "Transfer");
  document.querySelector("#my_container").innerHTML = "";
  //   document.querySelector("#my_container").innerHTML = `<h1>transfer</h1>`;
  getTransferApi();
}
{
  /**/
}
