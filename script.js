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

function addStory(n) {
    let storyCont = document.querySelector(".status")
    let data = ` <div class="story-friend">
                            <div class="img"></div>
                            <div class="outline"></div>
                            <p class="friend_name">karanswarna...</p>
                        </div>`
    let tempData = ""
    for (let i = 0; i < n; i++) {
        tempData = tempData + data
    }
    storyCont.innerHTML = tempData

}
addStory(4)



function addCard() {

const posts = [
    {
        id: 1,
        userName: "karan_sw",
        userImg: "https://i.pravatar.cc/150?img=12",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "1h",
        likeCount: 1245,
        isLiked: false,
        commentCount: 87,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v1.mp4",
        caption: "Chasing dreams every single day ✨🔥"
    },
    {
        id: 2,
        userName: "tech_world",
        userImg: "https://i.pravatar.cc/150?img=5",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "3h",
        likeCount: 987,
        isLiked: true,
        commentCount: 34,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v2.mp4",
        caption: "New AI updates are insane 🚀🤖"
    },
    {
        id: 3,
        userName: "travel_vibes",
        userImg: "https://i.pravatar.cc/150?img=32",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "5h",
        likeCount: 5643,
        isLiked: false,
        commentCount: 342,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v3.mp4",
        caption: "Sunsets hit different 💛🌅"
    },
    {
        id: 4,
        userName: "fitness_arena",
        userImg: "https://i.pravatar.cc/150?img=48",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "12h",
        likeCount: 2110,
        isLiked: false,
        commentCount: 128,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v4.mp4",
        caption: "No excuses. Only results 💪🔥"
    },
    {
        id: 5,
        userName: "foodie_world",
        userImg: "https://i.pravatar.cc/150?img=23",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "1d",
        likeCount: 9021,
        isLiked: true,
        commentCount: 530,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v5.mp4",
        caption: "Best pasta in the city 😍🍝"
    }
];

   let container = document.querySelector("#content");
    let data = "";
    posts.forEach((elm, ind) => {
         data += `  <div class="card">
                        <div class="top">
                            <div class="user">
                                <div class="user_render">
                                    <div class="img" style="background-image: url(${elm.userImg});"></div>
                                    <div class="data">
                                        <div>
                                            <p>
                                               <span class="name"> ${elm.userName}</span>
                                               ${elm.isVerified ? '<i class="fa-solid fa-badge-check"></i>' : ""}
                                            </p>
                                            <span> . <span id="time">${elm.timeUploaded}</span></span>
                                        </div>
                                        <p id="audioData">
                                            Original audio
                                        </p>
                                    </div>
                                </div>

                                <div class="right-c">
                                    <p id="follow"> ${elm.isFollowed ? 'Follow' : "Unfollow"}</p>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                        </div>
                        <div class="video-img-post">
                            <video muted autoplay loop src="${posts[0].videoUrl}"></video>
                            <div class="volume">
                                 ${elm.isMuted ? '<i class="fa-solid fa-volume-slash"></i>' : '<i class="fa-solid fa-volume"></i>'}
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="intraction">
                                <span class="cell-1">
                                    <span>
                                        <i class="fa-light fa-heart"></i> <span class="likeCount">${elm.likeCount}</span>
                                    </span>
                                    <span>
                                        <i class="fa-light fa-comment"></i>
                                        <span class="commentCount">${elm.commentCount}</span>
                                    </span>
                                    <i class="fa-light fa-share-nodes"></i>
                                </span>
                                <span>
                                     ${elm.isVerified ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-light fa-bookmark"></i>'}
                                </span>
                            </div>
                            <div class="caption">
                                <span>
                                    <span class="name">${elm.userName}</span>
                                  ${elm.isVerified ? '<i class="fa-solid fa-badge-check"></i>' : ""}
                                </span>

                                <span id="captionText">${elm.caption}</span>
                            </div>
                        </div>
                    </div>`

        
    })
    container.innerHTML = data;
}

addCard()




function sugitionUser(n) {

    let sugitionCon = document.querySelector("#contact-newprofile")
    let data = `      <div class="user">
                        <div class="user_render">
                            <div class="img"></div>
                            <div class="data">
                                <div>
                                    <p>
                                        <span class="name"> howsongsarecreated</span>
                                        <i class="fa-solid fa-badge-check"></i>
                                    </p>
                                   </div>
                                <p id="audioData">
                                   suggested to you
                                </p>
                            </div>
                        </div>

                        <div class="right-c">
                            <p id="follow">Follow</p>
                        </div>
                    </div>`
    let tempData = ""
    for (let i = 0; i < n; i++) {
        tempData = tempData + data
    }
    sugitionCon.innerHTML = tempData
}

sugitionUser(5)

