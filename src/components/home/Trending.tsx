import React from 'react'
import Link from 'next/link'


type TrenCardProps={
    className?:string,
    post?:string,
}


const TrendingCard=({className,post}:TrenCardProps)=>{
  
    return (
        <Link href="/" className = {` ${className}  sm:mt-0 z-0 sm:h-auto relative mt-1  block w-full h-96 hover:opacity-70 transition-all`}>
        <div className=' z-0 relative w-full h-full'>
         image
         </div>
            <div className=' z-1 absolute top-0 left-0 w-full h-full bg-gradient-gradual'></div>
            <div className=' z-2 absolute  bottom-0 left-0 p-3'>
        <h4 className='bg-accent-orange px-5 py-1 text-wh-900 inline-block font-semibold'>category</h4>
        <div className=' mt-2 text-wh-100'>post title</div>
           

        </div>

        
        </Link>
    )
}



const Trending = () => {
  return (
    <section className="pt-3 pb-10">
    <div className="flex items-center gap-3">
      <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
        TRENDING
      </div>
      <p className="text-sm">
        Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
        nulla dolor diam turpis.
      </p>
    </div>

    <div className='sm:grid h-[600px] gap-x-2 gap-y-2 px-5  flex flex-col  grid-cols-4 grid-rows-2 '>
<TrendingCard className=' col-span-2 row-span-2 bg-wh-500'/>
<TrendingCard className=' col-span-2 row-span-1 bg-wh-500'/>
<TrendingCard className=' col-span-1 row-span-1 bg-wh-500'/>
<TrendingCard className=' col-span-1 row-span-1 bg-wh-500'/>


    </div>
<p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>

    </section>
  )
}

export default Trending