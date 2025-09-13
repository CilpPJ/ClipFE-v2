import type { SignupSchemaType } from "@/entities";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared";
import { useFormContext } from "react-hook-form";

import { DuplicateCheckButton } from "../button";

export const ConfirmUserIdField = () => {
  const form = useFormContext<SignupSchemaType>();

  return (
    <FormField
      control={form.control}
      name='userId'
      render={({ field }) => (
        <FormItem>
          <FormLabel>아이디</FormLabel>
          <div className='flex w-full items-center gap-2'>
            <FormControl className='grid grow gap-3'>
              <Input {...field} placeholder='아이디를 입력하세요' />
            </FormControl>
            <DuplicateCheckButton checkType='userId' fieldName='userId' />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
