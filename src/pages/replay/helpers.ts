import { Dispatch, SetStateAction } from "react";
import { BotData, BotTurnInfo, TurnLog } from "./components/interactive-grid";

export const colors: { name: string; hex: string }[] = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#00FF00' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Dark Green', hex: '#008000' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Khaki', hex: '#F0E68C' },
  { name: 'Blue Violet', hex: '#8A2BE2' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Tomato', hex: '#FF6347' },
  { name: 'Spring Green', hex: '#00FF7F' },
  { name: 'Green Yellow', hex: '#ADFF2F' },
  { name: 'Dark Red', hex: '#8B0000' },
  { name: 'Chartreuse', hex: '#7FFF00' },
  { name: 'Slate Blue', hex: '#6A5ACD' },
  { name: 'Orange Red', hex: '#FF4500' },
  { name: 'Lime Green', hex: '#32CD32' },
  { name: 'Dark Orchid', hex: '#9932CC' },
  { name: 'Hot Pink', hex: '#FF69B4' },
  { name: 'Light Sea Green', hex: '#20B2AA' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Lawn Green', hex: '#7CFC00' },
  { name: 'Medium Orchid', hex: '#BA55D3' },
  { name: 'Medium Sea Green', hex: '#3CB371' },
  { name: 'Medium Aquamarine', hex: '#66CDAA' },
  { name: 'Medium Slate Blue', hex: '#7B68EE' },
  { name: 'Medium Purple', hex: '#9370DB' },
  { name: 'Medium Turquoise', hex: '#48D1CC' },
  { name: 'Dark Sea Green', hex: '#8FBC8F' },
  { name: 'Light Salmon', hex: '#FFA07A' },
  { name: 'Rosy Brown', hex: '#BC8F8F' },
  { name: 'Sienna', hex: '#A0522D' },
  { name: 'Dark Orange', hex: '#FF8C00' },
  { name: 'Dark Turquoise', hex: '#00CED1' },
  { name: 'Dark Khaki', hex: '#BDB76B' },
  { name: 'Green Yellow', hex: '#ADFF2F' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Olive Drab', hex: '#6B8E23' },
  { name: 'Salmon', hex: '#FA8072' },
  { name: 'Light Sea Green', hex: '#20B2AA' },
  { name: 'Light Slate Gray', hex: '#778899' },
  { name: 'Indian Red', hex: '#CD5C5C' },
  { name: 'Steel Blue', hex: '#4682B4' },
  { name: 'Sea Green', hex: '#2E8B57' },
  { name: 'Green Yellow', hex: '#ADFF2F' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Light Cyan', hex: '#E0FFFF' },
  { name: 'Spring Green', hex: '#00FF7F' },
  { name: 'Hot Pink', hex: '#FF69B4' },
  { name: 'Medium Sea Green', hex: '#3CB371' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'Goldenrod', hex: '#DAA520' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Dark Green', hex: '#008000' },
  { name: 'Saddle Brown', hex: '#8B4513' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Green Yellow', hex: '#ADFF2F' },
  { name: 'Dark Slate Gray', hex: '#2F4F4F' },
  { name: 'Orange Red', hex: '#FF4500' },
  { name: 'Slate Blue', hex: '#6A5ACD' },
  { name: 'Dark Orchid', hex: '#9932CC' },
  { name: 'Sienna', hex: '#A0522D' },
  { name: 'Lime Green', hex: '#32CD32' },
  { name: 'Medium Slate Blue', hex: '#7B68EE' },
  { name: 'Medium Turquoise', hex: '#48D1CC' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Medium Aquamarine', hex: '#66CDAA' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Blue Violet', hex: '#8A2BE2' },
  { name: 'Green Yellow', hex: '#ADFF2F' },
  { name: 'Peru', hex: '#CD853F' },
  { name: 'Medium Blue', hex: '#0000CD' },
  { name: 'Dark Violet', hex: '#9400D3' },
  { name: 'Medium Spring Green', hex: '#00FA9A' },
  { name: 'Dim Gray', hex: '#696969' },
  { name: 'Light Sea Green', hex: '#20B2AA' },
  { name: 'Dark Sea Green', hex: '#8FBC8F' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Orange Red', hex: '#FF4500' },
  { name: 'Medium Purple', hex: '#9370DB' },
  { name: 'Sienna', hex: '#A0522D' },
  { name: 'Green Yellow', hex: '#ADFF2F' },
  { name: 'Olive Drab', hex: '#6B8E23' },
  { name: 'Medium Turquoise', hex: '#48D1CC' },
  { name: 'Indian Red', hex: '#CD5C5C' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Dark Slate Gray', hex: '#2F4F4F' }
];

export const getStartingPositions = (gameData: TurnData[]) => {
  const startingPositions = gameData
    .filter((turn) => turn.turn_number === 1)
    .map((turn) => {
      return {
          botIdentifier: turn.bot_identifier,
          x: turn.origin_position_x,
          y: turn.origin_position_y,
      };
    }
  );
  return startingPositions;
}

export const createGrid = (grid: SVGSVGElement, rows: number, cols: number, squareSize: number) => {
    // Create a new SVG element for the grid
    const svgNS = "http://www.w3.org/2000/svg";
    const gridGroup = document.createElementNS(svgNS, "g");

    // Loop to create rows and columns of squares
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const rect = document.createElementNS(svgNS, "rect");
            rect.setAttribute("x", (j * squareSize).toString());
            rect.setAttribute("y", (i * squareSize).toString());
            rect.setAttribute("width", squareSize.toString());
            rect.setAttribute("height", squareSize.toString());
            rect.setAttribute("fill", "none");
            rect.setAttribute("stroke", "black");
            gridGroup.appendChild(rect);
        }
    }

    // Set the viewbox and add the grid group to the SVG
    const viewBoxWidth = cols * squareSize;
    const viewBoxHeight = rows * squareSize;
    grid.setAttribute("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
    grid.appendChild(gridGroup);
};

export const drawStartingPositions = (grid: SVGSVGElement, startingPositions: any[], squareSize: number, botsData: any[]) => {
  const svgNS = "http://www.w3.org/2000/svg";
  console.log(startingPositions);
  startingPositions.forEach((position) => {
    const circle = document.createElementNS(svgNS, "circle");
    // Calculate the center position of the square
    const centerX = position.x * squareSize + squareSize / 2;
    const centerY = position.y * squareSize + squareSize / 2;

    const color = botsData.find((bot) => bot.id === position.botIdentifier)?.color;

    circle.setAttribute("cx", centerX.toString());
    circle.setAttribute("cy", centerY.toString());
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", color);
    circle.setAttribute("id", position.botIdentifier);
    grid.appendChild(circle);
  });
};

const animate = (entity: any, newX: number, newY: number, squareSize: number, startTime: number, animationDuration: number) => {
  const elapsedTime = performance.now() - startTime;
  if (elapsedTime < animationDuration) {
    const progress = elapsedTime / animationDuration;
    const nextX = newX * squareSize + squareSize / 2;
    const nextY = newY * squareSize + squareSize / 2;
    entity.setAttribute('cx', nextX);
    entity.setAttribute('cy', nextY);
    requestAnimationFrame(() => animate(entity, newX, newY, squareSize, startTime, animationDuration));
  } else {
    entity.setAttribute('cx', (newX + 0.5) * squareSize);
    entity.setAttribute('cy', (newY + 0.5) * squareSize);
  }
}

export const moveBot = (
  grid: SVGSVGElement, botIdentifier: 
  string,x: number, y: number, newX: number, newY: 
  number, squareSize: number, color: string
  ) => {
  const svgNS = "http://www.w3.org/2000/svg";

  // Find the existing bot circle
  const existingBotCircle = document.querySelector(`#${botIdentifier}`) as SVGCircleElement;
  if (existingBotCircle) {
      existingBotCircle.remove(); // Remove the existing bot circle
  }

  // Calculate the center position of the new square
  const newCenterX = newX * squareSize + squareSize / 2;
  const newCenterY = newY * squareSize + squareSize / 2;

  // Create a new circle for the bot
  const newBotCircle = document.createElementNS(svgNS, "circle");
  newBotCircle.setAttribute("id", botIdentifier);
  newBotCircle.setAttribute("cx", newCenterX.toString());
  newBotCircle.setAttribute("cy", newCenterY.toString());
  newBotCircle.setAttribute("r", "10"); // Adjust the radius as needed
  newBotCircle.setAttribute("fill", color); // Circle color
  grid.appendChild(newBotCircle);

  // Create a keyframe animation
  const animationName = `moveBotAnimation_${botIdentifier}`;
  const animationKeyframes = `
      @keyframes ${animationName} {
          from {
              cx: ${x * squareSize + squareSize / 2};
              cy: ${y * squareSize + squareSize / 2};
          }
          to {
              cx: ${newCenterX};
              cy: ${newCenterY};
          }
      }
  `;

  // Create a style element for the animation
  const styleElement = document.createElementNS(svgNS, "style");
  styleElement.innerHTML = animationKeyframes;
  grid.appendChild(styleElement);

  // Apply the animation to the new bot circle
  newBotCircle.style.animation = `${animationName} 1s linear forwards`; // Adjust the duration as needed
};

const drawShield = (grid: SVGSVGElement, botIdentifier: string, squareSize: number, color: string) => {
  const svgNS = "http://www.w3.org/2000/svg";
  // Find the existing bot circle
  const existingBotCircle = document.querySelector(`#${botIdentifier}`) as SVGCircleElement;
  if (existingBotCircle) {
    existingBotCircle.remove(); // Remove the existing bot circle
  }
  // Draw the shield
  const newShieldCircle = document.createElementNS(svgNS, "circle");
  newShieldCircle.setAttribute("id", botIdentifier);
  newShieldCircle.setAttribute("cx", existingBotCircle.getAttribute("cx") || "0");
  newShieldCircle.setAttribute("cy", existingBotCircle.getAttribute("cy") || "0");
  newShieldCircle.setAttribute("r", "10"); // Adjust the radius as needed
  newShieldCircle.setAttribute("fill", "none"); // Circle color
  newShieldCircle.setAttribute("stroke", color); // Circle color
  newShieldCircle.setAttribute("stroke-width", "5"); // Circle color
  grid.appendChild(newShieldCircle);
}

const pulse = (grid: SVGSVGElement, botIdentifier: string, squareSize: number, color: string) => {
  const svgNS = "http://www.w3.org/2000/svg";
  // Find the existing bot circle
  const existingBotCircle = document.querySelector(`#${botIdentifier}`) as SVGCircleElement;
  if (existingBotCircle) {
    existingBotCircle.remove(); // Remove the existing bot circle
  }
  // I want to have a pulse animation here
  const newRefuelCircle = document.createElementNS(svgNS, "circle");
  newRefuelCircle.setAttribute("id", botIdentifier);
  newRefuelCircle.setAttribute("cx", existingBotCircle.getAttribute("cx") || "0");
  newRefuelCircle.setAttribute("cy", existingBotCircle.getAttribute("cy") || "0");
  newRefuelCircle.setAttribute("r", "10"); // Adjust the radius as needed
  newRefuelCircle.setAttribute("fill", color); // Circle color
  grid.appendChild(newRefuelCircle);

  // Add a pulse animation
  const firstAnimationName = `refuelAnimationUp_${botIdentifier}`;
  const firstAnimationKeyframes = `
    @keyframes ${firstAnimationName} {
        from {
            r: 10;
        }
        to {
            r: 15;
        }
      }
  `;

  const secondAnimationName = `refuelAnimationDown_${botIdentifier}`;
  const secondAnimationKeyframes = `
    @keyframes ${secondAnimationName} {
      from {
        r: 15;
      }
      to {
        r: 10;
      }
    }
  `;
  // Create a style element for the animation
  const styleElement = document.createElementNS(svgNS, "style");
  styleElement.innerHTML = firstAnimationKeyframes;
  grid.appendChild(styleElement);
  // Apply the animation to the new bot circle
  newRefuelCircle.style.animation = `${firstAnimationName} 1s linear forwards`; // Adjust the duration as needed

  setTimeout(() => {
    styleElement.innerHTML = secondAnimationKeyframes;
    grid.appendChild(styleElement);
    // Apply the animation to the new bot circle
    newRefuelCircle.style.animation = `${secondAnimationName} 1s linear forwards`; // Adjust the duration as needed
  }, 1000);
}



export const checkIfCirclesHaveBeenDrawn = (grid: SVGSVGElement) => {
  const circles = grid.querySelectorAll("circle");
  return circles.length > 0;
};

const getCurrentTurn = (gameData: TurnData[], turnNumber: number) => {
  return gameData.filter((turn) => turn.turn_number === turnNumber);
};

export const getAmountOfTurns = (gameData: TurnData[]) => {
  const turns = gameData.map((turn) => turn.turn_number);
  return Math.max(...turns);
};

export const drawTurn = (
  grid: SVGSVGElement, gameData: TurnData[], 
  turnNumber: number, squareSize: number, botsData: any[], 
  setBotTurnInfo: Dispatch<SetStateAction<BotTurnInfo>>, 
  setTurnLogs: Dispatch<SetStateAction<TurnLog[]>>
  ) => {
  const currentTurn = getCurrentTurn(gameData, turnNumber);
  for (let i = 0; i < currentTurn.length; i++) {
    const turn = currentTurn[i];
    const bot = botsData.find((bot) => bot.id === turn.bot_identifier);
    if (bot) {
      const color = bot.color;
      const botIdentifier = turn.bot_identifier;
      const x = turn.origin_position_x;
      const y = turn.origin_position_y;
      const newX = turn.final_position_x;
      const newY = turn.final_position_y;
      setTimeout(() => {
        switch (turn.action) {
          case 'M':
            moveBot(grid, botIdentifier, x, y, newX, newY, squareSize, color);
            setBotTurnInfo((prevState) => {
              return {
                ...prevState,
                [botIdentifier]: "Moved to " + newX + ", " + newY
              }
            });
            setTurnLogs((prevState) => {
              return [...prevState, {
                turnNumber,
                botData: {
                  id: botIdentifier,
                  color,
                  turnInfo: "Moved to " + newX + ", " + newY
                }
              }]
            });
          break;
          case 'S':
            drawShield(grid, botIdentifier, squareSize, color);
            setBotTurnInfo((prevState) => {
              return {
                ...prevState,
                [botIdentifier]: "Shielded"
              }
            });
            setTurnLogs((prevState) => {
              return [...prevState, {
                turnNumber,
                botData: {
                  id: botIdentifier,
                  color,
                  turnInfo: "Shielded"
                }
              }]
            });
          break;
          case 'R':
            pulse(grid, botIdentifier, squareSize, color);
            setBotTurnInfo((prevState) => {
              return {
                ...prevState,
                [botIdentifier]: "Refueled"
              }
            });
            setTurnLogs((prevState) => {
              return [...prevState, {
                turnNumber,
                botData: {
                  id: botIdentifier,
                  color,
                  turnInfo: "Refueled"
                }
              }]
            });
          break;
          case 'L':
            pulse(grid, botIdentifier, squareSize, color);
            setBotTurnInfo((prevState) => {
              return {
                ...prevState,
                [botIdentifier]: "Reloaded"
              }
            });
            setTurnLogs((prevState) => {
              return [...prevState, {
                turnNumber,
                botData: {
                  id: botIdentifier,
                  color,
                  turnInfo: "Reloaded"
                }
              }]
            });
          break;
          case 'F':
            // TODO: Implement fire
          break;
          case 'T':
            pulse(grid, botIdentifier, squareSize, color);
              setBotTurnInfo((prevState) => {
                return {
                  ...prevState,
                  [botIdentifier]: "Repaired"
                }
              });
              setTurnLogs((prevState) => {
                return [...prevState, {
                  turnNumber,
                  botData: {
                    id: botIdentifier,
                    color,
                    turnInfo: "Repaired"
                  }
                }]
              });
          break;
          case '/':
            setBotTurnInfo((prevState) => {
              return {
                ...prevState,
                [botIdentifier]: "Skipped"
              }
            });
            setTurnLogs((prevState) => {
              return [...prevState, {
                turnNumber,
                botData: {
                  id: botIdentifier,
                  color,
                  turnInfo: "Skipped"
                }
              }]
            });
          break;
        }
      }, 1000 * i);
    }
  }
};
