const countriesList = document.getElementById('countries-list');
fetch('https://restcountries.com/v3.1/region/europe')
.then(res => res.json())
.then(data => {
  console.log(data);
  data.forEach(country => {
    console.log(country.translations.ces.common);
    console.log(country.flags.png);
    console.log(country.maps.googleMaps);
    let blockcountry = 
    `<div class="col-xl-1 col-lg-2 col-md-3 col-sm-6">
    <p><img src="${country.flags.png}" class="img-fluid"
    alt="${country.translations.ces.common}"></p>
    <h5><a href="${country.maps.googleMaps}"></a>
    ${country.translations.ces.common}</h5>
    <p class="small">Pocet obyvatel: ${country.population}</p>
    <p class="small">Hlavni mesto: ${country.capital}</p>
  </div>`;
    countriesList.innerHTML += blockcountry;
  })
})