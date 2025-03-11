



const Pagination = () => {


    // const maxVisiblePages = 5;
    // const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    // const endPage = Math.min(totalPage, startPage + maxVisiblePages - 1);

    // const pageNumbers = []
    // for (let i = startPage; i <= endPage; i++) {
    //     pageNumbers.push(i);
    // }

    return (
        <div className="tw-pt-14 tw-flex tw-items-center tw-justify-center">
            <ul className="tw-flex tw-gap-3" id="pagination">
                <li><a href="#" className="arrow tw-grid tw-w-10 sm:tw-w-12 sm:tw-h-12 tw-h-10 tw-items-center tw-justify-center tw-border-[1px] tw-border-[#ddd] tw-rounded-md tw-text-untitled-ui--primary600 hover:tw-bg-untitled-ui--primary600 hover:tw-text-[white] hover:tw-border[#0056b3]"><svg xmlns="http://www.w3.org/2000/svg" className="tw-w-7 tw-fill-[#7f56d9] arrow-svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"/></svg></a></li>
                {/* {pageNumbers.map((p) => {
                    return (
                        <li key={p}>
                            <a href="#" className={`tw-grid tw-w-10 sm:tw-w-12 sm:tw-h-12 tw-text-base max-sm:tw-text-sm tw-font-medium tw-h-10 tw-items-center tw-justify-center 
                                tw-border-[1px] tw-border-[#ddd] tw-rounded-md tw-text-untitled-ui--primary600  
                                ${currentPage === p ? "tw-bg-untitled-ui--primary600 tw-text-white tw-border[#007bff]" :
                                    "hover:tw-bg-untitled-ui--primary600 hover:tw-text-[white] hover:tw-border[#0056b3]"}`}
                                onClick={() => setCurrentPage(p)}>{p}</a>
                        </li>
                    )
                })} */}
                <li><a href="#" className="arrow tw-grid tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-items-center tw-justify-center tw-border-[1px] tw-border-[#ddd] tw-rounded-md tw-text-untitled-ui--primary600 hover:tw-bg-untitled-ui--primary600 hover:tw-text-[white] hover:tw-border[#0056b3]"><svg xmlns="http://www.w3.org/2000/svg" className="tw-w-7 tw-fill-[#7f56d9] arrow-svg" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/></svg></a></li>
            </ul>
        </div>
    )
}

export default Pagination;