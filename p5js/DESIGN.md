# **Speed Dodger, DESIGN**
This `DESIGN.md` file was started on: 2026-03-27 14:03:14 ACST (South Australia)<br>
Made by Ayaan, born 2010-10-27

## **Version**
v1.0.0 - In development 🚧 most of the document is to be done.<br>
There are things not fully explained or things not explained at all.

## **READ ME**
Read this section before reading the rest of the document.<br>
When reading this document, remember:
- **What order to read in**
- If you plan to read the entire thing together, read it in linear order
- If you want to read one bit, read in this order:
    - *READ ME* heading
    - *Core concepts* heading
    - *Core philosophy* heading
    - Any section you want
    - If you do not recognize a word check *General coined terminology*
- **Just because something is complex to code, does not make it complex for the player to understand**
    - I explain how Direction Area is calculated in the game, players intuitively feel this. They do not do maths in their heads.
- **There are a lot of interconnected parts**
    - Certain mechanics interact with others, meaning you will not get the full picture from reading one section
- **Simple explanations**
    - These are very short explanations to get the gist of something
    - Do not use them for implementation, use the mechanical explanation instead
- **Why explanations**
    - These explain why something exists, and how it supports my core philosophy
- **Mechanical explanations**
    - These explain exactly how something works mechanically, you should know exactly what to code from it
- **Unexplained terminology**
    - This document contains coined terminology
    - If it is not explained in that section, it is in the heading *General coined terminology*

## **Core Concept**
Note: fundamental mechanics explained vaguely, I clarify in the mechanic's heading; each mechanic gets its own heading.   

Selling Idea: A game where the player tells essential things apart based only on speed.<br>
Top-down 2D level based game, with each level being a small open world viewed through a square play area.<br>
Each level has its own criteria for passing, with every few levels introducing something new.<br>
There are 7 mechanics:
- Embers, orbs that travel at different speeds which the player can collect but fast ones activates Moribund; the only indicator is speed
- Snares, certain patterns that Embers can spawn in
- Gambits, button combinations that activate special abilities, some require other conditions or spends Embers the player collected
- Rupture, a moving portion in which the player can view and interact with the world; the player use gambits to go to move the Rupture
- Snapping, entering the Rupture edge will teleport the player to the opposite edge. (eg, entering top teleports the player below)
- Dead edges, some edges of the Rupture are locked meaning the player can not use them for Snapping
- Wraiths, enemies at different speeds, fast are immortal, slow die if a fast ember hits them, use Gambits to achieve this
- Moribund, a game state that increase the difficultly and fast things kill the player instantly, use Gambits to escape
- Key, this allows you to finish a level

## **Core Philosophy**
I will say the core philosophy and how it can be achieved bellow.
- **The game is about speedentifying**
    - Majority of mechanics relate or support speedentification
- **Slow is safe, fast is dangerous**
    - Slow movement signals something is safe, like green signals something is good, players may not want safe
    - Fast movement signals something is dangerous, like red signals something is bad, players can still use danger
- **The player feels they are dodging, skimming, and outsmarting danger, not attacking it head on.**
    - Gambits should be defensive, but can have offensive side effects
    - Make the player get close to danger to do certain actions
    - Add things that makes the player feel scared
    - Some Snares require thinking and are almost like puzzles
    - To defeat Wraiths, use the Wraiths own attack against it 
- **No filler content**
    - Everything should have a purpose 
    - Do not add things for the sake of having more things
    - Breathing space is *NOT* filler
- **Do not overwhelm the player**
    - The player only learns one new idea at a time
    - The player uses new ideas in a simple context, before being combined with other mechanics
    - If something is to complex to teach during a level it is to complex for the base game (maybe ok in a DLC)
    - The speed difference between objects when speedentifying is easily distinguishable
    - Do not go against the player's intuition

## **General coined terminology**
These are words, acronyms, terms or shorthands that I coined that are not specific to any one mechanic or section.<br>

---

### **Player Radius**
Term

**Simple explanation:** A circle region around the player, often used in Gambits, and shown to players when they need it.

