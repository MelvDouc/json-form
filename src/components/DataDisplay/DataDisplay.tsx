import { JsonValue } from "$/helpers/json-types";
import cssClasses from "./DataDisplay.module.scss";

export default function DataDisplay({ data, goBack }: {
  data: JsonValue;
  goBack: VoidFunction;
}) {
  return (
    <div className={cssClasses.DataDisplay}>
      <h2>Data</h2>
      <p className={cssClasses.PseudoLink} on:click={goBack}>Go back</p>
      <pre className={cssClasses.Data}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}