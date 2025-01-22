import { generateFormElementId } from "$/helpers/generators";

export default function JsonFormCheckbox({ value, updateValue }: {
  value: boolean;
  updateValue: (value: boolean) => void;
}) {
  return (
    <input
      type="checkbox"
      checked={value}
      id={generateFormElementId()}
      on:input={({ target }) => updateValue((target as HTMLInputElement).checked)} />
  );
}