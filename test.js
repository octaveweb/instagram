let posts = [
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
let story = []
posts.forEach((elm)=>{
   story.push(`{username: ${elm.userName}, userImg:${elm.userImg}, isVerified: ${elm.isVerified}}`) ;
})
console.log(story)
