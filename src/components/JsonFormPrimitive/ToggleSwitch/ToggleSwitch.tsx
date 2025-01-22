import { generateFormElementId } from "$/helpers/generators";
import { ref } from "@melvdouc/dsx";
import cssClasses from "./ToggleSwitch.module.scss";
import { debounce } from "$/helpers/time";

export default function ToggleSwitch({ value, updateValue }: {
  value: boolean;
  updateValue: (value: boolean) => void;
}) {
  const id = generateFormElementId();
  const checkboxRef = ref<HTMLInputElement>();

  const $initTrack = (element: HTMLElement) => {
    const animationDurationMs = 300;
    element.style.setProperty("--animation-duration", `${animationDurationMs}ms`);
    element.addEventListener("click", debounce(() => {
      checkboxRef.ifValue(({ checked }) => {
        updateValue(checked);
      });
    }, animationDurationMs));
  };

  return (
    <label htmlFor={id} className={cssClasses.ToggleSwitch}>
      <input
        type="checkbox"
        id={id}
        checked={value}
        $ref={checkboxRef}
      />
      <div className={cssClasses.Track} $init={$initTrack}></div>
    </label>
  );
}