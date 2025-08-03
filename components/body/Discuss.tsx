import { Button } from '../../components/atom/Button'

const Discuss = () => {
  return (
    <div className="w-full self-stretch px-56 py-20 relative bg-neutral-950 inline-flex flex-col justify-center items-center gap-10 overflow-hidden">
      <div className="self-stretch p-20 bg-stone-900/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-2xl flex flex-col justify-center items-center gap-10 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-6 bg-[url('/assets/images/Home/Discuss/Center_Middle.png')]">
          <div className="self-stretch text-center justify-center text-white text-5xl font-bold font-['Satoshi_Variable']">
            Better discussions, better decisions
          </div>
          <div className="self-stretch text-center justify-center text-white text-2xl font-medium font-['Satoshi_Variable']">
            We're ready to help you scale, optimize, and grow through tailored
            tech solutions.
          </div>
        </div>
        <div className="size- inline-flex justify-start items-start gap-5">
          <Button text="Let's Connect" variant="primary" />
        </div>
      </div>
    </div>
  )
}

export default Discuss
