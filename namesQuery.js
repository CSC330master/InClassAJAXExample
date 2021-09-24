//Sahar Al Seesi
//09/29/2020
//Module exports a function for a route requesting names starting with a given 
// prefix

const utils = require("./utils.js")

//array with names
let a = new Array();
a[1]="Anna"
a[2]="Adam"
a[3]="Cinderella"
a[4]="Chris"
a[5]="Eva"
a[6]="Fiona"
a[7]="Gunda"
a[8]="Hege"
a[9]="Inga"
a[10]="Johanna"
a[11]="Kitty"
a[12]="Jack"
a[13]="Nina"
a[14]="James"
a[15]="Petunia"
a[16]="Amanda"
a[17]="Raquel"
a[18]="Cindy"
a[19]="Doris"
a[20]="Eve"
a[21]="Evita"
a[22]="Sunniva"
a[23]="Tove"
a[24]="John"
a[25]="Violet"
a[26]="Liza"
a[27]="Elizabeth"
a[28]="Ellen"
a[29]="Wenche"
a[30]="Vicky"

// function serves up an object {name : data} where data is a subarray of
// the golbal array a with names starting with query.letters
exports.getNames = function(query,response) {
        //check if query object has the expected field property
        if (query.letters) { 
            let names = a.filter(containsPrefix)
            let responseObj = {names : names};
            response.writeHead(200,{"Content-Type":"application/json"});
            response.write(JSON.stringify(responseObj));
            response.end();
        }
        else // should also call sendJSONObj above but I left it the way we wrote
             // it during lecture
            utils.sendJSONObj(respose,400,{error: "Invalid query string"});
      

// callback function for filter. Notice that it is defined locally inside
// getNames to make query accessible within its scope
    function containsPrefix(name) {
        return (name.toLowerCase().indexOf(query.letters.toLowerCase()) == 0);
    }

}
