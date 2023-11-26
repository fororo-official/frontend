import React from 'react'

function Summary() {
  return (
    <div className='flex flex-col w-10/12 max-w-4xl'>
      <img src="https://images.unsplash.com/photo-1700840978062-57f05748318c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-32 h-32 rounded-full object-cover -mt-16 border-4 border-white shadow-lg" alt="profile"/>
      <div>
        <span className='font-bold text-xl'>김한주</span>
      </div>
      <div>
        <span className='text-md text-gray-500'>정보시스템학과 20학번</span>
      </div>
    </div>
  )
}

export default Summary