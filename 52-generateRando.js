//JavaScript Program to Generate Random String

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";

function generateString(lenght) {

    let result = ' ';
    const charactersLength = characters.lenght;
    for(let i=0; i<lenght; i++) {
        result += characters.charAt(math.floor(math.random() * charactersLenght));
    }
    return result;
}
console.log(generateString(5));