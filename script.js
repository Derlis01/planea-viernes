// hace algo
const URL = 'https://api.weatherbit.io/v2.0/forecast/daily?&lat=-27.331&lon=-55.865&key=9126f2ac46834dfd99b832178b6dc020'
// hace algo
let allViernes = []
let numAleat = aleatorio(0,16)
let movieIds = ['94997','113988','84773','92783','60625','90462','1402','1413','1399','63174','1416','456','60574','124364','66732','76479','1396']
let movieID = movieIds[numAleat]

// Objetos de prueba
// var tiempo = {"city_name":"Encarnación","country_code":"PY","data":[{"app_max_temp":30.5,"app_min_temp":14.8,"clouds":69,"clouds_hi":94,"clouds_low":10,"clouds_mid":62,"datetime":"2022-10-17","dewpt":13.9,"high_temp":26.4,"low_temp":15.7,"max_dhi":null,"max_temp":26.4,"min_temp":14.8,"moon_phase":0.413517,"moon_phase_lunation":0.75,"moonrise_ts":1665980365,"moonset_ts":1666020860,"ozone":289.2,"pop":20,"precip":0.0625,"pres":996.8,"rh":68,"slp":1015.2,"snow":0,"snow_depth":0,"sunrise_ts":1665997305,"sunset_ts":1666043394,"temp":20.6,"ts":1665990060,"uv":2,"valid_date":"2022-10-17","vis":24.128,"weather":{"code":803,"description":"Broken clouds","icon":"c03d"},"wind_cdir":"SSE","wind_cdir_full":"south-southeast","wind_dir":165,"wind_gust_spd":5.9,"wind_spd":2.4},{"app_max_temp":24.3,"app_min_temp":15.7,"clouds":58,"clouds_hi":14,"clouds_low":58,"clouds_mid":41,"datetime":"2022-10-18","dewpt":16,"high_temp":24.1,"low_temp":16.1,"max_dhi":null,"max_temp":24.1,"min_temp":15.7,"moon_phase":0.318027,"moon_phase_lunation":0.78,"moonrise_ts":1666069452,"moonset_ts":1666110628,"ozone":287.1,"pop":70,"precip":7.0625,"pres":996.7,"rh":85,"slp":1015.1,"snow":0,"snow_depth":0,"sunrise_ts":1666083646,"sunset_ts":1666129830,"temp":18.7,"ts":1666062060,"uv":6.7,"valid_date":"2022-10-18","vis":21.277,"weather":{"code":501,"description":"Moderate rain","icon":"r02d"},"wind_cdir":"SSE","wind_cdir_full":"south-southeast","wind_dir":147,"wind_gust_spd":5.2,"wind_spd":2.3},{"app_max_temp":30.9,"app_min_temp":16.1,"clouds":38,"clouds_hi":25,"clouds_low":22,"clouds_mid":30,"datetime":"2022-10-19","dewpt":18,"high_temp":30.4,"low_temp":17.4,"max_dhi":null,"max_temp":30.4,"min_temp":16.1,"moon_phase":0.228145,"moon_phase_lunation":0.82,"moonrise_ts":1666158258,"moonset_ts":1666200395,"ozone":283.2,"pop":55,"precip":3.8125,"pres":993.6,"rh":82,"slp":1011.9,"snow":0,"snow_depth":0,"sunrise_ts":1666169987,"sunset_ts":1666216267,"temp":21.7,"ts":1666148460,"uv":10.4,"valid_date":"2022-10-19","vis":22.202,"weather":{"code":201,"description":"Thunderstorm with rain","icon":"t02d"},"wind_cdir":"S","wind_cdir_full":"south","wind_dir":183,"wind_gust_spd":2.6,"wind_spd":1.4},{"app_max_temp":24.4,"app_min_temp":17.4,"clouds":74,"clouds_hi":51,"clouds_low":57,"clouds_mid":57,"datetime":"2022-10-20","dewpt":19,"high_temp":24.2,"low_temp":15.3,"max_dhi":null,"max_temp":24.2,"min_temp":17.4,"moon_phase":0.147571,"moon_phase_lunation":0.85,"moonrise_ts":1666246824,"moonset_ts":1666290155,"ozone":278.8,"pop":95,"precip":51.8125,"pres":988.8,"rh":96,"slp":1007,"snow":0,"snow_depth":0,"sunrise_ts":1666256330,"sunset_ts":1666302704,"temp":19.7,"ts":1666234860,"uv":3.5,"valid_date":"2022-10-20","vis":19.124,"weather":{"code":502,"description":"Heavy rain","icon":"r03d"},"wind_cdir":"SSE","wind_cdir_full":"south-southeast","wind_dir":157,"wind_gust_spd":3.5,"wind_spd":1.5},{"app_max_temp":23.8,"app_min_temp":15.4,"clouds":31,"clouds_hi":0,"clouds_low":31,"clouds_mid":0,"datetime":"2022-10-21","dewpt":16.1,"high_temp":24,"low_temp":14.7,"max_dhi":null,"max_temp":24,"min_temp":15.3,"moon_phase":0.0804549,"moon_phase_lunation":0.88,"moonrise_ts":1666335211,"moonset_ts":1666379933,"ozone":289.2,"pop":15,"precip":0.5625,"pres":990.5,"rh":83,"slp":1008.7,"snow":0,"snow_depth":0,"sunrise_ts":1666342673,"sunset_ts":1666389142,"temp":19.4,"ts":1666321260,"uv":7.6,"valid_date":"2022-10-21","vis":23.771,"weather":{"code":802,"description":"Scattered clouds","icon":"c02d"},"wind_cdir":"SSW","wind_cdir_full":"south-southwest","wind_dir":211,"wind_gust_spd":4.7,"wind_spd":2.2},{"app_max_temp":28.4,"app_min_temp":14.7,"clouds":1,"clouds_hi":0,"clouds_low":1,"clouds_mid":0,"datetime":"2022-10-22","dewpt":15.5,"high_temp":28.4,"low_temp":15.5,"max_dhi":null,"max_temp":28.4,"min_temp":14.6,"moon_phase":0.031224,"moon_phase_lunation":0.92,"moonrise_ts":1666423486,"moonset_ts":1666469773,"ozone":298.3,"pop":0,"precip":0,"pres":993.7,"rh":80,"slp":1012.1,"snow":0,"snow_depth":0,"sunrise_ts":1666429017,"sunset_ts":1666475580,"temp":19.8,"ts":1666407660,"uv":10.9,"valid_date":"2022-10-22","vis":24.128,"weather":{"code":800,"description":"Clear Sky","icon":"c01d"},"wind_cdir":"SE","wind_cdir_full":"southeast","wind_dir":125,"wind_gust_spd":3.2,"wind_spd":1.7},{"app_max_temp":30.5,"app_min_temp":15.5,"clouds":1,"clouds_hi":1,"clouds_low":0,"clouds_mid":0,"datetime":"2022-10-23","dewpt":16.7,"high_temp":30.4,"low_temp":17.4,"max_dhi":null,"max_temp":30.4,"min_temp":15.5,"moon_phase":0.00417833,"moon_phase_lunation":0.95,"moonrise_ts":1666511721,"moonset_ts":1666559732,"ozone":291.6,"pop":0,"precip":0,"pres":994.4,"rh":73,"slp":1012.6,"snow":0,"snow_depth":0,"sunrise_ts":1666515362,"sunset_ts":1666562018,"temp":22.6,"ts":1666494060,"uv":11,"valid_date":"2022-10-23","vis":24.128,"weather":{"code":800,"description":"Clear Sky","icon":"c01d"},"wind_cdir":"E","wind_cdir_full":"east","wind_dir":90,"wind_gust_spd":2.4,"wind_spd":1.7}],"lat":-27.331,"lon":-55.865,"state_code":"11","timezone":"America/Asuncion"}
// var movie = {"imdbID":"tt13207736","tmdbID":"113988","imdbRating":81,"imdbVoteCount":68512,"tmdbRating":83,"backdropPath":"/5vUux2vNUTqwCzb7tVcH18XnsF.jpg","backdropURLs":{"1280":"https://image.tmdb.org/t/p/w1280/5vUux2vNUTqwCzb7tVcH18XnsF.jpg","300":"https://image.tmdb.org/t/p/w300/5vUux2vNUTqwCzb7tVcH18XnsF.jpg","780":"https://image.tmdb.org/t/p/w780/5vUux2vNUTqwCzb7tVcH18XnsF.jpg","original":"https://image.tmdb.org/t/p/original/5vUux2vNUTqwCzb7tVcH18XnsF.jpg"},"originalTitle":"Dahmer – Monster: The Jeffrey Dahmer Story","genres":[1,80,18],"countries":["US"],"year":2022,"firstAirYear":2022,"lastAirYear":2022,"episodeRuntimes":[],"cast":["Evan Peters","Richard Jenkins","Molly Ringwald","Michael Learned","Niecy Nash","Nick Fisher","Brey Chanadet"],"significants":["Ryan Murphy","Ian Brennan"],"title":"Dahmer Monstruo: La historia de Jeffrey Dahmer","overview":"A lo largo de más de 10 años, el asesino convicto Jeffrey Dahmer acabó con la vida de 17 chicos y hombres jóvenes. ¿Pero cómo logró eludir a la justicia tanto tiempo?","video":"HDf3XH-iOqU","posterPath":"/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg","posterURLs":{"154":"https://image.tmdb.org/t/p/w154/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg","185":"https://image.tmdb.org/t/p/w185/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg","342":"https://image.tmdb.org/t/p/w342/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg","500":"https://image.tmdb.org/t/p/w500/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg","780":"https://image.tmdb.org/t/p/w780/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg","92":"https://image.tmdb.org/t/p/w92/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg","original":"https://image.tmdb.org/t/p/original/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg"},"seasons":1,"episodes":10,"age":18,"status":4,"tagline":"","streamingInfo":{},"originalLanguage":"en"}
// var tragos = {"drinks":[{"idDrink":"11339","strDrink":"English Rose Cocktail","strDrinkAlternate":null,"strTags":null,"strVideo":null,"strCategory":"Ordinary Drink","strIBA":null,"strAlcoholic":"Alcoholic","strGlass":"Cocktail glass","strInstructions":"Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.","strInstructionsES":null,"strInstructionsDE":"Reiben Sie den Rand des Cocktailglases mit Zitronensaft ein und tauchen den Rand des Glases in Puderzucker. Alle Zutaten (au\u00dfer Kirsche) mit Eis sch\u00fctteln und in das zuckerummantelte Glas abseihen. Mit der Kirsche garnieren und servieren.","strInstructionsFR":null,"strInstructionsIT":"Strofinare il bordo del bicchiere da cocktail con succo di limone e immergere il bordo del bicchiere nello zucchero a velo.Completare con la ciliegia e servire.Shakerare tutti gli ingredienti (tranne la ciliegia) con ghiaccio e filtrare in un bicchiere bordato di zucchero.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yxwrpp1441208697.jpg","strIngredient1":"Apricot brandy","strIngredient2":"Gin","strIngredient3":"Dry Vermouth","strIngredient4":"Grenadine","strIngredient5":"Lemon juice","strIngredient6":"Cherry","strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"3\/4 oz ","strMeasure2":"1 1\/2 oz ","strMeasure3":"3\/4 oz ","strMeasure4":"1 tsp ","strMeasure5":"1\/4 tsp ","strMeasure6":"1 ","strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2015-09-02 16:44:57"}]}

