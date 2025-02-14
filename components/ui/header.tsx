import { cn } from '@/lib/utils';

type Props = {
  title: string;
  description?: string;
  baseClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const Header = ({
  title,
  description,
  baseClassName,
  titleClassName,
  descriptionClassName,
}: Props) => {
  return (
    <div className={cn('space-y-3 text-center mb-16', { baseClassName })}>
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight lg:text-5xl bg-gradient-to-r from-[#22c55e] to-[#15803d] bg-clip-text text-transparent',
          { titleClassName },
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn('text-muted-foreground mx-auto', {
            descriptionClassName,
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;
