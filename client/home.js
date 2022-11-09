const topHeader = document.getElementById("top-header")
const logo = document.getElementById("logo")

const hikeList = document.getElementById ("hike-list")
const hikeListHeader = document.getElementsByClassName("hike-list-header")
const hikeListForm = document.getElementsByClassName("hike-list-form")
const listName = document.getElementsById("list-name")
const listSubmit = document.getElementById("list-submit")

const hikes = document.getElementById("hikes")
const hikesHeader = document.getElementsByClassName("hikes-header")
const hikesForm = document.getElementsByClassName("hikes-form")
const hikeName = document.getElementById("hike-name")
const hikeLocation = document.getElementById("hike-location")
const hikeDistance = document.getElementById("hike-distance")
const easy = document.getElementById("easy")
const moderate = document.getElementById("moderate")
const strenuous = document.getElementById("strenuous")
const hikeSubmit = document.getElementById("hike-submit")

const review = document.getElementById("review")
const hikeReview = document.getElementsByClassName("hike-review")
const rating = document.getElementById("rating")

function submitList () {
    event.preventDefault()

    let bodyObj = {
        name: listName.value
    }
}

function submitHike () {
    event.preventDefault()
}
