import { SignupForm, SignupTitleSection } from "@/features";

export default function SignupPage() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 py-4'>
      <SignupTitleSection />
      <SignupForm />
    </div>
  );
}
