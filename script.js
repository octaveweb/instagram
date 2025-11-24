function icon() {
  let iTreger = [
    {
        fildName: "Home",
        classActive: "fa-solid fa-house-chimney",
        classNonActive: "fa-light fa-house-chimney"
    },
    {
        fildName: "Search",
        classActive: "fa-sharp fa-solid fa-magnifying-glass",
        classNonActive: "fa-regular fa-magnifying-glass"
    },
    {
        fildName: "Explore",
        classActive: "fa-solid fa-compass",
        classNonActive: "fa-regular fa-compass"
    },
    {
        fildName: "Reels",
        classActive: "fa-solid fa-airplay",
        classNonActive: "fa-regular fa-airplay"
    },
    {
        fildName: "Massages",
        classActive: "fa-solid fa-share-from-square",
        classNonActive: "fa-light fa-share-from-square"
    },
    {
        fildName: "Notifications",
        classActive: "fa-solid fa-heart",
        classNonActive: "fa-light fa-heart"
    },
    {
        fildName: "Create",
        classActive: "fa-solid fa-plus",
        classNonActive: "fa-light fa-plus"
    },
    {
        fildName: "Dashboard",
        classActive: "fa-solid fa-chart-simple",
        classNonActive: "fa-light fa-chart-simple"
    },
    {
        fildName: "Profile",
        classActive: "profile_img_active",
        classNonActive: "profile_img"
    },
    {
        fildName: "More",
        classActive: "fa-solid fa-bars",
        classNonActive: "fa-regular fa-bars"
    },
    {
        fildName: "Also from Meta",
        classActive: "fa-solid fa-box",
        classNonActive: "fa-regular fa-box"
    }
];

    let listElements = document.querySelectorAll(".elements ul li");

    listElements.forEach((elm, indx) => {
        elm.addEventListener("click", () => {
            console.log(elm);

            let i_tag = elm.querySelector("i");
            if (!i_tag) return;

            let activeClasses = iTreger[indx].classActive.split(" ");
            let nonactiveClasses = iTreger[indx].classNonActive.split(" ");

            listElements.forEach((otherElm, otherIndex) => {
                let other_i = otherElm.querySelector("i");
                if (!other_i) return;

                let data = iTreger[otherIndex];
                if (!data) return; // <= FIX

                if (!data.classActive || !data.classNonActive) return; // <= FIX

                let otherActive = data.classActive.split(" ");
                let otherNonActive = data.classNonActive.split(" ");

                otherActive.forEach(c => other_i.classList.remove(c));
                otherNonActive.forEach(c => other_i.classList.add(c));
            });

            nonactiveClasses.forEach(c => i_tag.classList.remove(c));
            activeClasses.forEach(c => i_tag.classList.add(c));
        });
    });

}
icon()



