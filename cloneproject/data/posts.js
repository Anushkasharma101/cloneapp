import { USERS } from "./user";
 export const POSTS = [
    {
        imageurl:'https://i.pinimg.com/564x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg',
        user: USERS[0].user,
        likes:7870,
        caption:'Happy puddle life😂🤩😎',
        profile_picture:USERS[0].image,
        comments:[
            {
                user:'sillygirl',
                comment:'hmm! looks like happy bears are still here'
            },
            {
                user:'smartgang',
                comment:'I hope so I will have a real puddle too'
            },
        ],
    },
    {
        imageurl:'https://i.pinimg.com/564x/be/82/80/be8280ec58d1b84298dfafe3f380788a.jpg',
        user: USERS[1].user,
        likes:8950,
        caption:'With my shades💋💃🏻💅🏻',
        profile_picture:USERS[1].image,
        comments:[
            {
                user:'Peacesoul',
                comment:'Omg! you are looking damn beautiful😍😍😘'
            },
            {
                user:'sassyboy',
                comment:'ahhaa back in the game buddy😏'
            },
        ],
    },
 ]