import { Flex, Text, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import Space from '@/components/ui/space'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormControl } from '@radix-ui/react-form'
import RegisterForm from '@/containers/register/register-form'

export default function Home() {
  return (
    <main
      className='h-full w-full'
    >
      <Flex 
        direction='column' gap='2'
        className='pt-16 px-6 bg-gray-100 h-full flex items-center'
      >
        <div className='bg-white p-0 w-7/12 shadow-sm rounded-md border-2 border-gray-200 overflow-hidden max-md:w-full'>
          <div className='bg-slate-950 flex flex-col align-middle justify-start px-6 py-5 border-b-2 border-gray-200'>
            <Text size='6' weight='bold' className='text-gray-50'>회원가입</Text>
            <Text size='2' weight='medium' className='text-gray-400'>운영진 확인 후 가입이 승인됩니다.</Text>
          </div>
          <div className='flex flex-col justify-start p-6 md:w-8/12'>
            <RegisterForm />
          </div>
        </div>
      </Flex>
    </main>
  )
}
