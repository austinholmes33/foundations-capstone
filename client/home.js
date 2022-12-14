const topHeader = document.getElementById("header-background")
const logo = document.getElementById("header-content")


const hikes = document.getElementById("hikes");
const hikesHeader = document.getElementsByClassName("hikes-header");
const hikesForm = document.getElementById("hikes-form");
const hikeName = document.getElementById("hike-name");
const hikeLocation = document.getElementById("hike-location");
const hikeDistance = document.getElementById("hike-distance");
const easy = document.getElementById("easy");
const moderate = document.getElementById("moderate");
const strenuous = document.getElementById("strenuous");
const hikeSubmit = document.getElementById("hike-submit");
const category = document.getElementById("category")


const hikeSearch = document.getElementById("hike-search")
const searchHikeName = document.getElementById("search-hike-name")

const displayContainer = document.getElementById("displayContainer")

const yourHikes = document.getElementById("your-hikes")


function submitHike (event) {
    event.preventDefault()


    let bodyObj = {
        hikeName: hikeName.value,

        location: hikeLocation.value,

        distance: hikeDistance.value,

        difficulty: (easy.checked && easy.value) || 
        (moderate.checked && moderate.value) || 
        (strenuous.checked && strenuous.value),

        category: category.value
    }
    axios.post('http://localhost:4005/submithike', bodyObj)
    .then((res) => {
        console.log(res.data)
        if (res.status === 200) {
            alert(bodyObj.hikeName + ' added to your list!')
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function searchHikes (event) {
    event.preventDefault()

    const searchHikeNameInput = searchHikeName.value
    console.log(searchHikeNameInput)
    axios.get(`http://localhost:4005/searchhikes/${searchHikeNameInput}`)
    .then((res) => {
        console.log(res.data)
        displayContainer.innerHTML = `
        <h1> hikename: ${res.data[0].hikename}</h1>
        <h2> location: ${res.data[0].location}</h2>
        <h2> distance: ${res.data[0].distance}</h2>
        <h2> difficulty: ${res.data[0].difficulty}</h2>
        <h2> category: ${res.data[0].category}</h2>
        `
    })
    .catch((err) => {
        console.log(err)
    })
}

hikesForm.addEventListener('submit', submitHike)
hikeSearch.addEventListener('submit', searchHikes)