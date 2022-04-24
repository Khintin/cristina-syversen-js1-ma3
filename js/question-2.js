const apiKey = "7e2c9aa00be44b929c8acc09c03be67e";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".results");
const loading = document.querySelector(".loading");

async function getGamesList() {
  try {
    loading.innerText = "Please Wait";

    const response = await fetch(url);
    const json = await response.json();
    const facts = json.results;

    loading.innerText = "";
    resultsContainer.innerHTML = "";

    for (let i = 0; i < 8; i++) {
      resultsContainer.innerHTML += `<div class="results">${facts[i].name}</div>`;
      resultsContainer.innerHTML += `<div class="results">${facts[i].rating}</div>`;
      resultsContainer.innerHTML += `<div class="results">${facts[i].tags.length}</div>`;
    }
  } catch (error) {
    console.error("Something went wrong");
    console.error(error);
    resultsContainer.innerHTML = "<h3>Something Went Wrong</h3>";
  }
}

getGamesList();
