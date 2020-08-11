// import React, { useCallback, memo } from "react";
// import { useDispatch } from "react-redux";

// import { Label } from "store/labels/types";

// import { useForm } from "components/Form";
// import LabelForm from "components/LabelForm";
// import { editLabelRequest } from "store/labels/actionCreators";

// interface EditLabelFormProps {
//   label: Label;
// }

// function EditLabelForm({ label }: EditLabelFormProps) {
//   const [form] = useForm();
//   const dispatch = useDispatch();

//   const handleFinish = useCallback(
//     (values: any) => {
//       const editedLabel = {
//         ...label,
//         value: values.label.toUpperCase(),
//       };
//       dispatch(editLabelRequest(editedLabel));
//     },
//     [label, dispatch],
//   );

//   return (
//     <LabelForm
//       form={form}
//       name="edit-label"
//       layout="vertical"
//       initialValues={{ label: label.value }}
//       onFinish={handleFinish}
//       buttonText="Edit Label"
//       buttonStyle={{ width: "100%" }}
//       buttonSize="middle"
//     />
//   );
// }

// export default memo(EditLabelForm);
