apikey = "09a7bcc1-72f4-464f- ac73-3e3014aa2aff"
const cats = document.querySelector('#catContainer');
const catNames = ['Spencer', 'Sherlock', 'Mel', 'Cherie', 'Marie', 'Frajola', 'Frida', 'Levi', 'Freddie', 'Clarita', 'Yoda', 'Lennon'];

fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=12&api_key=${apiKey}')
  .then(response => response.json())
  .then(catList => {
    catList.forEach((cat, index) => {
      cats.innerHTML += `<div class="col mb-4">
                          <div class="card">
                            <img src=${cat.url} class="card-img-top" alt="...">
                            <div class="card-footer">
                              <small class="text-muted">${catNames[index]}</small>
                            </div>
                          </div>
                        </div>`
    });
  });

// fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=8')
// .then(response => response.json())
// .then(res => console.log(res));

