import React, { useState } from 'react'

const Chat = ({contact}) => {
  const [text, setText] = useState('');
  return (
  
      <section className='chat'>
        <textarea 
         value={text}
         placeholder={'chat to' + contact.name }
         onChange={e=>setText(e.target.value)}
        />
        <br/>
        <button>
          send to {contact.email}
        </button>

      </section>
    
  )
}

export default Chat
