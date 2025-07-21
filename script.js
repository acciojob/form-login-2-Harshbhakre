document.querySelector("#submit").addEventListener("click",()=>{
let Fname = document.querySelector("#FirstName").value
let Lname = document.querySelector("#LastName").value
let Pnumber = document.querySelector("#PhoneNumber").value
let email = document.querySelector("#EmailID").value
	alert(`First Name: ${Fname} Last Name: ${Lname} Phone Number: ${Pnumber} Email ID: ${email}`)
})