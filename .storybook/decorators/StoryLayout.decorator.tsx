import "@fontsource/inter";
import classNames from "classnames";
import { ReactElement } from "react";
import "../../src/styles/styles.css";
import "../../src/styles/tailwind.css";

interface IStoryProps {
    darkMode?: boolean;
    className?: string;
    noPadding?: boolean;
}


export const StoryLayoutDecorator = (Story: ReactElement<unknown> | JSX.Element | JSX.Element[], { className, darkMode, noPadding }: IStoryProps): ReactElement<unknown> => {
    return (
        <div className={classNames({ "dark bg-gray-900": darkMode }, "m-4")}>
            <div className={classNames(className, { "p-4": !noPadding })}>
                {Story}
            </div>
        </div>
    )
}