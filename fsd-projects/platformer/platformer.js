$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,200,100,5,"blue");
    createPlatform(200,200,100,5,"blue");
    createPlatform(400,200,100,5,"blue");
    createPlatform(600,200,100,5,"blue"); 
    createPlatform(800,200,100,5,"blue");
    createPlatform(1000,200,100,5,"blue");
    createPlatform(1200,200,100,5,"blue");  
    createPlatform(300,400,1100,5,"blue"); 
    createPlatform(200,200,5,200,"blue");
    createPlatform(0,400,200,5,"blue");
    createPlatform(400,400,5,700,"blue");


    // TODO 3 - Create Collectables
    createCollectable("grace",150,100);
    createCollectable("max",650,150)
    createCollectable("diamond",1250,150);
    createCollectable("database",200,700);
    
    // TODO 4 - Create Cannons
    createCannon("top",200,1500,50);
    createCannon("top",400,1500,50);
    createCannon("top",600,1500,50);
    createCannon("top",800,1500,50);
    createCannon("top",1000,1500,50);
    createCannon("top",1200,1500,50);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
