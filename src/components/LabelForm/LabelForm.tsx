import React from "react";

import Button from "components/Button";
import { FormTypes } from "components/Form";
import FormItem from "components/Form/FormItem";
import Input from "components/Input";

import { Form } from "components/LabelForm/LabelForm.styled";

const validateMessages = {
  required: "Label is required",
  whitespace: "Label cannot be empty",
  string: {
    range: `Must be between \${min} and \${max} characters`,
  },
};

const labelRules = [
  {
    min: 1,
    max: 20,
    required: true,
    whitespace: true,
  },
];

type LabelFormLayout = "horizontal" | "inline" | "vertical";

type ButtonSizeType = "small" | "middle" | "large" | undefined;

interface LabelFormProps {
  form: FormTypes.FormInstance;
  name: string;
  layout: LabelFormLayout;
  style?: React.CSSProperties;
  onFinish: (values: any) => void;
  initialValues?: any;
  buttonText: string;
  buttonStyle?: React.CSSProperties;
  buttonSize?: ButtonSizeType;
}

function LabelForm({
  form,
  onFinish,
  name,
  layout,
  style = {},
  initialValues = {},
  buttonText,
  buttonStyle = {},
  buttonSize,
}: LabelFormProps) {
  return (
    <Form
      form={form}
      name={name}
      style={style}
      layout={layout}
      initialValues={initialValues}
      onFinish={onFinish}
      validateMessages={validateMessages}>
      <FormItem name="label" label="Label" rules={labelRules}>
        <Input placeholder="Label..." />
      </FormItem>
      <FormItem>
        <Button
          style={buttonStyle}
          size={buttonSize}
          type="primary"
          htmlType="submit">
          {buttonText}
        </Button>
      </FormItem>
    </Form>
  );
}

export default LabelForm;
