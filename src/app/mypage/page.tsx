"use client"

import { Button } from '@/components/ui/button'
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import MyInfoForm from '@/containers/my-info/my-info-form'
import { Text } from '@radix-ui/themes'
import React from 'react'
import { FiUser, FiSettings } from 'react-icons/fi'

const MyPage = () => {

  return (
    <div className='flex flex-col pb-16 pt-16 px-6 bg-gray-100 min-h-full items-center h-fit'>
      <div className='md:hidden w-full mb-2'>
        <Select>
          <SelectTrigger className='w-10/12 max-md:w-full'>
            <SelectValue placeholder='내 정보' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='내 정보' className='text-gray-900'>내 정보</SelectItem>
            <SelectItem value='계정 설정' className='text-gray-900'>계정 설정</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex gap-2 w-10/12 h-full max-md:w-full'>
        <div className='bg-white p-0 shadow-sm rounded-md border-2 border-gray-200 overflow-hidden w-3/12 max-md:hidden'>
          <div className='flex flex-col justify-center items-center p-4'>
            <Button
              variant='ghost'
              className='w-full justify-start font-semibold gap-2'
            ><FiUser size={16}/> 내 정보
            </Button>
            <Button
              variant='ghost'
              className='w-full justify-start font-semibold gap-2'
            ><FiSettings size={16} /> 계정 설정
            </Button>
          </div>
        </div>
        <div className='flex-1 bg-white p-0 shadow-sm rounded-md border-2 border-gray-200 overflow-hidden h-fit mb-10'>
          <div className='bg-slate-950 flex flex-col align-middle justify-start px-6 py-5 border-b-2 border-gray-200'>
            <Text size='6' weight='bold' className='text-gray-50'>내 정보</Text>
            <Text size='2' weight='medium' className='text-gray-400'>회원님의 정보를 확인할 수 있습니다.</Text>
          </div>
          <div className='flex flex-col justify-start p-6 md:w-8/12'>
            <MyInfoForm />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default MyPage