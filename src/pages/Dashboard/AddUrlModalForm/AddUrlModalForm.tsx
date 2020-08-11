import React, { useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAddUrlState } from "store/urls/selectors";
import { addUrlRequest, fetchUrlTitlesReset } from "store/urls/actionCreators";

import { useForm } from "components/Form";
import Modal from "components/Modal";
import UrlForm from "components/UrlForm";

import { RequestOption } from "store/types";

interface AddUrlModalFormProps {
  show: boolean;
  onClose: () => void;
}

function AddUrlModalForm({ show, onClose }: AddUrlModalFormProps) {
  const dispatch = useDispatch();
  const [form] = useForm();
  const addUrlState = useSelector(getAddUrlState);

  useEffect(() => {
    if (addUrlState === RequestOption.SUCCESS) {
      form.resetFields();
      dispatch(fetchUrlTitlesReset());
    }
  }, [addUrlState, dispatch, form, onClose]);

  const handleFinish = useCallback(
    (values: any) => {
      dispatch(addUrlRequest(values));
    },
    [dispatch],
  );

  const handleAfterClose = useCallback(() => {
    dispatch(fetchUrlTitlesReset());
    form.resetFields();
  }, [dispatch, form]);

  return (
    <Modal
      title="Add URL"
      style={{ top: 20 }}
      afterClose={handleAfterClose}
      onCancel={onClose}
      visible={show}
      footer={null}>
      <UrlForm
        name="add-url"
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        buttonText="Add URL"
      />
    </Modal>
  );
}

export default memo(AddUrlModalForm);
