import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Improve business transactions through Connect Pay"
    description="Connect Pay will enable a business connection among all the Connect Users without asking for their bank details, emails or banking details... "
  >
    <VerticalFeatureRow
      title="Authorize Connect Pay"
      description="By authorizing you will enable Connect Pay to send Direct Messages to your account and the ones that you send money to..."
      image="/assets/images/connect.svg"
      imageAlt="Connect pay connect"
    />
    <VerticalFeatureRow
      title="Send your money..."
      description="Send your money through your favourite payment method. Paypal, Google Pay, Stripe, Apple Pay and many to come...."
      image="/assets/images/feature2.svg"
      imageAlt="Send the money"
      reverse
    />
    <VerticalFeatureRow
      title="Get your confirmation Direct message"
      description="Both your and the recipient will recieve a Direct message from Connect Pay  with the details of the transaction....."
      image="/assets/images/feature3.svg"
      imageAlt="Get a confirmation"
    />
  </Section>
);

export { VerticalFeatures };
