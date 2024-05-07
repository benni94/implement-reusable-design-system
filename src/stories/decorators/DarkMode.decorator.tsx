import { StoryContext } from "@storybook/react";
import { ReactElement } from "react";

export const globalDarkModeDecorator = (
  Story: () => ReactElement<unknown>,
  context: StoryContext
) => {
  const theme = context.parameters.theme || context.globals.theme;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        padding: "12px",
        overflow: "auto",
        backgroundColor: theme === "dark" ? "#222233" : "white",
      }}
    >
      {Story()}
    </div>
  );
};
