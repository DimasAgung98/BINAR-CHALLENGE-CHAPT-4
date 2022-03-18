//Array Game Condition
const CONDITION_TABLE = [
    ["D", "P", "C"],
    ["C", "D", "P"],
    ["P", "C", "D"]
]
// "D" = Draw, "P" = Player 1 win, "C" = Com win

//Player cant Input Again After Choose The Option
const disableInput = () => {
    document.querySelectorAll(".figure").forEach(input => {
        input.setAttribute("disabled", "disabled")
    })
}

//Show Game Result
const showResult = result => {
    const statusResult = {
        "D": ["Result : Draw!", "draw"],
        "P": ["Result : Player 1 win!", "player-win"],
        "C": ["Result : Com win!", "com-win"]
    }

    console.log(statusResult[result][0]);
    document.getElementById("versus").style.display = "none"; //Hide Versus on Browser
    document.getElementById(statusResult[result][1]).style.display = "block"
    disableInput()
}


//Player 1 & COM CHOICE
const getChoice = player_choice => {
    const PLAYER_CHOICE = ["rock", "paper", "scissors"];
    const COM_CHOICE = ["com-rock", "com-paper", "com-scissors"];

    //TEXT CONSOLE PLAYER CHOOSE RESULT
    console.log("Player 1 Choose :", PLAYER_CHOICE[player_choice]);

    //TEXT CONSOLE COM RANDOM RESULT
    const com_choice = Math.floor(Math.random() * 3); //Untuk merandom pilihan com
    console.log("COM Choose :", COM_CHOICE[com_choice]);

    //DISPLAY PLAYER CHOISE WITH BORDER
    document.getElementById(PLAYER_CHOICE[player_choice]).classList.add("border-pick");
    document.getElementById(COM_CHOICE[com_choice]).classList.add("border-pick");
    document.querySelectorAll(".figure").forEach(player_choice => {
        player_choice.classList.remove("player-box");
    })

    //Game Result
    const result = CONDITION_TABLE[player_choice][com_choice];
    //To Show The Result 
    showResult(result);
}