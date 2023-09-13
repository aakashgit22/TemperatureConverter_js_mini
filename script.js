var cel = document.getElementById('cel');
        var fah = document.getElementById('fah');

        cel.addEventListener('input', function(){
            // console.log("cel changed");
            let c = this.value;
             let fahFormula = (c*9/5) +32;  
            //  to remove extra decimal
            if(!Number.isInteger(fahFormula)){
                fahFormula = fahFormula.toFixed(4);
            }
            fah.value = fahFormula;  
          }
        )
        fah.addEventListener('input', function(){
            // console.log("fah changed");
            let f = this.value;
            let celFormula = (f-32) *5/9;
             //  to remove extra decimal
             if(!Number.isInteger(celFormula)){
                celFormula = celFormula.toFixed(4);
            }
            cel.value = celFormula;
        }
        )