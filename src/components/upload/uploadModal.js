import React from 'react';

const UploadModal = ({visible, previewImg ,onOk}) => {

  return (
      <>
        {
          visible?
          <div className="mask">
            <div className="uploadModal">
              <div className="uploadModal_preview">
                <img src = {previewImg.url} width='100%'/>
              </div>
              <div className="uploadModal_btnWrap">
                <button onClick={onOk}>確定</button>
              </div>
            </div>
          </div>:null
        }
      </>
  );
};

export default UploadModal;