import React, { useState } from 'react'
import Accordion from './accordion'

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className='bg-white mt-5 rounded-lg'>
      {data.map((item, idx) => (
        <div className='bg-[#e3e3e3] rounded-lg mt-5' key={idx}>
          <Accordion
            title={item.question}
            answer={item.answer}
            isOpen={openIndex === idx}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        </div>
      ))}
    </div>
  )
}

export default FAQ



