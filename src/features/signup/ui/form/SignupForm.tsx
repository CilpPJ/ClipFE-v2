"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { SignupSchemaType, signupSchema } from "@/entities";
import { Button, Form, ROUTER_PATH, Spinner } from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { signupAPI } from "../../apis";
import { ConfirmPasswordField, ConfirmUserIdField, PasswordField } from "../../components";
import { NicknameField } from "../../components/field/NicknameField";

export const SignupForm = () => {
  const router = useRouter();

  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userId: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      isUserIdChecked: false,
      isNicknameChecked: false,
    },
    mode: "onChange",
  });

  const onSuccess = () => {
    toast.success("회원가입 성공!");
    router.push(ROUTER_PATH.LOGIN);
    form.reset();
  };

  const { mutate: signupMutate, isPending } = useMutation({
    mutationFn: (data: SignupSchemaType) => {
      return signupAPI({
        userId: data.userId,
        password: data.password,
        nickname: data.nickname,
      });
    },
    onSuccess,
  });

  const onSubmit = (data: SignupSchemaType) => {
    signupMutate(data);
  };

  return (
    <Form {...form}>
      <form
        className='flex w-full flex-col items-center justify-center gap-6 px-4'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex w-80 flex-col gap-6'>
          <ConfirmUserIdField />
          <div className='flex flex-col gap-4'>
            <PasswordField />
            <ConfirmPasswordField />
          </div>
          <NicknameField />
        </div>
        <div className='flex w-80 justify-center gap-4'>
          <Button
            className='w-full'
            disabled={!form.formState.isValid || isPending}
            type='submit'
            variant='secondary'
            onClick={form.handleSubmit(onSubmit)}
          >
            {isPending ? <Spinner /> : "회원가입"}
          </Button>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-sm'>이미 가입했다면?</span>
          <Link className='text-base font-bold text-black hover:underline' href={ROUTER_PATH.LOGIN}>
            로그인
          </Link>
        </div>
      </form>
    </Form>
  );
};