**Why explanation:** Certain Gambits require you to have certain things near you.<br>
To formalize this across all Gambits would make it much better for the player.<br>
We visually show what is in the Player Radius.<br>
They do not speedentify because it goes against the *Core philosophy*: Do not overwhelm the player.
Here is why:
- Speedentifying what is in the Player Radius is unintuitive
- It is often used with Gambits, which is already stressful

**Mechanical explanation:** A circle region around the player with a radius of 0.2 RL.<br>
The center of the circle is the center of the players hitbox.<br>
This is hidden from the player most of the time but displayed to the player when they need it.<br>
When displayed it is as a circle with no fill that outlines the Player Radius.<br>
The stroke weight is 0.01 RL and the stroke fill is the accent color.

Example usage:
The Gambit requires a bush to be in the *Player Radius* to activate.

---

### **RL**
Acronym: Rupture Length

**Simple explanation:** The base unit used to measure size.

**Mechanical explanation:** The length of one side of the Rupture, all sides are equal length.<br>

**Why explanation:** Ensures gameplay remains consistent regardless of screen resolution.<br>
We use the Rupture specifically because:
- It is the player's play area, everything scales to the amount of space the player has.<br>
- The Rupture is consistent throughout the game, but adapts for different screen resolutions.<br>

Example:
- 0.5RL is half of Rupture Length
- 2RL is double of Rupture Length

Example usage:
- The diameter of the circle is 0.5RL

---

### **RLPS**
Acronym: Rupture Length Per Second  

**Simple explanation:** The base unit used to measure speed.

**Mechanical explanation:** The amount of RL an object travels per second.

**Why explanation:** Ensures gameplay remains consistent regardless of screen resolution.<br>
We use RLPS specifically because:
- We already use RL for size measurements<br>
- Second are easier to visualize compared to an hour, or other time duration<br>

Examples:  
- 0.5 RLPS = half a Rupture length per second  
- 2 RLPS = two Rupture lengths per second  

Example usage:  
- The Ember travels at 0.5 RLPS.

---

### **Speedentify** <br>
Verb

**Meaning:** To identify or classify something using speed.

**Why:** This idea is constantly referenced, keeping it as one word makes explanations much smoother,<br>
and having this coined word is just plain fun, and games are meant to be fun!

Examples: 
- the player have to speedentify which Embers are bad
- the player can speedentify which enemies are good

Forms:
- Past: Speedentified
- Present participle: Speedentifying
- Noun: Speedentification

---

### **LD**
Acronym: Last Direction

**Meaning:** Short form of Last Direction.

**Why:** *Last Direction* may be too long to write. (Direction is also hard to spell 😅)

See *Last Direction* in *General Coined Terminology* for full definition.

---

### **DA**
Acronym: Direction Area

**Meaning:** Short form of Direction Area.

**Why:** *Direction Area* may be too long to write.

See *Direction Area* section in *General Coined Vocabulary* heading for full definition.

---

### **Last Direction**
Term

**Simple explanation:** The last direction the player moved in represented using 2 letters.<br>
The first letter represents whether the x-axis has increased, decreased or stayed the same compared to last different position.
The second letter represents whether the y-axis has increased, decreased or stayed the same compared to last different position.
The letter key is:
- *P* = increased (positive)
- *N* = decreased (negative)
- *Z* = stayed the same (zero)

Example:
- *PZ* = Straight Right
- *PP* = Diagonal Right Up
- *NN* = Diagonal Left Down

Note: It can never be *ZZ* because Last Direction considers the last different position.<br>
Even if the player was still for a while the player will still have a Last Direction that is not *ZZ*.<br>

Note: Internally the game may not use the very last different position,<br>
otherwise it would be very hard to purposely set a Diagonal Last direction because you would have to release both keys at once.

Example usage:
- If Last Direction is *NP* then spawn a Wraith above them

---

