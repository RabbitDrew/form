const key = "api_token=024ef60134c41eab4347353f87af786df72a4243"
const url = "https://mycompany-sandbox2.pipedrive.com/api/v1/deal/1?"

const btns = document.querySelectorAll('.btn') 
const inputs = document.querySelectorAll('.input')
console.log(inputs)


function createData (inputs)  {
const data ={
    clienData: {
        firstName:"", 
        lastName:"", 
        phone:"", 
        email:"", 
    },
    jobData:{
        JobType:"", 
        jobSource:"",
        jobDescription:"",
    },
    serviceData:{
        adress: "",
        city:"", 
        state:"", 
        zipCode:"", 
        area:""
    },
    schedule: {
        date: "",
        startTime:"", 
        endTime:"",
        testSelect:""
    }
}

for ( let k in data) {
    for (let j in k) {
        j = inputs[j].textContent 
    }
}

} 










btns.forEach((btn, i) => {
    if (i === 0) {
        btn.addEventListener('click', () => {
            createData(inputs)
        })
    }
} )