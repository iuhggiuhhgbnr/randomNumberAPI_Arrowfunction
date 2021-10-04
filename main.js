var url = "https://random-data-api.com/api/cannabis/random_cannabis?size=1";
var url2 = "https://reqres.in/api/users";

var rapidCall = setInterval(getNumber,1000)
//var rapidCall = setTimeout(getNumber,2000)
function getNumber(){
    fetch(url,{method: 'GET',    
})
    .then(reponseThis =>{                           //reponseThis จริงๆแล้วเขียนค่าอะไรก็ได้ แต่หลักๆคนเขามักเขียน response
        //console.log(reponseThis)
        return reponseThis.json();
    })
    .then(getData => {                              //getData จริงๆแล้วเขียนค่าอะไรก็ได้ แต่หลักๆคนเขามักเขียน data
        //console.log(getData)
        appendDataToElement(getData[0].id)
        appendUidToElement(getData[0].uid)
    })
}

function appendDataToElement(idValue){
    var getPElemt = document.getElementById('numberValue');
    getPElemt.innerHTML = idValue;

}

function appendUidToElement(uidValue){
    var getPElemt2 = document.getElementById('uidValue')
    getPElemt2.innerHTML = uidValue;
}