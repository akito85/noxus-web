import Social from '../../components/footer/Social'
import Contact from '../../components/footer/Contact'

export default function Footer() {
  return (
    <div className="w-full self-stretch px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 md:py-20 relative bg-[url('/assets/images/Footer/Center_Bottom.png')] bg-bottom bg-contain bg-no-repeat bg-neutral-950 inline-flex flex-col justify-center items-center gap-10 overflow-hidden">
      <div className="w-full self-stretch flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
        <Social />
        <Contact />
      </div>
      <div className="w-full self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-white/10"></div>
      <div className="w-full self-stretch flex justify-center items-center text-center">
        <div className="text-white text-sm sm:text-base md:text-lg font-normal font-['Satoshi_Variable'] leading-relaxed">
          © Copyright 2025 Noxus Ideata Prima. All rights reserved.
        </div>
      </div>
    </div>
  )
}
