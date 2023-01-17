window.onload = function () {
  showApp.init();
};

let showApp = {
  data: null,
  searchInput: null,
  showDataBox: null,
  init: function () {
    console.log("Aplikacja uruchomiona!");

    this.searchInput = document.getElementById("search-input");
    this.searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        console.log("Enter!");
        this.loadData(this.searchInput.value);
      }
    });
    this.showDataBox = document.querySelector(".data-box");
    console.log(this.showDataBox);
    this.loadData("friends");
  },
  loadData: function (str) {
    str = str.trim();
    fetch(`https://api.tvmaze.com/search/shows?q=${str}`)
      .then((response) => response.json())
      .then((data) => this.dataReady(data));
  },
  dataReady: function (showData) {
    this.data = showData;
    //console.log(showData);

    let allBoxexHtml = "";

    for (let i = 0; i < showData.length; i++) {
      let show = showData[i];
      let score = show.score;
      show = show.show;

      let genres = show.genres.join(", ");

      let imgSrc = null;
      let imgSrcOriginal = null;
      if (show.image) {
        imgSrc = show.image.medium;
        imgSrcOriginal = show.image.original;
      } else {
        imgSrc =
          "https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_960_720.jpg";
        imgSrcOriginal =
          "https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_960_720.jpg";
      }

      let showTitle = null;
      if (!show.name) continue;
      showTitle = show.name;

      let network = " - ";
      if (show.network) network = show.network.name;

      let officialSite = " - ";
      if (show.officialSite) officialSite = show.officialSite;

      let premiered = " - ";
      if (show.premiered) premiered = show.premiered;

      let summary = show.summary;
      summary =
        `
      <p>Show: ${showTitle}</p>
      <p>Date: ${premiered}</p>
      <p>Network: ${network}</p>
      <br>
      ` + summary;

      allBoxexHtml += this.getShowBoxByTemplate(
        imgSrc,
        showTitle,
        genres,
        summary
      );
    }

    this.showDataBox.innerHTML = allBoxexHtml;
  },

  getShowBoxByTemplate: function (imgSrc, title, genres, overview) {
    return `<div class="show-box">
  <img
    src="${imgSrc}"
    alt="${title}"
  />
  <div class="show-title">${title}</div>
  <div class="show-genres">${genres}</div>
  <div class="show-overview">${overview}</div>
</div>`;
  },
};
