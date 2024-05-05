import "@fontsource/inter";
import classNames from "classnames";
import { ReactElement } from "react";
import "../../src/styles/styles.css";
import "../../src/styles/tailwind.css";

interface IStoryProps {
  className?: string;
  noPadding?: boolean;
}

export const StoryLayoutDecorator = (
  Story: ReactElement<unknown> | JSX.Element | JSX.Element[],
  props?: IStoryProps | undefined,
): ReactElement<unknown> => {
  return (
    <div className={classNames(props?.className, { "p-4": !props?.noPadding })}>
      {Story}
    </div>
  );
};
