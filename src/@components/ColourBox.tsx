import { memo } from 'react';
import { IColour } from '../@interfaces';

export interface IColourBoxProps {
    colour: IColour
}

export const ColourBox: React.FC<IColourBoxProps> = memo(({ colour }) => {
    return (
        <div key={colour.bgClass || ""} className='flex flex-col h-40 rounded-lg shadow-lg dark:bg-white'>
            <div className={`h-20 ${colour.bgClass} rounded-t-lg`} />
            <div className='mx-3 my-3'>
                <p className='text-lg font-medium text-gray-900'>{colour.code}</p>
                <p className='font-normal text-gray-500 text-md'>{colour.hex}</p>
            </div>
        </div>
    )
});