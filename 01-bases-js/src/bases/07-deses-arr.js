
const characters = ['Eren', 'Armin', 'Mikasa', 'Jean'];

const [e, a, m, j] = characters

const returnArray = (arr) => {
    return [arr[0], arr[1]]
}

const [letters, numbers] = returnArray(['ABC',123]);

console.log(letters, numbers);