### **Direction Area**<br>
Term<br>
A portion of the Rupture that is designed to represent where the player is facing.<br>
The portion is defined by drawing a line across the Rupture so that it intersects the player's hitbox,<br>
and the side that does not contain the player is the Direction Area.<br>
The line divides the Rupture into two regions.<br>
Here is the rule for drawing the line:
- If Last Direction's letters contain no *Z*
    - The line's slope is the absolute value of 1 (orientation determined by Last Direction letters)
    - The line only intersects exactly one corner of the player's hitbox
- If Last Direction's letters contain a *Z* 
    - The line's slope is 0 (horizontal) or undefined (vertical) (orientation determined by Last Direction letters)
    - The line only intersects exactly one side of the player's hitbox
- If Last Direction's first letter is P, the line intersects the right half of the player's hitbox, otherwise it is the left half
- If Last Direction's second letter is P, the line intersects the top half of the player's hitbox, otherwise it is the bottom half

Visual Examples:<br>
Trust me you will need them 😉
Key:<br>
- P = Player

```
    DA if LD = PZ (Straight Right)
    +-------------+
    |     |       |
    |    P|  DA   |
    |     |       |
    +-------------+

    DA if LD = PP (Diagonal Right Up)
    +-------------+
    |      \      |
    |      P\  DA |
    |        \    |
    +-------------+

    DA if LD = ZN (Straight Down)
    +-------------+
    |      P      |
    |-------------|
    |      DA     |
    +-------------+

    DA if LD = NN (Diagonal Left Down)
    +-------------+
    |    \        |
    | DA  \P      |
    |      \      |
    +-------------+
```

---

**Button Shorthands**<br>
Shorthand<br>

**Simple explanation:** The shorthand for representing buttons. 

**Mechanical explanation:** Letters that represent a button press. Here is the key.<br>
*KEY:*
- Up = *U*
- Down = *D*
- Right = *R*
- Left = *L*
- Gambit = *G*
- Pause = *P*
- Retry = *T*
- Movement Buttons *U*, *D*, *R*, *L* = *M* 

**Why:** Shorter to write, especially for Gambits which require a sequence of button presses.<br>
Players can customize their buttons, so we use the button's action rather than the default button.

---

## **Mechanics**
In these following subheadings I will fully explain every mechanic I mentioned in Core Concepts.

---

### **Embers**
**Simple explanation:** Orbs that travel at different speeds which the player can collect,<br> 
but fast ones activates Moribund, while slow ones give you points.<br>
You have to speedentify which ones give you points and which one activates Moribund.<br>
Majority of the time you do not want to activate Moribund.

**Why explanation:** They directly support serval core philosophies, here is which ones they support and why: 
- *The game is about speedentifying*
  - You have to speedentify the type of Ember before collecting
- *Slow is safe, fast is dangerous*
  - Dying Embers which are slow add to your total count
  - Burning Embers which are fast activate Moribund
- *The player feels they are dodging, skimming, and outsmarting danger, not attacking it head on*
  - You have to dodge Burning Embers, and some Snares make it quite close and require thinking
- *Do not overwhelm the player*
  - The speed difference between Burning and Dying Embers is quite drastic
  - Embers are very simple visually
Embers are the main way speedentification is used.

**Mechanical explanation:** Orbs that travel through the Rupture and *not the world*.<br>
If the player move the Rupture the Embers will follow, anything part of the world will not.<br>
The Embers stay relative to the Rupture.<br>
Meaning if an Ember is paused halfway through the Rupture and the Rupture moves the Ember still stays halfway.<br>
They can be collected by the player but they do different things when collected based on the type.<br>
You have to speedentify the type.<br>
I continue fully explaining Embers in the headings: 
- *Types of Embers*
-  *Collecting Embers*
-  *Ember Visuals*
These headings are all inside the heading *Embers*.

#### **Types of Embers**
There are 2 types of Embers, Burning Embers, or Dying Embers.<br>
They look *identical visually*, the only difference is their interaction and speed.<br>
the player has to speedentify them to tell the them apart.<br>
Both types adds 1 to both the player's total and current count.<br>
I will only list the different properties of the 2 Embers in their section,<br>
anything else will or has been discussed in *Ember* heading or its subsections.

**Burning Embers**

