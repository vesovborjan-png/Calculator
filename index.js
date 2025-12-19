
const display = document.getElementById(`Display`);

function dodaj(input){
    display.value += input
}

function iscisti(){
    display.value = "";
}

function presmetaj(){
    try{

    display.value = eval(display.value);
 }
 catch(error){
    display.value = "Error"
 };
 
}
function izbrisi(){
    display.value = display.value.slice(0,-1)
}

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if ("0123456789+-*/.".includes(key)) {
        dodaj(key);
    }

    if (key === "Enter") {
        presmetaj();
    }

    if (key === "Backspace") {
        izbrisi();
    }

    if (key === "Escape") {
        iscisti();
    }
});
