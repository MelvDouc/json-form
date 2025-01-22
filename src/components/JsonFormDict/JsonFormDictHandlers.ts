import { getDefaultValue, type JsonDictionary, type JsonType } from "$/helpers/json-types";

export default class JsonFormDictHandlers {
  private readonly dict: JsonDictionary;
  private readonly emitModified: VoidFunction;

  public constructor(dict: JsonDictionary, emitModified: VoidFunction) {
    this.dict = dict;
    this.emitModified = emitModified;
  }

  public addEntry = () => {
    this.dict[this.nextKey()] = getDefaultValue("string");
    this.emitModified();
  };

  public createDeleteEntryFn = (key: string) => {
    return () => {
      delete this.dict[key];
      this.emitModified();
    };
  };

  public createRenameKeyFn = (oldKey: string) => {
    return ({ target }: Event) => {
      const { innerText: newKey } = target as HTMLElement;

      if (newKey in this.dict)
        return;

      const value = this.dict[oldKey as string];
      delete this.dict[oldKey as string];
      this.dict[newKey] = value;
      this.emitModified();
    };
  };

  public createUpdateTypeFn = (key: string) => {
    return (type: JsonType) => {
      this.dict[key] = getDefaultValue(type);
      this.emitModified();
    };
  };

  private nextKey(): string {
    let i = 1;
    let key = `key${i}`;

    while (key in this.dict) {
      i++;
      key = `key${i}`;
    }

    return key;
  }
}