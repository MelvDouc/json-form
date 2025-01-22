import { generateFormElementId } from "$/helpers/generators";
import cssClasses from "./JsonFormPrimitive.module.scss";

export default function JsonFormNumber({ value, updateValue }: {
  value: number;
  updateValue: (value: number) => void;
}) {
  let currentValue = value;

  const handleBlur = ({ target }: Event) => {
    const value = (target as HTMLInputElement).valueAsNumber;

    if (value !== currentValue) {
      currentValue = value;
      updateValue(currentValue);
    }
  };

  return (
    <input
      className={cssClasses.JsonFormCharInput}
      type="number"
      id={generateFormElementId()}
      value={String(value)}
      on:blur={handleBlur} />
  );
}