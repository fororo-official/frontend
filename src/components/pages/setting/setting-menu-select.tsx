"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'

function SettingMenuSelect() {
  const router = useRouter()

  return (
    <Select
      defaultValue={window.location.pathname === '/setting/my-info' ? 'my-info' : 'account'}
      onValueChange={(value) => {
        if (value === 'my-info') {
          router.push('/setting/my-info')
        } else if (value === 'account') {
          router.push('/setting/account')
        }
      }}
    >
      <SelectTrigger className='w-10/12 max-md:w-full'>
        <SelectValue placeholder={
          window.location.pathname === '/setting/my-info' ? '내 정보' : '계정 설정'
        }/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='my-info' className='text-gray-900'>내 정보</SelectItem>
        <SelectItem value='account' className='text-gray-900'>계정 설정</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SettingMenuSelect