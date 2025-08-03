import ArrowIcon from '../atom/ArrowIcon'

const Experience = () => {
  const statsData = [
    { number: '10+', label: 'Years of Experience' },
    { number: '15+', label: 'Satisfied Clients' },
    { number: '20+', label: 'Successful Projects' },
  ] as const

  const StatCard = ({ number, label }: { number: string; label: string }) => (
    <div className="flex-1 p-14 rounded-[30px] inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch text-center justify-center text-white text-6xl font-bold font-['Satoshi_Variable']">
        {number}
      </div>
      <div className="self-stretch text-center justify-center text-white text-xl font-normal font-['Satoshi_Variable'] leading-7">
        {label}
      </div>
    </div>
  )

  return (
    <div className="w-full min-h-[768px] px-28 py-20 bg-red-900 inline-flex flex-col justify-center items-center gap-20">
      {/* Header Section */}
      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className="justify-center text-center text-white text-4xl font-bold font-['Satoshi_Variable'] leading-9">
          Passion. Precision. Performance.
        </div>
        <div className="self-stretch text-center justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
          We are a passionate team of tech specialists dedicated to crafting
          scalable, high-performing digital solutions.
        </div>
      </div>

      {/* Stats Section */}
      <div className="self-stretch inline-flex justify-start items-start gap-10">
        {statsData.map((stat) => (
          <StatCard key={stat.label} number={stat.number} label={stat.label} />
        ))}
      </div>

      {/* Quote and CTA Section */}
      <div className="self-stretch inline-flex justify-start items-center gap-10">
        <div className="flex-1 justify-center text-white text-xl font-normal font-['Satoshi_Variable'] leading-7">
          "Over the past decade, we've partnered with clients across industries
          to launch bold ideas into polished products — and we continue to grow
          every year."
        </div>
        <div className="flex-1 self-stretch inline-flex flex-col justify-between items-end">
          <div className="inline-flex justify-start items-center gap-2">
            <div className="justify-center text-white text-xl font-normal font-['Satoshi_Variable'] leading-7">
              Recent Projects
            </div>
            <div className="justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
              Name
            </div>
          </div>
          <button className="h-11 min-w-28 p-2 rounded-sm outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-1 hover:bg-white hover:bg-opacity-10 transition-colors">
            <span className="text-center justify-start text-white text-base font-normal font-['Satoshi_Variable'] leading-normal">
              Read Study Case
            </span>
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Experience
