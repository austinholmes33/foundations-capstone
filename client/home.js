const topHeader = document.getElementById("top-header")
const logo = document.getElementById("logo")

const hikeList = document.getElementById ("hike-list");
const hikeListHeader = document.getElementsByClassName("hike-list-header");
const hikeListForm = document.getElementsByClassName("hike-list-form");
const listName = document.getElementsById("list-name");
const listSubmit = document.getElementById("list-submit");

const hikes = document.getElementById("hikes");
const hikesHeader = document.getElementsByClassName("hikes-header");
const hikesForm = document.getElementsByClassName("hikes-form");
const hikeName = document.getElementById("hike-name");
const hikeLocation = document.getElementById("hike-location");
const hikeDistance = document.getElementById("hike-distance");
const easy = document.getElementById("easy");
const moderate = document.getElementById("moderate");
const strenuous = document.getElementById("strenuous");
const hikeSubmit = document.getElementById("hike-submit");

const yourHikes = document.getElementById("your-hikes")

function submitList (event) {
    event.preventDefault()

    let bodyObj = {
        name: listName.value
    }

    axios.post('http://localhost:4005/submitlist', bodyObj)
    .then((res) => {
        console.log(res)
        alert(bodyObj.name + ' Added!')
    })
    .catch((err) => {
        console.log(err)
    })
}

function submitHike (event) {
    event.preventDefault()

    let bodyObj = {
        name: hikeName.value,
        location: hikeLocation.value,
        distance: hikeDistance.value,
        difficult: easy.value || moderate.value || strenuous.value
    }

    axios.post('http://localhost:4005/submithike', bodyObj)
    .then((res) => {
        console.log(res)
        alert(bodyObj.name + ' Added to Your List!')
    })
    .catch((err) => {
        console.log(err)
    })
}

listSubmit.addEventListener('submit', submitList)
hikeSubmit.addEventListener('submit', submitHike)