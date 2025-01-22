import JsonFormArray from "$/components/JsonFormArray/JsonFormArray";
import JsonFormDict from "$/components/JsonFormDict/JsonFormDict";
import JsonFormPrimitive from "$/components/JsonFormPrimitive/JsonFormPrimitive";
import type { JsonPrimitive, JsonValue } from "$/helpers/json-types";

export default function JsonFormObjectItem({ value, updateValue, emitModified }: {
  value: JsonValue;
  updateValue: (value: JsonPrimitive) => void;
  emitModified: VoidFunction;
}) {
  if (Array.isArray(value))
    return (
      <JsonFormArray array={value} emitModified={emitModified} />
    );

  if (typeof value === "object" && value !== null)
    return (
      <JsonFormDict dict={value} emitModified={emitModified} />
    );

  const update = (value: JsonPrimitive) => {
    updateValue(value);
    emitModified();
  };

  return (
    <JsonFormPrimitive value={value} updateValue={update} />
  );
}