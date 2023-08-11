db.videos.insertMany(
    [
        {
          "title": "Webinar Career Readiness Workshop",
          "src": "https://youtu.be/McwACdmce0c",
          "thumbnail": "https://img.youtube.com/vi/McwACdmce0c/sddefault.jpg"
        },
        {
          "title": "What Is Innovation Ecosystem?",
          "src": "https://youtu.be/sjF_u6Qjwuc",
          "thumbnail": "https://img.youtube.com/vi/sjF_u6Qjwuc/sddefault.jpg"
        },
        {
            "title": "We`re Heading Into a New Cold War",
            "src": "https://youtu.be/72m0cK423-Q",
            "thumbnail": "https://img.youtube.com/vi/72m0cK423-Q/sddefault.jpg"
        },
        {
            "title": "Oppenheimer",
            "src": "https://youtu.be/uYPbbksJxIg",
            "thumbnail": "https://img.youtube.com/vi/uYPbbksJxIg/sddefault.jpg"
        },
        {
            "title": "KPK Tetapkan Kepala Basarnas Henri Alfiandi Tersangka Korupsi",
            "src": "https://youtu.be/dzocRW9e4cY",
            "thumbnail": "https://img.youtube.com/vi/dzocRW9e4cY/sddefault.jpg"
        },
        {
            "title": "Ngeliat laptop dengan logo ini?",
            "src": "https://youtu.be/hLXIik8dmdg",
            "thumbnail": "https://img.youtube.com/vi/hLXIik8dmdg/sddefault.jpg"
        },
        {
            "title": "Nyobain Samsung Galaxy Z Flip5 dan Fold5 Indonesia!",
            "src": "https://youtu.be/COaAOqIwjfw",
            "thumbnail": "https://img.youtube.com/vi/COaAOqIwjfw/sddefault.jpg"
        },
        {
            "title": "Sony Xperia 1 Mark V",
            "src": "https://youtu.be/A0p_sc4PGPE",
            "thumbnail": "https://img.youtube.com/vi/A0p_sc4PGPE/sddefault.jpg"
        },
        {
            "title": "Review realme 11 Pro+ Indonesia",
            "src": "https://youtu.be/N4rqRd9P4p8",
            "thumbnail": "https://img.youtube.com/vi/N4rqRd9P4p8/sddefault.jpg"
        }
    ]
);

let myVideos = [];
let vCursor = db.videos.find();
while(vCursor.hasNext()){    
    myVideos.push(vCursor.next());
}

db.products.insertMany(
    [
        {
          "name": "Gigih 1",
          "price": 10,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[0]._id
        },
        {
          "name": "Gigih 2",
          "price": 1,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[0]._id
        },
        {
          "name": "Product 1",
          "price": 1000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[1]._id
        },
        {
          "name": "KFC",
          "price": 80000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[2]._id
        },
        {
          "name": "Huawei",
          "price": 210000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[2]._id
        },
        {
          "name": "Nesting Doll",
          "price": 40000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[2]._id
        },
        {
          "name": "Little Boy",
          "price": 999999999,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[3]._id
        },
        {
          "name": "Fat Man",
          "price": 999999999,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[3]._id
        },
        {
          "name": "My Rupiah",
          "price": 1000000000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[4]._id
        },
        {
          "name": "Razer Blade 18",
          "price": 95000000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[5]._id
        },
        {
          "name": "Samsung Galaxy Z Flip5",
          "price": 21000000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[6]._id
        },
        {
          "name": "Sony Xperia 1 Mark V",
          "price": 30000000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[7]._id
        },
        {
          "name": "Realme 11 Pro+",
          "price": 13000000,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[7]._id
        },
        {
          "name": "Gigih 3",
          "price": 2,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[0]._id
        },
        {
          "name": "Gigih 4",
          "price": 3,
          "thumbnail": "<ImageLink>",
          "link": "<ProductLink>",
          "videoId": myVideos[0]._id
        }
      ]
);

db.comments.insertMany(
    [
        {
          "username": "sibejo",
          "content": "Semoga indonesia bebas korupsi",
          "timestamp": new Date("2023/07/28"),
          "videoId": myVideos[4]._id
        },
        {
          "username": "usergigih",
          "content": "Very inspiring",
          "timestamp": new Date("2023/07/27"),
          "videoId": myVideos[0]._id
        },
        {
          "username": "si_gigih",
          "content": "Interesting and wonderful",
          "timestamp": new Date("2023/07/27"),
          "videoId": myVideos[0]._id
        }
    ]
);

