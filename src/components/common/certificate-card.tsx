import { Text } from '@radix-ui/themes'
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import { FiMoreHorizontal } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function CertificateCard() {
  return (
    <div className='relative flex flex-col justify-start bg-white border border-gray-200 rounded-lg active:bg-gray-50 w-[16rem] '>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='absolute top-2 right-2 z-10'>
            <Button size='icon' variant='ghost' className='w-8 h-8 rounded-full opacity-50 hover:opacity-100 hover:bg-gray-50 hover:bg-opacity-50'>
              <FiMoreHorizontal size={16} />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>수료증 발급</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AspectRatio ratio={16/9} className='bg-slate-100 border-b border-gray-200'>
        <img src='https://images.unsplash.com/photo-1661265117335-4f2bb4cd966e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full h-full object-cover' alt='certificate'
        />
      </AspectRatio>
      {/* Study Summary */}
      <div className='flex flex-col justify-start p-4'>
        <Text size='3' className='text-gray-900 font-semibold'>React + Typescript 스터디</Text>
        <Text size='2' className='text-gray-400'>2023.02.03.~2023.06.23.</Text>
      </div>
    </div>
  )
}

export default CertificateCard