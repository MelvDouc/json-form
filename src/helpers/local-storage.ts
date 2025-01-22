import { getDefaultValue, JsonDictionary } from "$/helpers/json-types";

const DATA_KEY = "json-form-data";

export function getSavedData(): JsonDictionary {
  try {
    const data = localStorage.getItem(DATA_KEY);
    return data ? JSON.parse(data) : getDefaultValue("dictionary");
  } catch {
    return getDefaultValue("dictionary") as JsonDictionary;
  }
}

export function saveData(data: JsonDictionary): void {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}