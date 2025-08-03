import { Button } from './Button'
import ArrowIcon from './ArrowIcon'

const LeftColumn = () => {
  return (
    <div className="self-stretch flex-1 inline-flex justify-start items-center gap-20">
      <div className="flex-1 elf-stretch p-3 bg-stone-900/40 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-xl inline-flex flex-col justify-center items-center gap-5 overflow-hidden">
        <img
          className="self-stretch flex-1 rounded-[20px]"
          src="https://placehold.co/536x584"
        />
      </div>
    </div>
  )
}

const RightColumn = () => {
  return (
    <div className="self-stretch flex-1 inline-flex justify-start items-center gap-20">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-10">
        <div className="self-stretch justify-center">
          <span className="text-white text-5xl font-medium font-['Satoshi_Variable']">
            We{' '}
          </span>
          <span className="text-red-800 text-5xl font-medium font-['Satoshi_Variable']">
            Build <br />
          </span>
          <span className="text-white text-5xl font-medium font-['Satoshi_Variable']">
            What{' '}
          </span>
          <span className="text-red-800 text-5xl font-medium font-['Satoshi_Variable']">
            You
          </span>
          <span className="text-white text-5xl font-medium font-['Satoshi_Variable']">
            {' '}
          </span>
          <span className="text-red-800 text-5xl font-medium font-['Satoshi_Variable']">
            Need
          </span>
        </div>
        <div className="self-stretch justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
          At Noxus, we don’t just build digital products, we engineer solutions
          with purpose.
          <br />
          <br />
          With 10+ years of experience and dozens of tailored projects, we bring
          clarity to complexity, crafting systems that scale with your business,
          your vision, and your future.
        </div>

        <Button
          text="See Our Latest Projects"
          variant="secondary"
          iconPosition="right"
          icon=<ArrowIcon direction="right" />
        />
      </div>
    </div>
  )
}

export { LeftColumn, RightColumn }
