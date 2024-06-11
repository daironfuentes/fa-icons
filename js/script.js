const dataIcons = db;
const theme = document.body.querySelector(".theme");
const themeLight = document.body.querySelector(".theme-light");
const themeDark = document.body.querySelector(".theme-dark");


console.log("loader => ", localStorage.getItem("theme"))

if (localStorage.getItem("theme") == "dark") {
    themeFun("dark");
} else {
    themeFun("light");
}



themeLight.addEventListener("click", () => {
    themeFun("dark");
    createCookies("dark");
})
themeDark.addEventListener("click", () => {
    themeFun("light");
    createCookies("light");
})

function themeFun(themeData) {
    if (themeData == "dark") {
        document.body.setAttribute("data-bs-theme", "dark");
        theme.classList.add("dark");
    } else {
        document.body.setAttribute("data-bs-theme", "light");
        theme.classList.remove("dark");
    }
}

function createCookies(data) {
    localStorage.setItem("theme", data);
    console.log("update => ", localStorage.getItem("theme"))
}

let dom = "";
for (let i = 0; i < 20; i++) {
    dom += "<div class=\"row-bg-icons\">";
    for (let b = 0; b < 300; b++) {
        dom += "<i class=\"mx-2 fa fa-duotone " + dataIcons[aNumero(0, dataIcons.length)] + " \"></i>";

    }
    dom += "</div>"
}
document.body.querySelector(".bg-icons-content").innerHTML = dom;


function aNumero(a, b, c) {
    var temp;
    if (b == undefined) {
        b = a;
        a = 0;
    }
    do { temp = Math.random() * b; } while (a >= temp);
    if (c == undefined) { temp = Math.round(temp); } else { temp = temp.toFixed(c); }
    return temp;
}