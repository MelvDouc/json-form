import JsonFormDict from "$/components/JsonFormDict/JsonFormDict";
import type { JsonDictionary } from "$/helpers/json-types";
import { saveData } from "$/helpers/local-storage";
import cssClasses from "./JsonForm.module.scss";

export default function JsonForm({ value, validate }: {
  value: JsonDictionary;
  validate: VoidFunction;
}) {
  const eventTarget = new EventTarget();
  const modifiedEventType = "json-form-modified";

  const $init = (form: HTMLFormElement) => {
    form.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      saveData(value);
      validate();
    });
    onModified(() => {
      saveData(value);
      form.querySelector(`.${cssClasses.JsonFormBody}`)?.replaceChildren(
        <JsonFormDict dict={value} emitModified={emitModified} />
      );
    });
    emitModified();
  };

  const emitModified = () => {
    eventTarget.dispatchEvent(new CustomEvent(modifiedEventType));
  };

  const onModified = (listener: () => unknown) => {
    eventTarget.addEventListener(modifiedEventType, listener);
  };

  return (
    <form className={cssClasses.JsonForm} $init={$init}>
      <section className={cssClasses.JsonFormBody}></section>
      <section className={cssClasses.JsonFormFooter}>
        <button type="submit">Save</button>
      </section>
    </form>
  );
}