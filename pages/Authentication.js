import React from 'react'

function Authentication({title}) {
  return (
    <div className='w-[970px] flex flex-col'>
        <ul className='text-[#FCFCFD] text-[14px] space-y-7  list-none px-8 '>
            {title.map((title, i) => (
                <li key={i} >
                    {title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Authentication
