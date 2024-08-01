import React, { useEffect } from 'react'
import Message from './Message'
import {useDispatch, useSelector} from 'react-redux'
import { setEmails } from '../redux/appSlice'

const Messages = () => {

  const dispatch = useDispatch()
  const {emails} = useSelector(store => store.appSlice)

  useEffect( () => {

    const fetchMails = async () => {
      try {
        const allMails = await fetch("/api/emails/", {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            },
          })
          if(allMails.ok){
            const res = await allMails.json()
            dispatch(setEmails(res))
          } else{
            console.error('Failed to fetch emails:', allMails.statusText);
          }
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    }

    fetchMails()

  }, [])
  return (
    <div>
      {
        emails && emails?.map((email) => <Message email={email} />)
      }
    </div>
  )
}

export default Messages