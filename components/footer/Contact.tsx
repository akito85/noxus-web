const Contact = () => {
  return (
    <div className="w-full md:w-96 self-stretch flex flex-col justify-start items-start gap-4">
      <div className="justify-start text-white text-2xl md:text-3xl font-bold font-['Satoshi_Variable'] leading-9">
        Contact
      </div>
      <div className="self-stretch flex justify-start items-start gap-3">
        <img
          src="/assets/images/Footer/map_marker.svg"
          alt="Map Marker"
          className="w-6 h-6"
        />
        <div className="flex-1 justify-start text-white text-sm md:text-base font-normal font-['Satoshi_Variable'] leading-normal">
          Jl. Maleo XIII, Blok JC 7 no.22, Bintaro Jaya, Pondok Pucung, Pondok
          Aren, Kota Tangerang Selatan, Banten Indonesia, 15229
        </div>
      </div>
      <div className="self-stretch flex justify-start items-center gap-3">
        <img
          src="/assets/images/Footer/phone.svg"
          alt="Phone"
          className="w-6 h-6"
        />
        <div className="flex-1 justify-start text-white text-sm md:text-base font-normal font-['Satoshi_Variable'] leading-normal">
          +62 21 222 11 697
        </div>
      </div>
      <div className="self-stretch flex justify-start items-center gap-3">
        <img
          src="/assets/images/Footer/mail.svg"
          alt="Mail"
          className="w-6 h-6"
        />
        <div className="flex-1 justify-start text-white text-sm md:text-base font-normal font-['Satoshi_Variable'] leading-normal">
          info@noxus.co.id
        </div>
      </div>
    </div>
  )
}

export default Contact
