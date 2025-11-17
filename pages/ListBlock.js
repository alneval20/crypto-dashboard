import React from 'react'

function ListBlock({title, description, items, secondDescription}) {
  return (
   
<div className='w-[970px] gap-5  px-10 '>

  {description && (
    <p className='text-[#FCFCFD] text-[16px] leading-7 mt-[70px]'>
      {description}
    </p>
  )}

  {title && (
    <p className='text-[#FCFCFD] text-[16px] mt-2'>
      {title}
    </p>
  )}

  <ul className='text-[#FCFCFD] text-[16px] space-y-7 list-none mt-4'>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <div className='text-[#FCFCFD] text-[16px] leading-7 mt-6'>
    {secondDescription}
  </div>

</div>
  )
}

export default ListBlock
