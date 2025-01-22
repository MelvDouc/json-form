import Button from "$/components/Button/Button";

export default function AddButton({ add }: {
  add: VoidFunction;
}) {
  return (
    <Button kind="add" title="Add item" handleClick={add}>+</Button>
  );
}