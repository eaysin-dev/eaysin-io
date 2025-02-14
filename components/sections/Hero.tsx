import { accounts } from '@/app/data/accounts';
import { generateUId } from '@/utils/shortid';
import { AiFillGithub } from 'react-icons/ai';
import { FaBlog, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Badge } from '../ui/badge';
import { HeroCards } from './HeroCards';

const socialLinks = [
  {
    id: generateUId(),
    href: accounts.github,
    icon: <AiFillGithub size={17} />,
    label: 'Github',
    className: 'flex items-center gap-1 py-1',
    variant: 'secondary',
  },
  {
    id: generateUId(),
    href: accounts.linkedin,
    icon: <FaLinkedin size={16} />,
    label: 'LinkedIn',
    className: 'flex items-center gap-2',
    variant: 'outline',
    size: 'sm',
  },
  {
    id: generateUId(),
    href: accounts.leetCode,
    icon: <SiLeetcode size={14} />,
    label: 'LeetCode',
    className: 'flex items-center gap-2',
    variant: 'outline',
    size: 'sm',
  },
  {
    id: generateUId(),
    href: accounts.hashnode,
    icon: <FaBlog size={13} />,
    label: 'Blogs',
    className: 'flex items-center gap-2',
    variant: 'outline',
    size: 'sm',
  },
];

export const Hero = () => {
  return (
    <section className='container grid lg:grid-cols-2 mt-[10%] gap-10 h-screen'>
      <div className='text-center lg:text-start space-y-6 mt-10'>
        <main className='text-4xl md:text-6xl font-bold'>
          <div className='space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
              <span className='bg-gradient-to-r from-[#22c55e] to-[#15803d] text-transparent bg-clip-text'>
                Eaysin Arafat
              </span>
            </h1>
            <p className='text-2xl md:text-3xl font-medium text-muted-foreground'>
              Frontend Architect & Web Alchemist
            </p>
          </div>
        </main>

        <p className='text-sm md:text-base text-muted-foreground text-justify md:w-10/12 mx-auto lg:mx-0'>
          I&apos;m a Frontend Developer with 2 years of experience, specializing
          in React, TypeScript, and modern web development. I&apos;m dedicated
          to solving problems through coding, with a strong focus on performance
          and scalability. Self-taught and driven, I embrace each technology as
          a unique philosophy, specializing in user-centric web applications.
        </p>

        <p className='md:text-base text-muted-foreground text-justify md:w-10/12 mx-auto lg:mx-0'>
          I prioritize clean code and real-time, efficient user experiences to
          ensure that every project meets the highest standards.
        </p>

        <div className='grid grid-cols-2 md:flex justify-center lg:justify-start flex-wrap gap-3'>
          {socialLinks.map((link) => (
            <a
              rel='noreferrer noopener'
              href={link?.href}
              target='_blank'
              key={link.id}
            >
              <Badge
                variant={'secondary'}
                className={`flex items-center gap-1 py-1`}
              >
                {link.icon}
                {link.label}
              </Badge>
            </a>
          ))}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10'>
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className='shadow'></div>
    </section>
  );
};
