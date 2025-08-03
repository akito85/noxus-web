import { Button, buttonVariants } from '../../components/atom/Button'
import ArrowIcon from '../../components/atom/ArrowIcon'

const Articles = () => {
  return (
    <div className="w-full self-stretch px-28 py-20 bg-neutral-950 inline-flex flex-col justify-center items-center gap-20">
      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className="text-center justify-center text-white text-4xl font-bold font-['Satoshi_Variable'] leading-9">
          Expert Insights on Digital Transformation
        </div>
        <div className="self-stretch text-center justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
          Stay updated with the latest trends, tips, and case studies in tech
          and software development.
        </div>
      </div>
      <div className="w-[1200px] inline-flex justify-start items-start gap-10 flex-wrap content-start overflow-hidden">
        <div
          data-property-1="Default"
          className="flex-1 h-96 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start overflow-hidden"
        >
          <img
            className="self-stretch flex-1 rounded-[20px]"
            src="https://placehold.co/373x373"
          />
          <div className="w-96 px-4 py-3 bg-stone-900/40 backdrop-blur-xl flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div
                data-property-1="calendar"
                className="size-4 relative overflow-hidden"
              >
                <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
              </div>
              <div className="text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                May 16, 2025
              </div>
            </div>
            <div className="self-stretch h-14 justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
              How Far AI Will Help Your Enterprise in the Future?
            </div>
          </div>
        </div>
        <div
          data-property-1="Default"
          className="flex-1 h-96 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start overflow-hidden"
        >
          <img
            className="self-stretch flex-1 rounded-[20px]"
            src="https://placehold.co/373x373"
          />
          <div className="w-96 px-4 py-3 bg-stone-900/40 backdrop-blur-xl flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div
                data-property-1="calendar"
                className="size-4 relative overflow-hidden"
              >
                <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
              </div>
              <div className="text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                May 16, 2025
              </div>
            </div>
            <div className="self-stretch h-14 justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
              Scaling AI in the Enterprise: How AI Helps You Break Through the
              Barriers
            </div>
          </div>
        </div>
        <div
          data-property-1="Default"
          className="flex-1 h-96 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start overflow-hidden"
        >
          <img
            className="self-stretch flex-1 rounded-[20px]"
            src="https://placehold.co/373x373"
          />
          <div className="w-96 px-4 py-3 bg-stone-900/40 backdrop-blur-xl flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div
                data-property-1="calendar"
                className="size-4 relative overflow-hidden"
              >
                <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
              </div>
              <div className="text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                May 16, 2025
              </div>
            </div>
            <div className="self-stretch h-14 justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
              Supercharge Your Enterprise IT Teams with AI: Unlocking the Future
            </div>
          </div>
        </div>
      </div>

      {/* View All button */}
      <Button
        text="View All"
        variant="secondary"
        iconPosition="right"
        icon=<ArrowIcon direction="right" />
      />
    </div>
  )
}

export default Articles
