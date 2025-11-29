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




function iconsMenu() {
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
    // console.log(sub_list);


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
}
iconsMenu()


let postData = [
    {
        id: 1,
        userName: "karanswarnakar.dev",
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
    },

    // ------------------------------
    // 40 MORE POSTS BELOW
    // ------------------------------

    {
        id: 6,
        userName: "urban_shots",
        userImg: "https://i.pravatar.cc/150?img=7",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "2h",
        likeCount: 1432,
        isLiked: false,
        commentCount: 51,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v6.mp4",
        caption: "City vibes at night 🌃✨"
    },
    {
        id: 7,
        userName: "music_vrld",
        userImg: "https://i.pravatar.cc/150?img=14",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "4h",
        likeCount: 2214,
        isLiked: false,
        commentCount: 63,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v7.mp4",
        caption: "Music that touches your soul 🎶🔥"
    },
    {
        id: 8,
        userName: "coding_hub",
        userImg: "https://i.pravatar.cc/150?img=41",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "6h",
        likeCount: 1200,
        isLiked: false,
        commentCount: 22,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v8.mp4",
        caption: "JavaScript is life 💻⚡"
    },
    {
        id: 9,
        userName: "animalplanet_hd",
        userImg: "https://i.pravatar.cc/150?img=33",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "8h",
        likeCount: 5432,
        isLiked: true,
        commentCount: 302,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v9.mp4",
        caption: "Nature’s beauty 🐾🌿"
    },
    {
        id: 10,
        userName: "car_addiction",
        userImg: "https://i.pravatar.cc/150?img=19",
        isVerified: true,
        isFollowed: true,
        timeUploaded: "10h",
        likeCount: 7801,
        isLiked: false,
        commentCount: 412,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v10.mp4",
        caption: "Speed and power ❤️🚗💨"
    },

    {
        id: 11,
        userName: "artistic_mind",
        userImg: "https://i.pravatar.cc/150?img=28",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "11h",
        likeCount: 1530,
        isLiked: true,
        commentCount: 78,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v11.mp4",
        caption: "Sketching my imagination 🎨✨"
    },
    {
        id: 12,
        userName: "daily_quotes",
        userImg: "https://i.pravatar.cc/150?img=9",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "13h",
        likeCount: 4312,
        isLiked: false,
        commentCount: 201,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v12.mp4",
        caption: "Stay strong, stay positive 🌟"
    },
    {
        id: 13,
        userName: "street_photographyy",
        userImg: "https://i.pravatar.cc/150?img=50",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "14h",
        likeCount: 2600,
        isLiked: false,
        commentCount: 119,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v13.mp4",
        caption: "Another moment captured 📸🖤"
    },
    {
        id: 14,
        userName: "motivation_daily",
        userImg: "https://i.pravatar.cc/150?img=11",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "16h",
        likeCount: 3211,
        isLiked: true,
        commentCount: 148,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v14.mp4",
        caption: "Your only limit is your mind 💡🔥"
    },
    {
        id: 15,
        userName: "gaming_center",
        userImg: "https://i.pravatar.cc/150?img=44",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "18h",
        likeCount: 6120,
        isLiked: false,
        commentCount: 401,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v15.mp4",
        caption: "Victory feels amazing 🎮🔥"
    },

    {
        id: 16,
        userName: "bike_riders_club",
        userImg: "https://i.pravatar.cc/150?img=36",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "20h",
        likeCount: 7120,
        isLiked: false,
        commentCount: 312,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v16.mp4",
        caption: "Life on two wheels ❤️🏍️"
    },
    {
        id: 17,
        userName: "funny_clips",
        userImg: "https://i.pravatar.cc/150?img=17",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "22h",
        likeCount: 3411,
        isLiked: false,
        commentCount: 210,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v17.mp4",
        caption: "Try not to laugh 😂🔥"
    },
    {
        id: 18,
        userName: "tech_updates",
        userImg: "https://i.pravatar.cc/150?img=13",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "23h",
        likeCount: 5099,
        isLiked: true,
        commentCount: 321,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v18.mp4",
        caption: "Futuristic gadgets are coming 💡🤖"
    },
    {
        id: 19,
        userName: "nature_focus",
        userImg: "https://i.pravatar.cc/150?img=34",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "1d",
        likeCount: 2670,
        isLiked: false,
        commentCount: 119,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v19.mp4",
        caption: "Just green vibes 🌿💚"
    },
    {
        id: 20,
        userName: "beauty_glam",
        userImg: "https://i.pravatar.cc/150?img=6",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "1d",
        likeCount: 8890,
        isLiked: true,
        commentCount: 721,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v20.mp4",
        caption: "Be confident. Be you 💄✨"
    },

    {
        id: 21,
        userName: "travel_soul",
        userImg: "https://i.pravatar.cc/150?img=3",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "2d",
        likeCount: 3890,
        isLiked: false,
        commentCount: 220,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v21.mp4",
        caption: "Exploring new places ❤️🌍"
    },
    {
        id: 22,
        userName: "ai_community",
        userImg: "https://i.pravatar.cc/150?img=22",
        isVerified: true,
        isFollowed: true,
        timeUploaded: "2d",
        likeCount: 5500,
        isLiked: false,
        commentCount: 310,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v22.mp4",
        caption: "AI revolution has begun 🤖🔥"
    },
    {
        id: 23,
        userName: "coffee_vibes",
        userImg: "https://i.pravatar.cc/150?img=10",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "2d",
        likeCount: 4200,
        isLiked: true,
        commentCount: 188,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v23.mp4",
        caption: "Aesthetic mornings ☕✨"
    },
    {
        id: 24,
        userName: "luxury_life",
        userImg: "https://i.pravatar.cc/150?img=16",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "2d",
        likeCount: 12500,
        isLiked: false,
        commentCount: 890,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v24.mp4",
        caption: "Living the dream 💎💰"
    },
    {
        id: 25,
        userName: "gym_bro",
        userImg: "https://i.pravatar.cc/150?img=39",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "3d",
        likeCount: 3300,
        isLiked: false,
        commentCount: 211,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v25.mp4",
        caption: "Push harder every day 🔥🏋️‍♂️"
    },

    {
        id: 26,
        userName: "cars_world_hd",
        userImg: "https://i.pravatar.cc/150?img=26",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "3d",
        likeCount: 9900,
        isLiked: false,
        commentCount: 650,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v26.mp4",
        caption: "Dream machines ❤️🚗"
    },
    {
        id: 27,
        userName: "anime_editz",
        userImg: "https://i.pravatar.cc/150?img=45",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "3d",
        likeCount: 4100,
        isLiked: true,
        commentCount: 312,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v27.mp4",
        caption: "Anime moments 🔥🎬"
    },
    {
        id: 28,
        userName: "daily_laughs",
        userImg: "https://i.pravatar.cc/150?img=2",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "3d",
        likeCount: 5900,
        isLiked: true,
        commentCount: 412,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v28.mp4",
        caption: "Laugh more, stress less 😂💛"
    },
    {
        id: 29,
        userName: "creative_arts",
        userImg: "https://i.pravatar.cc/150?img=30",
        isVerified: true,
        isFollowed: true,
        timeUploaded: "4d",
        likeCount: 3400,
        isLiked: false,
        commentCount: 223,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v29.mp4",
        caption: "Creating magic with colors 🎨✨"
    },
    {
        id: 30,
        userName: "sports_highlights",
        userImg: "https://i.pravatar.cc/150?img=20",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "4d",
        likeCount: 10500,
        isLiked: true,
        commentCount: 780,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v30.mp4",
        caption: "Unbelievable moments ⚽🔥"
    },

    {
        id: 31,
        userName: "coding_daily",
        userImg: "https://i.pravatar.cc/150?img=35",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "4d",
        likeCount: 2100,
        isLiked: true,
        commentCount: 131,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v31.mp4",
        caption: "One bug at a time 🐞💻"
    },
    {
        id: 32,
        userName: "life_motivation",
        userImg: "https://i.pravatar.cc/150?img=31",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "4d",
        likeCount: 6200,
        isLiked: false,
        commentCount: 420,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v32.mp4",
        caption: "Do it for yourself 💫🔥"
    },
    {
        id: 33,
        userName: "pet_lovers",
        userImg: "https://i.pravatar.cc/150?img=25",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "5d",
        likeCount: 9900,
        isLiked: true,
        commentCount: 532,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v33.mp4",
        caption: "Cutest pets ever 🐶❤️"
    },
    {
        id: 34,
        userName: "tech_creators",
        userImg: "https://i.pravatar.cc/150?img=4",
        isVerified: true,
        isFollowed: true,
        timeUploaded: "5d",
        likeCount: 7800,
        isLiked: false,
        commentCount: 312,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v34.mp4",
        caption: "Tech that inspires 🚀💡"
    },
    {
        id: 35,
        userName: "world_of_art",
        userImg: "https://i.pravatar.cc/150?img=42",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "5d",
        likeCount: 3000,
        isLiked: false,
        commentCount: 201,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v35.mp4",
        caption: "Art is freedom 🖌️💖"
    },

    {
        id: 36,
        userName: "night_photography",
        userImg: "https://i.pravatar.cc/150?img=24",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "6d",
        likeCount: 7900,
        isLiked: false,
        commentCount: 480,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v36.mp4",
        caption: "Stars look beautiful tonight 🌌✨"
    },
    {
        id: 37,
        userName: "daily_fitness",
        userImg: "https://i.pravatar.cc/150?img=47",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "6d",
        likeCount: 5100,
        isLiked: true,
        commentCount: 264,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v37.mp4",
        caption: "No pain, no gain 💪🔥"
    },
    {
        id: 38,
        userName: "memes_factory",
        userImg: "https://i.pravatar.cc/150?img=15",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "6d",
        likeCount: 8300,
        isLiked: true,
        commentCount: 530,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v38.mp4",
        caption: "Relatable memes 😭🔥"
    },
    {
        id: 39,
        userName: "fun_tech_facts",
        userImg: "https://i.pravatar.cc/150?img=8",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "7d",
        likeCount: 4500,
        isLiked: false,
        commentCount: 298,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v39.mp4",
        caption: "Tech facts you didn’t know 🤯📱"
    },
    {
        id: 40,
        userName: "wildlife_channel",
        userImg: "https://i.pravatar.cc/150?img=27",
        isVerified: true,
        isFollowed: true,
        timeUploaded: "7d",
        likeCount: 10000,
        isLiked: false,
        commentCount: 692,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v40.mp4",
        caption: "Wildlife is beautiful 🦁🌿"
    },

    {
        id: 41,
        userName: "home_cafe",
        userImg: "https://i.pravatar.cc/150?img=18",
        isVerified: false,
        isFollowed: false,
        timeUploaded: "7d",
        likeCount: 2900,
        isLiked: true,
        commentCount: 143,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v41.mp4",
        caption: "Homemade goodness 🍰☕"
    },
    {
        id: 42,
        userName: "luxury_travel",
        userImg: "https://i.pravatar.cc/150?img=29",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "1w",
        likeCount: 15500,
        isLiked: false,
        commentCount: 1090,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v42.mp4",
        caption: "Travel goals ✈️🌍"
    },
    {
        id: 43,
        userName: "motivational_king",
        userImg: "https://i.pravatar.cc/150?img=1",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "1w",
        likeCount: 4800,
        isLiked: true,
        commentCount: 312,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v43.mp4",
        caption: "Your future starts today 💫🔥"
    },
    {
        id: 44,
        userName: "street_cars",
        userImg: "https://i.pravatar.cc/150?img=40",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "1w",
        likeCount: 11200,
        isLiked: false,
        commentCount: 660,
        isSaved: false,
        isMuted: true,
        videoUrl: "assets/v44.mp4",
        caption: "Clean builds only 🚗✨"
    },
    {
        id: 45,
        userName: "fitness_girl",
        userImg: "https://i.pravatar.cc/150?img=21",
        isVerified: true,
        isFollowed: true,
        timeUploaded: "1w",
        likeCount: 9200,
        isLiked: true,
        commentCount: 510,
        isSaved: true,
        isMuted: true,
        videoUrl: "assets/v45.mp4",
        caption: "Strong is beautiful 💪💖"
    }
];
let suggestedUsers = [
    { userName: "trendbytes", isVerified: true, userImg: "https://i.pravatar.cc/150?img=11", suggestedText: "Suggested for you" },
    { userName: "daily.tech.vibes", isVerified: false, userImg: "https://i.pravatar.cc/150?img=22", suggestedText: "Because you follow tech creators" },
    { userName: "fitpulse_hub", isVerified: false, userImg: "https://i.pravatar.cc/150?img=33", suggestedText: "Suggested based on your activity" },
    { userName: "travel.wave_", isVerified: true, userImg: "https://i.pravatar.cc/150?img=44", suggestedText: "Suggested for you" },
    { userName: "codecraft_lab", isVerified: false, userImg: "https://i.pravatar.cc/150?img=55", suggestedText: "You might like this creator" },
    { userName: "foodieuniverse", isVerified: true, userImg: "https://i.pravatar.cc/150?img=66", suggestedText: "Suggested for you" },
    { userName: "music.vrld", isVerified: false, userImg: "https://i.pravatar.cc/150?img=77", suggestedText: "Similar to accounts you follow" },
    { userName: "designsphere_io", isVerified: false, userImg: "https://i.pravatar.cc/150?img=88", suggestedText: "Suggested for you" },
    { userName: "gamerxpro_", isVerified: true, userImg: "https://i.pravatar.cc/150?img=99", suggestedText: "Popular near you" },
    { userName: "minimalshots", isVerified: false, userImg: "https://i.pravatar.cc/150?img=12", suggestedText: "Suggested for you" },

    { userName: "artisticframe", isVerified: true, userImg: "https://i.pravatar.cc/150?img=13", suggestedText: "Trending in your area" },
    { userName: "lululifestyle", isVerified: false, userImg: "https://i.pravatar.cc/150?img=14", suggestedText: "Suggested because you follow lifestyle pages" },
    { userName: "hypebeatsworld", isVerified: false, userImg: "https://i.pravatar.cc/150?img=15", suggestedText: "Suggested for you" },
    { userName: "theplantspace_", isVerified: true, userImg: "https://i.pravatar.cc/150?img=16", suggestedText: "Because you interacted with plant posts" },
    { userName: "devsnapdaily", isVerified: false, userImg: "https://i.pravatar.cc/150?img=17", suggestedText: "Suggested for you" },
    { userName: "coffee.n.chill", isVerified: false, userImg: "https://i.pravatar.cc/150?img=18", suggestedText: "For you" },
    { userName: "cinematicshots.inc", isVerified: true, userImg: "https://i.pravatar.cc/150?img=19", suggestedText: "Suggested for you" },
    { userName: "learnpythonfast", isVerified: false, userImg: "https://i.pravatar.cc/150?img=20", suggestedText: "Suggested because you follow coding creators" },
    { userName: "streetclicksx", isVerified: false, userImg: "https://i.pravatar.cc/150?img=21", suggestedText: "Popular now" },
    { userName: "fashion.zone", isVerified: true, userImg: "https://i.pravatar.cc/150?img=23", suggestedText: "Suggested for you" },

    { userName: "mindfuelquotes", isVerified: false, userImg: "https://i.pravatar.cc/150?img=24", suggestedText: "Because you follow motivation pages" },
    { userName: "techreviews360", isVerified: true, userImg: "https://i.pravatar.cc/150?img=25", suggestedText: "Suggested for you" },
    { userName: "urban_sneakerhub", isVerified: false, userImg: "https://i.pravatar.cc/150?img=26", suggestedText: "You may like this account" },
    { userName: "world.of.dogs", isVerified: false, userImg: "https://i.pravatar.cc/150?img=27", suggestedText: "Suggested for you" },
    { userName: "macroshotz", isVerified: true, userImg: "https://i.pravatar.cc/150?img=28", suggestedText: "For you" },
    { userName: "danceflix", isVerified: false, userImg: "https://i.pravatar.cc/150?img=29", suggestedText: "Suggested based on your interests" },
    { userName: "coding.hub.official", isVerified: true, userImg: "https://i.pravatar.cc/150?img=30", suggestedText: "You follow similar creators" },
    { userName: "beautyverse_", isVerified: false, userImg: "https://i.pravatar.cc/150?img=31", suggestedText: "Suggested for you" },
    { userName: "cars.nation", isVerified: true, userImg: "https://i.pravatar.cc/150?img=34", suggestedText: "Popular around you" },
    { userName: "mobilegamerworld", isVerified: false, userImg: "https://i.pravatar.cc/150?img=35", suggestedText: "Suggested for you" },

    { userName: "memekingdom", isVerified: false, userImg: "https://i.pravatar.cc/150?img=36", suggestedText: "Trending now" },
    { userName: "chefdelightstudio", isVerified: true, userImg: "https://i.pravatar.cc/150?img=37", suggestedText: "Suggested for you" },
    { userName: "motovlogs_world", isVerified: false, userImg: "https://i.pravatar.cc/150?img=38", suggestedText: "You might like this" },
    { userName: "nature.paradise_hd", isVerified: false, userImg: "https://i.pravatar.cc/150?img=39", suggestedText: "Because you follow nature creators" },
    { userName: "ai_creativehub", isVerified: true, userImg: "https://i.pravatar.cc/150?img=40", suggestedText: "Suggested for you" },
    { userName: "fitnessgoalsdaily", isVerified: false, userImg: "https://i.pravatar.cc/150?img=41", suggestedText: "Suggested based on posts you liked" },
    { userName: "bookreads_club", isVerified: false, userImg: "https://i.pravatar.cc/150?img=42", suggestedText: "Suggested for you" },
    { userName: "thecodingworld", isVerified: true, userImg: "https://i.pravatar.cc/150?img=43", suggestedText: "For you" },
    { userName: "luxurycarshots", isVerified: true, userImg: "https://i.pravatar.cc/150?img=45", suggestedText: "Suggested for you" },
    { userName: "fashionpulse_zone", isVerified: false, userImg: "https://i.pravatar.cc/150?img=46", suggestedText: "Suggested for you" },

    { userName: "gamingstudio__", isVerified: false, userImg: "https://i.pravatar.cc/150?img=47", suggestedText: "Because you follow gaming pages" },
    { userName: "world_recipes_hub", isVerified: true, userImg: "https://i.pravatar.cc/150?img=48", suggestedText: "Suggested for you" },
    { userName: "dailyartculture", isVerified: false, userImg: "https://i.pravatar.cc/150?img=49", suggestedText: "You liked similar posts" },
    { userName: "dogsparadise_official", isVerified: true, userImg: "https://i.pravatar.cc/150?img=50", suggestedText: "Suggested for you" },
    { userName: "rapidtechnews", isVerified: false, userImg: "https://i.pravatar.cc/150?img=51", suggestedText: "For you" },
    { userName: "streetfashion.inc", isVerified: true, userImg: "https://i.pravatar.cc/150?img=52", suggestedText: "Suggested for you" },
    { userName: "greenplanet_eco", isVerified: false, userImg: "https://i.pravatar.cc/150?img=53", suggestedText: "Because you follow eco creators" },
    { userName: "codingwithfun_", isVerified: false, userImg: "https://i.pravatar.cc/150?img=54", suggestedText: "Suggested for you" },
    { userName: "cars_of_future", isVerified: true, userImg: "https://i.pravatar.cc/150?img=56", suggestedText: "Popular now" },
    { userName: "travelgraphystudio", isVerified: false, userImg: "https://i.pravatar.cc/150?img=57", suggestedText: "Suggested for you" },

    { userName: "dailylaughsgallery", isVerified: false, userImg: "https://i.pravatar.cc/150?img=58", suggestedText: "Trending for you" }
];


