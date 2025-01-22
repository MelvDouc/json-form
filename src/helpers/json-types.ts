export const JSON_TYPES = ["array", "dictionary", "string", "number", "boolean", "null"] as const;

const DEFAULT_VALUES = {
  string: "",
  number: 0,
  boolean: false,
  null: null
} as const;

export function getJsonType(arg: JsonValue): JsonType {
  if (Array.isArray(arg))
    return "array";

  switch (typeof arg) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      return arg === null ? "null" : "dictionary";
    default:
      throw new Error(`Invalid data type: ${typeof arg}.`);
  }
}

export function getDefaultValue(type: JsonType): JsonValue {
  switch (type) {
    case "string":
      return DEFAULT_VALUES.string;
    case "number":
      return DEFAULT_VALUES.number;
    case "boolean":
      return DEFAULT_VALUES.boolean;
    case "null":
      return DEFAULT_VALUES.null;
    case "array":
      return [DEFAULT_VALUES.string];
    case "dictionary":
      return { key1: "" };
  }
}

export type JsonType = typeof JSON_TYPES[number];
export type JsonPrimitive = string | number | boolean | null;
export type JsonArray = JsonValue[];
export type JsonDictionary = {
  [key: string]: JsonValue;
};
export type JsonValue = JsonPrimitive | JsonArray | JsonDictionary;