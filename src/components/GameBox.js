import React from "react";
import Input from "./Input";

function GameBoard() {
  return (
    <main className="w-[360px] h-[410px] flex flex-col mx-auto">
      <div className="row">
        <Input inputPos={0} attempt={0} />
        <Input inputPos={1} attempt={0} />
        <Input inputPos={2} attempt={0} />
        <Input inputPos={3} attempt={0} />
        <Input inputPos={4} attempt={0} />
        <Input inputPos={5} attempt={0} />
      </div>
      <div className="row">
        <Input inputPos={0} attempt={1} />
        <Input inputPos={1} attempt={1} />
        <Input inputPos={2} attempt={1} />
        <Input inputPos={3} attempt={1} />
        <Input inputPos={4} attempt={1} />
        <Input inputPos={5} attempt={1} />
      </div>
      <div className="row">
        <Input inputPos={0} attempt={2} />
        <Input inputPos={1} attempt={2} />
        <Input inputPos={2} attempt={2} />
        <Input inputPos={3} attempt={2} />
        <Input inputPos={4} attempt={2} />
        <Input inputPos={5} attempt={2} />
      </div>
      <div className="row">
        <Input inputPos={0} attempt={3} />
        <Input inputPos={1} attempt={3} />
        <Input inputPos={2} attempt={3} />
        <Input inputPos={3} attempt={3} />
        <Input inputPos={4} attempt={3} />
        <Input inputPos={5} attempt={3} />
      </div>
      <div className="row">
        <Input inputPos={0} attempt={4} />
        <Input inputPos={1} attempt={4} />
        <Input inputPos={2} attempt={4} />
        <Input inputPos={3} attempt={4} />
        <Input inputPos={4} attempt={4} />
        <Input inputPos={5} attempt={4} />
      </div>
      <div className="row">
        <Input inputPos={0} attempt={5} />
        <Input inputPos={1} attempt={5} />
        <Input inputPos={2} attempt={5} />
        <Input inputPos={3} attempt={5} />
        <Input inputPos={4} attempt={5} />
        <Input inputPos={5} attempt={5} />
      </div>
    </main>
  );
}

export default GameBoard;
