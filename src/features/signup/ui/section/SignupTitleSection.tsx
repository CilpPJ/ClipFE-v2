import Image from "next/image";

import ClipLogo from "@/shared/_assets/logo/clip_3d.webp";

export const SignupTitleSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <Image alt='clip-logo' className='h-auto py-8' src={ClipLogo} width={100} />
      <div className='mb-4 text-lg font-bold text-[#333]'>
        지금 가입하고 첫 링크를 <span className='font-benviitLasik text-clip-primary'>Clip</span> 해보세요!
      </div>
    </div>
  );
};