let posts = postData.slice(0, 5)
let newSuggested = suggestedUsers.slice(0, 5)
let story = [];

posts.forEach(elm => {
    story.push({
        userName: elm.userName,
        userImg: elm.userImg,
        isVerified: elm.isVerified
    });
});










function addStory(n) {
    
    let storyCont = document.querySelector(".status")
    let data = ""
    story.forEach((elm) => {

        data += ` <div class="story-friend">
                               <div class="img" style="background-image: url(${elm.userImg});"></div>
                                <div class="outline"></div>
                                <p class="friend_name">${elm.userName}</p>
                </div>`
        
    })  

    storyCont.innerHTML = data


}
addStory(5)



function addCard() {


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
                                    <span class="like">
                                   
                                    ${elm.isFollowed ? ' <i class="fa-light fa-heart"></i>' : '<i class="fa-sharp fa-solid fa-heart" style="color:red"></i>'}
                                         <span class="likeCount">${elm.likeCount}</span>
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

                                <span id="captionText">${elm.caption}...<span class="see">see more</span></span>
                            </div>
                        </div>
                    </div>`


    })
    container.innerHTML = data;
}

addCard()

function like(){

let addlike = document.querySelectorAll(".cell-1 i.fa-heart")
console.log(addlike);



}
like()

function sugitionUser() {

    let sugitionCon = document.querySelector("#contact-newprofile")
    let data = ""
    newSuggested.forEach((elm) => {
        data += `      <div class="user">
                        <div class="user_render">
                           <div class="img" style="background-image: url(${elm.userImg});"></div>
                            <div class="data">
                                <div>
                                    <p>
                                        <span class="name"> ${elm.userName}</span>
                                               ${elm.isVerified ? '<i class="fa-solid fa-badge-check"></i>' : ""}
                                    </p>
                                   </div>
                                <p id="audioData">
                                   ${elm.suggestedText}
                                </p>
                            </div>
                        </div>

                        <div class="right-c">
                            <p id="follow">Follow</p>
                        </div>
                    </div>`

    })

    sugitionCon.innerHTML = data
}

sugitionUser()

