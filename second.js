// how to use XHR to get data from an API

// let body  = document.querySelector("body")

// const myStarWarsRequest = new XMLHttpRequest() 
// myStarWarsRequest.open("GET", "https://swapi.dev/api/films/")
// myStarWarsRequest.addEventListener("load", ()=>{
//     const starWarsData = myStarWarsRequest.responseText
//     const convertedStarWarsData = JSON.parse(starWarsData)
//     let myNewData = convertedStarWarsData.results
//     myNewData.forEach((starWarsRecord)=>{
//         let movieTitles = starWarsRecord.title

//         let paragraphElement = document.createElement("p")
//         paragraphElement.textContent = movieTitles

//         body.append(paragraphElement)
//     })
// })
// myStarWarsRequest.addEventListener("error", ()=>{

// })

// myStarWarsRequest.send()


// how to use fetch to collect data from an API
const fetchData = fetch("https://swapi.dev/api/films/")
.then(function(responseObject){
    responseObject.json().then(function(mainData){
        let dataResult = mainData.results
        dataResult.forEach ((loopResults)=>{
            let movieTitle = loopResults.title
            console.log(movieTitle)
            let movieEpisodeId = loopResults.episode_id
            console.log(movieEpisodeId)
            let movieProducer = loopResults.producer
            console.log(movieProducer)


        })
    })
    
})









// function ourPromise(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let myAge = 50
//         myAge == 51? resolve() : reject()
//         }, 5000)
//     })
// } 
// ourPromise().then(function(){
//     console.log("succesful man")
// }).catch(function(){
//     console.log("failed man")
// })





// myPromise.then(function(){
//     console.log("this is correct")
// })

// myPromise.catch(function(){
//     console.log("this is false")
// })