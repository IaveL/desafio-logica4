function sayHi(){
    console.log("Hi!")
}
sayHi();
//--
function sayName(name){
    console.log(`Hi ${name}!`)
}
sayName(`Igor`)
//--
function info(nome, age, musGenre) {
    console.log(`Hi ${nome}, you're ${age} years old and you like ${musGenre} music!`)
}
info(`Igor`,`20`,`Indie`)
//--
function movieSong(favMovie, favSong) {
    console.log(`Your favourite movie is ${favMovie} & your fav song is ${favSong}!`)
}
movieSong(`Submarine`, `Batphone (atm)`)
//--
function triple(x) {
    return x*3
}

console.log(triple(8))

