import { type SignupSchemaType } from "@/entities";
import { Button, Spinner } from "@/shared";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

import { useDuplicateIdCheck, useDuplicateNicknameCheck } from "../../hooks";

type Props = {
  checkType: "userId" | "nickname";
  fieldName: keyof SignupSchemaType;
};

export const DuplicateCheckButton = ({ checkType, fieldName }: Props) => {
  const { getValues } = useFormContext<SignupSchemaType>();

  const { checkDuplicateId, isPending: isIdPending } = useDuplicateIdCheck();
  const { checkDuplicateNickname, isPending: isNicknamePending } = useDuplicateNicknameCheck();

  const isPending = checkType === "userId" ? isIdPending : isNicknamePending;
  const checkDuplicate = checkType === "userId" ? checkDuplicateId : checkDuplicateNickname;
  const fieldLabel = checkType === "userId" ? "아이디" : "닉네임";

  const onClickCheck = () => {
    const value = getValues(fieldName);

    if (!value || !String(value).trim()) {
      toast.info(`${fieldLabel}을 입력해주세요.`);
      return;
    }
    checkDuplicate(String(value));
  };

  return (
    <Button
      className='inline-flex min-w-[4rem] items-center justify-center'
      disabled={isPending}
      type='button'
      variant='secondary'
      onClick={onClickCheck}
    >
      {isPending ? <Spinner /> : "중복 확인"}
    </Button>
  );
};
