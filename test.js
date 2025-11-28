const posts = [
    {
        id: 1,
        userName: "karan_sw",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "1h",
        likeCount: 1245,
        isLiked: false,
        commentCount: 87,
        isSaved: false,
        isMuted: false,
        videoUrl: "assets/v1.mp4",
        caption: "Chasing dreams every single day ✨🔥"
    },
    {
        id: 2,
        userName: "tech_world",
        isVerified: false,
        isFollowed: true,
        timeUploaded: "3h",
        likeCount: 987,
        isLiked: true,
        commentCount: 34,
        isSaved: true,
        isMuted: false,
        videoUrl: "assets/v2.mp4",
        caption: "New AI updates are insane 🚀🤖"
    },
    {
        id: 3,
        userName: "travel_vibes",
        isVerified: true,
        isFollowed: false,
        timeUploaded: "5h",
        likeCount: 5643,
        isLiked: false,
        commentCount: 342,
        isSaved: false,
        isMuted: false,
        videoUrl: "assets/v3.mp4",
        caption: "Sunsets hit different 💛🌅"
    },
    {
        id: 4,
        userName: "fitness_arena",
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
        isVerified: true,
        isFollowed: false,
        timeUploaded: "1d",
        likeCount: 9021,
        isLiked: true,
        commentCount: 530,
        isSaved: true,
        isMuted: false,
        videoUrl: "assets/v5.mp4",
        caption: "Best pasta in the city 😍🍝"
    }
];


posts.forEach((elm, indx) => {
console.log(elm.likeCount);

})