(function ($) {
  var showList = $("#showList");
  var show = $("#show");
  var searchForm = $("#searchForm");
  var search_term = $("#search_term");
  var homeLink = $("#homeLink");

  function bindEventsToShowList(showListElements) {
    showListElements.find(".listElement").on("click", function (event) {
      event.preventDefault();
      var currentLink = $($(this)[0].outerHTML).attr("href");

      var getShow = {
        method: "GET",
        url: currentLink,
      };

      $.ajax(getShow).then(function (response) {
        showList.hide();
        show.empty();

        if (!response.name || response.name.trim() === "") {
          response.name = "N/A";
        }

        if (!response.language || response.language.trim() === "") {
          response.language = "N/A";
        }
        if (!response.rating.average || response.rating.average === "") {
          response.rating.average = "N/A";
        }
        if (!response.network || response.network.name.trim() === "") {
          response.network = { name: "N/A" };
        }
        if (!response.summary || response.summary.trim() === "") {
          response.summary = "N/A";
        }
        if (!response.genres || response.genres.length === 0) {
          response.genres = ["N/A"];
        }
        if (!response.image || response.image.medium === "") {
          response.image = { medium: "/public/images/no_image.jpeg" };
        }

        show.html(`
        <h1>${response.name}</h1>
        <img src="${response.image.medium}" alt="Show Cover Image" />
        <dl>
          <dt>Language</dt>
          <dd>${response.language}</dd>
          <dt>Genres</dt>
          <dd><ul id = "showGenres"></ul></dd>
          <dt>Average Rating</dt>
          <dd>${response.rating.average}</dd>
          <dt>Network Name</dt>
          <dd>${response.network.name}</dd>
          <dt>Summary</dt>
          <dd>${response.summary}</dd>
        </dl>
        `);

        var showGenres = response.genres;
        $.each(showGenres, (key, value) => {
          $("#showGenres").append(`<li>${value}</li>`);
        });

        searchForm.trigger("reset");
        $("#search_term").focus();
        show.show();
        homeLink.show();
      });
    });
  }

  function pageLoad() {
    show.hide();
    show.empty();
    homeLink.hide();

    var getShows = {
      method: "GET",
      url: "http://api.tvmaze.com/shows",
    };

    $.ajax(getShows).then(function (response) {
      var shows = $(response);

      $.each(shows, (key, value) => {
        showList.append(
          `<li><a class="listElement" href="${value._links.self.href}">${value.name}</a></li>`
        );
      });

      bindEventsToShowList(showList);

      showList.show();
    });
  }
  pageLoad();

  searchForm.submit(function (event) {
    event.preventDefault();

    var search_term = $("#search_term").val();

    if (!search_term || search_term.trim() === "") {
      alert("You must pass a non empty search term!");
      searchForm.trigger("reset");
      $("#search_term").focus();
    } else {
      searchForm.trigger("reset");
      $("#search_term").focus();
      show.hide();
      show.empty();
      showList.empty();

      var getSearchedShows = {
        method: "GET",
        url: `http://api.tvmaze.com/search/shows?q=${search_term}`,
      };

      $.ajax(getSearchedShows).then(function (response) {
        console.log(typeof response);
        if (response.length === 0) {
          alert("No shows found!");
        } else {
          var searchedShows = $(response);

          $.each(searchedShows, (key, value) => {
            showList.append(
              `<li><a class="listElement" href="${value.show._links.self.href}">${value.show.name}</a></li>`
            );
          });

          bindEventsToShowList(showList);
        }

        showList.show();
        homeLink.show();
      });
    }
  });
})(window.jQuery);
