'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Typography } from '@/components/ui/typography';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { useState } from 'react';

const EmailDisplay = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy email to clipboard
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className='flex items-center justify-center break-all'>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={() => copyToClipboard('eaysin.dev@gmail.com')}
            className='cursor-pointer flex items-center space-x-2 relative my-7 '
          >
            <Typography
              variant='inlineCode'
              className='text-[2rem] md:text-[4rem] lg:text-[4rem] whitespace-pre-wrap text-center py-3 px-5'
            >
              eaysin.dev@gmail.com
            </Typography>
            {isCopied ? (
              <CheckIcon
                className='text-green-600 absolute top-2 right-2'
                size={15}
              />
            ) : (
              <ClipboardIcon
                className='text-gray-500 absolute top-2 right-2'
                size={14}
              />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant='small'>
            {isCopied ? 'Copied!' : 'Click to copy'}
          </Typography>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default EmailDisplay;
