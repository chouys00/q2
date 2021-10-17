import {useEffect, useState, useRef} from 'react';
import './listPage.scss';
import DataList from '../../components/list';
import {getMember} from '@Api/member.js'

const ListPage = () => {
  const [listData, setListData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const listBoxNode = useRef();


  useEffect(() => {
    fetchListData()
  }, [currentPage])


  const handleScroll = () => {

    //取得元素
    const listBoxEl = listBoxNode.current
    if (listBoxEl) {
      const scrollPos = listBoxEl.scrollTop + listBoxEl.clientHeight;
      const boxHeight = listBoxEl.scrollHeight;

      // 滾過的距離加上自己元素的高度，大於等於可滾動範圍的高度
      if ((scrollPos >= boxHeight) && fetchListData) {
        setCurrentPage(currentPage + 1)
      }
    }
  }

  // 獲取api
  const fetchListData = async (page = 1, limit = 10) => {

    await getMember({
      page: currentPage,
      size: limit,
    })
        .then(res => {
          let result = res.data.data
          setListData(listData.concat(result.content))
        })
        .catch(error => {
          console.log('error', error);
        });
  }


  return (
      <div className='listPage'>
        <div
            className='listBox'
            ref={listBoxNode}
            onScroll={handleScroll}
        >
          <h1>會員管理 (列表式)</h1>
          <DataList listData={listData}/>
        </div>
      </div>
  )

}

export default ListPage;

