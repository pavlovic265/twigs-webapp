import React, { memo, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUrlTitlesRequest } from "store/urls/actionCreators";
import { getUrlTitles, getUrlTitlesState } from "store/urls/selectors";
import { RequestOption } from "store/types";

import List from "components/List";
import PossibleTitlesItem from "components/UrlForm/PossibleTitles/Title";

import {
  Header,
  ListWrapper,
} from "components/UrlForm/PossibleTitles/PossibleTitles.styled";

interface PossibleTitlesProps {
  href: string;
  onSelectTitle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function PossibleTitlesList({ href, onSelectTitle }: PossibleTitlesProps) {
  const dispatch = useDispatch();
  const titles = useSelector(getUrlTitles);
  const urlTitlesState = useSelector(getUrlTitlesState);

  useEffect(() => {
    if (!href || href.trim().length === 0) {
      return;
    }
    dispatch(fetchUrlTitlesRequest(href));
  }, [href, dispatch]);

  const headerText = useMemo(() => {
    if (urlTitlesState === RequestOption.REQUESTED) {
      return "Fetching possible titles...";
    }

    return "Possible titles";
  }, [urlTitlesState]);

  return (
    <ListWrapper>
      {/* <List
        header={<Header>{headerText}</Header>}
        bordered
        dataSource={titles}
        renderItem={(title) => (
          <PossibleTitlesItem title={title} onSelectTitle={onSelectTitle} />
        )}
      /> */}
    </ListWrapper>
  );
}

export default memo(PossibleTitlesList);
