import { generateFormElementId } from "$/helpers/generators";
import cssClasses from "./JsonFormPrimitive.module.scss";

export default function JsonFormText({ value, updateValue }: {
  value: string;
  updateValue: (newValue: string) => void;
}) {
  let currentValue = value;

  const handleBlur = ({ target }: Event) => {
    const value = (target as HTMLInputElement).value;

    if (value !== currentValue) {
      currentValue = value;
      updateValue(currentValue);
    }
  };

  return (
    <input
      className={cssClasses.JsonFormCharInput}
      type="text"
      id={generateFormElementId()}
      placeholder="value..."
      value={value}
      on:blur={handleBlur}
    />
  );
}