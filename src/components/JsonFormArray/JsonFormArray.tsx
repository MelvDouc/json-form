import AddButton from "$/components/Button/AddButton";
import ArrowButton from "$/components/Button/ArrowButton";
import DeleteButton from "$/components/Button/DeleteButton";
import JsonFormArrayHandlers from "$/components/JsonFormArray/JsonFormArrayHandlers";
import JsonFormKey from "$/components/JsonFormObject/JsonFormKey/JsonFormKey";
import JsonFormObjectItem from "$/components/JsonFormObject/JsonFormObjectItem";
import JsonFormTypeSelect from "$/components/JsonFormTypeSelect/JsonFormTypeSelect";
import { getJsonType, type JsonArray } from "$/helpers/json-types";
import cssClasses from "./JsonFormArray.module.scss";

export default function JsonFormArray({ array, emitModified }: {
  array: JsonArray;
  emitModified: VoidFunction;
}) {
  const {
    addItem,
    createDeleteItemFn,
    createUpdateTypeFn,
    move
  } = new JsonFormArrayHandlers(array, emitModified);

  return (
    <fieldset className={cssClasses.JsonFormArray}>
      <legend><AddButton add={addItem} /></legend>
      <ol>
        {array.map((e, i) => (
          <li>
            <JsonFormKey>
              <JsonFormTypeSelect type={getJsonType(e)} updateType={createUpdateTypeFn(i)} />
              <JsonFormKey.Controls>
                {i > 0 && (<ArrowButton direction="up" move={() => move(i, "up")} />)}
                {i < array.length - 1 && (<ArrowButton direction="down" move={() => move(i, "down")} />)}
                <DeleteButton delete={createDeleteItemFn(i)} />
              </JsonFormKey.Controls>
            </JsonFormKey>
            <JsonFormObjectItem
              value={e}
              updateValue={(newValue) => { array[i] = newValue; }}
              emitModified={emitModified}
            />
          </li>
        ))}
      </ol>
    </fieldset>
  );
}