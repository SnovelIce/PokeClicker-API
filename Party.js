
//                  [[Party commands]]


//                {Give pokemon By Id}

App.game.party.gainPokemonById(1,false,false,) // [1] Pokemon Id: the pokemon id in this case bulbasaur [2] Shiny: Is pokemon shiny [3] suppress notification [4] gender: male or female [5] shadow: is shadow?
// can be used to get every single pokemon like this:

let i = 0;
while (i < pokemonList.length) {
   App.game.party.gainPokemonById(i,true);
    i++;
}


//                {If already got this pokemon by Id}

App.game.party.alreadyCaughtPokemon(1,false,false,false) // [1] Pokemon Id: the pokemon id in this case bulbasaur [2] shiny: if trainer got the non-shiny version [3] shadow: if trainer got the non-shadow version [4] purify: you get the point...


//                {calculate Click Attack}

App.game.party.calculateClickAttack() // return: x(the click attack)
// can be used to manipulate the click attack like this:

App.game.party.calculateClickAttack = function () {
    return 500
} // when click attack updates it turnes to 500 no matter what 


//                {Gain Exp}
App.game.party.gainPokemon(200,2000) // [1] Exp: 
