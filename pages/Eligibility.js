import React from 'react'

function Eligibility({article}) {
  return (
        <div className='w-[970px] flex flex-col'>
            <ul className='text-[#FCFCFD] text-[16px] list-none space-y-7 px-10 mb-10'>
                {article.map((article, i) => (
                    <li key={i}>{article} </li>
                ))}
            </ul>
        </div>
  )
}

export default Eligibility
