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
        console.log(transferData);
        showData(transferData);
        function showData(data) {
          for (let i = 0; i < data.length; i++) {
            document.querySelector("#my_container").innerHTML += `
             <div class="container d-flex  justify-content-around align-items-baseline ">
             <p>Player</p><p>Name</p><p>Club</p><p>Move To</p>
             </div>
             <div class="container d-flex mb-3 border-start  border-4 border-dark  justify-content-around align-items-center " style="height:120px ;" >
           <img class="img-fluid    " src="${data[i].playerImage}" alt="" style="height:80px ;" >
           <p class="">${data[i].playerName}</p>
           <p class="">${data[i].clubName}</p>
           <div> <img class="img-fluid rounded mt-2" src="${data[i].clubImage}" alt="" style="height:80px ;" >   </div>
    </div>`;
          }
        }
      });
    // show transfers cards functiion
  } catch (error) {
    console.log(error);
  }
}

function transferPage() {
  localStorage.setItem("page", "Transfer");
  //   document.querySelector("#my_container").innerHTML = `<h1>transfer</h1>`;
  getTransferApi();
}
