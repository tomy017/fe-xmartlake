import React, { useEffect, useRef, useState } from 'react';
import { 
  getStartingPositions, createGrid, 
  drawStartingPositions, moveBot, 
  checkIfCirclesHaveBeenDrawn,
  colors, drawTurn, getAmountOfTurns
} from '../helpers';

import styles from './interactive-grid.module.scss';

interface InteractiveGridProps {
  gameData: TurnData[];
}

export interface BotData {
  id: string;
  color: string;
  turnInfo?: string;
}

export interface BotTurnInfo {
  [botId: string]: string;
}

export interface TurnLog {
  turnNumber: number;
  botData: BotData;
}

const NUM_ROWS = 10;
const NUM_COLS = 10;
const SQUARE_SIZE = 50;

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ gameData }) => {
  const [currentTurn, setCurrentTurn] = useState<number>(0);
  const [botsData, setBotsData] = useState<BotData[]>([]);
  const [botTurnInfo, setBotTurnInfo] = useState<BotTurnInfo>({});
  const [turnLogs, setTurnLogs] = useState<TurnLog[]>([]);
  const gridRef = useRef<SVGSVGElement>(null);

  const assignColorsToBots = () => {
    const botsData: BotData[] = [];
    let i = 0;
    const firstTurn = gameData.filter((turnData) => turnData.turn_number === 1);
    firstTurn.forEach((turnData) => {
      const botData: BotData = {
        id: turnData.bot_identifier,
        color: colors[i].hex,
      };
      botsData.push(botData);
      i++;
    });

    setBotsData(botsData);
    return botsData;
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (grid && !grid.hasChildNodes()) {
      createGrid(grid, NUM_ROWS, NUM_COLS, SQUARE_SIZE);
    }
  }, [gridRef.current]);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid && currentTurn === 0) {
      const drawn = checkIfCirclesHaveBeenDrawn(grid);
      if (!drawn) {
        const startingPositions = getStartingPositions(gameData);
        const data = assignColorsToBots();
        drawStartingPositions(grid, startingPositions, SQUARE_SIZE, data);
      }
    }
    
  },[gridRef, gameData, currentTurn, botsData]);

  const handleNextTurn = () => {
    if (currentTurn < gameData.length - 1) {
      setCurrentTurn(currentTurn + 1);
      if(gridRef.current) {
        drawTurn(
          gridRef.current, gameData, currentTurn + 1,
          SQUARE_SIZE, botsData, setBotTurnInfo, setTurnLogs
        );
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <svg id="grid" width="400" height="400" ref={gridRef} />
        <button onClick={handleNextTurn} disabled={currentTurn === getAmountOfTurns(gameData)}>
          Next Turn ▶️
        </button>
        <div className={styles.logs}>
          <h2>Logs</h2>
          <div className={styles.logsContainer}>
            {turnLogs.map((turnLog) => (
              <div key={turnLog.turnNumber} className={styles.log}>
                <svg height="50" width="50">
                  <circle cx="25" cy="25" r="10" fill={turnLog.botData.color} />
                </svg>
                <p>Turn {turnLog.turnNumber}</p>
                <p>{turnLog.botData.turnInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bots}>
        {botsData.map((botData) => (
          <div key={botData.id}>
            <div className={styles.botsRef}>
              <svg height="50" width="50">
                <circle cx="25" cy="25" r="10" fill={botData.color} />
              </svg>
              <div className={styles.caption}>
                <p>{botData.id}</p>
                <p>{botTurnInfo[botData.id]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveGrid;
