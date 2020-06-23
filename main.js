const mainElement = document.querySelector('body')
const HTMLButton = document.createElement('button')
let buttonText = document.createTextNode('HTML Button')
HTMLButton.append(buttonText)
mainElement.append(HTMLButton)
const imageButton = document.createElement('button')
let buttonText2 = document.createTextNode('Image Button')
imageButton.append(buttonText2)
mainElement.append(imageButton)

let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
    },
        /* 1. Randomly set your coin object's "state" property to be either 
        0 or 1: use "this.state" to access the "state" property on this object.*/

    toString: function() {
        coin.flip()
        if (this.state === 0) {
            mainElement.append("Heads ")}
        else if (this.state === 1){
            mainElement.append("Tails ")}
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        coin.flip()
        let image1 = document.createElement('img')
        image1.src = "https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/Easter-Island-1684384.jpg?r=1547251612473"
        let image2 = document.createElement('img')
        image2.src = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Miles_%22Tails%22_Prower_Sonic_and_All-Stars_Racing_Transformed.png/220px-Miles_%22Tails%22_Prower_Sonic_and_All-Stars_Racing_Transformed.png"
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if(this.state === 0){
            mainElement.append(image1)}
        else if (this.state === 1)
            mainElement.append(image2)}
        }

console.log(coin.flip)
function display20Flips() {
    for (let index=0; index < 20; index++){
        coin.toString()
        } 
    }
function display20Images(){
    for (let index = 0; index < 20; index++){
        coin.toHTML()
    }
}
HTMLButton.addEventListener("click", function(){display20Flips()})

imageButton.addEventListener("click", function() {display20Images()})