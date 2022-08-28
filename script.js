var interval = 1000;
var counter = 1;
var money = 1000;
document.getElementById('money').innerHTML = money;
var winnerColor = '';


var bettedonred = 0;
var bettedonblack = 0;
var bettedongreen = 0;

//betting on colors

var isbetted = 0;

bet = (color) =>{

    if(isbetted==0){
        var betonblack = document.getElementById('black').value;
        var betonred = document.getElementById('red').value;
        var betongreen = document.getElementById('green').value;
            if(betonred<money){
            money = money - betonred;
            document.getElementById('money').innerHTML = money;
            bettedonred = betonred*2
            isbetted++
            }
            if(betonblack<money){
            money = money - betonblack;
            document.getElementById('money').innerHTML = money;
            bettedonblack = betonblack*2
            isbetted++
            }
            if(betongreen<money){
                money = money - betongreen;
                document.getElementById('money').innerHTML = money;
                bettedongreen = betongreen*14
                isbetted++
            }
        }
    
    else{
        document.getElementById('bet-status').innerHTML = 'Możesz dać beta tylko raz na ture!';
    }

}





//Generating roulette patterns and checking winners betting 




start = () => {

    setTimeout(function() {
    
        if(counter<=5){
            counter++
            console.log(counter)
            document.getElementById('timer').innerHTML = 6-counter;
            document.getElementById('progress').style.width = ((100/6)*counter)+'%';
        }
        else{
            var winner = Math.random() * 1;

        if(winner<0.07){
            newDiv = document.createElement("p");
            newDiv.classList.add('circle')
            newDiv.classList.add('green')
            document.getElementById("colors").appendChild(newDiv);
            console.log('Green');
            winnerColor='green';
            if(bettedongreen!=0){
                money = money + bettedongreen;
                document.getElementById('money').innerHTML = money;
                bettedongreen = 0;
            }
        }
        else{
            if(winner<0.535&&winner>0.07){
                newDiv = document.createElement("div");
                newDiv.classList.add('circle')
                newDiv.classList.add('red')
                document.getElementById("colors").appendChild(newDiv);
                console.log('Red');
                winnerColor='red';
                if(bettedonred!=0){
                    money = money + bettedonred;
                    document.getElementById('money').innerHTML = money;
                    bettedonred = 0;
                }

            }
            else{
                if(winner>0.535){
                    newDiv = document.createElement("p");
                    newDiv.classList.add('circle')
                    newDiv.classList.add('black')
                    newDiv.classList.add('animation-entrace')
                    document.getElementById("colors").appendChild(newDiv);
                    console.log('Black');
                    winnerColor='black';
                    if(bettedonblack!=0){
                        money = money + bettedonblack;
                        document.getElementById('money').innerHTML = money;
                        bettedonblack = 0;
                    }
                }
            }
        }
            counter = 0;
            isbetted = 0;
            document.getElementById('progress').style.width = 0+'%';
            
        }
      start();

    }, interval);
}


start();