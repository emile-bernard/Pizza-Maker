function preloadPlayerImg() {
    playerImg = loadImage('./assets/image/player/resized_player.png');
}

function setupPlayer() {
    player = createSprite(40, 40);
    // player = createSprite(
    //     width/2, height/3, 40, 40);
    // player.shapeColor = color(255);
    player.addImage(playerImg);
}

function drawPlayer() {
    // player.velocity.x = (mouseX-player.position.x)*0.1;
    // player.velocity.y = (mouseY-player.position.y)*0.1;

    player.collide(walls);
    player.collide(safeZones);
    player.displace(foodItems);
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        player.setSpeed(2.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
        player.setSpeed(2.5, 90);
    }
    else if (keyCode == LEFT_ARROW) {
        player.setSpeed(2.5, 180);
    }
    else if (keyCode == UP_ARROW) {
        player.setSpeed(2.5, 270);
    }
    else if (key == ' ') {
        player.setSpeed(0, 0);
    }
    return false;
}
