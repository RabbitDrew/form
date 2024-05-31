const key = "api_token=024ef60134c41eab4347353f87af786df72a4243"
const url = "https://mycompany-sandbox2.pipedrive.com/api/v1/deals?"

const btns = document.querySelectorAll('.btn') 
const inputs = document.querySelectorAll('.input')


const storage = {
    data:{},
    inputsValue: []
}


function validation (input, regex) {
    let result = ""
    if (input.value !=="" && regex.test(input.value)) {
        result = input.value
    }else {
        result = undefined
        input.classList.add('input-err')
        setTimeout(() => {
            input.classList.remove('input-err');
        }, 1000);
    }  
    return result 
}

//check getting data 
function checkInputsValue (inputs, callback) {
   const storage = {
    result: [], 
    regex: {
        phone: /^[0-9+]+$/,
        email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        zip: /^\d+$/
    }
   }

    inputs.forEach((input, i) => {
        if (i === 2) {
            storage.result.push(callback(input,storage.regex.phone )) 
        } else if (i === 3) {
            storage.result.push(callback(input,storage.regex.email))  
        } else if (i=== 10) {
            storage.result.push(callback(input,storage.regex.zip))
        }else if ( i ===  6) {
            if (input.value !=="") {
                storage.result.push(input.value)
            } else {
                storage.result.push(false)
            }
        } else {
            if (input.value !=="") {
                storage.result.push(input.value)
            }else {
                storage.result.push(undefined)
                input.classList.add('input-err')
                setTimeout(() => {
                    input.classList.remove('input-err');
                }, 1000);
            } 
        }
    })
   if (storage.result.some(el => el === undefined)) {
        return 
   }else {
     console.log(storage.result)
     return storage.result
   }
}

//create the data 
function createData (inputs)  {
if (inputs === undefined) {
    return 
} else {
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
            if (inputs !== undefined && inputs[i] !== undefined || inputs[i] === false ) {
                data[k] = inputs[i]
                i++;
            } else {{
                console.log("хз")
            }}
    }
        return data
    }
} 

//send the data 
function sentData (data, url, key) {
    if (data === undefined) {
        console.log("there isn't any data")
    } else {
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
}


btns.forEach((btn, i) => {
    if (i === 0) {
        btn.addEventListener('click', () => {
        storage.inputsValue = checkInputsValue (inputs, validation)
        storage.data = createData(storage.inputsValue)
        sentData (storage.data, url, key)
        })
    } 
} )