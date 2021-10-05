import './memberTable.scss'
import {useEffect} from 'react';
import {getMember} from '@Api/member.js';


const MemberTable = () => {

  useEffect(()=>{
    getMemberData()
  },[])

  const getMemberData = async () => {

    const data = {
      page:0,
      size:10
    }

    await getMember(data)
        .then(res => {
          console.log(111111,res);
        })
        .catch(error => {
          console.log(222222,error);
        });
  }

  return (
      <div className="memberTable">
        <h1></h1>
      </div>
  );
};

export default MemberTable;