import { Button, buttonVariants } from '../atom/Button'
import ArrowIcon from '../atom/ArrowIcon'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  dataProperty: string
}

const ServiceCard = ({
  icon,
  title,
  description,
  dataProperty,
}: ServiceCardProps) => (
  <div className="flex-1 self-stretch px-6 py-10 bg-stone-900/40 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-xl inline-flex flex-col justify-start items-center gap-5">
    <div
      data-property-1={dataProperty}
      className="w-44 flex flex-col justify-start items-start gap-2.5 overflow-hidden"
    >
      <img className="self-stretch h-24" src={icon} alt={title} />
    </div>
    <div className="self-stretch rounded-[20px] flex flex-col justify-center items-start gap-4">
      <div className="self-stretch h-14 text-center justify-center text-white text-xl font-bold font-['Satoshi_Variable'] leading-7">
        {title}
      </div>
      <div className="self-stretch text-center justify-center text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight">
        {description}
      </div>
    </div>
  </div>
)

const Services = () => {
  const services = [
    {
      icon: '/assets/images/Home/Services/Software_Development.svg',
      title: 'Software Development',
      description:
        'We design and build tailored web and mobile applications that deliver real-world impact, aligned with your business objectives.',
      dataProperty: 'Software',
    },
    {
      icon: '/assets/images/Home/Services/Data_Migration.svg',
      title: 'Systems Integration & Data Migration',
      description:
        'We connect your tools and migrate data securely, ensuring continuity, minimal downtime, and full interoperability.',
      dataProperty: 'Systems',
    },
    {
      icon: '/assets/images/Home/Services/System_Integration.svg',
      title: 'DevOps & Infrastructure',
      description:
        'From CI/CD pipelines to cloud infrastructure, we enable agile deployment, automation, and high system reliability.',
      dataProperty: 'Devops',
    },
    {
      icon: '/assets/images/Home/Services/AI_Finetuning.svg',
      title: 'AI Fine Tuning & Integration',
      description:
        'We customize AI models and embed them into your workflows—boosting efficiency, personalization, and decision-making power.',
      dataProperty: 'AI',
    },
  ]

  return (
    <div className="w-full h-[852px] px-28 py-20 relative bg-[url(/assets/images/Home/Services/Right_Top.png)] bg-neutral-950 inline-flex flex-col justify-center items-center gap-20 overflow-hidden">
      {/* Background gradient overlay */}
      {/*
        <div className="w-full h-44 left-0 top-[670px] absolute bg-gradient-to-b from-neutral-950/0 to-neutral-950" />
      */}

      {/* Red blur effect */}
      {/*
      <div className="w-96 h-44 left-[874px] top-[167px] absolute opacity-80 bg-red-800 rounded-full blur-[333px]" />
      */}

      {/* Header section */}
      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className="text-center justify-center text-white text-4xl font-bold font-['Satoshi_Variable'] leading-9">
          With an in-house team,
          <br />
          we offer personalized services
        </div>
        <div className="self-stretch text-center justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
          We deliver tailored solutions with precision, reliability, and speed.
        </div>
      </div>

      {/* Services grid */}
      <div className="w-full inline-flex justify-center items-start gap-10 overflow-hidden">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            dataProperty={service.dataProperty}
          />
        ))}
      </div>

      {/* View All button */}
      <Button
        text="View All"
        variant="secondary"
        iconPosition="right"
        icon=<ArrowIcon direction="right" />
      />
    </div>
  )
}

export default Services