Called Burning Embers for short they will activate Moribund if collected.<br>
See Moribund section for more detail.<br>
Their speed is 1 RLPS.

**Dying Embers**

Called Dying Embers for short they will *not activate Moribund* if collected.<br>
Their speed is 0.5 RLPS.

#### **Collecting Embers**
The player can collect Embers.<br>
There are 2 counts, the total count and the current count.<br>
Collecting any type of Ember adds 1 to both counts.

**Total count is used for:**
- Passing Levels, some require a minimum or maximum amount for passing
- Activating Gambits, some require a minimum amount

**Current count is used for:**
- Passing levels, some require a minimum or maximum amount for passing
- Activating Gambits, some require a minimum or maximum amount

The player's total count can never go down, but the player current count can because some gambits subtract the player's current count.<br>
The amount subtracted is specific to the gambit.<br> 
It is always subtraction; no other operations such as used.<br>
the player can collect Embers by touching them or using the following gambits:
- Ember Lurch

See in the Gambit section for more detail.<br>

#### **Ember Visuals**

**Shape:**
- circle with the diameter of 0.03 RL
- It has a stroke with the thickness of 0.01RL

**Color:**
- Circle fill color is the accent color
- Stroke fill color is primary

**Other Visual Notes**
- None

---

### **Snares**
These are patterns that the Embers can spawn in.<br>

---

### **Gambits**
**Simple explanation:** Special abilities which require a specific button sequence and sometimes extra conditions.

**Why explanation:** They directly support serval core philosophies, here is which ones they support and why:
- *The game is about speedentifying*
  - A lot of Gambits require you to use speedentify
- *The player feels they are dodging, skimming, and outsmarting danger, not attacking it head on*
    - Requires strategic and risk vs reward thinking because you:
      - Can not control your movement when inputting the button sequence
      - Often require you to get close to danger to execute them
      - Mainly defensive or movement based, but can have offensive side effects, you have to plan to use those side effects.
      - Failing a Gambit can lead to death

The reason they are called *Gambits* is because:
- Combos are seen as more aggressive, while *Gambits* seem more strategic
- The use of the word *gambit* is relatively unique in games
- The word *gambit* means: <br>
  *An act or remark that is calculated to gain an advantage, especially at the outset of a situation.*<br>
  Which fits perfectly on how they are used in game.

Why the player can activate multiple Gambits with one button sequence is because:
- The level designer can easily prevent it by not making the specific required conditions to activate multiple
- It adds an extra layer of depth with out overwhelming the player because it feels logic

Why Gambit Mode pauses your movement:
- Adds intensity
- Also stops it from being annoying because otherwise you could run into danger on accident
- Makes it feel more strategic

See *Defeating Wraiths* heading on how you can use these Gambits to defeat Wraiths.

**Mechanical explanation:** <br>
These are special move that the player can preform.<br>
All Gambits require a sequence of buttons to be pressed in order to activate.<br>
Some Gambits require extra conditions.
The sequence of button presses to activate a Gambit is called the Gambit Chain.<br>
The time between button presses are not considered for Gambit Chains.<br>
When explaining button presses I use a shorthand.<br>
See *Button Shorthands* section in *General Coined Vocabulary* heading for the key to the shorthand.<br>
You can activate multiple Gambits with one Gambit Chain,<br>
this is because some Gambits use the same Gambit Chain but different Extra Conditions.
If you fail the Gambit Chain or the Extra Conditions nothing will happen and the spacial ability will not be activated,<br>
All Gambit Chains start and end with *G*.<br>
Pressing *G* toggles Gambit Mode.
I will continue explaining in the headings:
- *Extra conditions*
- *Gambit Mode*

#### **Extra conditions**
Some Gambit require something called *Extra Conditions* to activate.
These *Extra Conditions* can be anything (eg, being near an ember or a minimum total count).<br>
Extra Conditions will only be checked when the last button is pressed in the Gambit Chain.<br>

