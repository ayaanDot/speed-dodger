/*
Started on: 2026-03-20 21:58 ACDT South Australia
Author: Ayaan, born on 2010-10-27
Program: p5.js ES6
This is just some helper functions, I am making for my speed dodger game.
Also I am learning as I am coding so there might be a lot of comments.
I used to use p5.js ES5 in Khan Academy's environment which is also a bit different than just ES5.
*/

// I use const because let is for when things change and var is retired :> 🫡
const Ayaan = {
    TEXT_SIZE_MEASURE: 100, // Font metrics are inaccurate at very small size, use 100 and then normalize after

    p: null,  
    init: function(p) {this.p = p;}, // Call this in setup(), so Ayaan has access to p5.js    

    dt: null,

    update: {
        frameStart: () => {
            // !!! Call at the start of the Frame for all object properties to work correctly !!!
            Ayaan.dt = Ayaan.p.deltaTime * 0.001;
            /* Properties reliant on this:
            Ayaan.dt
            */
        },
        frameEnd: () => {
            // !!! Call at the start of the Frame for all object properties to work correctly !!!
            Ayaan.mouse.wasPressed = Ayaan.p.mouseIsPressed;
            /* Properties reliant on this:
            Ayaan.mouse
            */
        },
    },

    collision: {
        isPointInRect: (pX, pY, x, y, w, h, mode = "CORNER") => {
            // Normalize x,y,w,h to CORNER mode so one check works for all modes
            if (mode === "CENTER") {
                x -= w * 0.5;
                y -= h * 0.5;
            }
            else if (mode === "CORNERS") {
                w = Math.abs(x-w);
                h = Math.abs(y-h);    
            }

            return pX >= x && pX <= x + w &&
                    pY >= y && pY <= y + h;
        }
    },

    mouse: {
        wasPressed: false, // Says if mouse was down last frame
        justPressed: function() {return Ayaan.p.mouseIsPressed && !this.wasPressed;},
        justReleased: function() {return !Ayaan.p.mouseIsPressed && this.wasPressed;},
    },

    text: {
        getHeight: () => {
            // Note: Changes text size as a side effect 
            Ayaan.p.textSize(Ayaan.TEXT_SIZE_MEASURE); // Set a base line to measure from 
            const textH = (Ayaan.p.textAscent() + Ayaan.p.textDescent())/Ayaan.TEXT_SIZE_MEASURE; // Divide by measurement size for a 1:1 ratio
            return textH; 
        },
        fitSize: function(w, h, label, padding = 0.85) {
            // Note: Changes text size as a side effect
            Ayaan.p.textSize(Ayaan.TEXT_SIZE_MEASURE); // Set a base line to measure from
            const textW = Ayaan.p.textWidth(label)/Ayaan.TEXT_SIZE_MEASURE; // Divide by measurement size for a 1:1 ratio
            // Scales to fit width and then caps at height, then adds padding because text is inconsistent 
            return Math.min(w/textW, h/this.getHeight()) * padding; 
        }
    },

    math: {
        // TODO
    },
};