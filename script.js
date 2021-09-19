
function show(){

let a = document.getElementById('math').value
let b = document.getElementById('physics').value
let c = document.getElementById('chemistry').value
let d = document.getElementById('english').value
let e = document.getElementById('computer').value

let totalMarks = parseFloat(a) +parseFloat(b)+parseFloat(c)+parseFloat(d)+parseFloat(e)

let percentage = (totalMarks/500) * 100

document.getElementById('last-heading').innerHTML = "Percentage =  " + percentage + "%"
}



