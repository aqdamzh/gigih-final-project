# Installation

clone repository

### MongoDB Setup
Use initdb.js file to init database and populate data.
<details>
<summary>Example using MongoDB shell</summary>
<br>
copy and paste the code to MongoDB shell.
<br><br>

```javascript
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


```
</details>

Set your database path on `.env` file named `DATABASE_URL`.

### API
- run `npm install` to installing package
- run `npm run start` to run with normal nodejs
- run `npm run dev` to run with nodemon!

# DB Structure
![mongoDB-backend-GIGIH](https://github.com/aqdamzh/GIGI-3.0-midterm-backend-app/assets/34984085/61637ba0-673d-48eb-a103-841c3a239e86)



# API Documentation
<!-- TABLE OF CONTENTS -->
## API Table of Contents
* [GET /api/videos](#get-apivideos)
* [POST /api/videos](#post-apivideos)
* [GET /api/videos/:videoId](#get-apivideosvideoid)
* [PUT /api/videos/:videoId](#put-apivideosvideoid)
* [DELETE /api/videos/:videoId](#delete-apivideosvideoid)
* [GET /api/videos/:videoId/products](#get-apivideosvideoidproducts)
* [POST /api/videos/:videoId/products](#post-apivideosvideoidproducts)
* [GET /api/videos/:videoId/products/:productId](#get-apivideosvideoidproductsproductid)
* [PUT /api/videos/:videoId/products/:productId](#put-apivideosvideoidproductsproductid)
* [DELETE /api/videos/:videoId/products/:productId](#delete-apivideosvideoidproductsproductid)
* [GET /api/videos/:videoId/comments](#get-apivideosvideoidcomments)
* [POST /api/videos/:videoId/comments](#post-apivideosvideoidcomments)
* [GET /api/videos/:videoId/comments/:commentId](#get-apivideosvideoidcommentscommentid)
* [PUT /api/videos/:videoId/comments/:commentId](#put-apivideosvideoidcommentscommentid)
* [DELETE /api/videos/:videoId/comments/:commentId](#delete-apivideosvideoidcommentscommentid)

## GET /api/videos
  Returns all videos.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
[
  {
    "_id": "<ObjectId>",
    "title": "<VideoTitle>",
    "src": "<VideoLink>",
    "thumbnail": "<ImageLink>"
  },
  {
    "_id": "<ObjectId>",
    "title": "<VideoTitle>",
    "src": "<VideoLink>",
    "thumbnail": "<ImageLink>"
  },
  ...
]
```

## POST ***/api/videos***
  Create a new video.
* **URL Params**  
  None
* **Data Params**  
```json
{
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 201 CREATED
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
```

## GET ***/api/videos/:videoId***
  Return an existing video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
```

## PUT ***/api/videos/:videoId***
  Update an existing video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params** 
```json
{
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
```

## DELETE ***/api/videos/:videoId***
  Delete an existing video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "status" : "deleted",
  "video": {
    "_id": "<ObjectId>",
    "title": "<VideoTitle>",
    "src": "<VideoLink>",
    "thumbnail": "<ImageLink>"
  }
}
```

## GET ***/api/videos/:videoId/products***
  Returns all products based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
[
  {
    "_id": "<ObjectId>",
    "name": "<ProductName>",
    "price": 1000,
    "thumbnail": "<ImageLink>",
    "link": "<ProductLink>",
    "videoId": "<VideoId>"
  },
  {
    "_id": "<ObjectId>",
    "name": "<ProductName>",
    "price": 1000,
    "thumbnail": "<ImageLink>",
    "link": "<ProductLink>",
    "videoId": "<VideoId>"
  },
  ...
]
```

## POST ***/api/videos/:videoId/products***
  Add a new product based on video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
```json
{
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 201 CREATED
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>",
  "videoId": "<VideoId>"
}
```

## GET ***/api/videos/:videoId/products/:productId***
  Returns an existing product based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `productId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>",
  "videoId": "<VideoId>"
}
```

## PUT ***/api/videos/:videoId/products/:productId***
  Update an existing product based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `productId=[String]`
* **Data Params** 
```json
{
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>",
  "videoId": "<VideoId>"
}
```

## DELETE ***/api/videos/:videoId/products/:productId***
  Delete an existing product based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `productId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "status" : "deleted",
  "video": {
    "_id": "<ObjectId>",
    "name": "<ProductName>",
    "price": 1000,
    "thumbnail": "<ImageLink>",
    "link": "<ProductLink>",
    "videoId": "<VideoId>"
  }
}
```

## GET ***/api/videos/:videoId/comments***
  Returns all comments based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
[
  {
    "_id": "<ObjectId>",
    "username": "<Username>",
    "content": "<CommentContent>",
    "timestamp": "<Timestamp>",
    "videoId": "<VideoId>"
  },
  {
    "_id": "<ObjectId>",
    "username": "<Username>",
    "content": "<CommentContent>",
    "timestamp": "<Timestamp>",
    "videoId": "<VideoId>"
  },
  ...
]
```

## POST ***/api/videos/:videoId/comments***
  Add a new comment based on video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
```json
{
  "username": "<Username>",
  "content": "<CommentContent>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 201 CREATED
Content-Type: application/json
```
  Content: 
```json
{
    "status": "success",
    "comment": {
      "_id": "<ObjectId>",
      "username": "<Username>",
      "content": "<CommentContent>",
      "timestamp": "<Timestamp>",
      "videoId": "<VideoId>"
    }
}
```

## GET ***/api/videos/:videoid/comments/:commentId***
  Returns an existing comment based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `commentId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "username": "<Username>",
  "content": "<CommentContent>",
  "timestamp": "<Timestamp>",
  "videoId": "<VideoId>"
}
```

## PUT ***/api/videos/:videoId/comments/:commentId***
  Update an existing comment based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `commentId=[String]`
* **Data Params**  
```json
{
  "username": "<Username>",
  "content": "<CommentContent>"
}
```
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "username": "<Username>",
  "content": "<CommentContent>",
  "timestamp": "<Timestamp>",
  "videoId": "<VideoId>"
}
```

## DELETE /api/videos/:videoId/comments/:commentId
  Delete an existing comment based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `commentId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "status": "deleted",
  "comment": {
    "_id": "<ObjectId>",
    "username": "<Username>",
    "content": "<CommentContent>",
    "timestamp": "<Timestamp>",
    "videoId": "<VideoId>"
  }
}
```
