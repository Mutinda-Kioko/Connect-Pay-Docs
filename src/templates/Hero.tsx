import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Mutinda-Kioko/TwitterPay">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter-pay.vercel.app/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Welcome to \n'}
            <span className="text-primary-500">Twitter Pay 🎁</span>
          </>
        }
        description="Connecting your transactions to your twitter account ✨✨✨"
        button={
          <Link href="https://twitter-pay.vercel.app/">
            <a>
              <Button xl>Launch App</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
