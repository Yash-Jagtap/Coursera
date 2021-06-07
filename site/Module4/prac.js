// var company = new Object();
// company.name = "FaceBook";
// company.ceo = new Object();
// company["2"] = 69;
// company.ceo.FirstName = "Mark";
// company.ceo["Last Name"] = "Zuckerberg";
//console.log(this)

//console.log(company["2"]);
// console.log("HI hello");
function makeMutitplier(multiplier){
    var myFunc = function(x){
        return multiplier * x;

    };
    return myFunc;
};
var xx = makeMutitplier(3);
// console.log(makeMutitplier);
// console.log(xx)
// function Circle(radius){
//    this.radius = radius;
//    this.area = 
//    function(){
//     return Math.PI * this.radius*radius;
//    };
//     console.log(this);
// };
// var a = new Circle(10);
// console.log(a.area())
myObj = {
 Name : "Yaakov",
 Course : "HTML/CSS/JS",
 Platform : "Coursera"
};
console.log(myObj.Name)




for (var prop in myObj){
    console.log(prop + ":" + myObj[prop])
};