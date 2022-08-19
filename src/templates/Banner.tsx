import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get notified through your Direct Messages.."
      subtitle="Connect your twitter now..."
      button={
        <Link href="https://connectpay.vercel.app/">
          <a>
            <Button>SignIn</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
