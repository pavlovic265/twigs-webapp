// import React, { useCallback, memo } from "react";
// import { useDispatch } from "react-redux";

// import { addLabelRequest } from "store/labels/actionCreators";
// import { AddLabel } from "store/labels/types";
// import generateColor from "utils/generateColor";

// import { useForm } from "components/Form";
// import LabelForm from "components/LabelForm";

// function AddLabelForm() {
//   const dispatch = useDispatch();
//   const [form] = useForm();

//   const handleFinish = useCallback(
//     (values: any) => {
//       dispatch(
//         addLabelRequest({
//           value: values.label.toUpperCase(),
//           color: generateColor(),
//         } as AddLabel),
//       );
//       form.resetFields();
//     },
//     [dispatch, form],
//   );

//   return (
//     <LabelForm
//       form={form}
//       style={{ height: "80px" }}
//       name="add-label"
//       layout="inline"
//       onFinish={handleFinish}
//       buttonText="Add Label"
//     />
//   );
// }

// export default memo(AddLabelForm);
