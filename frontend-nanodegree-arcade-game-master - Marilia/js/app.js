
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enemies our player must avoid
// Classe do inimigo.
var Enemy = function()
{
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var x;
    var y;
    var speed;
    this.reset ();
    
    // The image/sprite for our enemies, this uses
    // a helper we've p9rovided to easily load images
    
    this.sprite = 'images/enemy-bug.png';

// Update the enemy's position, required method for game

   
    
// Parameter: dt, a time delta between ticks
    
};

Enemy.prototype.reset = function () 
{
    // Set de posicao
    this.x = -101;    
    this.y = 214 - getRandomIntInclusive(0, 2) * 83;
    
    // Set de velocidade
    this.speed = Math.floor(Math.random() * 200 + 1);
};

// Update do Inimigo.
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    //posição do Enemy (move)
    if (this.x < ctx.canvas.width) 
    {
        this.x = (this.x + this.speed * dt);
    }
    
    
    
    //novo inimigo quando algum sair da tela
    if (this.x >= 505) 
    {
       // allEnemies.push(new Enemy());
        this.reset ();
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(dt) 
{
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function()
{
    //this.sprite="images/char-cat-girl.png";
    this.sprite="images/char-boy.png";

    //posição incial
	
  
    this.xo = 202;
    this.yo = 380;

    this.x = this.xo;
	this.y = this.yo;
    this.isGirl = false;
    
};

Player.prototype.checkCollisions = function() {
    var enemyy = allEnemies.length;
    for (var i = 0; i < enemyy; i++) {
      if (Math.abs(this.x - allEnemies[i].x) < 60 && Math.abs(this.y - allEnemies[i].y) < 60) {
            console.log(this);
         //   this.reset();
          this.x = this.xo;
          this.y = this.yo;
        }
    }
};

Player.prototype.update = function() {
    this.x = this.x;
	this.y = this.y;
};


// Draw the player on the screen, required method for game    
    
Player.prototype.render = function()
{
   // alert ("render");
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
    

// Move o player automaticamente.
Player.prototype.handleInputDown = function(direction) {
    
    //alert ("imput");
    
	if (direction == 'up') {
		this.y = this.y - 83;
	} 
    else if (direction == 'down') 
    {
		this.y = this.y + 83;
	} 
    else if (direction == 'left') 
    {
		this.x = this.x - 101;
	} 
    else if (direction == 'right') 
    {
		this.x = this.x + 101;
	}

	if (this.x < 0) {
		this.x = 0;

	} else if (this.x > 404) 
    {
		this.x = 404;
    } 
    // Agua.
    else if (this.y < 0) {
        
        // Dentro da agua.
        if (this.y > -100)
        {
            this.sprite="images/char-cat-girl.png";
            isGirl = true;
        }
        // Quis varar a agua.
        else
        {
            this.y = -35;
        }
        
         
	} else if (this.y > 380) 
    {
		this.y = 380;
    }
    else if (isGirl == true && this.y > 20) 
    {
        this.sprite="images/char-boy.png";
        isGirl = false;
    }
};

    
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

for (var i = 0; i < 3; i++) {
    
    
   // var y = coly[Math.floor(Math.random() * -1000 + 1)];
    allEnemies.push(new Enemy());
}


// Place the player object in a variable called player
    
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInputDown(allowedKeys[e.keyCode]);
});


    

    
