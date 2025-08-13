import Image from 'next/image'
import Discussion from '../../components/Discussion'
import Hero from '../../components/body/Hero'
import Portfolio from '../../components/Portfolio'

const Works = () => {
  return (
    <>
      <Hero layout="custom">
        <div className="static self-stretch px-28 py-20 relative inline-flex flex-col justify-center items-start gap-10">
          <div className="self-stretch inline-flex justify-start items-center gap-20">
            <div className="flex-1 justify-center">
              <span className="text-red-800 text-5xl font-medium font-['Satoshi_Variable']">
                Work
              </span>
              <span className="text-white text-5xl font-medium font-['Satoshi_Variable']">
                {' '}
                That{' '}
              </span>
              <span className="text-red-800 text-5xl font-medium font-['Satoshi_Variable']">
                Moves
              </span>
              <span className="text-white text-5xl font-medium font-['Satoshi_Variable']">
                {' '}
                Businesses{' '}
              </span>
              <span className="text-red-800 text-5xl font-medium font-['Satoshi_Variable']">
                Forward
              </span>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-10">
              <div className="self-stretch justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
                Our portfolio reflects how strategy, design, and code come
                together to solve business problems — not just build apps.
              </div>
            </div>
          </div>
          <div className="w-full h-44 left-0 bottom-0 absolute bg-gradient-to-b from-neutral-950/0 to-neutral-950" />
        </div>
      </Hero>

      <Portfolio />

      <Discussion
        title="Let's build your story next"
        subtitle="Whether you're scaling or starting from scratch, we’re ready to help."
      />
    </>
  )
}

export default Works
