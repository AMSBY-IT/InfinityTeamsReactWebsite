



const Pagination = () => {


    // const maxVisiblePages = 5;
    // const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    // const endPage = Math.min(totalPage, startPage + maxVisiblePages - 1);

    // const pageNumbers = []
    // for (let i = startPage; i <= endPage; i++) {
    //     pageNumbers.push(i);
    // }

    return (
        <div className="pt-14 flex items-center justify-center">
            <ul className="flex gap-3" id="pagination">
                <li><a href="#" className="arrow grid w-10 sm:w-12 sm:h-12 h-10 items-center justify-center border-[1px] border-[#ddd] rounded-md text-untitled-ui--primary600 hover:bg-untitled-ui--primary600 hover:text-[white] hover:border[#0056b3]"><svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-[#7f56d9] arrow-svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"/></svg></a></li>
                {/* {pageNumbers.map((p) => {
                    return (
                        <li key={p}>
                            <a href="#" className={`grid w-10 sm:w-12 sm:h-12 text-base max-sm:text-sm font-medium h-10 items-center justify-center 
                                border-[1px] border-[#ddd] rounded-md text-untitled-ui--primary600  
                                ${currentPage === p ? "bg-untitled-ui--primary600 text-white border[#007bff]" :
                                    "hover:bg-untitled-ui--primary600 hover:text-[white] hover:border[#0056b3]"}`}
                                onClick={() => setCurrentPage(p)}>{p}</a>
                        </li>
                    )
                })} */}
                <li><a href="#" className="arrow grid w-10 h-10 sm:w-12 sm:h-12 items-center justify-center border-[1px] border-[#ddd] rounded-md text-untitled-ui--primary600 hover:bg-untitled-ui--primary600 hover:text-[white] hover:border[#0056b3]"><svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-[#7f56d9] arrow-svg" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/></svg></a></li>
            </ul>
        </div>
    )
}

export default Pagination;