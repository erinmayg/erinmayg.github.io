import styled from 'styled-components';

const StyledIcon = styled.svg`
  width: 200px;
  height: 200px;
  z-index: 1;
  transform: scale(0.8)
    skewX(${(props: { reverse: boolean }) => props.reverse && '-'}40deg);
  transition: opacity 0.3s ease;

  text {
    font-size: 60px;
    font-family: $fontHead;
    text-transform: uppercase;
    letter-spacing: 20px;
    fill: white;
  }
`;

const IconCTA = (props: { reverse: boolean }) => (
  <StyledIcon className='cta' reverse={props.reverse}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 500 500'
    >
      <title>See More</title>
      <defs>
        <path
          d='M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250'
          id='textcircle'
        >
          <animateTransform
            attributeName='transform'
            begin='0s'
            dur='20s'
            type='rotate'
            from='0 250 250'
            to='360 250 250'
            repeatCount='indefinite'
          />
        </path>
      </defs>
      <text dy='80' textLength='1200'>
        <textPath xlinkHref='#textcircle'>SEE MORE SEE MORE</textPath>
      </text>
    </svg>
  </StyledIcon>
);

export default IconCTA;
