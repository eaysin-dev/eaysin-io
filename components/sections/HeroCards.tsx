import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '../ui/badge';

export const HeroCards = () => {
  return (
    <div className='hidden lg:flex flex-row flex-wrap gap-8 relative lg:w-[500px] xl:w-[600px] h-[500px]'>
      <Card className='absolute top-[-2rem] xl:top-10 left-8 w-[450px] drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
        <CardHeader className='pb-2'>
          <CardTitle>Full-Stack Skills</CardTitle>
          <CardDescription className='mt-2'>
            Alongside front-end work, I have experience with backend
            technologies, enabling me to build full-stack applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='font-semibold'>Backend Stack:</p>
          <div className='flex flex-wrap gap-2 mt-1'>
            <Badge className='col-span-1'>Node.js</Badge>
            <Badge className='col-span-1'>Express.js</Badge>
            <Badge className='col-span-1'>MongoDB</Badge>
            <Badge className='col-span-1'>REST APIs</Badge>
          </div>
          <p className='mt-4 text-sm text-gray-500'>
            My backend knowledge helps in creating seamless connections between
            front-end interfaces and server-side logic.
          </p>
        </CardContent>
      </Card>

      {/* NPM Package */}
      <Card className='absolute w-[450px] right-[20%] xl:right-[0%] bottom-[3.3rem] xl:bottom-[-1rem] drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
        <CardHeader className='pb-2'>
          <CardTitle>react-form-interactions</CardTitle>
          <CardDescription className='mt-2'>
            An NPM package for managing React form state and validation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Includes validation rules like required fields, patterns, and custom
            rules. Designed for seamless React integration.
          </p>
          <Button variant='link' asChild>
            <a
              href='https://www.npmjs.com/package/react-form-interactions'
              target='_blank'
              rel='noopener noreferrer'
            >
              NPM Reference
            </a>
          </Button>
          <Button variant='link' asChild>
            <a
              href='https://github.com/eaysin-dev/react-form-interactions'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub Repository
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
