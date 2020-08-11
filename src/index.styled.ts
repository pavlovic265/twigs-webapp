import { createGlobalStyle } from "styled-components";
import {
  secondary,
  black,
  secondaryDark,
  primaryLight,
  white,
} from "assets/colors";
import { opacity50 } from "assets/opacity";

export default createGlobalStyle`

  html,
  body,
  #root {
    box-sizing: border-box;
    background-color: ${primaryLight}${opacity50};
  }

  #root {
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  /* ANT DESING OVERWRIDE */

  .ant-modal-header {
    background-color: ${secondary};
  }

  .ant-drawer-header {
    background-color: ${secondary};
    border-radius: 0;
  }

  .ant-popover-buttons {
    button:first-child:hover {
      border-color: ${secondary};
      color: ${secondaryDark}
    }
    button:last-child {
      background-color: ${secondary};
      border-color: ${black};
      color: ${black}
    }
    button:last-child:hover {
      background-color: ${secondaryDark};
      border-color: ${white};
      color: ${white}
    }
  }

`;
