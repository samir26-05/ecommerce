import styled from "styled-components";

export const FlexDirCol = styled.div``;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 6% 2%;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  .Tabs {
    width: 15%;
    .Grid {
      width: 100%;
      border-bottom: 1px solid #adadad;
      .ListItem {
        width: 100%;
        .Avatar {
          width: 16%;
        }
        .ListItemText {
          width: 84%;
          user-select: none;
          padding-left: 10%;
        }
      }
    }
    .ListItemText2{
      padding: 5% 0; 
      border-top: 1px solid #adadad;
    }
  }

  .TabPanels {
    width: 85%;
    height: 100%;
  }

  .css-heg063-MuiTabs-flexContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