// Objetos del HTML
const divCoctail = document.getElementById('divCoctailPadre');
const divMovie = document.getElementById('divMovielPadre');
const spanFrioCalor = document.getElementById('spanFeels')
const spanRecomendacion = document.getElementById('accionTemp')
const h2NombreCoctail = document.getElementById('nombreCoctail')
const imagenCoctail = document.getElementById('imagenCoctail')
const divNombreFoto = document.getElementById('nombreFoto')
const divNombreFotoSerie = document.getElementById('nombreFotoDrink')
const divSinopsis = document.getElementById('ingrediente')
const divSinopsisSerie = document.getElementById('ingredienteDrink')
const spanMin = document.getElementById('min')
const spanMax = document.getElementById('max')
const divMensaje = document.getElementById('infoTexts')

//Objetos
var tiempo
var movie
var tragos

// interruptores
let frio = false
let min
let max
let constructor = 0

// Ocultar ambos divs padres
divCoctail.style.display = 'none'
divMovie.style.display = 'none'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffb12157fdmshfb4c90d50ea2497p1ed98fjsn5e680744e3b6',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

fetch(URL)
	.then(response => response.json())
	.then(response => {
        tiempo = response
        makeViernes()
        verViernes()
        FrioOrCalor()
        fetch(`https://streaming-availability.p.rapidapi.com/get/basic?country=mx&tmdb_id=tv%2F${movieID}&output_language=es`, options)
	        .then(response => response.json())
	        .then(response => {
                movie = response
                armarResultado()
            })
	    .catch(err => console.error(err));

        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(response => {
            tragos = response
            armarResultado()
        }
        )
        .catch(err => console.error(err));
    }
    )
	.catch(err => console.error(err));

