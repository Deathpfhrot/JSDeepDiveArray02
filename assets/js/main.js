console.log("%c ----------levl2_2: loop with input------", "color: green");

let output = document.getElementById('output')
let number = document.getElementById('number')


function pressButton() {
    let y = ''
    let num = number.value
    for (let i = 0; i < num; i++) {
        y += 'o'
        console.log('L' + y + 'o');
    }
    output.innerHTML = `L${y}p`
    
}

// user gibt zahl ins inputfeld ein
// zahl wird überprüft und loop wird am ende ausgegeben
// anzahl der "o's" varriert durch die angabe des users im feld

// array wird benötigt
// loop und array methode wird benötigt
// um an einder bestimmten stelle das neue element hinzuzufügen
// array wird am ende in einen string umgewandelt

console.log("%c ----------levl2_1: for loop array------", "color: green");


function imageArray() {
    let returnArray = []
    for (let i = 1; i <= 100; i++) {
        if (i <= 9) {
            returnArray.push('image_00' + i + '.jpg');
        } else if(i <= 99){
            returnArray.push('image_0' + i + '.jpg');
        } else{
            returnArray.push('image_' + i + '.jpg');
        }
    }
    console.log(returnArray);   

}
imageArray()