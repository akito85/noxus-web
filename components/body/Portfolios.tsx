import { Button, buttonVariants } from '../atom/Button'
import ArrowIcon from '../atom/ArrowIcon'

const Portfolios = () => {
  return (
    <div className="w-full h-[768px] px-28 py-20 relative bg-neutral-950 inline-flex justify-center items-center gap-10">
      <div className="flex-1 self-stretch p-14 rounded-[30px] border border-white/10 backdrop-blur-xl">
        <Button
          className="absolute left-[calc(100%-4rem)] top-[47%] min-w-32"
          text="Our Works"
          iconPosition="right"
          icon=<ArrowIcon direction="right" />
        />
      </div>
    </div>
  )
}

export default Portfolios