function makeViernes() {
    for (let i = 7; i < 200; i+=7) {
        let newFecha = new Date('2022/10/14')
        let newFormat
        newFecha.setDate(newFecha.getDate() + i);
        newFormat = newFecha.toLocaleDateString()
        newFormatReverse = newFormat.split("/").reverse()
        finalFormat = newFormatReverse.join('-')
        allViernes.push(finalFormat)
    }
}


function verViernes() {
    for (let i = 0; i < tiempo.data.length; i++) {
        let element = tiempo.data[i];
        let fecha = element.datetime
        for (let i = 0; i < allViernes.length; i++) {
            let viernes = allViernes[i];
            if (viernes == fecha && element.app_max_temp <= 29) {
                console.log(element.app_max_temp)
                frio = true
                max = element.app_max_temp
                min = element.app_min_temp
            }else if(viernes == fecha && element.app_max_temp >= 30) {
                max = element.app_max_temp
                min = element.app_min_temp
            }
        }
    }
    console.log(frio)
}


function FrioOrCalor() {
    if (frio) {
        spanFrioCalor.innerHTML = 'frio'
        spanRecomendacion.innerHTML = 'ver esta serie:'
        spanMin.innerHTML = `Minima: ${min}°C`
        spanMax.innerHTML = ` | Maxima: ${max}°C`
        divMovie.style.display = 'flex'
    }else {
        spanFrioCalor.innerHTML = 'calor'
        spanRecomendacion.innerHTML = 'hacer este trago:'
        spanMin.innerHTML = `Minima: ${min}°C`
        spanMax.innerHTML = ` | Maxima: ${max}°C`
        divCoctail.style.display = 'flex'
    }
    
}

function armarResultado() {
    if (constructor < 1) {
        const imagen = document.createElement('img')
        const imagen2 = document.createElement('img')
        const imagen3 = document.createElement('img')
        const titulo = document.createElement('h2')
        const sinopsis = document.createElement('p')
        if (frio) {
            imagen.src = movie.posterURLs.original
            imagen2.src = 'https://cdn-icons-png.flaticon.com/512/1684/1684374.png'
            titulo.innerHTML = movie.title
            sinopsis.innerHTML = movie.overview
            divMensaje.appendChild(imagen2)
            divNombreFotoSerie.appendChild(titulo) 
            divNombreFotoSerie.appendChild(imagen)
            divSinopsisSerie.appendChild(sinopsis)
            
        }else {
            imagen.src = tragos.drinks[0].strDrinkThumb
            imagen3.src = 'https://cdn-icons-png.flaticon.com/512/2041/2041670.png'
            titulo.innerHTML = tragos.drinks[0].strDrink
            sinopsis.innerHTML = tragos.drinks[0].strInstructions
            divMensaje.appendChild(imagen3)
            divNombreFoto.appendChild(titulo)
            divNombreFoto.appendChild(imagen)
            divSinopsis.appendChild(sinopsis)
        }
    }
    constructor++
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
