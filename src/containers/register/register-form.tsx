"use client";
import { CloudinaryRes } from "@/app/types/cloudinary";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ToastEmitter from "@/hooks/toastEmitter";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import z from "zod";
import MyToastContainer from "../toast/toast";
const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "이름은 2글자 이상이어야 합니다." })
    .max(20, { message: "이름은 20글자 이하여야 합니다." }),
  studentId: z.string().length(10, { message: "학번은 10글자여야 합니다." }),
  profileImage: z.string().optional(),
});

export default function RegisterForm() {
  const router = useRouter();
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setProfileImg(selectedFile || null);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      studentId: "",
      profileImage: undefined,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("file", profileImg!);
      await axios
        .post(
          //Cloud Name : dheikvmxu
          "https://api.cloudinary.com/v1_1/dheikvmxu/image/upload",
          formData,
          {
            params: {
              upload_preset: "fpzdtvvt",
              api_key: "315526953864782",
              folder: "profiles",
              public_id: data.studentId,
            },
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          const data: CloudinaryRes = res.data;
          console.log(data.url);
          localStorage.setItem("born", "true");
          router.push("/studies");
          ToastEmitter({ type: "success", text: "회원가입 성공!" });
        });
    } catch (err) {
      console.log(err);
      ToastEmitter({ type: "success", text: "회원가입 실패!" });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="이름을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="studentId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>학번</FormLabel>
              <FormControl>
                <Input placeholder="학번을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="profileImage"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>프로필 이미지</FormLabel>
              <FormDescription>jpg, png 이미지만 가능합니다</FormDescription>
              <FormControl>
                <Input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-8" />
        <Button type="submit">회원가입</Button>
      </form>
      <MyToastContainer position="bottom-left" autoClose={2000} theme="light" />
    </Form>
  );
}
