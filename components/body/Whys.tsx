const Whys = () => {
  return (
    <div className="w-full h-[859px] px-28 py-20 relative bg-[url(/assets/images/Home/Whys/Center.png)] bg-neutral-950 inline-flex flex-col justify-center items-center gap-20 overflow-hidden">
      <div className="w-full h-44 left-0 top-[677px] absolute bg-gradient-to-b from-neutral-950/0 to-neutral-950" />
      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className="text-center justify-center text-white text-4xl font-bold font-['Satoshi_Variable'] leading-9">
          There are thousands of agencies, so why choose us?
        </div>
        <div className="self-stretch text-center justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
          Since day one, we've been driven by principles that prioritize your
          success not just deliverables.{' '}
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-center items-center gap-5">
        <div className="self-stretch h-60 inline-flex justify-start items-end">
          <div className="flex-1 px-6 py-10 inline-flex flex-col justify-start items-center gap-5 bg-[url(/assets/images/Home/Whys/Line_Top_Left.svg)] bg-no-repeat bg-contain bg-right">
            <div className="size-14 relative">
              <img src="assets/images/Home/Whys/value.svg" />
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-4 overflow-hidden">
              <div className="self-stretch text-center justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
                We Value Your Time
              </div>
              <div className="self-stretch text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                Efficient processes. No fluff. We move fast and deliver on time.
              </div>
            </div>
          </div>
          <div className="flex-1 px-6 py-10 inline-flex flex-col justify-start items-center gap-5 ">
            <div className="size-14 relative">
              <img src="assets/images/Home/Whys/topnotch.svg" />
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-4 overflow-hidden">
              <div className="self-stretch text-center justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
                Top-Notch Quality
              </div>
              <div className="self-stretch text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                We don’t settle. Expect precision-crafted, high-performing
                solutions.
              </div>
            </div>
          </div>
          <div className="flex-1 px-6 py-10 inline-flex flex-col justify-start items-center gap-5 bg-[url(/assets/images/Home/Whys/Line_Top_Left.svg)] bg-no-repeat bg-contain bg-left">
            <div className="size-14 relative">
              <img src="assets/images/Home/Whys/communication.svg" />
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-4 overflow-hidden">
              <div className="self-stretch text-center justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
                Clear Communication
              </div>
              <div className="self-stretch text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                Transparency is our default. We keep you in the loop—always.
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch h-4 inline-flex justify-center items-center">
          <div className="w-full h-4 bg-[url(/assets/images/Home/Whys/Line_Center_Left.svg)] bg-no-repeat bg-contain bg-center" />
          <div className="w-full h-4 bg-[url(/assets/images/Home/Whys/Line_Center_Middle.svg)] bg-no-repeat bg-contain bg-center" />
          <div className="w-full h-4 bg-[url(/assets/images/Home/Whys/Line_Center_Right.svg)] bg-no-repeat bg-contain bg-center" />
        </div>

        <div className="self-stretch h-60 inline-flex justify-start items-start">
          <div className="flex-1 self-stretch px-6 py-10 inline-flex flex-col justify-start items-center gap-5 bg-[url(/assets/images/Home/Whys/Line_Bottom_Left.svg)] bg-no-repeat bg-contain bg-right">
            <div className="size-14 relative">
              <img src="assets/images/Home/Whys/scalability.svg" />
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-4 overflow-hidden">
              <div className="self-stretch text-center justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
                Focusing on Scalability
              </div>
              <div className="self-stretch text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                Built not just for today, but ready for your future growth.
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch px-6 py-10 inline-flex flex-col justify-start items-center gap-5">
            <div className="size-14 relative">
              <img src="assets/images/Home/Whys/tech.svg" />
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-4 overflow-hidden">
              <div className="self-stretch text-center justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
                Tech That Matters
              </div>
              <div className="self-stretch text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                We stay ahead. Modern stacks. Future-proof platforms. Real
                results.
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch px-6 py-10 inline-flex flex-col justify-start items-center gap-5 bg-[url(/assets/images/Home/Whys/Line_Bottom_Right.svg)] bg-no-repeat bg-contain bg-left">
            <div className="size-14 relative">
              <img src="assets/images/Home/Whys/partners.svg" />
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-4 overflow-hidden">
              <div className="self-stretch text-center justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
                Your Strategic Partners
              </div>
              <div className="self-stretch text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
                More than just code — we invest in your goals like they’re ours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whys
