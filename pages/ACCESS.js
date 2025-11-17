import React from 'react'

function ACCESS({title, article}) {
  return (
    <div className='w-[970px] gap-5 px-10 mt-10'>
      <p className='text-[#FCFCFD] text-[16px]'>
        {article}
      </p>

      <ul className='text-[#FCFCFD] text-[16px] list-none space-y-7 mt-4'>
            {title.map((title, i) => (
                <li key={i} > {title} </li>
            ))}
      </ul>
    </div>
  )
}

export default ACCESS
