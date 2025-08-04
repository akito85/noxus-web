import Image from 'next/image'
import Hero from '../../components/body/Hero'
import { Button } from '../../components/atom/Button'
import ArrowIcon from '../../components/atom/ArrowIcon'

const Services = () => {
  return (
    <Hero layout="custom">
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="hidden md:block absolute top-0 left-0 h-full -ml-28">
          <Image
            src="/assets/images/Services/IllustrationLeft.png"
            alt=""
            width={407}
            height={0}
            className="h-full w-auto opacity-50"
          />
        </div>
        <div className="hidden md:block absolute top-0 right-0 h-full -mr-28">
          <Image
            src="/assets/images/Services/IllustrationRight.png"
            alt=""
            width={407}
            height={0}
            className="h-full w-auto opacity-50"
          />
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 h-auto relative inline-flex flex-col justify-center items-center gap-10 px-4">
          <div className="self-stretch inline-flex justify-center items-center gap-20">
            <div className="w-full inline-flex flex-col justify-center items-center gap-10">
              <div className="self-stretch text-center justify-center">
                <span className="text-white text-4xl md:text-5xl font-medium font-['Satoshi_Variable']">
                  We Build What You Need
                </span>
              </div>
              <div className="self-stretch text-center justify-center text-white text-xl md:text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
                At Noxus, we don’t just build digital products, we engineer
                solutions with purpose.
              </div>
              <Button
                text="See Our Latest Projects"
                variant="secondary"
                iconPosition="right"
                icon={<ArrowIcon direction="right" />}
              />
            </div>
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default Services

