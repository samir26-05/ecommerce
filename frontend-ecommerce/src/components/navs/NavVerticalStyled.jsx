import styled from "styled-components";

export const FlexDirCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  padding: 6% 2%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  .ListItemText {
    margin-left: 10%;
  }

  .TabPanels {
    width: 80%;
  }

  .Tabs {
    width: 20%;
  }

  .MuiTabs-flexContainer {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 2rem;
  }

  #vertical-tab-1,
  #vertical-tab-2,
  #vertical-tab-3,
  #vertical-tab-4,
  #vertical-tab-7,
  .MuiListItem-root,
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
    width: 90%;
    justify-content: flex-start;
    flex-direction: row;
    font-size: 13px;
    color: black;
    letter-spacing: 1px;
  }

  #vertical-tab-1,
  #vertical-tab-2,
  #vertical-tab-3,
  #vertical-tab-4,
  #vertical-tab-7,
  .MuiListItem-root:active {
    outline: none !important;
  }

  .MuiTabs-indicator,
  .css-1aquho2-MuiTabs-indicator {
    background-color: white !important;
  }
`;
