// import React, { useCallback, useState, memo, useEffect } from "react";

// import { Label } from "store/labels/types";
// import { getEditLabelState } from "store/selectors";

// import { DeleteIcon, EditIcon } from "components/Icons";
// import Popconfirm from "components/Popconfirm";
// import Popover from "components/Popover";
// import Tooltip from "components/Tooltip";

// import EditLabelForm from "pages/Dashboard/LabelsDrawer/LabelTag/EditLabelForm";

// import {
//   TagText,
//   Tag,
//   Divider,
// } from "pages/Dashboard/LabelsDrawer/LabelTag/LabelTag.styled";
// import { useSelector } from "react-redux";
// import { RequestOption } from "store/types";

// interface LabelTagProps {
//   label: Label;
//   handleConfirmRemove: () => void;
//   handleCancelRemove: () => void;
//   handlePrepareRemove: (event: React.MouseEvent<HTMLSpanElement>) => void;
// }

// function LabelTag({
//   label,
//   handleConfirmRemove,
//   handleCancelRemove,
//   handlePrepareRemove,
// }: LabelTagProps) {
//   const [showEdit, setShowEdit] = useState(false);
//   const editLabelState = useSelector(getEditLabelState);

//   useEffect(() => {
//     if (editLabelState === RequestOption.SUCCESS) {
//       setShowEdit(false);
//     }
//   }, [editLabelState]);

//   const handleToggleEdit = useCallback(visible => {
//     setShowEdit(visible);
//   }, []);

//   return (
//     <Tag color={label.color}>
//       <TagText>{label.value}</TagText>
//       <Popover
//         content={<EditLabelForm label={label} />}
//         title="Edit Label"
//         trigger="click"
//         visible={showEdit}
//         onVisibleChange={handleToggleEdit}>
//         <Tooltip placement="bottom" title="edit">
//           <EditIcon />
//         </Tooltip>
//       </Popover>

//       <Divider type="vertical" color={label.color} />

//       <Popconfirm
//         title="Are you sure delete this label?"
//         onConfirm={handleConfirmRemove}
//         onCancel={handleCancelRemove}
//         okText="Yes"
//         cancelText="No">
//         <Tooltip placement="bottom" title="delete">
//           <DeleteIcon data-id={label.id} onClick={handlePrepareRemove} />
//         </Tooltip>
//       </Popconfirm>
//     </Tag>
//   );
// }

// export default memo(LabelTag);
