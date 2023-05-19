

async function cargar(){
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        console.log(result.data[0].image);
        document.getElementById('card').innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${result.data[0].image}" class="card-img-top" alt="img"></div>`;
    } catch (error) {
        console.error(error);
    }
}
console.log(cargar());