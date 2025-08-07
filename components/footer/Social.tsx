const Social = () => {
  return (
    <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-4">
      <div className="justify-start text-white text-2xl md:text-3xl font-bold font-['Satoshi_Variable'] leading-9">
        PT Noxus Ideata Prima
      </div>
      <div className="self-stretch justify-start text-white text-base md:text-lg font-normal font-['Satoshi_Variable'] leading-relaxed">
        Putting People
        <br />
        Before Pixels
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <div className="justify-start text-white text-base md:text-lg font-normal font-['Satoshi_Variable'] leading-relaxed">
          Follow us on:
        </div>
        <div className="inline-flex justify-start items-center gap-3">
          <img
            src="/assets/images/Footer/linkedin.svg"
            alt="LinkedIn"
            className="w-8 h-8"
          />
          <img
            src="/assets/images/Footer/instagram.svg"
            alt="Instagram"
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  )
}

export default Social
