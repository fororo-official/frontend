import Summary from '@/components/pages/profile/summary'
import React from 'react'

function ProfilePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <img src="https://images.unsplash.com/photo-1679881631944-38888f7aac81?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-64 object-cover" alt="profile background"/>
      {/* w-10/12, md: w-full */}
      <div className="flex flex-col items-center">
        <Summary />
        <div className='flex flex-col w-10/12 max-w-4xl'>
          {children}
        </div>
      </div>
    </>
  )
}

export default ProfilePageLayout