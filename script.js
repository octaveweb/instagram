function loader_bar(a) {
    let gain = 0
    let time = a
    let bar = document.getElementById("loder-bar")
    let int = setInterval(() => {
        gain++;
        bar.style.width = `${gain}%`;
    }, time)
    setTimeout(() => {
        clearInterval(int)
    }, (time * 100));
    setTimeout(() => {
        bar.style.opacity = "0%"
    }, (time * 150));
}




let items = document.querySelectorAll(".list");

const icons = [
    { name: "Home", active: "fa-solid fa-house-chimney", inactive: "fa-light fa-house-chimney" },
    { name: "Search", active: "fa-sharp fa-solid fa-magnifying-glass", inactive: "fa-regular fa-magnifying-glass" },
    { name: "Explore", active: "fa-solid fa-compass", inactive: "fa-regular fa-compass" },
    { name: "Reels", active: "fa-solid fa-airplay", inactive: "fa-regular fa-airplay" },
    { name: "Messages", active: "fa-solid fa-share-from-square", inactive: "fa-light fa-share-from-square" },
    { name: "Notifications", active: "fa-solid fa-heart", inactive: "fa-light fa-heart" },
    { name: "Create", active: "fa-solid fa-plus", inactive: "fa-light fa-plus" },
    { name: "Dashboard", active: "fa-solid fa-chart-simple", inactive: "fa-light fa-chart-simple" },
    { name: "Profile", active: "none active ", inactive: "active" },
    { name: "More", active: "fa-solid fa-bars", inactive: "fa-light fa-bars" },
    { name: "Also from Meta", active: "fa-solid fa-box", inactive: "fa-light fa-box" }
];

items.forEach((elm, indx) => {
    let span_tag = elm.querySelector("span");
    span_tag.innerHTML = icons[indx].name;
    elm.addEventListener("click", () => {
        // console.log(elm);
       

        let i_tag = elm.querySelector("i");
        if (!i_tag) return;

        let activeClass = icons[indx].active.split(" ");
        let nonActiveClass = icons[indx].inactive.split(" ");

        items.forEach((otherElm, otherIndex) => {
            let other_i = otherElm.querySelector("i");
                 otherElm.style.zIndex = "1"
                  elm.style.zIndex = "10"
            if (!other_i) return;

            let data = icons[otherIndex];
            if (!data) return;

            if (!data.active || !data.inactive) return;

            let otherActive = data.active.split(" ");
            let otherNonActive = data.inactive.split(" ");

            otherActive.forEach(c => other_i.classList.remove(c));
            otherNonActive.forEach(c => other_i.classList.add(c));

        });

        nonActiveClass.forEach(c => i_tag.classList.remove(c));
        activeClass.forEach(c => i_tag.classList.add(c));


        document.title = `instagram - ${icons[indx].name}`
    });
});
let sub_list = document.querySelectorAll(".dropdown")
console.log(sub_list);


// dropdown indexes linked to menu indexes
const dropdownMap = {
    6: 0,   // Create
    9: 1,   // More
    10: 2   // Also from Meta
};

items.forEach((elm, indx) => {
    elm.addEventListener("click", (e) => {
        e.stopPropagation();

        // If no dropdown for this item → close all and exit
        if (dropdownMap[indx] === undefined) {
            closeAllDropdowns();
            return;
        }

        let currentDrop = sub_list[dropdownMap[indx]];

        // If open → close it
        if (currentDrop.style.display === "block") {
            closeAllDropdowns();
            return;
        }

        // Close all others
        closeAllDropdowns();

        // Open this dropdown
        currentDrop.style.display = "block";
        currentDrop.style.zIndex = "10";

        if (dropdownMap[indx] === 0) {
            currentDrop.classList.add("a-down"); // Create
        } else {
            currentDrop.classList.add("a-top"); // More, Also from Meta
        }
    });
});

// Close on outside click
document.body.addEventListener("click", () => {
    closeAllDropdowns();
});

// Close function
function closeAllDropdowns() {
    sub_list.forEach(el => {
        el.style.display = "none";
        el.classList.remove("a-top", "a-down");
    });
}
