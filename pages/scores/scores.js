function scoresPage() {
    localStorage.setItem("page", "Transfer");
    document.querySelector("#my_container").innerHTML = "";
    document.querySelector("#my_container").innerHTML = `<iframe src="https://www.scorebat.com/embed/livescore/?token=MjI4MzBfMTY1OTg3OTQxOF8xODBjNDVjZGIzZTRiNjkxOTc0YzUyYmIyZTBiNTUyYjQ1OTFhMDdj" frameborder="0" width="600" height="760" allowfullscreen allow='autoplay; fullscreen' style="width:100%;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>`;

  }