
type Props = {
  width?: number;
  className?: string;
  color?: string;
  /**
   * Controls the direction of the shine sweep.
   * - 'ltr' (default): left -> right (current login behavior)
   * - 'rtl': right -> left (used for logout)
   */
  shineDirection?: 'ltr' | 'rtl';
  /**
   * Number of times the shine animation should play.
   * - 'infinite' (default): loops forever
   * - number: plays exactly that many times
   */
  iterations?: number | 'infinite';
};

export function LoadingLogo({ width = 240, className = '', color = '#011526', shineDirection = 'ltr', iterations = 'infinite' }: Props) {
  // Exact paths from logo.svg
  const paths = [
    'M8.65743 3.88667L6.43941 12.2556H10.5893L8.65743 3.88667ZM12.2707 19.5274L11.4121 15.7661H5.50928L4.54336 19.5274H0L5.25885 0H12.7357L16.814 19.5274H12.2707Z',
    'M18.2148 16.2811L25.9426 9.07399H18.2148V5.7793H30.8254V9.07399L23.4436 16.2811H30.8254V19.5758H18.2148V16.2811Z',
    'M41.3942 15.3261V13.0598C40.8083 13.3147 40.0501 13.5697 39.1195 13.853C37.8098 14.2496 36.6036 14.5612 36.6036 15.8927C36.638 16.7992 37.672 17.3374 38.8438 17.3374C40.3947 17.3091 41.2908 16.6292 41.3942 15.3261ZM45.7712 19.5471H45.2542C44.3237 19.5471 44.048 17.989 41.9801 17.734C41.3252 18.8955 40.0845 20.0003 37.672 20.0003C33.295 20.0003 32.2266 18.0457 32.2266 16.0343C32.2266 12.6632 36.3968 11.785 38.8438 11.3034C40.3258 11.0201 41.0151 10.4819 41.3942 9.74533V9.60368C41.3942 8.95212 40.4981 8.58385 39.602 8.58385C38.5681 8.58385 37.7409 9.17875 37.8098 10.0853H33.0193C32.9159 7.79064 35.3973 5.7793 39.4642 5.7793C43.1863 5.7793 45.7712 7.05409 45.7712 9.63201V19.5471Z',
    'M48.0625 5.73291C48.9962 5.73351 49.2306 7.64404 51.7656 7.64404V19.5288H47.5615V5.73291H48.0625ZM49.6631 0.0239258C50.9528 0.0239258 51.998 0.974724 51.998 2.14697C51.998 3.31915 50.9528 4.26904 49.6631 4.26904C48.3734 4.26901 47.3282 3.31912 47.3281 2.14697C47.3281 0.974747 48.3734 0.0239624 49.6631 0.0239258Z',
  ];

  const height = (width * 20) / 52;

  return (
    <span className={className} style={{ display: 'inline-flex' }}>
      <svg
        width={width}
        height={height}
        viewBox='0 0 52 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Azai loading'
        role='img'
      >
        <style>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes shineReverse {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
           
          .azai-shine-rect {
            animation: ${shineDirection === 'rtl' ? 'shineReverse' : 'shine'} 1.5s ${iterations === 'infinite' ? 'infinite' : iterations} linear;
          }

          @media (prefers-reduced-motion: reduce) {
            .azai-shine-rect {
              animation: none;
            }
          }
        `}</style>

        <defs>
          <linearGradient id='shineGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='white' stopOpacity='0' />
            <stop offset='50%' stopColor='white' stopOpacity='0.5' />
            <stop offset='100%' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <mask id='logoMask'>
            {paths.map((d, i) => (
              <path key={i} d={d} fill='white' />
            ))}
          </mask>
        </defs>

        {/* Base Logo */}
        {paths.map((d, i) => (
          <path key={i} d={d} fill={color} />
        ))}

        {/* Shine Overlay */}
        <g mask='url(#logoMask)'>
          <rect x='0' y='0' width='52' height='20' fill='url(#shineGradient)' className='azai-shine-rect' />
        </g>
      </svg>
    </span>
  );
}
