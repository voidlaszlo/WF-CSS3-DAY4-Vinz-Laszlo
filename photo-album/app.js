// SELECTORS
const container = document.querySelector('.container')
const images = document.querySelectorAll('img')
const chosen = document.getElementById('chosen')

// LISTENERS
for (image of images) {
    image.addEventListener('click', (e) => {
        let number = e.target.src.slice(-5, -4);
        console.log(number)
        chosen.src = `/img/${number}.jpg`
    })
}

document.body.addEventListener('keyup', (e) => {
    console.log(e.keyCode)

    switch(e.keyCode) {

        case 37:
            console.log("left")
            break
        
        case 39:
            console.log("right")
            break
    }
})