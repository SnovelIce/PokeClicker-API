//                [[Inventory: items, currenct, pokeballs, etc...]]
// ALL OF THESE VARIABLES CAN BE CHANGED TO INFINITY BY USING THE JAVASCRIPT BUILD IN Infinity VARIABLE

//                {gain pokeballs}
App.game.pokeballs.gainPokeballs(GameConstants.Pokeball.Pokeball, 1, false); // [1] Pokeball: what pokeball to give the trainer // [2] ?amount: how meny pokeballs to give, [3] ?purchase: did the trainer purchased the pokeball
// can be used to give you infinite amount of Masterballs like this:
App.game.pokeballs.gainPokeballs(GameConstants.Pokeball.Masterball, Infinity, false);



//                {gain money, Quest Points, Diamonds, Contest Tokens, Battle Points, Farm Points, Dungeon Tokens}
App.game.wallet.gainMoney(99) // [1] amount: the amount of money +1 (now it's giving 100 coins)

App.game.wallet.gainDungeonTokens(99) // [1] amount: the amount of Dungeon Tokens +1 (now it's giving 100 Dungeon Tokens)

App.game.wallet.gainQuestPoints(99) 

App.game.wallet.gainContestTokens(99) 

App.game.wallet.gainBattlePoints(99) 

App.game.wallet.gainFarmPoints(99) 
