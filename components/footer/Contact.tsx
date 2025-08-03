const Contact = () => {
  return (
    <div className="w-96 self-stretch inline-flex flex-col justify-start items-start gap-4">
      <div className="justify-start text-white text-3xl font-bold font-['Satoshi_Variable'] leading-9">
        Contact
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-3">
        <img src="assets/images/Footer/map_marker.svg" />
        <div
          data-icon="None"
          data-size="Large"
          data-state="Default"
          className="flex-1 flex justify-start items-center gap-2.5 overflow-hidden"
        >
          <div className="flex-1 justify-center text-white text-base font-normal font-['Satoshi_Variable'] leading-normal">
            Jl. Maleo XIII, Blok JC 7 no.22, Bintaro Jaya, Pondok Pucung, Pondok
            Aren, Kota Tangerang Selatan, Banten Indonesia, 15229
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-3">
        <img src="assets/images/Footer/phone.svg" />
        <div
          data-icon="None"
          data-size="Large"
          data-state="Default"
          className="flex-1 flex justify-start items-center gap-2.5 overflow-hidden"
        >
          <div className="flex-1 justify-center text-white text-base font-normal font-['Satoshi_Variable'] leading-normal">
            +62 21 222 11 697
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-3">
        <img src="assets/images/Footer/mail.svg" />
        <div
          data-icon="None"
          data-size="Large"
          data-state="Default"
          className="flex-1 flex justify-start items-center gap-2.5 overflow-hidden"
        >
          <div className="flex-1 justify-center text-white text-base font-normal font-['Satoshi_Variable'] leading-normal">
            info@noxus.co.id
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
