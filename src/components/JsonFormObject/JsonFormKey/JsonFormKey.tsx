import cssClasses from "./JsonFormKey.module.scss";

export default function JsonFormKey({ children }: {
  children: unknown;
}) {
  return (
    <div className={cssClasses.JsonFormKey}>{children}</div>
  );
}

JsonFormKey.Controls = ({ children }: { children: unknown; }) => {
  return (
    <div className={cssClasses.Controls}>{children}</div>
  );
};