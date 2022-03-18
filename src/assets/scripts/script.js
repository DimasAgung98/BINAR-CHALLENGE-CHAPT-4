//Array Game Condition
const CONDITION_TABLE = [
    ["D", "P", "C"],
    ["C", "D", "P"],
    ["P", "C", "D"]
]
// "D" = Draw, "P" = Player 1 win, "C" = Com win

//Player 1 & COM CHOICE
const getChoice = player_choice => {
    const PLAYER_CHOICE = ["rock", "paper", "scissors"];
    const COM_CHOICE = ["com-rock", "com-paper", "com-scissors"];

    //TEXT CONSOLE PLAYER CHOOSE RESULT
    console.log("Player 1 Choose :", PLAYER_CHOICE[player_choice]);

    //TEXT CONSOLE COM RANDOM RESULT
    const com_choice = Math.floor(Math.random() * 3); //Untuk merandom pilihan com
    console.log("COM Choose :", COM_CHOICE[com_choice]);
}