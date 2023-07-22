let createButton = document.getElementById("button")
let modalOverlay = document.getElementById("modal-overlay")
let deleteIcon = document.getElementById("trash")
let closeIcon = document.getElementById("close-icon")
let nameOfWebsite = document.getElementById("nameofwebsite")
let linkOfWebsite = document.getElementById("linkofwebsite")
let descriptionOfWebsite = document.getElementById("descriptionofwebsite")
let resourceForm = document.getElementById("resource-form")
let resourcesSection = document.getElementById("resources-section")

function revealModalOverlay(){
    modalOverlay.classList.remove("modal-overlay")
    modalOverlay.classList.add("modal-overlay-visible")
    nameOfWebsite.focus()
    
}
createButton.addEventListener("click", revealModalOverlay)

function closeBackModalOverlay(){
   if(modalOverlay.classList.contains("modal-overlay-visible")){
    modalOverlay.classList.remove("modal-overlay-visible")
    modalOverlay.classList.add("modal-overlay")
   }
}

closeIcon.addEventListener("click", closeBackModalOverlay)

let resources = []

// print fetched data 
function printResources(){
    resourcesSection.textContent = ""

    resources.forEach(function(allResourcesFromArray){
        let printWebsiteName = allResourcesFromArray.inputName
        let printWebsiteLink = allResourcesFromArray.inputLink
        let printWebsiteDescription = allResourcesFromArray.inputDescription

        let resourceDiv = document.createElement("div")
        resourceDiv.classList.add("resource")
        
        let nameOfWebsiteDiv = document.createElement("div")
        nameOfWebsiteDiv.classList.add("website-name")

        let nameOfWebsiteText = document.createElement("a")
        nameOfWebsiteText.setAttribute("href", `${printWebsiteLink}`)
        nameOfWebsiteText.setAttribute("target", "_blank")
        nameOfWebsiteText.textContent = printWebsiteName

        let deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-solid", "fa-trash-can")
        deleteIcon.setAttribute("onclick", `deleteResource("${printWebsiteLink}")`)

        let websiteDescriptionDiv = document.createElement("div")
        websiteDescriptionDiv.classList.add("website-description")

        let websiteDescriptionText = document.createElement("p")
        websiteDescriptionText.textContent = printWebsiteDescription

        websiteDescriptionDiv.append(websiteDescriptionText)
        nameOfWebsiteDiv.append(nameOfWebsiteText, deleteIcon)
        resourceDiv.append(nameOfWebsiteDiv, websiteDescriptionDiv)
        resourcesSection.append(resourceDiv)



    })

}

// deleting data 

function deleteResource(printWebsiteLink){
    resources.forEach(function(resource, index){
        if(resource.inputLink === printWebsiteLink){
            resources.splice(index, 1)
        }
    })
    localStorage.setItem("resources", JSON.stringify(resources))
    fetchResources()
}

// function deleteResource(printWebsiteLink){
//     resources.forEach(function(resource, index){
//         if(resource.inputLink === printWebsiteLink){
//             resources.splice(index, 1)
//         }
//     })
//     localStorage.setItem("resources", JSON.stringify(resources))
//     fetchResources()

// }
// fetching data from local storage
function fetchResources(){
    if(localStorage.getItem("resources")){
        resources = JSON.parse(localStorage.getItem("resources"))
    }
    printResources()
}
fetchResources()

// function to collect data
function handleForm(event){
    event.preventDefault()
    let websiteName = nameOfWebsite.value 
    let websiteLink = linkOfWebsite.value
    let websiteDescription = descriptionOfWebsite.value 


    if(nameOfWebsite.value === ""){
        nameOfWebsite.style.border = "1px solid red"
    }else{
        nameOfWebsite.style.border = "1px solid green"
    }
    if(linkOfWebsite.value === ""){
        linkOfWebsite.style.border = "1px solid red"
    }
    if(descriptionOfWebsite.value === ""){
        descriptionOfWebsite.style.border = "1px solid red"
    }
// data processing
    const formCreated = {
        inputName : websiteName,
        inputLink : websiteLink,
        inputDescription : websiteDescription

    }
// data storing
    resources.push(formCreated)
    localStorage.setItem("resources", JSON.stringify(resources))

    fetchResources()
    resourceForm.reset()
    closeBackModalOverlay()

}

resourceForm.addEventListener("submit", handleForm)
