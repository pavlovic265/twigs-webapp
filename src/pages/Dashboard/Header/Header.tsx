import React, { useCallback, memo, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAvatarInfo } from "store/user/selectors";
import { goToLogin } from "utils/routes";

import { LogoutIcon } from "components/Icons";
import Skeleton from "components/Skeleton";
import Button, { ButtonVariant } from "components/Button";
import Avatar from "components/Avatar";
import { ArrowDownIcon } from "components/Icons";
import Dropdown, { Menu } from "components/Dropdown";

import {
  SkeletonContainer,
  Left,
  Right,
  Logo,
  Info,
  MenuButton,
  MenuItem,
  BasicInfo,
  HeaderContainer,
} from "pages/Dashboard/Header/Header.styled";
import { logoutUsertRequest } from "store/user/actionCreators";
import { RequestOption } from "store/types";
import storage from "utils/storage";

function Header() {
  const user = useSelector(getAvatarInfo);
  // const logoutUserState = useSelector(getLogoutUserState);
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   if (logoutUserState === RequestOption.SUCCESS) {
  //     storage.clearItems();
  //     history.push(goToLogin());
  //   }
  // }, [history, logoutUserState]);

  const handleLogout = useCallback(() => {
    dispatch(logoutUsertRequest());
  }, [dispatch]);

  const menu = useMemo(
    () => (
      <Menu>
        <MenuItem>
          <MenuButton
            type="link"
            variant={ButtonVariant.none}
            key="logout"
            onClick={handleLogout}
            icon={<LogoutIcon />}>
            Logout
          </MenuButton>
        </MenuItem>
      </Menu>
    ),
    [handleLogout],
  );

  // if (!user.isFetched) {
  //   return (
  //     <SkeletonContainer>
  //       <Skeleton
  //         active
  //         title={{ width: "100%" }}
  //         avatar={{ size: "default" }}
  //         paragraph={{ rows: 0 }}
  //         loading={!user.isFetched}
  //       />
  //     </SkeletonContainer>
  //   );
  // }

  return (
    <HeaderContainer>
      <Left>
        <Logo src="./logo-light.png" />
      </Left>
      <Right>
        <Info>
          <Avatar size="large" src={user.avatar} />
          <BasicInfo>
            <div>{user.name}</div>
          </BasicInfo>
        </Info>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button variant={ButtonVariant.secondary} icon={<ArrowDownIcon />} />
        </Dropdown>
      </Right>
    </HeaderContainer>
  );
}

export default memo(Header);
