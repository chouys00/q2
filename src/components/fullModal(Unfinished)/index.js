import {useEffect} from 'react';

const FullModal = (visible,onOk) => {

  const node = document.createElement('div');
  document.body.appendChild(node);

  useEffect(() => {
    return () => {
      document.body.removeChild(node);
    };
  }, []);

  return (
      <div className={`mask ${!visible && 'mask---hide'}`}>
        <div className="fullModal">
          <div className="fullModal_title">
            <h1></h1>
          </div>
          <div className="fullModal_content">
          </div>
          <div className="fullModal_btnWrap">
            <button onClick={onOk}>確定</button>
          </div>
        </div>
      </div>
  );
};

export default FullModal;