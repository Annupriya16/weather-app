let textField = document.getElementById("searchstring")

let getButton = document.getElementById("getbutton")

let outputBox = document.getElementById("outputbox")



getButton.addEventListener("click", getWeather)


function getWeather(){
    let weatherValue = ""
    let search = textField.value

    // fetch api call
    let  url  = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e9fcd5e7505a303c9946c74c65e3d81c`

    fetch(url).then((res)=>res.json()).then(res=>{
        let temp = res.main.temp

        outputBox.innerHTML = "Temparature in "+search+ "is "+ temp + " F"
    }).catch(e=>{console.log(e)})
}



// api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}


let key = "e9fcd5e7505a303c9946c74c65e3d81c"

// stackoverflow