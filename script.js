let celsius = document.getElementById('celsius');
            let fahrenheit = document.getElementById('fahrenheit');
            let kelvin = document.getElementById('kelvin');
            function celCheck(val){
                val = parseInt(val);
                if(val > 30){
                    document.body.style.backgroundImage = "url('./images/img-4.webp')";
                    document.getElementById("det").innerHTML="&#129397;";
                }
                else if(val>0){
                    if(val<15){
                        document.body.style.backgroundImage = "url('./images/img-2.webp')";
                        document.getElementById("det").innerHTML="&#128556";
                    }
                    else{
                        document.body.style.backgroundImage = "url('./images/img-3.webp')";
                        document.getElementById("det").innerHTML="&#128512";
                    }
                }           
                if(val<0){
                    document.body.style.backgroundImage = "url('./images/img-1.webp')";
                    document.getElementById("det").innerHTML="&#129398;";

                }

            }
            celsius.oninput = function () {
                let f = (parseFloat(celsius.value) * 9) / 5 + 32;
                fahrenheit.value = parseFloat(f.toFixed(2));

                let k = (parseFloat(celsius.value) + 273.15);
                kelvin.value = parseFloat(k.toFixed(2));
                let c = (parseFloat(celsius.value));
                celCheck(c);
            }
            fahrenheit.oninput = function () {
                let c = ((parseFloat(
                    fahrenheit.value) - 32) * 5) / 9;
                celsius.value = parseFloat(c.toFixed(2));
                celCheck(c);

                let k = (parseFloat(
                    fahrenheit.value) - 32) * 5 / 9 + 273.15;
                kelvin.value = parseFloat(k.toFixed(2));
            }
            kelvin.oninput = function () {
                let f = (parseFloat(
                    kelvin.value) - 273.15) * 9 / 5 + 32;
                fahrenheit.value = parseFloat(f.toFixed(2));

                let c = (parseFloat(kelvin.value) - 273.15);
                celsius.value = parseFloat(c.toFixed(2));
                celCheck(c);
            }