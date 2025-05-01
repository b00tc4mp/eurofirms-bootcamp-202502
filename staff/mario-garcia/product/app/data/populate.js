import { data } from './index'

//Populate USERS

const users = []

let usersCount = 0

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123123123'
})

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Peter Pan',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
})

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Bruce Wayne',
    email: 'brucewayne@batman.com',
    username: 'batman',
    password: '123123123'
})

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Peter Parker',
    email: 'peterparker@spiderman.com',
    username: 'spiderman',
    password: '123123123'
})

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Bruce Banner',
    email: 'brucebanner@hulk.com',
    username: 'hulk',
    password: '123123123'

})

usersCount++

users.push({
    id: 'user-' + usersCount,
    name: 'Tony Stark',
    email: 'tonystark@ironman.com',
    username: 'ironman',
    password: '123123123'

})

data.setUsers(users)
data.setUsersCount(usersCount)

//Populate POSTS

const posts = []

let postsCount = 0

postsCount++

posts.push({

    id: 'post-' + postsCount,
    author: users[5].name + ' ' + '@' + users[5].username,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTI2cTljYW9ybzgwMXcxbnBqZXRkOTQ3bWpiOWczanNpbjNlbXJoaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6n8QfoQhIoKWR9uLt5/giphy.gif',
    text: 'To be a hero you must make a big effort!',
    date: new Date(2017, 12, 25, 19, 30).toISOString(),
    likes: []

})

postsCount++

posts.push({

    id: 'post-' + postsCount,
    author: users[2].name + ' ' + '@' + users[2].username,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVxZWxqcGZjN2luMWx6cnl0em9sbWhnbXNrZGR5YnE4eHB0NHV4aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qrIlvM63x7x9IjrHw1/giphy.gif',
    text: 'I am very proud!',
    date: new Date(2022, 11, 31, 20, 45).toISOString(),
    likes: []
})

postsCount++

posts.push({

    id: 'post-' + postsCount,
    author: users[3].name + ' ' + '@' + users[3].username,
    image: 'https://media.giphy.com/media/uTGv3hkQO8XsBkprSv/giphy.gif?cid=ecf05e47wdsae2qgu6fjutozxf3qa7wljxl4vtozef3hxpvm&ep=v1_gifs_related&rid=giphy.gif&ct=g',
    text: 'With great power comes great responsibility',
    date: new Date(2018, 10, 15, 21, 30).toISOString(),
    likes: []
})

postsCount++

posts.push({

    id: 'post-' + postsCount,
    author: users[4].name + ' ' + '@' + users[4].username,
    image: 'https://media.giphy.com/media/8c78iOUREZE0OEMj4j/giphy.gif?cid=ecf05e478ws3u4yyen0d6g37yc58jqf216bpg583lq5p2ely&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    text: 'Here, saving the world!',
    date: new Date(2015, 10, 22, 22, 30).toISOString(),
    likes: []

})

data.setPosts(posts)
data.setPostsCount(postsCount)