import Button from "$/components/Button/Button";

export default function DeleteButton({ delete: del }: {
  delete: VoidFunction;
}) {
  return (
    <Button kind="delete" title="Delete" handleClick={del}>×</Button>
  );
}