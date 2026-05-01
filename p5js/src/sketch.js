/*
Started on: 2026-03-25 10:31 ACDT South Australia
Author: Ayaan, born on 2010-10-27
Program: p5.js ES6
This is the entry point for my speed dodger game.
*/

// We need to pass in p, because this is instance mode 
const sketch = (p) => {
    // Declare button here, so everything in sketch can see it 👀
    let testBtn; // Button does not exist yet so keep it undefined
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        Ayaan.init(p); // Must be before new button(), Button uses Ayaan.p
        testBtn = new Button(0.5, 0.5, 0.3, 0.1, "Start", 1, ()=> {console.log("HI!!!");});
    };

    const onFrameStart = () => {
        Display.update((p.mouseX + p.mouseY) / (p.width + p.height)); // temporary value used in the arg
        Ayaan.update.frameStart();
        p.cursor("default");
        p.background(...Display.color.current.utility.background);
    };
    const onFrameEnd = () => {
        Ayaan.update.frameEnd();
    };

    p.draw = () => {
        onFrameStart();
        testBtn.tick();
        onFrameEnd();
    };

};

new p5(sketch); // Start

