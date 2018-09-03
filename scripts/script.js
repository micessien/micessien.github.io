// function mouselog(event) {
//     let target = event.target;

//     if (even.target.src == "images/photo1.jpg") {
//         even.target.src = "images/photo2.jpg";
//     } else {
//         even.target.src = "images/photo1.jpg";
//     }
//     // text.value += event.type + ' [target: ' + event.target.className + ']\n'
//     // text.scrollTop = text.scrollHeight
// }

// -------------------------------
// Change the image
function onImg() {
    this.setAttribute("src", "images/photo2.jpg");
}

function outImg() {
    this.setAttribute("src", "images/photo1.jpg");
}

// Enter the data name
function myName() {
    var person = prompt("Please enter your name");
    if (person !== "" && person !== null) {
        document.getElementById("person").innerHTML = 'Yes <span class="name">' + person + '</span>, you are with me !';
    } else {
        alert('Hummm! you need to put your name !');
    }
}