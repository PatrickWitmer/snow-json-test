function fetchData() {
  fetch('https://www.reddit.com/r/BlackMetal.json')
    .then((response) => {
      if (!response.ok) {
        throw Error;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data.children);
      const html = data.data.children
        .map((metal) => {
          return `
          <div class="metal">
          ${
            metal.data.thumbnail === 'self'
              ? `
            `
              : `
            <img src="${metal.data.thumbnail}" /> 
            `
          }
            <h2>${metal.data.title}</h2>
              <p>Score: ${metal.data.score}</p>
            
              ${
                metal.data.media_embed.content === undefined
                  ? `
              `
                  : `
              ${metal.data.media_embed.content}
              `
              }
          </div>
            <hr />
            `;
        })
        .join('');
      document.getElementById('app').insertAdjacentHTML('afterbegin', html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
