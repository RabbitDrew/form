const key = "api_token=024ef60134c41eab4347353f87af786df72a4243"
const url = "https://mycompany-sandbox2.pipedrive.com/api/v1/deals?"

const btns = document.querySelectorAll('.btn') 
const inputs = document.querySelectorAll('.input')
const storage = {
    data:{}
}

function checkInputs (inputs) {

}

function createData (inputs)  {
    const data = {
        "02b61c879eb4866246c82f7c643f6e1ce8d35af8": "", 
        "e2257e4191a9ea1832373c9a226de12474612b5a": "", 
        "7aa77765f15e1262b9a81a37868e144259d3e8c0": "",
        "f0065d20afb083c0b1388759c8018fb36da10c27": "",
            job_type: "",    
            job_source: "",
            job_description: "",
            address: "",
            city: "",
            state: "",
            zip_code: "",  
            area: "",
            date: "",
            start_time: "",  
            end_time: "",    
            test_select: ""
    };

    let i = 0;
    for (let k in data) {
            if (inputs[i] !== undefined) {
                data[k] = inputs[i].value
                i++;
            }
    }
    console.log(data)
return data
} 

function sentData (data, url, key) {
    fetch(url + key, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         data
      },
      body: JSON.stringify(
        {...data,
         title: 'Название сделки' 
        }
    ),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Ошибка:', error));


}


btns.forEach((btn, i) => {
    if (i === 0) {
        btn.addEventListener('click', () => {
          storage.data =  createData(inputs)
          sentData (storage.data, url, key)
        })
    }
} )