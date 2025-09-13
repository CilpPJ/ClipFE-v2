import type { SignupSchemaType } from "@/entities";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared";
import { useFormContext } from "react-hook-form";

import { DuplicateCheckButton } from "../button";

export const NicknameField = () => {
  const form = useFormContext<SignupSchemaType>();

  return (
    <FormField
      control={form.control}
      name='nickname'
      render={({ field }) => (
        <FormItem>
          <FormLabel>닉네임</FormLabel>
          <div className='flex w-full gap-2'>
            <FormControl className='grid grow gap-3'>
              <Input {...field} placeholder='닉네임을 입력하세요' type='text' />
            </FormControl>
            <DuplicateCheckButton checkType='nickname' fieldName='nickname' />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
