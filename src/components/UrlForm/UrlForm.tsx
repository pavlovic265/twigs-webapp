import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import isURL from "validator/lib/isURL";

import { RequestOption } from "store/types";
import { getUrlTitlesState } from "store/urls/selectors";

import Button from "components/Button";
import { FormTypes } from "components/Form";
import FormItem from "components/Form/FormItem";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Select from "components/Select";

import { Form } from "components/UrlForm/UrlForm.styled";

import { renderLabel, renderTag } from "components/UrlForm/renders";
import PossibleTitles from "components/UrlForm/PossibleTitles";

const validateMessages = {
  required: "Label is required",
  whitespace: "Label cannot be empty",
  string: {
    range: `Must be between \${min} and \${max} characters`,
  },
};

type UrlFormLayout = "horizontal" | "inline" | "vertical";

type ButtonSizeType = "small" | "middle" | "large" | undefined;

interface UrlFormProps {
  form: FormTypes.FormInstance;
  name: string;
  layout: UrlFormLayout;
  style?: React.CSSProperties;
  onFinish: (values: any) => void;
  initialValues?: any;
  buttonText: string;
  buttonStyle?: React.CSSProperties;
  buttonSize?: ButtonSizeType;
}

function UrlForm({
  form,
  onFinish,
  name,
  layout,
  style = {},
  initialValues = {},
  buttonText,
}: UrlFormProps) {
  const labels = [];
  const urlTitlesState = useSelector(getUrlTitlesState);

  const handleLabelChange = useCallback(
    (selectedlabels: any) => {
      form.setFieldsValue({ labels: selectedlabels });
    },
    [form],
  );

  const handleSelectTitle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { title } = event.currentTarget.dataset;

      form.setFieldsValue({ title });
    },
    [form],
  );

  const handleFilterLabel = useCallback((input: string, option: any) => {
    return option["data-value"].includes(input.toUpperCase());
  }, []);

  const titlesMessage = useMemo(() => {
    if (urlTitlesState === RequestOption.REQUESTED) {
      return "validating";
    }
    if (urlTitlesState === RequestOption.SUCCESS) {
      return "success";
    }
    return "";
  }, [urlTitlesState]);

  return (
    <Form
      form={form}
      name={name}
      style={style}
      layout={layout}
      initialValues={initialValues}
      onFinish={onFinish}
      validateMessages={validateMessages}>
      <FormItem
        name="href"
        label="URL"
        rules={[
          {
            required: true,
            min: 10,
            type: "url",
          },
        ]}>
        <TextArea autoSize placeholder="URL..." />
      </FormItem>

      <FormItem
        name="title"
        label="Title"
        hasFeedback
        validateStatus={titlesMessage}
        rules={[
          {
            min: 1,
            required: true,
            whitespace: true,
          },
        ]}>
        <Input placeholder="URL Title..." />
      </FormItem>
      <FormItem dependencies={["href"]} shouldUpdate>
        {(form) => {
          const value = form.getFieldValue("href");
          const href = form.isFieldTouched("href") && isURL(value) ? value : "";
          return (
            <PossibleTitles href={href} onSelectTitle={handleSelectTitle} />
          );
        }}
      </FormItem>

      <FormItem
        name="labels"
        label="Label"
        rules={[
          {
            min: 1,
            required: true,
            type: "array",
          },
        ]}>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Select Labels"
          tagRender={renderTag}
          onChange={handleLabelChange}
          filterOption={handleFilterLabel}>
          {/* {labels.map(renderLabel)} */}
        </Select>
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          {buttonText}
        </Button>
      </FormItem>
    </Form>
  );
}

export default UrlForm;
