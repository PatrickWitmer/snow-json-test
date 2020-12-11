document.getElementById('button2').addEventListener('click', loadJSON);

// Load and Print JSON

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url =
  'https://api.weatherunlocked.com/api/resortforecast/801010?app_id=49a3dadd&app_key=7c4d3b8809b054ce270efe85acecfa79';

function loadJSON() {
  fetch('https://www.reddit.com/r/blackmetal.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let html = '';
      data.forEach(function (blackmetal) {
        html += `
          <li>${blackmetal.data.score}</li>
        `;
      });
      //Insert into HTML
      document.getElementById('result').innerHTML = html;
    });
}
