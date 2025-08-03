type ArrowIconProps = {
  direction?: 'right' | 'left'
  size?: number
  color?: string
  strokeWidth?: number
}

const ArrowIcon = ({
  direction = 'right',
  size = 20,
  color = 'white',
  strokeWidth = 1.5,
}: ArrowIconProps) => {
  const paths = {
    right:
      'M4.16663 9.99935H15.8333M15.8333 9.99935L9.99996 4.16602M15.8333 9.99935L9.99996 15.8327',
    left: 'M15.8333 9.99935H4.16663M4.16663 9.99935L9.99996 4.16602M4.16663 9.99935L9.99996 15.8327',
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={paths[direction]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowIcon
