import { accounts } from '@/app/data/accounts';
import { Typography } from '@/components/ui/typography';
import { FiExternalLink, FiLinkedin, FiMail } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <div className='md:col-span-1 space-y-6'>
      {/* Title */}
      <h2 className='text-3xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mb-4'>
        Contact Information
      </h2>

      {/* Contact Information */}
      <div className='space-y-4'>
        {/* Email */}
        <div className='flex items-center gap-2'>
          <FiMail className='text-primary' size={20} />
          <Typography variant={'h4'} className='text-lg font-medium'>
            <a href='mailto:eaysin.dev@gmail.com' className='hover:underline'>
              eaysin.dev@gmail.com
            </a>
          </Typography>
        </div>

        {/* LinkedIn */}
        <div className='flex items-center gap-2'>
          <FiLinkedin className='text-primary' size={20} />
          <Typography variant={'h4'} className='text-lg font-medium'>
            <a
              href={accounts.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              LinkedIn
            </a>
          </Typography>
        </div>

        {/* Blog and Case Study */}
        <div className='flex items-center gap-2'>
          <FiExternalLink className='text-primary' size={20} />
          <Typography variant={'h4'} className='text-lg font-medium'>
            <a
              href={accounts.hashnode}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              Case Studies & Blogs
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
