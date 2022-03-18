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

    //TEXT CONSOLE RESULT
    console.log("Player 1 Choose :", PLAYER_CHOICE[player_choice]);
};