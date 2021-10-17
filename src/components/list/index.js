import './dataList.scss';

const DataList = ({listData}) => {

    return (
        <div className='dataList'>
            {
                listData.map((item,index) =>
                    <div className='dataList_item'>
                      <div className='dataList_item_title'>{index+1}</div>
                      <div className='dataList_item_content'>{`姓名：${item.name}`}</div>
                      <div className='dataList_item_content'>{`帳號：${item.username}`}</div>
                      <div className='dataList_item_content'>{`角色：${item.role}`}</div>
                      <div>
                        <button>詳情</button>
                      </div>
                    </div>
                )
            }
        </div>
    )

}

export default DataList;