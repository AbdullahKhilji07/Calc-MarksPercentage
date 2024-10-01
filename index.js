                                                        
function getPer() {

    let name= prompt("Enter your name")
    
    let stdTm_Marks = document.getElementById("tm1").value;
    
    let stdobt_Marks = document.getElementById("obt1").value;
    res = (stdobt_Marks / stdTm_Marks)*100 ;
    document.getElementById("change").innerHTML = `<h1> Dear ${name}, have got it ${res.toFixed(2)} % <h1/>`}

