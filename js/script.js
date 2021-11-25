let pointp = 0,pointc = 0;
function printMessage(msg,pl,com){
	const div = document.createElement('div');
    let player,computer;
        if(pl == 1){
            player = 'kamien';
        }else if(pl == 2){
            player = 'papier';
        }else{
            player = 'nożyce';
        }
        if(com == 1){
            computer = 'kamien';
        }else if(com == 2){
            computer = 'papier';
        }else{
            computer = 'nożyce';
        }
	div.innerHTML = ''+msg+' Twój wybór: '+player+'. Wybór przeciwnika: '+computer+'';
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function starGame(value){
    clearMessages()
    let playerInPut = value;
    let computerMove = Math.floor(Math.random() * 3 + 1);
    if (computerMove == playerInPut){
        printMessage('Remis',playerInPut,computerMove)     
    }else if(computerMove == 1 && playerInPut == 2 || computerMove == 2 && playerInPut == 3 || computerMove == 3 && playerInPut == 1){
        printMessage('Wygrana',playerInPut,computerMove)
        count(1)
    }else{
        printMessage('Porażka',playerInPut,computerMove)
        count(2)
    }
}

function count(value){
    if(value == 1){
        pointp = pointp + 1;
    }else{
        pointc = pointc + 1;
    }
    document.getElementById('count').innerHTML = ''+pointp+' - '+pointc+'';
}