import cssClasses from "./Button.module.scss";

export default function Button({ kind, title, handleClick, children }: {
  kind: "arrow" | "add" | "delete";
  title: string;
  handleClick: VoidFunction;
  children: unknown;
}) {
  return (
    <button
      className={cssClasses.Button}
      title={title}
      data-kind={kind}
      on:click={handleClick}
      type="button"
    >{children}</button>
  );
}