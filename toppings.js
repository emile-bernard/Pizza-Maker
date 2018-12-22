function preloadFoodItemImg() {
    let bananasImg = loadImage('./assets/image/toppings/resized_bananas.png');
    let limeImg = loadImage('./assets/image/toppings/resized_lime.png');
    let pizzaImg = loadImage('./assets/image/toppings/resized_pizza.png');
    let popcornImg = loadImage('./assets/image/toppings/resized_popcorn.png');
    let popsicleImg = loadImage('./assets/image/toppings/resized_popsicle.png');
    let summertimeImg = loadImage('./assets/image/toppings/resized_summertime.png');

    foodItemImgList.push(bananasImg);
    foodItemImgList.push(limeImg);
    foodItemImgList.push(pizzaImg);
    foodItemImgList.push(popcornImg);
    foodItemImgList.push(popsicleImg);
    foodItemImgList.push(summertimeImg);
}

function setupFoodItems() {
    foodItems = new Group();

    for (let i = 0; i < foodItemsCount; i++) {
        let food = createSprite(random(250, width), random(0, height), 50, 50);
        food.addImage(foodItemImgList[i]);
        foodItems.add(food);
    }
}

function drawFoodItems() {
    foodItems.collide(walls);
    foodItems.displace(foodItems);
    foodItems.collide(safeZones, savedFoodItem);
}

function savedFoodItem(foodItem, safeZone) {
    foodItem.remove();
}
