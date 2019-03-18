# mini-wp
A simple blogging web-app made with vue

# Server API Routes


### Authentication Routes

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| /user/register     | POST      |none  | email:string, password:string | Create user and generate token   | 
| /user/login| POST | none | email:string, pasword: string | authenticate registered user and generate token |
| /user/Gsignin| POST | none | pasword: string | authenticate registered user and generate token |

### User CRUD Routes

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| /user/updateuser/:id    | PUT |token  | email:string, password:string, role:string |Update a user's attributes (admin only)   |
| /user/deleteuser/:id    | DELETE |token  | none |delete a user (admin and authenticated user only)   |

### Article CRUD Routes
| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| /listarticle    | GET   | none  | none |get all article from all user   | 
| /article/:id| GET | token | none | Get a user's info (admin and authenticated user only) |
| /addarticles/:id    | POST   |token  | article id:string, title:string, article:string, statusPublish:boolean | create article by user   | 
| /updatearticle/:id    | GET |token  | article Id | getting article to update   |
| /updatearticle/:id    | PUT |token  | article id:string, title:string, article:string, statusPublish:boolean |  update and save article to database  |
| /deletearticle/:id    | DELETE |token  | article id:string |  delete article from database  |