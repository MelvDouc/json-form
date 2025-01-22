import { getDefaultValue, type JsonArray, type JsonType } from "$/helpers/json-types";

export default class JsonFormArrayHandlers {
  private readonly array: JsonArray;
  private readonly emitModified: VoidFunction;

  public constructor(array: JsonArray, emitModified: VoidFunction) {
    this.array = array;
    this.emitModified = emitModified;
  }

  public addItem = () => {
    this.array.push(getDefaultValue("string"));
    this.emitModified();
  };

  public createDeleteItemFn = (i: number) => {
    return () => {
      this.array.splice(i, 1);
      this.emitModified();
    };
  };

  public createUpdateTypeFn = (i: number) => {
    return (type: JsonType) => {
      this.array[i] = getDefaultValue(type);
      this.emitModified();
    };
  };

  public move = (i: number, direction: MoveDirection) => {
    const arr = this.array;

    switch (direction) {
      case "up":
        if (i > 0) {
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
          this.emitModified();
        }
        break;
      case "down":
        if (i < arr.length - 1) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          this.emitModified();
        }
    }
  };
}

export type MoveDirection = "up" | "down";