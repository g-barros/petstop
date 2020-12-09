apiKey = '6fea82e4-d6e7-49ee-8836-601e63e29a6b';
const dogs = document.querySelector('#dogContainer');
const dogNames = ['Luna', 'Apolo', 'Nina', 'Rex', 'Dudu', 'Toto', 
                  'Pipoca', 'Paçoca', 'Caramelo', 'Quinim', 'Bob', 'Xena'];

fetch(`https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&limit=12&api_key=${apiKey}`)
  .then(response => response.json())
  .then(dogList => {
    dogList.forEach((dog, index) => {
      dogs.innerHTML += `<div class="col mb-4">
                          <div class="card">
                            <img src=${dog.url} class="card-img-top" alt="...">
                            <div class="card-footer">
                              <small class="text-muted">${dogNames[index]}</small>
                            </div>
                          </div>
                        </div>`
    });
  });