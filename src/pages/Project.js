import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Redirect } from "react-router-dom";

class Project extends React.Component {
  render() {
    const projectDescriptions = {
      connect4: ` In this project, a GUI (Graphical user interface) based game of Connect 4 is created. The game will be played by two players who will take turns dropping their markers into columns. On each turn, the display should show who the current player is. The board should get filled from bottom to top just like in real life. After a player drops their marker into the column of their choice, the program should check if he/she is a winner.If the current player is a winner,  the display label is updated to reflect the status, and write the name of the winner on a new line in the output file named Connect4-Results.txt. If the board is full, check for a winner or a tie. If the game is a tie, indicate that in a seperate line in the output file named Connect4-Results.txt. The game will continue until someone wins or the board becomes full `,

      monster: ` In this project we have created a simple text-based adventure game. The game will create a player object using information from a file, build a dungeon of three rooms each containing a monster, and allow the player to challenge the monster one-by-one and explore for treasure. The game will display messages on the screen to tell user what happens. It also creates a log file that keeps a record of the game. `,

      designPad: ` In this project, we have built a simple React app that is a design pad where users will be able to drag-and-drop inputs to change your design pads when it is in EDIT mode. Our application uses state to dynamically render the pads to show some change after any drag and drop is performed.`,
    };

    return (
      <div className="project-container">
        <h1 className="header">Projects</h1>
        <div className="projects">
          <ProjectCard
            name="Connect 4"
            description={projectDescriptions.connect4}
            link='https://github.com/AboubakariSoumanouP/connect4'
          />

          <ProjectCard
            name="Monster"
            description={projectDescriptions.monster}
            link='https://github.com/AboubakariSoumanouP/Monster-Project'
          />

          <ProjectCard
            name="Design Pad"
            description={projectDescriptions.designPad}
            link='https://github.com/AboubakariSoumanouP/design-pad'
          />
        </div>
      </div>
    );
  }
}

export default Project;
