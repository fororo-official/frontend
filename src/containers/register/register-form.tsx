"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from "@/components/ui/form"
import z from 'zod';
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Space from "@/components/ui/space";

const formSchema = z.object({
  username: z.string().min(2, { message: '이름은 2글자 이상이어야 합니다.' }).max(20, { message: '이름은 20글자 이하여야 합니다.' }),
  studentId: z.string().length(12, { message: '학번은 12글자여야 합니다.' }),
  profileImage: z.string(),
})

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      studentId: '',
      profileImage: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name='username'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormDescription>이름을 입력해주세요.</FormDescription>
              <FormControl>
                <Input placeholder='이름'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='studentId'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>학번</FormLabel>
              <FormDescription>학번을 입력해주세요.</FormDescription>
              <FormControl>
                <Input placeholder='학번'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='profileImage'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>프로필 이미지</FormLabel>
              <FormDescription>jpg, png 이미지만 가능합니다</FormDescription>
              <FormControl>
                <Input type='file'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='h-8' />
        <Button type='submit'>회원가입</Button>
      </form>
    </Form>
  )
}