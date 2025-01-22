import { generateFormElementId } from "$/helpers/generators";
import { type JsonType, JSON_TYPES } from "$/helpers/json-types";
import cssClasses from "./JsonFormTypeSelect.module.scss";

export default function JsonFormTypeSelect({ type, updateType }: {
  type: JsonType;
  updateType: (type: JsonType) => void;
}) {
  const handleChange = ({ target }: Event) => {
    updateType((target as HTMLSelectElement).value as JsonType);
  };

  return (
    <select
      id={generateFormElementId()}
      className={cssClasses.JsonFormTypeSelect}
      on:change={handleChange}
    >
      {JSON_TYPES.map((jsonType) => (
        <option value={jsonType} selected={jsonType === type}>{jsonType}</option>
      ))}
    </select>
  );
}