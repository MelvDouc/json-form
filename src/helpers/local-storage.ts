import { type JsonDictionary } from "$/helpers/json-types";

const DATA_KEY = "json-form-data";

const DEFAULT_DATA = {
  title: "Poems",
  publishedYear: 1846,
  authors: [
    {
      name: "Emily Brontë",
      born: 1818,
      ownBooks: [
        "Wuthering Heights"
      ]
    },
    "Charlotte Brontë",
    "Anne Brontë"
  ]
};

function getDefaultData() {
  return structuredClone(DEFAULT_DATA);
}

export function getSavedData(): JsonDictionary {
  try {
    const data = localStorage.getItem(DATA_KEY);
    return data ? JSON.parse(data) : getDefaultData();
  } catch {
    return getDefaultData() as JsonDictionary;
  }
}

export function saveData(data: JsonDictionary): void {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}