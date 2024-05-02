import classNames from 'classnames';
import { memo, useCallback, useEffect } from 'react';
import { Pagination as PaginationHeadless } from "react-headless-pagination";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';


export interface IPaginationProps {
    /**
     * Flag for the mobile variant.
     */
    isMobile: boolean;
    /**
     * The current page.
     */
    page: number;
    /**
     * Set the total pages for the pagination.
     * @default 10
     */
    totalPages: number;
    /**
     * Callback to set the current page.
     */
    setPage: (page: number) => void;
}

const DEFAULT_TOTAL_PAGES = 10;
const EDGE_PAGE_COUNT = 2;
const MIDDLE_PAGES_SIBLINGS_COUNT = 2;
const BUTTON_ICON_SIZE = 20;

const buttonBaseStyle = "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none";

const previouseButtonStartStyle = (page: number) => classNames({
    "cursor-pointer": page !== 0,
    "opacity-50": page === 0
});

const nextButtonEndStyle = (totalPages: number, page: number) => classNames({
    "cursor-pointer": page !== totalPages - 1,
    "opacity-50": page === totalPages - 1
});

export const Pagination: React.FC<IPaginationProps> = memo(({ isMobile, page, totalPages = DEFAULT_TOTAL_PAGES, setPage }) => {

    useEffect(() => {
        // if the value of total pages changes, and is bigger than the current page, set the current page to the total pages value
        if (page >= totalPages) setPage(totalPages - 1)
    }, [page, setPage, totalPages]);

    const handlePageChange = useCallback((page: number) => {
        setPage(page);
    }, [setPage]);


    if (isMobile) {
        return <div className='flex items-center w-full'>
            <FiArrowLeft
                className={classNames("mr-3 text-gray-500 dark:text-white", previouseButtonStartStyle(page))}
                size={BUTTON_ICON_SIZE} onClick={() => {
                    if (page > 0) {
                        setPage(page - 1);
                    }
                }} />
            <div className='flex justify-center flex-grow text-sm text-gray-700 select-none justfy-center dark:text-white'>
                Page {page + 1} out of {totalPages}
            </div>
            <FiArrowRight
                className={classNames("mr-3 text-gray-500 dark:text-white", nextButtonEndStyle(totalPages, page))}
                size={BUTTON_ICON_SIZE} onClick={() => {
                    if (page < totalPages - 1) {
                        setPage(page + 1)
                    }
                }} />
        </div>
    }

    return (
        <>
            <PaginationHeadless
                currentPage={page}
                setCurrentPage={handlePageChange}
                totalPages={totalPages}
                edgePageCount={EDGE_PAGE_COUNT}
                middlePagesSiblingCount={MIDDLE_PAGES_SIBLINGS_COUNT}
                className='flex items-center w-full h-10 text-sm list-none select-none'
                truncableText='...'
                truncableClassName='w-10 px-0.5 text-center dark:text-white'
            >
                <PaginationHeadless.PrevButton className={
                    classNames(buttonBaseStyle, previouseButtonStartStyle(page)
                    )}>
                    <FiArrowLeft size={BUTTON_ICON_SIZE} className='mr-3' />
                    Previose
                </PaginationHeadless.PrevButton>

                <div className='flex items-center justify-center flex-grow'>
                    <PaginationHeadless.PageButton
                        activeClassName='bg-primary-50 dark:bg-opaticy-0 text-primary-600 dark:text:white'
                        inactiveClassName='text-gray-500'
                        className='flex items-center justify-center w-10 h-10 font-medium rounded-full cursor-pointer'
                    />
                </div>

                <PaginationHeadless.NextButton className={classNames(buttonBaseStyle, nextButtonEndStyle(totalPages, page))}>
                    Next
                    <FiArrowRight size={BUTTON_ICON_SIZE} className='ml-3' />
                </PaginationHeadless.NextButton>
            </PaginationHeadless >
        </>
    )
});