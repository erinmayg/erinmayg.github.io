import Icon from './icon'

const IconArrow = (props: { fill?: string }) => (
  <Icon>
    <svg width='53px' height='53px' viewBox='0 0 53 53' version='1.1'>
      <g
        id='arrow-wrap'
        stroke='none'
        strokeWidth='1'
        fill={props.fill || 'none'}
        fillRule='evenodd'
      >
        <g
          id='arrow'
          transform='translate(-904.000000, -343.000000)'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            d='M912.545285,345 L946.743,379.198 L946.74357,345.246688 L956,345.246688 L956,395 L906.246688,395 L906.246688,385.74357 L940.198,385.743 L906,351.545285 L912.545285,345 Z'
            id='wrap-arrow1a'
          ></path>
        </g>
      </g>
    </svg>
  </Icon>
)

export default IconArrow
