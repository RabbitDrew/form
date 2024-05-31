const key = "api_token=024ef60134c41eab4347353f87af786df72a4243"
const url = "https://mycompany-sandbox2.pipedrive.com/api/v1/deals?"

const btns = document.querySelectorAll('.btn') 
const inputs = document.querySelectorAll('.input')


const storage = {
    data:{},
    inputsValue: [],
    regexPhone: /^[0-9+]+$/,
    regexEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    regexZipCode: /^\d+$/
}


//check getting data 
function checkInputsValue (inputs, regexPhone, regexEmail, regexZipCode,) {
   let result = []
    inputs.forEach((input, i) => {
        if (i === 2) {
            if (input.value !=="" && regexPhone.test(input.value)) {
                result.push(input.value)
            }else {
                input.classList.add('input-err')
                setTimeout(() => {
                    input.classList.remove('input-err');
                }, 1000);
            }   
        } else if (i === 3) {
            if (input.value !=="" && regexEmail.test(input.value)) {
                result.push(input.value)
            }else {
                input.classList.add('input-err')
                setTimeout(() => {
                    input.classList.remove('input-err');
                }, 1000);
            }  
        } else if (i=== 10) {
            if (input.value !=="" && regexZipCode.test(input.value)) {
                result.push(input.value)
            }else {
                input.classList.add('input-err')
                setTimeout(() => {
                    input.classList.remove('input-err');
                }, 1000);
            } 
        }
        
    })
}



//create the data 
function createData (inputs)  {
    const data = {
        "02b61c879eb4866246c82f7c643f6e1ce8d35af8": "", 
        "e2257e4191a9ea1832373c9a226de12474612b5a": "", 
        "7aa77765f15e1262b9a81a37868e144259d3e8c0": "",
        "f0065d20afb083c0b1388759c8018fb36da10c27": "",
        "bb8ac84cf79e922fcefc68b7a4eac1a7b3158eb7": "",    
        "f733d0cc581c93dbb4292551ee380c3a46ed7f9c": "",
        "58950237b019d5a169f18a3c2effe315df2fea33": "",
        "e6aecd97538377e2d9e849296d8ebe276193ba98": "",
        "fae3068fdd7ea4c21b3af69eb43fce5e10504c32": "",
        "624fe041e7341fea03e8784f884e2bee3098a2c2": "",
        "fee67be6b7c7577b95b14dfa21e3ed9fc77437db": "",  
        "d2a559b6f18c96fee7ff0f632998684776cd53eb": "",
        "c58eb311eebc13c206ec33d32c0139f0919df32a": "",
        "d498fa5cefb771b39ded47b3268011a1624c9c3b": "",  
        "cc7fb0f152797c26771f5c7da6f66e49043e2a1c": "",    
        "7231c536ea25c94f09f70bcaa9e288ba91557008": ""
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
//send the data 
function sentData (data, url, key) {
    fetch(url + key, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {...data,
         title: 'new deal' 
        }
    ),
    })
    .then(response => response.json(console.log()))
    .then(data => console.log(data))
    .catch((error) => console.error('Ошибка:', error));
}
btns.forEach((btn, i) => {
    if (i === 0) {
        btn.addEventListener('click', () => {
        checkInputsValue (inputs, 
            storage.regexPhone, 
            storage.regexEmail,
            storage.regexZipCode
        )
        //storage.data =  createData(inputs)
         //sentData (storage.data, url, key)
        })
    } 
} )