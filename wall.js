function preloadWallImg() {
    // wallImg = loadImage('./assets/image/original_box.png');
}

function setupWalls() {
    walls = new Group();

    //Surrounding Walls
    let bottomWall = createSprite(
        width, height,
        width*2, 50);
    bottomWall.shapeColor = color('#353836');
    walls.add(bottomWall);

    let upperWall = createSprite(
        width, 0,
        width*2, 50);
    upperWall.shapeColor = color('#353836');
    walls.add(upperWall);

    let leftWall = createSprite(
        0, height,
        50, height*2);
    leftWall.shapeColor = color('#353836');
    walls.add(leftWall);

    let rightWall = createSprite(
        width, height,
        50, height);
    rightWall.shapeColor = color('#353836');
    walls.add(rightWall);
}
