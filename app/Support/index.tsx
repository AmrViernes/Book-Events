import React from 'react';
import ContactCard from './components/ContactCard';
import LogoCard from '@/components/cards/LogoCard';

const SupportScreen = () => {
  return (
    <LogoCard
      height={600}
      title='Hello ,How can we help you ?'
      description='We are always happy to help. Please feel free to contact us if you
            need anything.'
    >
      <ContactCard
        icon='phone'
        title='Phone Number'
        message='+20 012 345 6789'
      />
      <ContactCard
        icon='envelope-o'
        title='Email Address'
        message='example@example.com'
      />
      <ContactCard
        icon='whatsapp'
        title='WhatsApp'
        message='+20 012 345 6789'
      />
    </LogoCard>
  );
};

export default SupportScreen;
