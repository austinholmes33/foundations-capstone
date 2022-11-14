const topHeader = document.getElementById("header-background")
const logo = document.getElementById("header-content")

// const hikeList = document.getElementById ("hike-list");
// const hikeListHeader = document.getElementsByClassName("hike-list-header");
// const hikeListForm = document.getElementsByClassName("hike-list-form");
// const listName = document.getElementById("list-name");
// const listSubmit = document.getElementById("list-submit");

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
const chill = document.getElementById("chill");
const long = document.getElementById("long");
const desert = document.getElementById("desert");
const mountain = document.getElementById("mountain");
const flat = document.getElementById("flat");
const steep = document.getElementById("steep");


const hikeSearch = document.getElementById("hike-search")

const yourHikes = document.getElementById("your-hikes")

// function submitList (event) {
//     event.preventDefault()

//     let bodyObj = {
//         listName: listName.value
//     }

//     axios.post('http://localhost:4005/submitlist', bodyObj)
//     .then((res) => {
//         console.log(res)
//         alert(bodyObj.name + ' Added!')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

function submitHike (event) {
    event.preventDefault()


    let bodyObj = {
        hikeName: hikeName.value,

        location: hikeLocation.value,

        distance: hikeDistance.value,

        difficulty: (easy.checked && easy.value) || 
        (moderate.checked && moderate.value) || 
        (strenuous.checked && strenuous.value),

        category: (chill.checked && chill.value) ||
        (long.checked && long.value) ||
        (desert.checked && desert.value) ||
        (mountain.checked && mountain.value) ||
        (flat.checked && flat.value) ||
        (steep.checked && steep.value)
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

function searchHikes (event) {
    event.preventDefault()

    let bodyObj = {
        hikeName: hikeName.value,
        location: hikeLocation.value,
        distance: hikeDistance.value,
        difficulty: easy.value || moderate.value || strenuous.value,
        category: chill.value || 
        long.value ||
        desert.value ||
        mountain.value ||
        flat.value ||
        steep.value
    }

    axios.get('http://localhost:4005/searchhikes', bodyObj)
}

// listSubmit.addEventListener('submit', submitList)
hikesForm.addEventListener('submit', submitHike)
hikeSearch.addEventListener('submit', searchHikes)