// console.log("length => ", data.length);
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
        dom += "<i class=\"mx-2 fa fa-duotone " + gIcons() + " \"></i>";

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

function gIcons() {
    const data = [
        "fa-rectangle-barcode",
        "fa-barcode-alt",
        "fa-rectangle-code",
        "fa-rectangle-list",
        "fa-list-alt",
        "fa-rectangle-pro",
        "fa-pro",
        "fa-rectangle-terminal",
        "fa-rectangle-vertical",
        "fa-rectangle-portrait",
        "fa-rectangle-vertical-history",
        "fa-rectangle-wide",
        "fa-rectangle-xmark",
        "fa-rectangle-times",
        "fa-times-rectangle",
        "fa-window-close",
        "fa-rectangles-mixed",
        "fa-recycle",
        "fa-reel",
        "fa-refrigerator",
        "fa-registered",
        "fa-repeat",
        "fa-repeat-1",
        "fa-reply",
        "fa-mail-reply",
        "fa-reply-all",
        "fa-mail-reply-all",
        "fa-reply-clock",
        "fa-reply-time",
        "fa-republican",
        "fa-restroom",
        "fa-restroom-simple",
        "fa-retweet",
        "fa-rhombus",
        "fa-ribbon",
        "fa-right",
        "fa-arrow-alt-right",
        "fa-right-from-bracket",
        "fa-sign-out-alt",
        "fa-right-from-line",
        "fa-arrow-alt-from-left",
        "fa-right-left",
        "fa-exchange-alt",
        "fa-right-long",
        "fa-long-arrow-alt-right",
        "fa-right-to-bracket",
        "fa-sign-in-alt",
        "fa-right-to-line",
        "fa-arrow-alt-to-right",
        "fa-ring",
        "fa-rings-wedding",
        "fa-road",
        "fa-robot",
        "fa-rocket",
        "fa-rocket-launch",
        "fa-roller-coaster",
        "fa-rotate",
        "fa-sync-alt",
        "fa-rotate-exclamation",
        "fa-rotate-left",
        "fa-rotate-back",
        "fa-rotate-backward",
        "fa-undo-alt",
        "fa-rotate-right",
        "fa-redo-alt",
        "fa-rotate-forward",
        "fa-route",
        "fa-route-highway",
        "fa-route-interstate",
        "fa-router",
        "fa-rss",
        "fa-feed",
        "fa-ruble-sign",
        "fa-rouble",
        "fa-rub",
        "fa-ruble",
        "fa-ruler",
        "fa-ruler-combined",
        "fa-ruler-horizontal",
        "fa-ruler-triangle",
        "fa-ruler-vertical",
        "fa-rupee-sign",
        "fa-rupee",
        "fa-rupiah-sign",
        "fa-rv",
        "fa-s",
        "fa-sack",
        "fa-sack-dollar",
        "fa-salad",
        "fa-bowl-salad",
        "fa-sandwich",
        "fa-satellite",
        "fa-satellite-dish",
        "fa-sausage",
        "fa-saxophone",
        "fa-saxophone-fire",
        "fa-sax-hot",
        "fa-scale-balanced",
        "fa-balance-scale",
        "fa-scale-unbalanced",
        "fa-balance-scale-left",
        "fa-scale-unbalanced-flip",
        "fa-balance-scale-right",
        "fa-scalpel",
        "fa-scalpel-line-dashed",
        "fa-scalpel-path",
        "fa-scanner",
        "fa-scanner-image",
        "fa-scanner-gun",
        "fa-scanner-keyboard",
        "fa-scanner-touchscreen",
        "fa-scarecrow",
        "fa-scarf",
        "fa-school",
        "fa-scissors",
        "fa-cut",
        "fa-screen-users",
        "fa-users-class",
        "fa-screencast",
        "fa-screwdriver",
        "fa-screwdriver-wrench",
        "fa-tools",
        "fa-scribble",
        "fa-scroll",
        "fa-scroll-old",
        "fa-scroll-torah",
        "fa-torah",
        "fa-scrubber",
        "fa-scythe",
        "fa-sd-card",
        "fa-sd-cards",
        "fa-seal",
        "fa-seal-exclamation",
        "fa-seal-question",
        "fa-seat-airline",
        "fa-section",
        "fa-seedling",
        "fa-sprout",
        "fa-semicolon",
        "fa-send-back",
        "fa-send-backward",
        "fa-sensor",
        "fa-sensor-cloud",
        "fa-sensor-smoke",
        "fa-sensor-fire",
        "fa-sensor-on",
        "fa-sensor-triangle-exclamation",
        "fa-sensor-alert",
        "fa-server",
        "fa-shapes",
        "fa-triangle-circle-square",
        "fa-share",
        "fa-arrow-turn-right",
        "fa-mail-forward",
        "fa-share-all",
        "fa-arrows-turn-right",
        "fa-share-from-square",
        "fa-share-square",
        "fa-share-nodes",
        "fa-share-alt",
        "fa-sheep",
        "fa-shekel-sign",
        "fa-ils",
        "fa-shekel",
        "fa-sheqel",
        "fa-sheqel-sign",
        "fa-shelves",
        "fa-inventory",
        "fa-shelves-empty",
        "fa-shield",
        "fa-shield-blank",
        "fa-shield-alt",
        "fa-shield-check",
        "fa-shield-cross",
        "fa-shield-exclamation",
        "fa-shield-keyhole",
        "fa-shield-minus",
        "fa-shield-plus",
        "fa-shield-slash",
        "fa-shield-virus",
        "fa-shield-xmark",
        "fa-shield-times",
        "fa-ship"
    ]
    return data[aNumero(0, 170)];
}