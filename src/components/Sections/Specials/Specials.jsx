import Section from '@/components/Layout/Section';
import SpecialItems from '@/components/SpecialItems/SpecialItems';
import H2 from '@/components/UI/Heading/H2';
import Text from '@/components/UI/Heading/Text';
import React from 'react';

const Specials = ({ getData }) => {
  return (
    <Section>
      <div className="w-full">
        <H2 title={'Специальности колледжа'} />
        <Text className={'mt-4'} content={'На основании лицензии на осуществление  образовательной деятельности  № 90 от 22.05. 2017 и свидетельства об аккредитации № 76 от 24.08.2017 г. Ведет прием документов для обучения по следующим специальностям среднего профессионально  образования   на базе  основного общего образования (9 классов) и на базе среднего общего образования  (11 классов) по следующим специальностям'} />
        <SpecialItems getData={''} className={'mt-7'} />
      </div>
    </Section>
  )
}

export default Specials
