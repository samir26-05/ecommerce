import styled from "styled-components";

export const FlexDirCol = styled.div``;

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

  .css-heg063-MuiTabs-flexContainer {
    margin: 0% !important;
    margin-bottom: 1px;
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
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root,
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
    width: 90%;
    justify-content: flex-start;
    flex-direction: row;
    font-size: 13px;
    color: #000000;
    letter-spacing: 1px;
    outline: none !important;
  }

  #vertical-tab-1,
  #vertical-tab-2,
  #vertical-tab-3,
  #vertical-tab-4,
  #vertical-tab-7,
  .MuiListItem-root,
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root,
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root::after {
    width: 90%;
    justify-content: flex-start;
    flex-direction: row;
    font-size: 13px;
    color: #000000;
    letter-spacing: 1px;
    outline: none !important;
  }

  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #000;
  }
  
  .MuiTabs-indicator,
  .css-1aquho2-MuiTabs-indicator {
    background-color: #ffffff !important;
  }
`;
