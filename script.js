

let holder = $("#holder")
let form = $("#form")
let button = $("#button")

let nameInput = $("#nameInput")
let typeInput = $("#typeInput")
let dateInput = $("#dateInput")
let rateInput = $("#rateInput")



let projectOb = {
    name: ["test1"],
    type: ["test2"],
    rate: ["test3"],
    due: ["02/04/2022"],
    earning: ["test6"],
}
let m = moment()


console.log(m.format("MM/DD/YYYY"))

function showProjects() {
    for (let index = 0; index < projectOb.name.length; index++) {

        let createdRow = $("<div>")
        createdRow.addClass("row")
        holder.append(createdRow)

        let createdName = $("<div>")
        createdName.addClass("col-2 ")
        createdRow.append(createdName)
        createdName.text(projectOb.name[index])

        let createdType = $("<div>")
        createdType.addClass("col-2 ")
        createdRow.append(createdType)
        createdType.text(projectOb.type[index])

        let createdRate = $("<div>")
        createdRate.addClass("col-2 ")
        createdRow.append(createdRate)
        createdRate.text(projectOb.rate[index])

        let createdDue = $("<div>")
        createdDue.addClass("col-2 ")
        createdRow.append(createdDue)
        createdDue.text(projectOb.due[index])

        let createdTilDue = $("<div>")
        createdTilDue.addClass("col-1 ")
        createdRow.append(createdTilDue)
        createdTilDue.text(moment(projectOb.due[index]).diff(m, "days"))

        let createdEarning = $("<div>")
        createdEarning.addClass("col-2 ")
        createdRow.append(createdEarning)
        createdEarning.text(projectOb.earning[index])

        let xButton = $("<div>")
        xButton.addClass("col-1 x-button")
        createdRow.append(xButton)
        xButton.text("X")

    }

}




function removeBtn(e) {
    $(e.target).parent("div").remove()
}



// commented doesnt work yet

// function saveInput(e) {
//     e.preventDefault();


//     let tempName = nameInput.val()
//     let tempType = typeInput.val()
//     let tempDate = dateInput.val()
//     let tempRate = rateInput.val()

//     projectOb.name.push(tempName)
//     projectOb.type.push(tempType)
//     projectOb.due.push(tempDate)
//     projectOb.rate.push(tempRate)

//     console.log(projectOb.name);
//     console.log(tempName)
//     console.log(nameInput.val().trim);

//     showProjects()
// }


holder.on('click', '.x-button', removeBtn)

button.on("click", saveInput)



