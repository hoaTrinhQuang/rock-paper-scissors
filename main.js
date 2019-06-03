const youScore = document.getElementById('you-score');
const cpuScore = document.getElementById('cpu-score');
const displayYouChoice = document.getElementById('display-you-choice');
const displayCpuChoice = document.getElementById('display-cpu-choice');
const youChoice = document.getElementById('you-choice');

var youPoint = 0;
var cpuPoint = 0;

youChoice.onclick = function(event) {
    let yourChoice = getYouChoice(event.target.name);
    let cpuChoice = getCpuChoice(1, 3);
    clearAll();
    displayScore(yourChoice, cpuChoice);
    displayYour(yourChoice);
    displayCpu(cpuChoice);

}

function getYouChoice(choice) {
    switch (choice) {
        case "paper" :
            return 1;
        case "rock" :
            return 2;
        case "scissors" :
            return 3;
    }
}

function getCpuChoice (min, max) {
   return Math.round((Math.random()*(max-min+1) + min-0.5));
}

function displayScore (you, cpu) {
    switch (you) {
        case 1: 
            if (cpu == 2) {
            scoreYou(++youPoint);
            break;
        }
            else if (cpu == 3) {
            scoreCpu(++cpuPoint);
            break;
            }    
            else break;
            
        case 2: 
            if (cpu == 3) {
                scoreYou(++youPoint);
                break;
            }
            else if (cpu == 1) {
                scoreCpu(++cpuPoint);
                break;
            }
            else break;
        
        case 3: 
            if (cpu == 1) {
                scoreYou(++youPoint);
                break;
            }
            else if (cpu == 2) {
                scoreCpu(++cpuPoint);
                break;
            }
            else break;
        
    }
}

function scoreYou(point) {
    
    let div = document.createElement('div');
    div.className = "block mb-4 border-8 border-black-400 bg-white p-2 text-center text-6xl"
    div.innerHTML = `${point}`;
    youScore.replaceChild(div, youScore.lastElementChild);

}

function scoreCpu(point) {

    let div = document.createElement('div');
    div.className = "block mb-4 border-8 border-black-400 bg-white p-2 text-center text-6xl"
    div.innerHTML = `${point}`;
    cpuScore.replaceChild(div, cpuScore.lastElementChild);

}

function displayYour(value) {
   if (value == 1) {
    
      replace(document.getElementById('display-you-paper'), 'bg-red-600');
    }

    if (value == 2) {
        replace(document.getElementById('display-you-rock'), 'bg-red-600');
    }

    if (value == 3) {
        replace(document.getElementById('display-you-scissors'), 'bg-red-600');
    }
}

function displayCpu(value) {
    if (value == 1) {
        replace(document.getElementById('display-cpu-paper'),'bg-red-600');
    }

    if (value == 2) {
        replace(document.getElementById('display-cpu-rock'), 'bg-red-600');
    }

    if (value == 3) {
        replace(document.getElementById('display-cpu-scissors'), 'bg-red-600');
    }
}

function clearAll() {
    replace(document.getElementById('display-you-paper'), 'bg-black');
    replace(document.getElementById('display-you-rock'), 'bg-black');
    replace(document.getElementById('display-you-scissors'), 'bg-black');
    replace(document.getElementById('display-cpu-paper'), 'bg-black');
    replace(document.getElementById('display-cpu-rock'), 'bg-black');
    replace(document.getElementById('display-cpu-scissors'), 'bg-black');
  
}

function replace(elem, color) {
    let div = document.createElement('div');
    div.className = `float-right align-bottom inline-block rounded-full ${color} h-4 w-4`
    elem.replaceChild(div, elem.lastElementChild);
}