#### **Gambit Mode**
Pressing *G* when not in Gambit Mode will activate Gambit Mode. Pressing *G* in Gambit Mode deactivates it.<br>
In Gambit Mode button presses will not move the player, allowing the player to stay still while inputting the Gambit Chain.<br> 
Other things that can move the player will still be able to move the player during Gambit Mode.<br>
If you move during Gambit Mode, direction mode will still update.<br>
You can still move in Gambit Mode due to external forces.
Gambits Mode also displays the Player Radius.

#### All Gambits Explained
Here all the Gambits.<br>
I will group them into 2 groups.<br>
Copying Gambits and Player Gambits.<br>

##### Copying Gambits
**Simple explanation:** Gambits that copy the abilities of things in the world.<br>
All copying Gambits's Gambit Chain is *G+D+G*, which allows you to execute multiple with one Gambit Chain.

**Why explanation:** It almost *feels* like one Gambit, that has the power to copy the world around you.<br>
This allows multiple Gambits with out it feeling complex.<br>

The reasons why *Speed Flux* Gambit is good:
- Follows the core philosophy of speedentification
- It require logical thinking to use it defeat Wraths

The reasons why *Direction Reverse* Gambit is good:
- Follows the core philosophy of speedentification (Wether or not you want to use it depends on the type of Gambit)
- It require logical thinking to use it defeat Wraths 

**Mechanical explanation:**

**Speed Flux**<br>
Gambit Sequence: *G+D+G*
Extra conditions: Needs a Flux Bush and a Burning Ember in the Player Radius<br>
Ability: Any Ember in the Direction Area will be flipped, fast becomes slow and slow becomes fast.<br>
Essential for completing certain Gambits.

**Direction Reverse**<br>
Gambit Sequence: *G+D+G*<br>
Extra conditions: Needs a Reverse Stone and a Burning Ember in the Player Radius<br>
Ability: Any Embers in the Direction Area will be reversed.<br>
Example an Ember going up will go down and Ember going right will go left.<br>
Essential for completing certain Snares.

// TODO add the rest of the Copying Gambits

#### Player Gambits

**Ember Lurch**<br>
Gambit Sequence: *G+L+R+G* <br> 
Extra conditions: 1 or more Dying Embers and no Burning Embers in the Direction Area<br>
Ability: Pauses all Dying Embers in the Direction Area.<br>
Moves the player automatically towards all paused Embers at 3RLPS, and collects them.<br>
Any other Embers that intersected the player along the path to the paused Embers will not be collected.<br>
The players collects the paused Embers from nearest to furthest from the position the player finished the Gambit Chain.

**Player Shrink**<br>
Gambit Sequence: *G+U+G*<br>
Extra conditions: Needs a Burning Ember in the Player Radius<br>
Ability: Shrinks both the player's hitbox and sprite to half the size.<br>
The effect will only stop once the player presses *M*.<br>
Essential for completing certain Snares.

**Moribund Escape**<br>
Gambit Sequence: *G+U+L+D+R+G*<br>
Extra conditions: No Dying Embers can be in the Rupture and Moribund has to be active<br>
Moribund is deactivated.

---

### Rupture
// TODO

---

### Snapping
// TODO

---

### Dead Edges
// TODO

---

### Wraiths
// TODO

---

### Moribund
This is a state that the game can enter. It makes the game way more intense.

---

### Keys
// TODO

## Level design
// TODO

### How I am going to the mechanical explanation
// TODO

### Full outline
**Level 1: Which one is dying???**
Simple: Introduce the idea of speedentification
Why: It is the foundation of the game
Mechanical:

**Level 2: Dying vs Burning :>**
Simple: Enforce speedentification and slow is safe and fast is dangers 
Why: Enforcing the main rules before adding new things allows the player not to be overwhelm
Mechanical:

**Level 3: Is that a wall?**
Simple: Introduce the concept of Snares and that Embers can come in groups
Why: They understand speedentification, and Snares seem like a natural progression
Mechanical:

**Level 4: They are JOINING :O**
Simple: Enforce Snares
Why: This level can be plenty of fun without adding anything new, add new things may overwhelm the player
Mechanical:

**Level 5: That is a lot O_O**
Simple: Make the player feel more intense
Why: Enforce everything they learnt so far before adding new things
Mechanical:

