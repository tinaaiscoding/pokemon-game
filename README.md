# Pokemon Mini Battler
The third project of the Software Engineering Immersive Course at General Assembly. This is a team project where the goal is to create a RESTful Single-Page Application(SPA) that will have CREATE, READ, UPDATE, and DELETE(CRUD) functionality. As our very first software development project, this task will be the perfect opportunity to experience what it will be like to work collaboratively in the real world. 

The theme we have chosen is Pokemon and it will be a smaller version of the classic game. As a user, the goal of the game is to win battles in order to evolve the Pokemon and then have the ability to attain more Pokemon to complete the Pokedex. 

**Team Members:**<br/> 
[Tina Vo](https://github.com/tinanvo)<br/>
[Phil Wong](https://github.com/pwong-it)<br/>
[Mitchell O'Brien](https://github.com/OB-CODE)<br/>
[Harry Hwang]()<br/>

Date Received: 16/01/23<br/>
Date Due: 20/01/22

## :computer: [Click here]() to see the live project!

## :page_facing_up: About
The below are the criteria set out by the course that we will need to meet:
### Technical Requirements
The app that we are building must:
-   Craft thoughtful user stories together, as a team
-   Manage team contributions and collaboration using a standard Git flow on Github
-   Layout and style your front-end with clean & well-formatted CSS
-   Deploy your application online so it's publically accessible

### Necessary Deliverables (Minimum Viable Product)
-   A link to your hosted working app in the URL section of your Github repo
-   A team git repository hosted on Github, with a link to your hosted project, and frequent commits from every team member dating back to the very beginning of the project
-   A readme.md file with:
    -   Explanations of the technologies used
    -   A few paragraphs about the general approach you took
    -   Link to your user stories – who are your users, what do they want, and why?
    -   Link to your wireframes – sketches of major views / interfaces in your application
    -   Link to your diagrams - database schema
    -   Descriptions of any unsolved problems or major hurdles your team had to overcome

### Project Based MVP
-   Five Pokemon in the database
-   One Pokemon created as a starter upon Signup
-   CRUD functionality:
    -   CREATE
        -   Signing up Trainer
        -   Logging in Trainer (creating session)
    -   UPDATE
        -   Nicknames
        -   Evolving Pokemon - With enough Win Requirements
        -   Healing Pokemon - When Pokemon has finished a battle
        -   Trainer's Pokedex
    -   DELETE
        -   Releasing Pokemon 
-   A working battle system
    -   Attack until either your Pokemon or the opponent faints
    -   Pokemon stats utilised to determine battle (eg. speed determines who attacks first)
-   Visual HP bar display
-   Implement Evolution after meeting battle win requirement 

### Possible Additional Features
-   Integrate Pokemon Moves (different attacks)
-   Integrate Pokemon Type advantages/disadvantages (damage multipliers)
-   Pokemon Experience Points/Levels rather than win requirements for evolving
-   Incorporate Pokemon API to display full list of Pokemon (First Gen 150)
-   Healing Pokemon sound effect
-   Minor Battle Animations
 
## :pencil2: Planning & Problem Solving
### General Plan
![Planning Photo 1](./client/images/README-images/Planning_01.png)
![Planning Photo 2](./client/images/README-images/Planning_02.png)
*Initial Concept*

Wireframing / Conceptual Design of website<br/> 
![Planning Photo 3](./client/images/README-images/Planning_03.png)<br/> 
*Team Concept Planning via Zoom*

![Planning Photo 4](./client/images/README-images/Planning_04.png)<br/> 
*Wireframing Concept of MVP*

![Planning Photo 5](./client/images/README-images/Planning_05.png)<br/>
*Setting up Github Workflow* 

![Planning Photo 6](./client/images/README-images/Planning_06.png)<br/>
*Trello initial tasks* 

![Planning Photo 7](./client/images/README-images/Planning_07.png)<br/>
![Planning Photo 8](./client/images/README-images/Planning_08.png)<br/>
*Landing page options* 

![Planning Photo 11](./client/images/README-images/Planning_11.png)<br/>
*After pressing start, option to sign up or login*

![Planning Photo 12](./client/images/README-images/Planning_12.png)<br/>
*Login* 

![Planning Photo 13](./client/images/README-images/Planning_13.png)<br/>
*Sign Up* 

![Planning Photo 14](./client/images/README-images/Planning_14.png)<br/>
*Starter Pokemon page appears after clicking Sign Up. Click on one to choose*

![Planning Photo 15](./client/images/README-images/Planning_15.png)<br/>
*Selecting one Pokeball shows what starter pokemon is inside. User can then confirm selection or choose a different pokemon*

![Planning Photo 16](./client/images/README-images/Planning_16.png)<br/>
*Party page. Displays pokemon in your party. Injured/fainted pokemon are shown in grey. When injured/fainted, you can press the heal button to restore it back to full health. Links to Battle page and Pokedex page are at the top corners.*

![Planning Photo 17](./client/images/README-images/Planning_17.png)<br/>
*Battle page. Your pokemon is on the left battling an opponent. Press attack button to generate an attack. Fight is logged at the bottom and HP bar represents health of each pokemon.*

![Planning Photo 18](./client/images/README-images/Planning_18.png)<br/>
*Win/Lose Modal will show once either of the pokemon have fainted*

![Planning Photo 19](./client/images/README-images/Planning_19.png)<br/>
*Pokedex page for what we think MVP should be. Just displays the pokemon that you have owned.*

![Planning Photo 20](./client/images/README-images/Planning_20.png)<br/>
*Pokedex page if we are able to link to API and also the user table in the database that would specify whether a pokemon has been caught.*

![Planning Photo 21](./client/images/README-images/Planning_21.png)<br/>
*View Pokemon page. Able to view your particular pokemon and see how many more wins until it can evolve. Can also give that pokemon a nickname*

### Use the Problem Solving Process framework to break down the project into manageable components. From Technical Requirements & Necessary Deliverables
1.  Keywords 
    - Git Workflow
    - sign up & Login features
    - GET, POST, PUT/PATCH, DELETE routes
    - Wireframing or conceptual design evidence
    - Clean HTML/CSS

2.  Tasks <br/>
    - :white_check_mark: Create homepage
    - :white_check_mark: Create database
    - :white_check_mark: Create Sign up page
    - :white_check_mark: Create Choose Starter Page
    - :white_check_mark: Create login page
    - :white_check_mark: Create Party Page
    - :white_check_mark: Create Pokedex Page
    - :white_check_mark: Create Battle Page
    - :white_check_mark: Users can battle Pokemon
    - :white_check_mark: Users can delete/release Pokemon
    - :white_check_mark: Users can heal Pokemon<br/>


3.  Implement - Coding Journey and debugging.<br/> 
    Below are some "highlights" where problems arose and how we dealt with these problems. <br/> 

    ## Progress
    ![Planning Photo 9](./client/images/README-images/Planning_09.png)<br/>
    ![Planning Photo 10](./client/images/README-images/Planning_10.png)<br/>
    *Day 2 Team Standup and discussion*

    ### Move List Problem
    Some Pokemon only have one move they are able to use (eg. Ditto) whereas some are able to learn 300+ moves. This meant that the browser would provide an error and not render the move list onto the screen. We were able to resolve this using a for loop and appending only the first four moves listed in the API. 

    ```
        Can you put code snippet of solution here Mitch?
    ```

    ![Development Photo 01](./client/images/README-images/Development_01.png)<br/>
    *Team Screen sharing whilst solving problem together*

    ![Development Photo 02](./client/images/README-images/Development_02.png)<br/>
    *Solved the problem! Good milestone*

    ### How To Play Section
    
    ### Stand up Day 3
    ![Planning Photo 22](./client/images/README-images/Planning_22.png)<br/>
    ![Planning Photo 23](./client/images/README-images/Planning_23.png)<br/>

    ### The renderBulbasaur problem
    ![Development Photo 03](./client/images/README-images/Development_03.png)<br/>
    Why is this happening? 
    ```
        Can you put code snippet of solution here Harry?
    ```



    ### For further details and complete code of the app, please feel free to click into any of the files in the repo.  

## Post-Development

-   


## :rocket: Cool Tech Implemented
-   Trello - For project management
-   Whimsical - Wireframing
-   Canva - For Conceptual Design and graphics
-   JavaScript - Language used
-   Express - Framework
-   Bcrypt - Security
-   PostgreSQL - Relational Database Management System
-   Fly.io - To deploy full stack apps and databases
-   pokeapi.co - Pokemon API
-   Slack - Team collaboration
-   Photoshop - Image editing

### References
-   Classic Game Font- https://www.fontspace.com/pokemon-gb-font-f9621 
-   Pokemon Title Font - https://www.fontspace.com/category/pokemon
-   Background - https://icon54.com/free-pokemon-go-icons/
-   Modal Web Design - https://blog.hubspot.com/website/modal-web-design
-   

## :scream: Bugs to fix :bug:
- 
![Bugs 1](./images/bugs_01.png)<br/>

## :sunglasses: Lessons learnt
1.  


## :white_check_mark: Future features
-   

## Conclusions
![Collab Photo 1](./client/images/README-images/Collab_01.png)
*Teamwork!!*