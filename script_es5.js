let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
    
    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        
        
        request.open('GET', 'current.json'); 
        request.setRequestHeader('content-type', 'application/json; charset=utf-8'); 
        request.send();
        
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                let date = JSON.parse(request.response);

                inputUsd.value = inputRub.value / date.usd;

            } else {
                inputUsd.value = "что-то пошло не так!";
            }
        });
    });




