const data = db;
const container = document.body.querySelector(".contianer-body")
const Anterior = document.body.querySelector(".Anterior");
const Siguiente = document.body.querySelector(".Siguiente");
const indicadorHome = document.body.querySelector(".indicadorHome");
const indicadorEnd = document.body.querySelector(".indicadorEnd");
const inputCopi = document.body.querySelector(".input-copi");
const prwIcon = document.body.querySelector(".prw-icon");

let IndexInicio = 0,
    IndexEnd = 100,
    style = " fa-duotone";
createBody();

Siguiente.addEventListener("click", () => {
    IndexInicio += 100;
    indicadorHome.innerHTML = IndexInicio;
    IndexEnd += 100;
    indicadorEnd.innerHTML = IndexEnd;
    createBody();
});
Anterior.addEventListener("click", () => {
    IndexInicio -= 100;
    indicadorHome.innerHTML = IndexInicio;
    IndexEnd -= 100;
    indicadorEnd.innerHTML = IndexEnd;
    createBody();
});

function aciveClick() {
    const itemIcon = document.body.querySelectorAll(".item-icon");
    itemIcon.forEach(element => {
        element.addEventListener("click", () => {
            inputCopi.value = element.innerHTML;
            prwIcon.innerHTML = element.innerHTML;
        });
    });
}
document.body.querySelector(".btn-copi").addEventListener("click", () => {
    inputCopi.classList.toggle("form-control");
    inputCopi.classList.toggle("is-valid");
    inputCopi.classList.toggle("border");

    inputCopi.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    document.body.querySelector(".btn-copi").focus();
    setTimeout(() => {
        inputCopi.classList.toggle("form-control");
        inputCopi.classList.toggle("is-valid");
        inputCopi.classList.toggle("border");
    }, 3000);
});

function createBody() {
    var a = "";
    for (var i = IndexInicio; i < IndexEnd; i++) {
        a += "<article class=\"item-icon btn border d-flex m-2 my-auto d-flex p-1\" data-bs-toggle=\"modal\" data-bs-target=\"#ModalIcons\"><i class=\"fa m-auto" + style + " " + data[i] + "\"></i></article>";
    }
    container.innerHTML = a;
    aciveClick();
}