**Level 6: Motion Rupture :**
Simple: Introduce the Ruptures jittering
Why: An other core part of the game, they have gotten used to speedentification
Mechanical:

**Level 7: Snap!** 
Simple: Introduce Snapping
Why: Rupture jittering is simple because it is just visual, give the player something fun
Mechanical: 


---

## Player
// TODO

---

## **World**
The world itself is called "*The kindle*".<br>
It is mostly barren, but contains 3 parts:
- Terrain, the ground the player moves on
- Artifacts, the things on the ground
- Weather, the weather of the world

### **Terrain**
This is the ground the player moves on.

**Sand**
Purple sand, this is the default. Does not affect the player.

**Lava Rifts**
lava with a current,<br>
when walked on by the player, the current pushes the player in a certain direction in certain speed.<br>
The speed and direction is specific to the current of the lava.<br>
If the lava current's speed is > 1 RLPS then the player dies instantly. 

### **Artifact**
These are things on the Terrain.

**Flux Bush**
When an Ember intersects with a Flux Bush the type of Ember gets swapped.<br>
Dying Embers become Burning Embers, and Burning Embers become Dying Embers.<br> 
They are attached to the ground.

**Reverse Stone**
An Ember that intersects with it travels in the revere direction.<br>
An Ember traveling right will travel left, an Ember traveling up will travel down.<br>
Embers effectively bounce of the stone.<br>
Wind from an Undertow travels in the reverse direction if in front of a reverse stone,<br>
behind the reverse stone the wind does not exist.<br>
ASCII Diagram Examples:

Key:
- \> = undertow wind traveling right
- < = undertow wind traveling left
- ^ = undertow wind traveling up
- v = undertow wind traveling down
- R = Reverse stone

```
    Undertow wind traveling left
    +-------------+
    |<<<<<<<<<<<<<|
    |     R>>>>>>>|
    |<<<<<<<<<<<<<|
    +-------------+

    Undertow wind traveling right
    +-------------+
    |>>>>>>>>>>>>>|
    |<<<<<<R      |
    |>>>>>>>>>>>>>|
    +-------------+

    Undertow wind traveling up
    +-------------+
    |^^^^^^ ^^^^^^|
    |^^^^^^ ^^^^^^|
    |^^^^^^R^^^^^^|
    |^^^^^^v^^^^^^|
    |^^^^^^v^^^^^^|
    +-------------+

    Undertow wind traveling down
    +-------------+
    |vvvvvv^vvvvvv|
    |vvvvvv^vvvvvv|
    |vvvvvvRvvvvvv|
    |vvvvvv vvvvvv|
    |vvvvvv vvvvvv|
    +-------------+
```

### **Weather**
This is the weather for the world.<br>
The weather does not cycle through or naturally shift; it is encoded with the level.

**Undertow**
Wind that pushes everything in the world that is not connected to the ground in a certain direction and speed.<br>
The direction and speed is specific to the undertow.<br>
The force is a constant and consistent force to any objects not attached to the ground, like:
- Embers
- Wraths
- The player
Here are examples of objects that are grounded:
- Dead Wood
- Flux Bushes
If an object not connected to the ground is:
- moving against the undertow, their speed would be subtracted by the undertow.<br>
- moving in the opposite axis of the undertow, the undertow will cause the object to move diagonally.<br>
- moving with the undertow, their speed would be boosted by the undertow. 
- still, they will be moving with the undertow
Examples:
- An Ember moving left with an undertow moving left, would go faster than an ember moving right
- An Player going up with an undertow going up will be faster than if the player was moving down
The wind of an undertow can be affected by artifacts, for example rocks will shield everything behind them from the wind.<br>
Here is the full list of artifacts that affect undertows:
- Rocks
- Paintings
- Trees
- Reverse Stone
See their section for more detail on how they affect Undertow.

**Fog**
You can only see in the Direction Area, and the Player Radius.
This supports speedentification because players have to speedentify quicker because they see less. 
Also used to teach the player what is the Direction Area.

**Scorching**
Normal. No extra effects.

---