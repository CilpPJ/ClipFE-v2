import { cn } from "../../utils";

type Props = {
  size?: number;
  className?: string;
};

export const Spinner = ({ size = 24, className }: Props) => {
  return (
    <div
      aria-label='loading'
      className={cn(
        "inline-block animate-spin rounded-full border-[3px] border-current border-t-transparent text-primary",
        className,
      )}
      role='status'
      style={{ width: size, height: size }}
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
