var canvas = new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

block_image_x = 30;
block_image_y = 30;

block_object = "";
player_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function(img) {
        player_object= img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y, left:player_x});
        
        canvas.add(player_object);
    });

}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function(img) {
        block_object= img;

        block_object.scaleToWidth(block_image_x);
        block_object.scaleToHeight(block_image_y);
        block_object.set({top:player_y, left:player_x});
        
        canvas.add(block_object);
    });

}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {
    keyPressed= e.keyCode;

    if (e.shiftKey == true && keyPressed == "80") {
     block_image_x = block_image_x + 10
     block_image_y = block_image_y + 10
     document.getElementById("current_height").innerHTML= block_image_y;
     document.getElementById("current_width").innerHTML= block_image_x;
    }
    
    if (e.shiftKey == true && keyPressed == "77") {
        block_image_x = block_image_x - 10
        block_image_y = block_image_y - 10
        document.getElementById("current_height").innerHTML= block_image_y;
        document.getElementById("current_width").innerHTML= block_image_x;
       }

       if(keyPressed == "38"){
           up();
           console.log("up")
       }

       if(keyPressed == "40"){
        down();
        console.log("down")
       }

       if(keyPressed == "37"){
        left();
        console.log("left")
       }

       if(keyPressed == "39"){
        right();
        console.log("right")
       }
       
       if(keyPressed == "67"){
        new_image("cloud.jpg");
        console.log("c")
    }
    if(keyPressed == "68"){
        new_image("dark_green.png");
        console.log("d")
    }
    if(keyPressed == "71"){
        new_image("ground");
        console.log("g")
    }
    if(keyPressed == "76"){
        new_image("lightgreen.png");
        console.log("l")
    }
    if(keyPressed == "82"){
        new_image("roof.jpg");
        console.log("r")
    }
    if(keyPressed == "84"){
        new_image("trunk.jpg");
        console.log("t")
    }
    if(keyPressed == "85"){
        new_image("unique.png");
        console.log("u")
    }
    if(keyPressed == "87"){
        new_image("wall.jpg");
        console.log("w")
    }
    if(keyPressed == "89"){
        new_image("yellow_wall.png");
        console.log("y")
    }
 
}

function up() {
    if(player_y >=0) {
        player_y= player_y - block_image_y;
        console.log("block image height =" + block_image_y)
        console.log("when up arrow key is pressed, x=" + player_x + "y=" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y <=900) {
        player_y= player_y + block_image_y;
        console.log("block image height =" + block_image_y)
        console.log("when down arrow key is pressed, x=" + player_x + "y=" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_x >=0) {
        player_x= player_x - block_image_x;
        console.log("block image width =" + block_image_x)
        console.log("when left arrow key is pressed, x=" + player_x + "y=" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x <=700) {
        player_x= player_x + block_image_x;
        console.log("block image width =" + block_image_x)
        console.log("when left arrow key is pressed, x=" + player_x + "y=" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}