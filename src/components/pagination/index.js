import './pagination.scss';

const Pagination = ({currentPage, pageSize, totalCount, changePage}) => {
  const lastPageIndex = Math.ceil(totalCount / pageSize);

  //調整 Pagination 顯示的頁籤數量
  const renderPageList = () => {
    const pageList = Array.from({length: 7}, (v, k) => k + (currentPage - 3));

    return (
        pageList.map((item, key) => {
          if (item > 0 && item <= lastPageIndex)
            return (
                <span
                    key={key}
                    onClick={() => changePage(item)}
                    className={`${item === currentPage ? 'active' : null}`}
                >
                    {item}
                </span>
            );
        })
    );
  };

  const handleNext = () => {
    changePage(currentPage + 1);
  };

  const handlePrev = () => {
    changePage(currentPage - 1);
  };

  return (
      <div className="pagination">
        <div className="pagination_operate">
          {
            (currentPage - 1 > 0) &&
            <span onClick={handlePrev}>＜</span>
          }
          {
            renderPageList()
          }
          {
            (currentPage + 1 <= lastPageIndex) &&
            <span onClick={handleNext}>＞</span>
          }
        </div>
        <div>共{totalCount}筆</div>
      </div>
  );

};

export default Pagination;