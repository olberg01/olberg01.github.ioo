const main = document.querySelector("main"); // Variabel som referer til mian-elementet
  // Referanser til databasen
const db = firebase.database();
const pokemon = db.ref("pokemon"); // Referer til alt som ligger under sko i databasen
function visPokemon(snapshot){
      //Javascript-funksjon som skriver varene ut p� nettsiden i main-elementet
    console.log(snapshot.val());
    let pokeSnap = snapshot.val();
    main.innerHTML +=`
        <article class="Pokemon">
          <h1>${pokeSnap.Name}</h1>
          <img src="${pokeSnap.ImageURL}" alt="">
          <p>${pokeSnap.Type1} - ${pokeSnap.Type2}</p>
        </article>
    `
}
function visAlle(){
  main.innerHTML = ``
  pokemon.on("child_added",visPokemon);
}
function visGrass(){
  main.innerHTML = ``
  pokemon.orderByChild("Name");
  pokemon.limitToFirst(8)
  pokemon.on("child_added",visPokemon);
}
