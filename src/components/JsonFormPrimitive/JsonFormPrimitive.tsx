import JsonFormNumber from "$/components/JsonFormPrimitive/JsonFormNumber";
import JsonFormText from "$/components/JsonFormPrimitive/JsonFormText";
import ToggleSwitch from "$/components/JsonFormPrimitive/ToggleSwitch/ToggleSwitch";
import type { JsonPrimitive } from "$/helpers/json-types";

export default function JsonFormPrimitive({ value, updateValue }: {
  value: JsonPrimitive;
  updateValue: (newValue: JsonPrimitive) => void;
}) {
  switch (typeof value) {
    case "string":
      return (<JsonFormText value={value} updateValue={updateValue} />);
    case "number":
      return (<JsonFormNumber value={value} updateValue={updateValue} />);
    case "boolean":
      return (<ToggleSwitch value={value} updateValue={updateValue} />);
    default:
      return null;
  }
}