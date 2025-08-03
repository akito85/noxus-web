const Social = () => {
  return (
    <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-4">
      <div className="justify-start text-white text-3xl font-bold font-['Satoshi_Variable'] leading-9">
        PT Noxus Ideata Prima
      </div>
      <div className="self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-relaxed">
        Putting People
        <br />
        Before Pixels
      </div>
      <div className="size- flex flex-col justify-start items-start gap-3">
        <div className="w-[800px] justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-relaxed">
          Follow us on:
        </div>
        <div className="size- inline-flex justify-start items-center gap-3">
          <img src="assets/images/Footer/linkedin.svg" />
          <img src="assets/images/Footer/instagram.svg" />
        </div>
      </div>
    </div>
  )
}

export default Social
