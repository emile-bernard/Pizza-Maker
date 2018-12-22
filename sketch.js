let canvas;

let backgroundSong;

let wallImg;

let playerImg;
let player;

let walls;
let safeZones;

const foodItemsCount = 6;
let foodItemImgList = [];
let foodItems;

function preload() {
    preloadBackgroundSong();
    preloadWallImg();
    preloadFoodItemImg();
    preloadPlayerImg();
}

function setup() {
    canvas = createCanvas(1220, 580);

    registerButtons();

    setupBackgroundSong();
    setupFoodItems();
    setupWalls();
    setupSafeZone();
    setupPlayer();
}

function draw() {
    drawBackground();

    drawFoodItems();
    drawPlayer();

    drawSprites();
}

