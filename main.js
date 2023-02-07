let userScore = 0
let compScore = 0

const smallUserName = "(User)".fontsize(3).sup()
const smallcompName = "(Comp)".fontsize(3).sup()

const scoreboardDiv = document.querySelector(".score-board")
const result = document.querySelector(".result > p")

const userScoreEl = document.getElementById("user-score")
const compScoreEl = document.getElementById("computer-score")

const rockEl = document.getElementById("r")
const paperEl = document.getElementById("p")
const scissorEl = document.getElementById("s")

function convertToWord(letter){
    if (letter === "r"){
        return "Rock"
    }
    if (letter === "p"){
        return "Paper"
    }
    if (letter === "s"){
        return "Scissors"
    }
}

function linUpAnimation(){
    result.classList.add('linup')
    setTimeout(() => result.classList.remove('linup'), 500)
}

function win(user, comp){
    linUpAnimation()
    result.innerHTML = `${convertToWord(user)}${smallUserName} beats ${convertToWord(comp)}${smallcompName}, You Win ! 🔥`
    userScore++
    userScoreEl.textContent=userScore
    document.getElementById(user).classList.add('green-glow')
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 500)
}
function lost(user, comp){
    linUpAnimation()
    result.innerHTML = `${convertToWord(comp)}${smallcompName} beats ${convertToWord(user)}${smallUserName}, You lost ! 💩`
    compScore++
    compScoreEl.textContent=compScore
    document.getElementById(user).classList.add('red-glow')
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 500)
}
function draw(user, comp){
    linUpAnimation()
    result.innerHTML = `Both chose ${convertToWord(user)}, It's a Draw 🤝`
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(() => document.getElementById(user).classList.remove('grey-glow'), 500)
}

function compchoice(){
    const choices = ["r","p","s"]
    const randChoice = Math.floor(Math.random()*3)
    return choices[randChoice]
}

function game(choice){
    const computerChoice = compchoice()
    switch(choice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(choice, computerChoice)
            break
        case "sr":
        case "rp":
        case "ps":
            lost(choice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(choice, computerChoice)
            break
    }
}

function main(){
    rockEl.addEventListener("click", () => game("r"))
    paperEl.addEventListener("click", () => game("p"))
    scissorEl.addEventListener("click", () => game("s"))
}

main()