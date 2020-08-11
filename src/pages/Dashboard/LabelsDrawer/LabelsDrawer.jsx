// import React, { useCallback, useState, memo } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // import { getLabels } from "store/selectors";
// // import { removeLabelRequest } from "store/labels/actionCreators";
// // import { Label } from "store/labels/types";

// import Drawer from "components/Drawer";
// import Divider from "components/Divider";

// import LabelTag from "pages/Dashboard/LabelsDrawer/LabelTag";
// // import AddLabelForm from "pages/Dashboard/LabelsDrawer/AddLabelForm";

// interface LabelsDrawerProps {
//   show: boolean;
//   onClose: () => void;
// }

// function LabelsDrawer({ onClose, show }: LabelsDrawerProps) {
//   const dispatch = useDispatch();
//   // const labels = useSelector(getLabels);
//   const [selectedId, setSelectedId] = useState("");

//   const handlePrepareRemove = useCallback(
//     (event: React.MouseEvent<HTMLSpanElement>) => {
//       const { id } = event.currentTarget.dataset;
//       if (!id) return;

//       setSelectedId(id);
//     },
//     [],
//   );

//   // const handleConfirmRemove = useCallback(() => {
//   //   dispatch(removeLabelRequest(selectedId));
//   //   setSelectedId("");
//   // }, [selectedId, dispatch]);

//   const handleCancelRemove = useCallback(() => {
//     setSelectedId("");
//   }, []);

//   return (
//     <Drawer
//       title="Labels"
//       placement="right"
//       width={500}
//       onClose={onClose}
//       visible={show}
//       destroyOnClose>
//       <AddLabelForm />
//       <Divider type="horizontal" />
//       <div>
//         {labels.map((label: Label) => {
//           return (
//             <LabelTag
//               key={label.id}
//               label={label}
//               handleConfirmRemove={handleConfirmRemove}
//               handleCancelRemove={handleCancelRemove}
//               handlePrepareRemove={handlePrepareRemove}
//             />
//           );
//         })}
//       </div>
//     </Drawer>
//   );
// }

// export default memo(LabelsDrawer);
