/* App.js
* Edited by Ethan Kenneth
*/
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};// End Enemy function

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 500) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 500);
    }// End if
    if (player.x < this.x + 50 &&
        player.x + 50 > this.x &&
        player.y < this.y + 25 &&
        50 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
    }// End if
};// End Enemy.prototype.update function(dt)

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};// End Enemy.prototype.render function

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};// End Player function(x, y, speed)

// This class requires an update()
Player.prototype.update = function() {
    if (this.y > 375) {
        this.y = 375;
    }// End if
    if (this.x > 400) {
        this.x = 400;
    }// End if
    if (this.x < 0) {
        this.x = 0;
    }// End if
    if (this.y < 0) {
        this.x = 200;
        this.y = 400;
    }// End if
};// End Player.prototype.update function

// This class requires a render()
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};// End Player.prototype.render function

// This class requires a handleInput()
Player.prototype.handleInput = function(keyPress) {
    switch(keyPress) {
        case 'left':
            this.x -= this.speed + 50;
            break;
        case 'up':
            this.y -= this.speed + 30;
            break;
        case 'right':
            this.x += this.speed + 50;
            break;
        case 'down':
            this.y += this.speed + 30;
            break;
    }// End switch (keyPress)
};// End Player.prototype.handleInput function(keyPress)

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemyPosition = [50, 150, 200];
// Place the player object in a variable called player
var player = new Player(200, 400, 50);
var enemy;

enemyPosition.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 500));
    allEnemies.push(enemy);
});// End enemyPosition.forEach function(posY)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
