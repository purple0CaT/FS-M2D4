// Buttons

const addMem = document.getElementById('addMem')
const clearMem = document.getElementById('clearMem')

const randomMem = document.getElementById('randomMem')
const teams = document.getElementById('teams')

// Inputs random
const memNum = document.getElementById('memb-num')
const teamNum = document.getElementById('team-num')

// Data base
let memBase = 0
let numberM = 0
let numberT = 0

// outputs
const memBaseOut = document.getElementById('members')


// listeners
addMem.addEventListener('click', addThisMem)
clearMem.addEventListener('click', clearThisMem)

randomMem.addEventListener('click', randomThisMem)

// Fucntions

// adding people
function addThisMem(){
    let member = document.getElementById('membersID').value
    memBase = member.split(/(?!\(.*)\s(?![^(]*?\))/g)
    for( i = 0; i< memBase.length; i++){
        let par = document.createElement('p')
        par.innerText = memBase[i]
        memBaseOut.appendChild(par)
    }
    let clearInner = document.getElementById('membersID')
    clearInner.value = ''
}

// clearing people
function clearThisMem(){
    memBase = 0
    let names = document.querySelectorAll('#members p')
    for (let name of names){
        name.remove()
    }
}


// random var
let x = 0
let y =[]

// randoming in teams
function randomThisMem(){
    numberM = memNum.value
    randomaizer(memBase.length)
    numberT = teamNum.value
    let tempBase = []

    for(q=0; q<numberT; q++){ //Making teams

        // making members of team
        for(i=0; i<numberM; i++){
            randomaizer(memBase.length)
            while (y.includes(x) !== false){
                randomaizer(memBase.length)
            }
            y.push(x)
            tempBase.push(memBase[x])
        }

        // teams
    let div = document.createElement('div')
    div.classList.add('col')
    div.classList.add('bg-light')
    div.classList.add('my-1')

    teams.appendChild(div)

        for(j=0; j<tempBase.length; j++){
            let parr = document.createElement('p')
            parr.innerText = tempBase[j]
        div.appendChild(parr)
        }

    tempBase = []
    }
    console.log(tempBase)
    y =[]

}

function randomTeam (){
    numberT = teamNum.value
    for(i=0; i<numberT;i++){
        
    }
}

function randomaizer(b){
    x = Math.round(Math.random()*(b-0)+0)
}