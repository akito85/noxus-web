const Clients = () => {
  const logos = [
    'assets/images/Home/Clients/BI.svg',
    'assets/images/Home/Clients/BNI.svg',
    'assets/images/Home/Clients/BRIFINANCE.svg',
    'assets/images/Home/Clients/BRILIFE.svg',
    'assets/images/Home/Clients/UNILEVER.svg',
    'assets/images/Home/Clients/BTPN.svg',
    'assets/images/Home/Clients/SMBC.svg',
    'assets/images/Home/Clients/PERTAMINA.svg',
    'assets/images/Home/Clients/BRI.svg',
    'assets/images/Home/Clients/SEJONG.svg',
    'assets/images/Home/Clients/TRANSJAKARTA.svg',
  ]
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-6 sm:py-8 md:py-10 bg-neutral-950 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10">
      <div className="w-full h-11 text-center text-white/70 text-xl sm:text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
        Trusted by
      </div>
      <div
        data-property-1="first"
        className="w-full h-14 relative overflow-hidden"
      >
        <div
          className="inline-flex justify-start items-center gap-6 sm:gap-12 md:gap-16 lg:gap-24"
          style={{ animation: 'scroll 41s linear infinite' }}
        >
          {/* First set of logos */}
          {logos.map((src, index) => (
            <div
              key={`logo-${index}`}
              className="h-12 opacity-70 flex flex-col justify-center items-center gap-[3.2px]"
            >
              <img
                className="h-12 w-auto max-w-[128px] sm:max-w-[160px] md:max-w-[192px] lg:max-w-[256px]"
                src={src}
                alt={`Client logo ${index + 1}`}
                style={{ height: '48px' }}
              />
            </div>
          ))}
          {/* Duplicate set of logos for seamless scrolling */}
          {logos.map((src, index) => (
            <div
              key={`logo-duplicate-${index}`}
              className="h-12 opacity-70 flex flex-col justify-center items-center gap-[3.2px]"
            >
              <img
                className="h-12 w-auto max-w-[128px] sm:max-w-[160px] md:max-w-[192px] lg:max-w-[256px]"
                src={src}
                alt={`Client logo duplicate ${index + 1}`}
                style={{ height: '48px' }}
              />
            </div>
          ))}
        </div>

        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10"></div>

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
export default Clients
