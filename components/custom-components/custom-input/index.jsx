import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { getFormErrorMessage } from "@/utils/index.js";
import { Controller } from "react-hook-form";

export default function CustomInput(props) {
  const {
    errors,
    control,
    fieldValue,
    fieldTitle,
    validationValue,
    fieldStatus,
    defaultValue,
    showDeficiency,
  } = props;

  return (
    <>
      <Controller
        name={fieldValue}
        defaultValue={defaultValue}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className="flex flex-column gap-2">
              <label className="text-bluegray-600 text-xs font-bold" htmlFor={field.name}>
                {fieldTitle}
              </label>
              <InputText
                id={field.name}
                value={field.value}
                className={classNames("p-inputtext-sm", "w-full", {
                  "p-invalid": fieldState.error,
                })}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                disabled={fieldStatus[validationValue || fieldValue]?.disabled}
              />
            </div>
            {getFormErrorMessage(errors, field.name)}
            {showDeficiency(fieldStatus[fieldValue])}
          </>
        )}
      />
    </>
  );
}
