import React from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { Controller } from "react-hook-form";
import { getFormErrorMessage } from "@/utils/index.js";

export default function CustomTextInput(props) {
  const { control, fieldValue, validationValue, fieldTitle, fieldStatus, errors, showDeficiency } =
    props;
  return (
    <>
      <Controller
        name={fieldValue}
        defaultValue=""
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className="flex flex-column gap-2">
              <label className="text-bluegray-700 text-xs font-bold" htmlFor={field.name}>
                {fieldTitle}
              </label>
              <InputTextarea
                id={field.name}
                rows={10}
                cols={30}
                maxLength={1500}
                value={field.value}
                className={classNames("p-inputtext-sm", " w-full", {
                  "p-invalid": fieldState.error,
                })}
                onChange={(e) => {
                  if (field.value.length <= 1500) {
                    field.onChange(e.target.value);
                  }
                }}
                disabled={fieldStatus[validationValue || fieldValue]?.disabled}
              />
              <div className="flex align-items-center justify-content-end text-xs font-medium text-bluegray-500">
                {field.value.length} / 1500
              </div>
            </div>
            {showDeficiency(fieldStatus[fieldValue])}
            {getFormErrorMessage(errors, field.name)}
          </>
        )}
      />
    </>
  );
}
