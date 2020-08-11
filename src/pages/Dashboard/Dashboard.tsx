import React, { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchUserRequest } from "store/user/actionCreators";

import Header from "pages/Dashboard/Header";
import Footer from "components/Footer";
import Button, { ButtonVariant } from "components/Button";

import UrlsTable from "pages/Dashboard/UrlsTable";
import AddUrlModalForm from "pages/Dashboard/AddUrlModalForm";

import { Actions, Layout, Content } from "pages/Dashboard/Dashboard.styles";

function Dashboard() {
  const dispatch = useDispatch();

  const [showAddUrlModalForm, setShowAddUrlModalForm] = useState(false);
  const [showLabelDrawer, setShowLabelDrawer] = useState(false);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  const handleHideLabelDrawer = useCallback(() => {
    setShowLabelDrawer(false);
  }, []);

  const handleShowLabelDrawer = useCallback(() => {
    setShowLabelDrawer(true);
  }, []);

  const handleHideAddUrlModalForm = useCallback(() => {
    setShowAddUrlModalForm(false);
  }, []);

  const handleShowAddUrlModalForm = useCallback(() => {
    setShowAddUrlModalForm(true);
  }, []);

  return (
    <Layout>
      <Header />
      <Content>
        <Actions>
          <Button
            variant={ButtonVariant.primary}
            type="ghost"
            onClick={handleShowAddUrlModalForm}>
            Add URL
          </Button>
          <Button
            variant={ButtonVariant.primary}
            type="ghost"
            onClick={handleShowLabelDrawer}>
            Labels
          </Button>
        </Actions>
        <UrlsTable />
        {/* <LabelsDrawer show={showLabelDrawer} onClose={handleHideLabelDrawer} /> */}
        <AddUrlModalForm
          show={showAddUrlModalForm}
          onClose={handleHideAddUrlModalForm}
        />
      </Content>
      <Footer>
        <div>
          Created my free logo at{" "}
          <a href="https://logomakr.com/" title="logomaker">
            LogoMakr.com
          </a>
        </div>
        <div> Thread ©2020 Created by Marko Pavlovic</div>
      </Footer>
    </Layout>
  );
}

export default Dashboard;
