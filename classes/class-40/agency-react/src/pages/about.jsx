import React from 'react';
import CompanyDescription from '../components/about-components/Company';
import Team from '../components/about-components/Team';
import Partner from '../components/about-components/Partner';
import WhyUs from '../components/about-components/Why';

export default function about() {
  return (
    <>
      <CompanyDescription />
      <Team />
      <Partner />
      <WhyUs />
    </>
  )
}
