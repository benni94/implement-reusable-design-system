import classNames from 'classnames';
import { Dispatch, ReactNode, SetStateAction } from 'react';

interface IButtonItem<T> {
    content: ReactNode;
    value: T;
}

export interface IButtonGroupProps<T> {
    activeOption: T;
    options: IButtonItem<T>[];
    setActiveOption: Dispatch<SetStateAction<T>>
}

export const ButtonGroup = <T,>({ activeOption, options, setActiveOption }: IButtonGroupProps<T>) => {
    return (
        <>
            {
                options.map((option, index) =>
                    <button
                        className={classNames
                            ("inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-sm focus:outline-none hover:bg-gray-50 d dark:hover:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-500",
                                {
                                    "rounded-l-lg border-r-0": index === 0,
                                    "rounded-r-lg": index === options.length - 1,
                                    "bg-gray-50 dark:bg-gray-700": activeOption === option.value,
                                    "border-r-0": index !== 0 && index !== options.length - 1
                                },
                            )}
                        onClick={() => setActiveOption(option.value)}
                        key={typeof option.value === "string" ? option.value : ""}
                    >
                        {option.content}
                    </button>
                )
            }
        </>
    )
}; 