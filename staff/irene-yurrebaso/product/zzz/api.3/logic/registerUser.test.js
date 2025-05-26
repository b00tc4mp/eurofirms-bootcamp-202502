import { registerUser  } from "./registerUser.js";

try {
    registerUser('Mafalda', 'ma@falda.com', 'mafalda', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}