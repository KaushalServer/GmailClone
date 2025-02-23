import React, {useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const SendMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: ""
  })
  const open = useSelector(store => store.appSlice.open);
  const dispatch = useDispatch()

  const changeEventHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const result = await fetch("/api/emails/send", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      // mode: 'cors',
      body : JSON.stringify({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
      })    
    })

    dispatch(setOpen(false));
    setFormData({
        to: "",
        subject: "",
        message: ""
    });
}

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className='flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md'>
        <h1>New Message</h1>
        <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <RxCross2 />
        </div>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input onChange={changeEventHandler} name="to"  type="text" placeholder='Recipients' className='outline-none py-1' />
        <input onChange={changeEventHandler} name="subject"  type="text" placeholder='Subject' className='outline-none py-1' />
        <textarea onChange={changeEventHandler} name="message"  id="" cols="30" rows="10" className='outline-none py-1'></textarea>
        <button type='submit' className='bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium'>Send</button>
      </form>
    </div>
  )
}

export default SendMail