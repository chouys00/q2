import './upload.scss';
import  UploadModal from './uploadModal.js'
import {useRef, useState, useEffect} from 'react';
import {updateUserImg} from '@Api/user.js';


/*
一般圖片上傳
全局彈窗未完成，用臨時 modal 替代
路由、api權限未做，api呼不過 QQ
*/


const Upload = ({children,imgLink}) => {
  const [imgSrc, setImgSrc] = useState('');
  const [previewImg,setPreviewImg] = useState('');
  const [open,setOpen] = useState(false);
  const inputDom = useRef('');


  useEffect(()=>{
    setImgSrc(imgLink)
  },[imgLink])

  const handleOnChange = (e) => {
    setOpen(true)

    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = e => {
      setPreviewImg(
          {
            file: file,
            url: e.currentTarget.result,
          },
      );
    };
  };


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onOk =async (e) => {
    e.preventDefault(e)

    const data ={
      base64Image:previewImg.url
    }


    await updateUserImg(data)
        .then(res => {
          setImgSrc(previewImg)
          setOpen(false)
        })
        .catch(error => {
          console.log(error);
        });

  }

  return (
      <div className="upload">
        <div className="upload_avatar">
          <img src = {imgSrc}/>
        </div>
        <input type="file" accept="image/png" onChange={handleOnChange}
               ref={inputDom}/>
        <UploadModal visible={open} previewImg={previewImg} onOk={onOk} />
      </div>
  );
};

export default Upload;