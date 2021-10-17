import {useEffect} from 'react';

const MemberListItem = ({item,itemIdx,key}) => {

  return (
      <div className="memberListItemWrap">
        <div className="memberListItem">
          <div className="memberListItem_userInfo">
            <span>{`${itemIdx+1}.`}</span>
            <span>{`姓名：${item.name}`}</span>
            <span>{`帳號：${item.username}`}</span>
            <span>{`角色：${item.role}`}</span>
          </div>
          <div className="memberListItem_setting">
            <button>詳情</button>
          </div>
        </div>
      </div>
  );
};

export default MemberListItem;