let a = 10;
a = 20;
const b = 100;
// b = 50; causes an error

let str1 = "hey";
let ch = true;
 // functions here
function add(a, b) {
    let s = a+b;
    return s;
}
// string concatenation is also possible. as:
let str2 = "hello, "+str1;


// let old = "i anm a "+age+" old.";
// let new = 'i anm a ${age} old.';

const submit = document.getElementById("st");
submit.addEventListener("click", function() {
    const i1 = document.getElementById("nm");
    let name = i1.value;

    const i2 = document.getElementById("md1");
    let d1 = i2.value;

    const i3 = document.getElementById("md2");
    let d2 = i3.value;

    const i4 = document.getElementById("md3");
    let d3 = i4.value;

    const i5 = document.getElementById("rn");
    let roll = i5.value;

    const i6 = document.getElementById("cmt");
    let comt = i6.value;

    let r = `${name},${roll},${d1},${d2},${d3},${comt}`;
    let fb = new Blob([r], {type:"text/csv"});

    let downloadUrl = URL.createObjectURL(fb);
    let tempLink = document.createElement("a");    
    tempLink.href = downloadUrl; 
    tempLink.download = "form_data.csv";    
    tempLink.click();

    document.getElementById("form-box").classList.add("hidden");    
    document.getElementById("success-message").classList.remove("hidden");

});