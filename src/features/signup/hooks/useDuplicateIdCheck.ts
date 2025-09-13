import { SignupSchemaType } from "@/entities";
import { useMutation } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

import { type DuplicateIdAPIResponse, duplicateIdAPI } from "../apis";

export const useDuplicateIdCheck = () => {
  const { setValue, trigger } = useFormContext<SignupSchemaType>();

  const { mutate: checkDuplicateId, isPending } = useMutation<DuplicateIdAPIResponse, Error, string>({
    mutationFn: (userId) => duplicateIdAPI({ userId }),
    onSuccess: (data, variables) => {
      if (data.duplicated) {
        setValue("isUserIdChecked", false);
        toast.warning(`${variables}는 이미 사용 중인 아이디입니다.`);
      } else {
        setValue("isUserIdChecked", true);
        toast.success("사용 가능한 아이디입니다!");
        trigger("userId");
      }
    },
    onError: () => {
      setValue("isUserIdChecked", false);
      trigger("userId");
    },
  });

  return { checkDuplicateId, isPending };
};
