import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <Global
        styles={{
          body: {
            width: "100vw",
            height: "100vh",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }}
      />
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </StrictMode>
);
