const myMusicList = [
"Blinding Lights - The Weeknd",
"All I Want - Kodaline",
"The One - Kodaline",
"I wanna be yours - Arctic Monkeys",
"As it was - Harry Styles",
"Beautiful - Eminem",
"Creep - Radiohead",
"Bohemian Rhapsody - Queen",
"Kim bilet - Jax(02.14)",
"Cry me a river - Justin Timberlake",
];

const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");

// create the remove/hide functionality when cicking the button
button.addEventListener("click", function () {
    mySongs(myMusicList);
    mixList.classList.remove("hide");
    button.classList.add("hide");
})

total.innerText = `My current top ${myMusicList.length} songs 🎧 `;

// function that turns the array into html list elements
const mySongs = function(songs) {
    // this is how we are able to access each string in the list we made
    songs.forEach(function (song, index){
        let li = document.createElement("li");
        li.classList.add("song");
        li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;

        mixList.append(li);
    })
}