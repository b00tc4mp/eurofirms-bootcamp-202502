export const data = {
    
    users: [],
    usersCount:0,

    posts: [],
    postCount: 0,
 
    userId: null
}

// populate users

data.userCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Hulk',
    email: 'hulk@hulk.com', 
    username: 'Hulkthemass', 
    password: '123123123'

})

data.userCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'medievil',
    email: 'medievil@medievil.com',
    username: 'Evilmedi',
    password: '123123123' 
})

data.userCount++

data.users.push({
    id: 'user-' + data.userCount,
    name: 'The-rock',
    email: 'The-rock@The-rock.com',
    username: 'The-rock',
    password: '123123123'

})

//populate post

data.postCount++

data.post.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    Image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHdyZnJnNGQ0b3l1d3BxYmV1OWxpbW9xNGtjNDhmeTgxcG1wcnN1byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/prhZjwRxxt5Ys/giphy.gif',
    text: 'I feel very quiet!',
    date: new Date(2024,11,31,23,45).toISOString(),
    likes:[]
})

data.postCount++

data.post.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    Image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnY4d2JkdmRoZG54eDQ0ZjZsaHV3a3YweDQ2ZW1hczBhYzR3bXY0bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QZs5EtmpomcMxkGGIc/giphy.gif',
    text: 'no filters',
    date: new Date (2025,0,10,18,15).toISOString(),
    likes: []
})

data.postCount++

data.post.push({
    id: 'post-' + data.postsCount,
    author: data.users[0].id,
    Image: 'https://media.giphy.com/media/XR3qHiEQCgi9G/giphy.gif?cid=ecf05e47jh9nh38x6uf4feb30ky1hb83q57mo5owkgx6lszb&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    date: new Date (2025,0,10,18,15).toISOString(),
    likes:[]
})
;
