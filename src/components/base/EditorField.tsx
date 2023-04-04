import { CKEditor } from "ckeditor4-react";
import React from "react";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const EditorField = React.memo((props: InputFieldProps) => {
  const { label, name, control, errors, required } = props;

  return (
    <div className="formControl">
      <label className="formInputLabel">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={({ field: { onChange, value } }) => (
          <CKEditor
            // {...register(name)}
            name={name}
            data={value}
            onChange={(event: any) => {
              const data = event.editor.getData();
              onChange(data);
            }}
            onInstanceReady={({ editor }: any) => {
              editor.setData("<p>Lorem ipsum dolor sit amet</p>");
            }}
            config={{
              language: "en",
              extraPlugins: "colorbutton",
              colorButton_colors:
                "D01F36,5EFF8B,6788FF,FFD058,B073FF," +
                "1ABC9C,2ECC71,3498DB,9B59B6,4E5F70,F1C40F," +
                "16A085,27AE60,2980B9,8E44AD,2C3E50,F39C12," +
                "E67E22,E74C3C,ECF0F1,95A5A6,DDD,FFF," +
                "D35400,C0392B,BDC3C7,7F8C8D,999,000",
            }}
          />
        )}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
});

export default EditorField;
