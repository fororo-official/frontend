import Image from 'next/image'
import { Flex, Text, Button, Card, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import { NavigationBar } from '@/components/navigation-bar'
import Space from '@/components/ui/space'

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Flex 
        direction='column' gap='2'
        className='pt-16 px-6 bg-gray-100 h-screen flex items-center'
      >
        <div className='bg-white p-0 w-7/12 shadow-sm rounded-md border-2 border-gray-200'>
          <div className='flex flex-col align-middle justify-start px-6 py-5 border-b-2 border-gray-200'>
            <Text size='6' weight='bold'>회원가입</Text>
            <Text className='text-gray-400'>운영진 확인 후 가입이 승인됩니다.</Text>
          </div>
          <div className='flex flex-col justify-start p-6 w-7/12'>
            <Text size='2' weight='medium' className='text-gray-700 mb-1' style={{
              marginBottom: '0.25rem'
            }}>이름</Text>
            <TextFieldRoot>
              <TextFieldInput placeholder='이름'/>
            </TextFieldRoot>
            <Space.Vertical size={16} />
            <Text size='2' weight='medium' className='text-gray-700 mb-1' style={{
              marginBottom: '0.25rem'
            }}>학번</Text>
            <TextFieldRoot>
            <TextFieldInput placeholder='학번'/>
            </TextFieldRoot>
            <Space.Vertical size={16} />
            <Text size='2' weight='medium' className='text-gray-700 mb-1' style={{
              marginBottom: '0.25rem'
            }}>프로필 이미지</Text>
            <div className='flex flex-row items-center mb-4 gap-2 w-full'>
              <TextFieldInput placeholder='프로필 이미지'
                disabled
              />
              <Button className='ml-4' >파일 선택</Button>
            </div>
            <Space.Vertical size={24} />
            <Button className='w-24' >제출</Button>
          </div>
        </div>
      </Flex>
    </main>
  )
}
