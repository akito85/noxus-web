import { Button } from './Button'

const HeroOne = () => {
  return (
    <>
      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className="self-stretch text-center justify-center">
          <span className="text-white text-5xl font-medium font-['Satoshi_Variable']">
            Your Strategic Tech Partner
            <br />
          </span>
          <span className="text-red-800 text-5xl font-medium font-['Satoshi_Variable']">
            for Building
          </span>
          <span className="text-white text-5xl font-medium font-['Satoshi_Variable']">
            {' '}
            High-Performing,
            <br />
            Scalable Digital Growth
          </span>
        </div>
        <div className="self-stretch text-center justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
          We build future-ready digital solutions—tailored for impact,
          performance, and growth.
        </div>
      </div>
      <div className="size- inline-flex justify-start items-start gap-5">
        <Button text="Let's Connect" variant="primary" />
        <Button text="See Our Work" variant="secondary" />
      </div>
    </>
  )
}

export default HeroOne
