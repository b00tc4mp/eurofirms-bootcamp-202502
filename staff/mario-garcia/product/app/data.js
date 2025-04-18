export const data = {

    users: [],
    usersCount: 0,

    posts: [],
    postsCount: 0,

    userId: null

}

//Populate USERS

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Peter Pan',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Bruce Wayne',
    email: 'brucewayne@batman.com',
    username: 'batman',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Peter Parker',
    email: 'peterparker@spiderman.com',
    username: 'spiderman',
    password: '123123123'
})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Bruce Banner',
    email: 'brucebanner@hulk.com',
    username: 'hulk',
    password: '123123123'

})

data.usersCount++

data.users.push({
    id: 'user-' + data.usersCount,
    name: 'Tony Stark',
    email: 'tonystark@ironman.com',
    username: 'ironman',
    password: '123123123'

})

//Populate POSTS

data.postsCount++

data.posts.push({

    id: 'post-' + data.postsCount,
    author: data.users[5].name + ' ' + '@' + data.users[5].username,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTI2cTljYW9ybzgwMXcxbnBqZXRkOTQ3bWpiOWczanNpbjNlbXJoaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6n8QfoQhIoKWR9uLt5/giphy.gif',
    text: 'To be a hero you must make a big effort!',
    date: new Date(2017, 12, 25, 19, 30).toISOString(),
    likes: []

})

data.postsCount++

data.posts.push({

    id: 'post-' + data.postsCount,
    author: data.users[2].name + ' ' + '@' + data.users[2].username,
    image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVxZWxqcGZjN2luMWx6cnl0em9sbWhnbXNrZGR5YnE4eHB0NHV4aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qrIlvM63x7x9IjrHw1/giphy.gif',
    text: 'I am very proud!',
    date: new Date(2022, 11, 31, 20, 45).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({

    id: 'post-' + data.postsCount,
    author: data.users[3].name + ' ' + '@' + data.users[3].username,
    image: 'https://media.giphy.com/media/uTGv3hkQO8XsBkprSv/giphy.gif?cid=ecf05e47wdsae2qgu6fjutozxf3qa7wljxl4vtozef3hxpvm&ep=v1_gifs_related&rid=giphy.gif&ct=g',
    text: 'With great power comes great responsibility',
    date: new Date(2018, 10, 15, 21, 30).toISOString(),
    likes: []
})

data.postsCount++

data.posts.push({

    id: 'post-' + data.postsCount,
    author: data.users[4].name + ' ' + '@' + data.users[4].username,
    image: 'https://media.giphy.com/media/8c78iOUREZE0OEMj4j/giphy.gif?cid=ecf05e478ws3u4yyen0d6g37yc58jqf216bpg583lq5p2ely&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    text: 'Here, saving the world!',
    date: new Date(2015, 10, 22, 22, 30).toISOString(),
    likes: []

})

