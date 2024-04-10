import React, { useState } from 'react'

function SkeletonFrame() {

   
    
    return (
      <>
      
      <div
        
        className="flex flex-col animate-pulse justify-center h-[90vh] w-full sm:w-[400px] bg-slate-100 rounded rounded-[10px] mb-1 overflow-hidden font-roboto"
      >
        <div className="max-h-[50vh] h-[40vh] bg-slate-400 flex-auto">
          <img  className="w-fit" />
        </div>
        <div className="m-4 flex-[70%]">
          <div className='w-[95%] h-3 bg-slate-400 rounded'></div>
          <div className='w-[70%] h-3 bg-slate-400 mt-3 rounded'></div>
          <div className='w-[96%] h-3 bg-slate-400 mt-8 rounded'></div>
          <div className='w-[95%] h-3 bg-slate-400 mt-4 rounded'></div>
          <div className='w-[94%] h-3 bg-slate-400 mt-4 rounded'></div>
          <div className='w-[95%] h-3 bg-slate-400 mt-4 rounded'></div>
          <div className='w-[30%] h-3 bg-slate-400 mt-4 rounded'></div>

          
        </div>
  
        <div class=" text-white bg-black  shadow-2xl flex-none ">
          <div
            className='bg-slate-400'
          >
            <div className="w-full h-fit backdrop-blur-xl p-4">
            <div className='w-[95%] h-4 bg-slate-400 mt-3 rounded'></div>
            <div className='w-[60%] h-4 bg-slate-400 mt-3 rounded'></div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

export default SkeletonFrame