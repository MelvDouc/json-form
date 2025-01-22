import AddButton from "$/components/Button/AddButton";
import DeleteButton from "$/components/Button/DeleteButton";
import JsonFormDictHandlers from "$/components/JsonFormDict/JsonFormDictHandlers";
import JsonFormKey from "$/components/JsonFormObject/JsonFormKey/JsonFormKey";
import JsonFormObjectItem from "$/components/JsonFormObject/JsonFormObjectItem";
import JsonFormTypeSelect from "$/components/JsonFormTypeSelect/JsonFormTypeSelect";
import { getJsonType, type JsonDictionary } from "$/helpers/json-types";
import cssClasses from "./JsonFormDict.module.scss";

export default function JsonFormDict({ dict, emitModified }: {
  dict: JsonDictionary;
  emitModified: VoidFunction;
}) {
  const {
    addEntry,
    createDeleteEntryFn,
    createRenameKeyFn,
    createUpdateTypeFn
  } = new JsonFormDictHandlers(dict, emitModified);

  return (
    <fieldset className={cssClasses.JsonFormDict}>
      <legend>
        <AddButton add={addEntry} />
      </legend>
      <dl>
        {Object.entries(dict).map(([k, v]) => (
          <>
            <dt>
              <JsonFormKey>
                <span
                  contentEditable="true"
                  spellcheck={false}
                  on:blur={createRenameKeyFn(k)}
                >{k}</span>
                <DeleteButton delete={createDeleteEntryFn(k)} />
                <JsonFormTypeSelect type={getJsonType(v)} updateType={createUpdateTypeFn(k)} />
              </JsonFormKey>
            </dt>
            <dd>
              <JsonFormObjectItem
                value={v}
                updateValue={(newValue) => { dict[k] = newValue; }}
                emitModified={emitModified}
              />
            </dd>
          </>
        ))}
      </dl>
    </fieldset>
  );
}