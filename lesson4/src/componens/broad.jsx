import { useState, useEffect } from "react";
import Square from "./square";

// To-do List:
// 2.undo tối đa 1 lần (Sau đi đánh không thể thay đổi giá trị của ô)
// 3. Tính người chơi thắng khi có 3 nước đi cùng kiểu liên tiếp theo đường thẳng hoặc đường chéo -> Highlight đổi màu để xác định người thắng
// 4. Thời gian tối đa để chơi 1 nước là 3s -> Nếu quá 3s sẽ random đánh 1 nước
// 5. Game được reset khi nhấn nút "chơi lại"

const Broad = () => {
  const [game, setGame] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [player, setPlayer] = useState(true);
  const [timer, setTimer] = useState(3);

  const handlePlay = (position) => {
    const newGame = game.slice();
    newGame[position] = player ? "X" : "O";
    setGame(newGame);
    setPlayer(!player);
    setTimer(3);
  };

  const handleAutoPlay = () => {
    const emptyGame = game
      .map((item, index) => (item ? null : index))
      .filter((item) => item !== null);
    const position = emptyGame[Math.floor(Math.random() * emptyGame.length)];
    handlePlay(position);
  };

  const listWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < listWinner.length; i++) {
      const [a, b, c] = listWinner[i];
      if (game[a] && game[a] === game[b] && game[b] === game[c]) {
        return game[a];
      }
    }
    return null;
  };

  useEffect(() => {
    if (timer < 0) {
      handleAutoPlay();
    }
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, game, player]);

  return (
    <>
      <div>
        <h2>Winner is: {checkWinner()}</h2>
        <h2>Timer: {timer}</h2>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Square value={game[0]} handlePlay={() => handlePlay(0)} />
        <Square value={game[1]} handlePlay={() => handlePlay(1)} />
        <Square value={game[2]} handlePlay={() => handlePlay(2)} />
        <Square value={game[3]} handlePlay={() => handlePlay(3)} />
        <Square value={game[4]} handlePlay={() => handlePlay(4)} />
        <Square value={game[5]} handlePlay={() => handlePlay(5)} />
        <Square value={game[6]} handlePlay={() => handlePlay(6)} />
        <Square value={game[7]} handlePlay={() => handlePlay(7)} />
        <Square value={game[8]} handlePlay={() => handlePlay(8)} />
      </div>
    </>
  );
};

export default Broad;
