import DataDisplay from "$/components/DataDisplay/DataDisplay";
import JsonForm from "$/components/JsonForm/JsonForm";
import { getSavedData } from "$/helpers/local-storage";

export default function App() {
  const $initMain = (mainElement: HTMLElement) => {
    const data = getSavedData();

    const validate = () => {
      mainElement.replaceChildren(
        <DataDisplay data={data} goBack={displayForm} />
      );
    };

    const displayForm = () => {
      mainElement.replaceChildren(
        <JsonForm value={data} validate={validate} />
      );
    };

    displayForm();
  };

  return (
    <>
      <header>
        <h1>JSON Form</h1>
      </header>
      <main $init={$initMain}></main>
    </>
  );
}