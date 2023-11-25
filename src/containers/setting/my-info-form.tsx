"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import z from 'zod';
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FiUpload } from "react-icons/fi";

const formSchema = z.object({
  username: z.string().min(2, { message: '이름은 2글자 이상이어야 합니다.' }).max(20, { message: '이름은 20글자 이하여야 합니다.' }),
  email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
  studentId: z.string().length(12, { message: '학번은 12글자여야 합니다.' }),
  department: z.string(),
  profileImage: z.string(),
})

const HYU_DEPARTMENTS: {
  [key: string]: string[]
} = {
  "공과대학": [
    "반도체공학과",
    "건축학부",
    "건축공학부",
    "건설환경공학과",
    "도시공학과",
    "자원환경공학과",
    "융합전자공학부",
    "전기생체공학부",
    "신소재공학부",
    "화학공학과",
    "생명공학과",
    "유기나노공학과",
    "에너지공학과",
    "기계공학부",
    "원자력공학과",
    "산업공학과",
    "데이터사이언스학부",
    "컴퓨터소프트웨어학부",
    "정보시스템학과",
    "미래자동차공학과",
  ],
  "의과대학": [
    "의예과",
    "의학과",
  ],
  "인문과학대학": [
    "국어국문학과",
    "중어중문학과",
    "영어영문학과",
    "독어독문학과",
    "사학과",
    "철학과",
  ],
  "사회과학대학": [
    "정치외교학과",
    "사회학과",
    "미디어커뮤니케이션학과",
    "관광학부",
  ],
  "자연과학대학": [
    "수학과",
    "물리학과",
    "화학과",
    "생명과학과",
  ],
  "정책과학대학": [
    "정책학과",
    "행정학과",
  ],
  "경제금융대학": [
    "경제금융학부"
  ],
  "경영대학": [
    "경영학부",
    "파이낸스경영학과",
  ],
  "사범대학": [
    "교육학과",
    "교육공학과",
    "국어교육과",
    "영어교육과",
    "수학교육과",
    "응용미술교육과"
  ],
  "생활과학대학": [
    "식품영양학과",
    "의류학과",
    "실내건축디자인학과"
  ],
  "음악대학": [
    "성악과",
    "작곡과",
    "피아노과",
    "관현악과",
    "국악과"
  ],
  "예술체육대학": [
    "스포츠산업과학부",
    "연극영화학과",
    "무용학과",
  ],
  "국제학부": [
    "국제학부"
  ],
  "간호대학": [
    "간호학과"
  ],
  "산업융합학부": [
    "산업융합학부"
  ]
}


export default function MyInfoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      studentId: '',
      department: '',
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
          name='profileImage'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>프로필 이미지</FormLabel>
              <FormDescription>jpg, png만 업로드 가능합니다.</FormDescription>
              <div className="flex items-end gap-2">
                <img src={field.value || 'https://via.placeholder.com/150'
                } className="w-24 h-24 rounded-xl mt-2"
                  alt="profile"
                />
                <Button
                  variant='outline' size='icon'
                >
                  <FiUpload size={16} />
                </Button>
              </div>
              <FormControl>
                <Input type='file' placeholder='프로필 이미지' accept='image/*'
                  className="hidden"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name='email'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormDescription>이메일을 입력해주세요.</FormDescription>
              <FormControl>
                <Input placeholder='이메일'
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
          name='department'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>학과</FormLabel>
              <FormDescription>학과를 선택해주세요.</FormDescription>
              <Select>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='학과를 선택해주세요.' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    Object.keys(HYU_DEPARTMENTS).map((department) => (
                      <SelectGroup
                        key={department}
                      >
                        <SelectLabel>{department}</SelectLabel>
                        {
                          (HYU_DEPARTMENTS[department] as string[]).map((d) => (
                            <SelectItem key={d} value={d}>{d}</SelectItem>
                          ))
                        }
                      </SelectGroup>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='h-4' />
        <Button type='submit'>수정하기</Button>
      </form>
    </Form>
  )
}