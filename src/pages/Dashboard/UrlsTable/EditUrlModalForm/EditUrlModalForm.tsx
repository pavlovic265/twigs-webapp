import React, { useCallback, memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUrlsObject, getEditUrlState } from "store/urls/selectors";
import { editUrlRequest, fetchUrlTitlesReset } from "store/urls/actionCreators";

import { useForm } from "components/Form";
import Modal from "components/Modal";
import UrlForm from "components/UrlForm";
import { RequestOption } from "store/types";

interface EditUrlModalFormProps {
  editId: string;
  onClose: () => void;
}

function EditUrlModalForm({ editId, onClose }: EditUrlModalFormProps) {
  const [form] = useForm();
  const urlsObject = useSelector(getUrlsObject);
  const editUrlState = useSelector(getEditUrlState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editUrlState === RequestOption.SUCCESS) {
      onClose();
    }
  }, [onClose, editUrlState]);

  useEffect(() => {
    if (form["__INTERNAL__"].name === "edit-url") {
      form.setFieldsValue(urlsObject[editId]);
    }
  }, [form, urlsObject, editId]);

  const handleFinish = useCallback(
    (values: any) => {
      dispatch(
        editUrlRequest({
          id: editId,
          ...values,
        }),
      );
    },
    [dispatch, editId],
  );

  const handleAfterClose = useCallback(() => {
    dispatch(fetchUrlTitlesReset());
  }, [dispatch]);

  return (
    <Modal
      title="Edit URL"
      style={{ top: 20 }}
      onCancel={onClose}
      visible={!!editId}
      afterClose={handleAfterClose}
      footer={null}>
      <UrlForm
        name="edit-url"
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        buttonText="Edit URL"
      />
    </Modal>
  );
}

export default memo(EditUrlModalForm);
