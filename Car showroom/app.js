var carVariants = {
    honda: {
        civic: {
                name:"Honda Civic Reborn",
                model:"2012",
                color: ["red", "black", "white"]
            
        },
        crv: {
            
                name:"Honda CR-V",
                model:"2012",
                color: ["red", "black", "white"]
        },
        accord: {
            
                name:"Honda Accord",
                model:"2012",
                color: ["red", "black", "white"]
            
        }
    },
    toyota:{
        swift:{
            

        },
        racing:{
            
        }
    }
}
var company = document.getElementById("company")
var brand = document.getElementById("brand")

company.innerHTML = `<option value="">Select company</option>`
brand.innerHTML = `<option value = "">Select company</option>`

for(var key in carVariants){
    company.innerHTML += `
    <option value = "${key}">${key.toUpperCase()}</option>
    `
}


function onCompanyChange (){
    for(var key in carVariants[company.value])
    console.log(key)
    brand.innerHTML = `
    <option value = "${key}">${key.toUpperCase()}</option>
    `
}