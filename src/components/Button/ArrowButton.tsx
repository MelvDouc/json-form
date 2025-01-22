import Button from "$/components/Button/Button";

export default function ArrowButton({ direction, move }: {
  direction: "up" | "down";
  move: VoidFunction;
}) {
  return (
    <Button title={`Move ${direction}`} kind="arrow" handleClick={move}>{direction === "up" ? "↑" : "↓"}</Button>
  );
}