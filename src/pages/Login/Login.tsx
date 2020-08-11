import React, { useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";

import { goToGoogleAuth, goToDashboard } from "utils/routes";
import storage from "utils/storage";
import { setRequestHeader } from "utils/request";

import Footer from "components/Footer";
import { GoogleIcon } from "components/Icons";

import { Layout, Content, Button, Link } from "pages/Login/Login.styles";

function Login() {
  const [loading, setLoading] = useState(false);
  const { code } = useParams();
  const history = useHistory();

  const handleLoading = useCallback(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (!code) {
      return;
    }

    storage.setItem("code", code);
    setRequestHeader(code);

    history.replace(goToDashboard());
    history.push(goToDashboard());
  }, [code, history]);

  return (
    <Layout>
      <Content>
        <h1>MEMBER BERRIES</h1>
        <div>Write something about his application</div>
        <Button
          type="primary"
          icon={<GoogleIcon />}
          size="large"
          block
          loading={loading}
          onClick={handleLoading}>
          <Link target="_parent" href={goToGoogleAuth()}>
            Sign in with Google
          </Link>
        </Button>
      </Content>
      <Footer>Member berries ©2020 Created by Marko Pavlovic</Footer>
    </Layout>
  );
}

export default Login;
