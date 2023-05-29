import React from 'react'

type Props = {}

const Tech = (props: Props) => {
  return (
    <div>
       <div>
       <div className='p-2 px-2 py-1 bg-accent-orange text-wh-900 txt-sm'>hot</div>
        <p className='text-wh-900 font-semibold'>Latest technology news</p>
        </div> 

        <div className='flex flex-col gap-3 sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-8'>
            <div className=' col-span-1 row-span-3 bg-slate-800' ></div>
            <div className=' col-span-1 row-span-1 bg-slate-800' ></div>
            <div className=' col-span-1 row-span-1 bg-slate-800' ></div>
            <div className=' col-span-1 row-span-1 bg-slate-800' ></div>
        </div>
    </div>
  )
}

export default Tech