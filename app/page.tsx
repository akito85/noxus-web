'use client'

import HeroOne from '../components/atom/HeroOne'

import Hero from '../components/body/Hero'
import Clients from '../components/body/Clients'
import Portfolios from '../components/body/Portfolios'
import Experience from '../components/body/Experience'
import Services from '../components/body/Services'
import Whys from '../components/body/Whys'
import Hows from '../components/body/Hows'
import Articles from '../components/body/Articles'
import Discuss from '../components/body/Discuss'

export default function Home() {
  return (
    <>
      <Hero layout="single" singleContent=<HeroOne /> />
      <Clients />
      <Portfolios />
      <Experience />
      <Services />
      <Whys />
      <Hows />
      <Articles />
      <Discuss />
    </>
  )
}
