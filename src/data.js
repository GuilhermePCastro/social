import { v4 as uuid } from 'uuid';

const user = {
    name: "Thyago Quintas",
    username: "thyagoquintas",
    img: "https://avatars.githubusercontent.com/u/1860278?v=4",
    id: uuid()
}

export function getPost(){
    return{
        id: uuid(),
        user: user,
        text: "Olá Mundo",
        img: 'https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg',
        likes: 10,
        comments: [{
            user: user,
            text: "Topzera!"
        },{
            user: user,
            text: '@beeabelha @waltin'
        }]
    }
}