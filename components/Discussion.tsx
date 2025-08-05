import { Button } from './atom/Button'

type DiscussionProps = {
  title: string
  subtitle: string
}

const Discussion = ({ title, subtitle }: DiscussionProps) => {
  return (
    <div className="w-full self-stretch px-4 sm:px-8 md:px-16 lg:px-28 xl:px-56 py-12 sm:py-16 md:py-20 relative bg-neutral-950 inline-flex flex-col justify-center items-center gap-10 overflow-hidden">
      <div className="self-stretch p-12 sm:p-16 md:p-20 bg-stone-900/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-2xl flex flex-col justify-center items-center gap-10 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-6 bg-[url('/assets/images/Home/Discuss/Center_Middle.png')]">
          <div className="self-stretch text-center justify-center text-white text-4xl md:text-5xl font-bold font-['Satoshi_Variable']">
            {title}
          </div>
          <div className="self-stretch text-center justify-center text-white text-xl md:text-2xl font-medium font-['Satoshi_Variable']">
            {subtitle}
          </div>
        </div>
        <div className="inline-flex justify-start items-start gap-5">
          <Button text="Let's Connect" variant="primary" />
        </div>
      </div>
    </div>
  )
}

export default Discussion
