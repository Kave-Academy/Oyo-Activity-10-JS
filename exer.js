// function run() {

//     const student = {
//         name: "David Rayy",
//         sclass: "VI",
//         rollno: 12,
//     };

//     let txt = "";
//     for (let x in student) {
//         txt += student[x] + " ,";
//     }
//     document.getElementById('output').innerHTML = txt;
// }

function run() {

    const student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12,
    };

    // const student = document.getElementById("input_text").value;

    const properties = Object.getOwnPropertyNames(student);

    document.getElementById('output').innerHTML = properties;
}