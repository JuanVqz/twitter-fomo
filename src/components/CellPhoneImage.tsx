import React from 'react';
import { animated, useSprings, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Box } from '@chakra-ui/core';

const CellPhoneImage = () => {
  const [svgRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [trail] = useSprings(
    3,
    (i: number) => {
      return inView
        ? {
            transform: `translate3d(220px, ${i * 56}px, 0px)`,
            delay: i * 150,
            config: config.wobbly,
          }
        : {
            transform: `translate3d(-300px, ${i * 56}px, 0px)`,
            delay: i * 150,
            config: config.wobbly,
          };
    },
    [inView],
  );

  return (
    <Box as="svg" ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 633 440">
      <g>
        <path
          fill="#3F3D56"
          d="M188.274 295.518a16.265 16.265 0 00-.333 22.898l102.956 106.467a16.257 16.257 0 0011.53 4.953 16.26 16.26 0 0011.623-4.73l314.165-312.534a16.23 16.23 0 00-2.598-25.11L502.081 7.067a16.165 16.165 0 00-20.223 1.989L188.274 295.518z"
        />
        <path
          fill="#A30664"
          d="M630.369 92.209a16.306 16.306 0 01-2.154 2.65L314.789 413.299a16.255 16.255 0 01-11.623 4.73 16.254 16.254 0 01-11.53-4.954L186.464 302.179a16.134 16.134 0 01-1.922-2.421c-4.033 6.2-1.947 13.13 3.399 18.658l102.956 106.467a16.276 16.276 0 005.267 3.634 16.276 16.276 0 0012.55.121 16.257 16.257 0 005.336-3.532l314.165-312.533a16.236 16.236 0 002.154-20.364z"
        />
        <path
          fill="#222"
          d="M601.281 96.06l-12.785-8.143a12.16 12.16 0 01-2.413 14.947 12.184 12.184 0 01-15.119 1.032l-82.731-56.828a12.168 12.168 0 01-5.152-11.817 12.162 12.162 0 018.371-9.808l-6.587-4.196a4.434 4.434 0 00-5.535.621l-278.313 273.27a4.442 4.442 0 00-1.279 3.191 4.433 4.433 0 001.391 3.144l101.077 98.402a4.43 4.43 0 006.169-.085l293.652-296.859a4.424 4.424 0 00.636-5.472 4.434 4.434 0 00-1.382-1.398z"
        />
        <path
          fill="#E6E6E6"
          d="M280.065 234.798l85.377 80.429 203.077-200.464-103.063-67.025-185.391 187.06z"
        />
        <path
          fill="#3F3D56"
          d="M560.626 164.235a3.027 3.027 0 004.179 0l17.759-17.743a2.954 2.954 0 000-4.175 3.027 3.027 0 00-4.179 0l-17.759 17.744a2.954 2.954 0 000 4.174z"
        />
        <path
          fill="#fff"
          stroke="#9E9E9E"
          d="M569.145 114.764L365.272 316.247l-85.685-81.922L465.362 46.496l103.783 68.268z"
        />

        <text
          opacity={0.7}
          x="390"
          y="-230"
          style={{ transform: 'rotate(39deg)', fontSize: '12px' }}
        >
          <tspan dy="1.2em" x="390">
            Create a todo app
          </tspan>
          <tspan dy="1.2em" x="390">
            with Svelte, Redux
          </tspan>
          <tspan dy="1.2em" x="390">
            + ReasonML-GraphQL
          </tspan>
          <tspan dy="1.2em" x="390">
            in 17 simple steps
          </tspan>
        </text>
        <line x1="380" y1="130" x2="480" y2="200" stroke="black" opacity={0.3} />
        <text
          opacity={0.7}
          x="420"
          y="-146"
          style={{ transform: 'rotate(42deg)', fontSize: '12px' }}
        >
          <tspan dy="1.2em" x="376">
            New course
          </tspan>
          <tspan dy="1.2em" x="376">
            released!!!
          </tspan>
          <tspan dy="1.2em" x="376">
            Create e2e
          </tspan>
          <tspan dy="1.2em" x="376">
            encrypted,
          </tspan>
          <tspan dy="1.2em" x="376">
            typed
          </tspan>
          <tspan dy="1.2em" x="376">
            BE-agnostic
          </tspan>
          <tspan dy="1.2em" x="376">
            design systems!
          </tspan>
          <tspan dy="1.2em" x="376">
            Only $499 🔥🔥🔥
          </tspan>
        </text>

        <path
          fill="#3F3D56"
          d="M530.71 194.126a2.96 2.96 0 004.179 0l17.759-17.743a2.95 2.95 0 00-.003-4.173 2.956 2.956 0 00-4.176-.003l-17.759 17.744a2.956 2.956 0 000 4.175z"
        />
        <path
          fill="#A30664"
          d="M282.036 323.762c11.015 0 19.944-8.922 19.944-19.927 0-11.005-8.929-19.927-19.944-19.927-11.015 0-19.944 8.922-19.944 19.927 0 11.005 8.929 19.927 19.944 19.927z"
        />
        <path
          fill="#2F2E41"
          d="M9.457 435.973l5.439.638c4.296 2.588 9.338 3.563 14.922 3.364a4.477 4.477 0 003.791-2.321 4.427 4.427 0 00-1.081-5.533 4.43 4.43 0 00-1.812-.893l-4.133-.962-9.972-9.745-6.016-10.878-8.738 1.001-1.82 13.818a10.688 10.688 0 002.38 7.658 10.704 10.704 0 007.04 3.853zm84.706-6.99l5.33 1.253c3.974 3.06 8.872 4.602 14.443 5.041a4.483 4.483 0 004.031-1.875 4.434 4.434 0 00.592-3.886 4.435 4.435 0 00-2.734-2.828l-3.996-1.426-8.796-10.816-4.736-11.492H89.5l-3.383 13.52a10.69 10.69 0 001.491 7.88 10.71 10.71 0 006.554 4.629z"
        />
        <path
          fill="#2F2E41"
          d="M99.537 405.714l-9.947 1.529-15.685-79.124-27.162-46.25-32.901 134.547L1.6 418.71c-1.95 23.8-8.11-87.782 9.946-182.71l66.567 7.645 29.075 77.976-7.65 84.093z"
        />
        <path
          fill="#FFB8B8"
          d="M50.33 116.275c12.677 0 22.954-10.268 22.954-22.934S63.007 70.407 50.329 70.407c-12.677 0-22.954 10.268-22.954 22.934s10.277 22.934 22.954 22.934z"
        />
        <path
          fill="#FFB8B8"
          d="M18.193 128.507l27.546 4.587 6.886-24.464-19.894-6.115-14.538 25.992z"
        />
        <path
          fill="#A30664"
          d="M6.717 237.062l73.453 6.881c-5.889-20.459-11.284-40.845-6.887-61.158 5.585-18.135.195-28.919-14.537-37.46l-9.947-22.169-26.78-3.058a57.714 57.714 0 00-8.204 38.193c3.815 28.915 2.785 55.746-7.098 78.771z"
        />
        <path
          fill="#2F2E41"
          d="M41.303 67.313c7.84-.54 16.904-.69 18.039 1.373 8.117-.38 15.187 2.45 18.448 9.034a4.335 4.335 0 01-2.713 6.076c-4.118 1.187-10.395 2.654-14.975 2.186-9.511 11.173-5.51 31.551 3.723 43.456l-8.343 1.709-15.831-22.028 4.995 24.247-19.265 3.149-6.72-30.814a46.8 46.8 0 011.032-22.01c.223-.722.492-1.429.806-2.117a24.582 24.582 0 018.433-9.998 24.612 24.612 0 0112.371-4.263z"
        />
        <path
          fill="#FFB8B8"
          d="M54.155 259.997l-.507 17.748a9.671 9.671 0 002.408 6.666 9.686 9.686 0 0010.9 2.583 9.691 9.691 0 005.825-6.864 9.67 9.67 0 00-.102-4.634l-3.986-14.735-11.477-62.687.765-36.695-24.485-.764 4.591 41.281 16.068 58.101z"
        />
        <path
          fill="#A30664"
          d="M31.966 164.437a38.723 38.723 0 0127.545 0l-1.53-30.579c0-3.244-1.29-6.355-3.586-8.649a12.248 12.248 0 00-17.313 0 12.227 12.227 0 00-3.585 8.649l-1.53 30.579z"
        />
        <g clipPath="url(#clip3)">
          <path
            fill="#1DA1F2"
            d="M485.173 96.969c7.092 4.427 14.642.979 17.826-4.112.104-.167.208-.333.3-.505a9.26 9.26 0 003.171-.793 9.08 9.08 0 01-2.594-.777 4.566 4.566 0 003.028-1.072 9.115 9.115 0 01-3.033-.594 4.553 4.553 0 00-8.768-.589 12.896 12.896 0 01-5.429-8.986 4.542 4.542 0 00-2.023 5.888 4.507 4.507 0 01-1.448-1.575l-.031.05a4.538 4.538 0 00.732 5.708 4.544 4.544 0 01-1.783-1.022 4.546 4.546 0 001.929 4.924 9.127 9.127 0 01-6.704-1.966 12.86 12.86 0 004.829 5.418"
          />
        </g>
      </g>
      <animated.g style={trail[0]}>
        <path d="M211.554 0H0.730789V41.5882H211.554V0Z" fill="#E6E6E6" />
        <path d="M5.22511 37.0977H207.06V4.49072H5.22511V37.0977Z" fill="white" />
        <path d="M175.495 15.4985H36.6252V18.4507H175.495V15.4985Z" fill="#222222" />
        <path d="M175.495 22.8789H36.6252V25.093H175.495V22.8789Z" fill="#222222" />
        <path
          d="M10.0471 17.9827C10.0471 19.3194 11.2198 20.5672 13.0686 21.2706C12.6994 23.3393 13.0024 25.0066 14.0145 25.6563C15.0549 26.3241 16.6048 25.8619 18.0758 24.4306C19.5097 25.8041 20.959 26.3446 21.9702 25.6931C23.0095 25.0234 23.3257 23.2429 22.9463 21.1096C24.8719 20.401 25.949 19.337 25.949 17.9827C25.949 16.6771 24.7742 15.5475 22.9503 14.8487C23.3588 12.6272 23.0127 11.0003 21.9587 10.3238C20.9425 9.67156 19.4764 10.24 18.0214 11.6495C16.5077 10.1535 15.0561 9.69673 14.0031 10.3752C12.9879 11.0293 12.6982 12.727 13.0686 14.834C11.2822 15.5272 10.0471 16.6823 10.0471 17.9827Z"
          fill="white"
        />
        <path
          d="M22.5639 15.5426C22.4174 15.4865 22.2656 15.4334 22.1093 15.3832C22.1349 15.2665 22.1585 15.1513 22.1795 15.0381C22.5236 13.1788 22.2986 11.6809 21.5303 11.1877C20.7936 10.7149 19.5887 11.2079 18.3718 12.3866C18.2548 12.5 18.1375 12.62 18.0202 12.7457C17.942 12.6625 17.864 12.5821 17.7862 12.5052C16.5109 11.2448 15.2326 10.7137 14.465 11.2083C13.729 11.6825 13.511 13.0907 13.8208 14.8527C13.8507 15.0229 13.8857 15.1967 13.9252 15.3735C13.7443 15.4306 13.5697 15.4916 13.4025 15.5564C11.9074 16.1366 10.9525 17.0459 10.9525 17.9891C10.9525 18.9633 11.9776 19.9404 13.5349 20.5328C13.6578 20.5796 13.7853 20.6238 13.9167 20.6657C13.8741 20.8569 13.837 21.0442 13.8058 21.2268C13.5105 22.9583 13.7411 24.3332 14.4752 24.8044C15.2334 25.2911 16.5059 24.7909 17.745 23.5853C17.8429 23.49 17.9412 23.3889 18.0397 23.283C18.1673 23.4198 18.2947 23.5493 18.4215 23.6707C19.6217 24.8203 20.8071 25.2845 21.5405 24.8119C22.298 24.3238 22.5441 22.8469 22.2245 21.05C22.2001 20.9127 22.1717 20.7725 22.1398 20.6298C22.2292 20.6004 22.3169 20.5701 22.4025 20.5385C24.0214 19.9415 25.0748 18.9763 25.0748 17.9891C25.0748 17.0425 24.0891 16.1271 22.5639 15.5426Z"
          fill="#53C1DE"
        />
        <path
          d="M22.2127 19.9011C22.1355 19.9295 22.0563 19.957 21.9755 19.9837C21.7968 19.3539 21.5556 18.6842 21.2604 17.9924C21.5421 17.3169 21.774 16.6558 21.9477 16.0301C22.0922 16.0767 22.2324 16.1257 22.3675 16.1775C23.6743 16.6783 24.4715 17.4186 24.4715 17.9891C24.4715 18.5967 23.6106 19.3855 22.2127 19.9011ZM21.6327 21.1803C21.774 21.9749 21.7942 22.6933 21.7006 23.2549C21.6165 23.7595 21.4473 24.096 21.2382 24.2307C20.7931 24.5175 19.8414 24.1448 18.8149 23.1616C18.6973 23.0489 18.5787 22.9286 18.4598 22.8012C18.8578 22.3168 19.2555 21.7537 19.6436 21.1283C20.3263 21.0609 20.9713 20.9506 21.5563 20.8001C21.5851 20.9295 21.6106 21.0563 21.6327 21.1803ZM15.7671 24.1812C15.3323 24.3521 14.986 24.357 14.7766 24.2227C14.3312 23.9367 14.146 22.8328 14.3986 21.352C14.4275 21.1824 14.462 21.0082 14.5016 20.8302C15.0802 20.9726 15.7204 21.075 16.4048 21.1368C16.7955 21.7488 17.2047 22.3113 17.6171 22.8038C17.527 22.9006 17.4373 22.9928 17.348 23.0797C16.8001 23.6127 16.251 23.991 15.7671 24.1812ZM13.73 19.8974C13.0414 19.6354 12.4727 19.2949 12.0829 18.9234C11.7326 18.5895 11.5558 18.258 11.5558 17.9891C11.5558 17.4167 12.3225 16.6867 13.6011 16.1904C13.7563 16.1302 13.9187 16.0735 14.0872 16.0202C14.2639 16.66 14.4958 17.329 14.7755 18.0054C14.4921 18.6919 14.257 19.3715 14.0786 20.0189C13.9584 19.9804 13.842 19.94 13.73 19.8974ZM14.4129 14.7237C14.1475 13.2141 14.3237 12.0752 14.7673 11.7894C15.2397 11.485 16.2845 11.919 17.3856 13.0073C17.456 13.0768 17.5266 13.1496 17.5975 13.225C17.1872 13.7154 16.7817 14.2737 16.3944 14.882C15.7303 14.9505 15.0945 15.0606 14.5099 15.208C14.4732 15.0435 14.4406 14.8818 14.4129 14.7237ZM20.5046 16.398C20.3648 16.1293 20.2214 15.867 20.0751 15.6119C20.5257 15.6753 20.9574 15.7595 21.3628 15.8624C21.2411 16.2966 21.0894 16.7506 20.9108 17.216C20.7827 16.9453 20.6473 16.6723 20.5046 16.398ZM18.0204 13.7049C18.2987 14.0404 18.5773 14.4151 18.8514 14.8215C18.5752 14.807 18.2956 14.7995 18.0137 14.7995C17.7344 14.7995 17.4568 14.8068 17.1823 14.8211C17.4567 14.4184 17.7378 14.0443 18.0204 13.7049ZM15.5203 16.4026C15.3807 16.672 15.2477 16.9435 15.1216 17.2155C14.946 16.7517 14.7957 16.2957 14.6729 15.8553C15.0758 15.755 15.5055 15.6729 15.9532 15.6107C15.8049 15.8682 15.6603 16.1324 15.5203 16.4026V16.4026ZM15.9661 20.4153C15.5035 20.3579 15.0674 20.2801 14.6646 20.1825C14.7893 19.7343 14.9429 19.2685 15.1223 18.7948C15.2487 19.0665 15.3822 19.3381 15.5227 19.6081H15.5227C15.6658 19.8832 15.814 20.1526 15.9661 20.4153ZM18.0371 22.3206C17.7511 21.9772 17.4659 21.5974 17.1874 21.1888C17.4578 21.2006 17.7335 21.2067 18.0137 21.2067C18.3015 21.2067 18.5861 21.1995 18.8661 21.1856C18.5911 21.6015 18.3135 21.9819 18.0371 22.3206ZM20.9166 18.7706C21.1054 19.2495 21.2645 19.7128 21.3908 20.1534C20.9814 20.2573 20.5393 20.3411 20.0735 20.4033C20.2201 20.1447 20.3648 19.8779 20.507 19.6035C20.6509 19.3258 20.7874 19.0477 20.9166 18.7706ZM19.9844 19.268C19.7636 19.694 19.537 20.1007 19.3069 20.4846C18.8879 20.518 18.4549 20.5352 18.0137 20.5352C17.5742 20.5352 17.1467 20.52 16.735 20.4902C16.4957 20.1013 16.2641 19.6934 16.0448 19.2717H16.0448C15.826 18.8511 15.6247 18.427 15.4422 18.0052C15.6246 17.5825 15.8255 17.1578 16.043 16.738L16.0429 16.7381C16.261 16.3172 16.4905 15.9112 16.7277 15.5247C17.1477 15.4894 17.5784 15.471 18.0136 15.471H18.0137C18.4509 15.471 18.8821 15.4895 19.302 15.5252C19.5355 15.9089 19.7635 16.3135 19.9824 16.7345C20.2039 17.1602 20.4073 17.582 20.5912 17.9957C20.4078 18.4164 20.2049 18.8425 19.9844 19.268ZM21.2289 11.7694C21.7018 12.073 21.8858 13.2972 21.5886 14.9025C21.5697 15.0049 21.5483 15.1092 21.5252 15.215C20.9393 15.0645 20.303 14.9525 19.6369 14.883C19.2489 14.2679 18.8467 13.7088 18.4431 13.2247C18.5516 13.1085 18.66 12.9977 18.7679 12.8931C19.8105 11.8832 20.785 11.4845 21.2289 11.7694Z"
          fill="white"
        />
        <path
          d="M18.014 16.5854C18.7105 16.5854 19.2751 17.2139 19.2751 17.9891C19.2751 18.7643 18.7105 19.3927 18.014 19.3927C17.3175 19.3927 16.7529 18.7643 16.7529 17.9891C16.7529 17.2139 17.3175 16.5854 18.014 16.5854Z"
          fill="#53C1DE"
        />
      </animated.g>
      <animated.g style={trail[1]}>
        <path d="M211.554 0.930176H0.730789V42.5183H211.554V0.930176Z" fill="#E6E6E6" />
        <path d="M5.22511 38.1728H207.06V5.56592H5.22511V38.1728Z" fill="white" />
        <path d="M175.495 16.9214H36.6252V19.8735H175.495V16.9214Z" fill="#CCCCCC" />
        <path d="M175.495 24.3018H36.6252V26.5158H175.495V24.3018Z" fill="#CCCCCC" />
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.509 15.3208L24.2396 16.721C24.3165 16.6486 24.4063 16.5848 24.5082 16.5322C25.0745 16.2431 25.7968 16.4148 26.1257 16.9177C26.4513 17.4207 26.258 18.0622 25.6917 18.3543C25.5906 18.4059 25.4844 18.4429 25.3763 18.4658V21.2673C25.4832 21.2903 25.5882 21.327 25.6883 21.3781C26.258 21.6702 26.4513 22.3117 26.1223 22.8147C25.7968 23.3176 25.0711 23.4893 24.5048 23.2002C24.392 23.1426 24.2941 23.071 24.212 22.9891L21.4981 24.3808C21.5369 24.4849 21.5579 24.5963 21.5579 24.7121C21.5579 25.2903 21.0289 25.7631 20.3744 25.7631C19.7199 25.7631 19.1909 25.2933 19.1909 24.7121C19.1909 24.6087 19.2076 24.5089 19.2388 24.4147L16.5089 23.0149C16.4329 23.0858 16.3443 23.1484 16.244 23.2002C15.6743 23.4893 14.952 23.3176 14.6265 22.8147C14.3009 22.3117 14.4942 21.6702 15.0605 21.3781C15.1607 21.327 15.2657 21.2902 15.3725 21.2672V18.4658C15.2644 18.4429 15.1582 18.4059 15.0571 18.3543C14.4908 18.0652 14.2975 17.4207 14.6231 16.9177C14.9486 16.4148 15.6743 16.2431 16.2406 16.5322C16.342 16.5845 16.4314 16.6479 16.508 16.7198L19.2393 15.3192C19.2078 15.2245 19.1909 15.1242 19.1909 15.0203C19.1909 14.4391 19.7199 13.9692 20.3744 13.9692C21.0289 13.9692 21.5579 14.4391 21.5579 15.0203C21.5579 15.1248 21.5408 15.2256 21.509 15.3208ZM21.2245 15.7522L23.9616 17.1557C23.877 17.4196 23.908 17.7122 24.0741 17.9688C24.2407 18.2262 24.5121 18.3968 24.8134 18.4633V21.2683C24.798 21.2716 24.7828 21.2753 24.7676 21.2791L21.1927 15.7802C21.2035 15.7711 21.2141 15.7617 21.2245 15.7522ZM19.5568 15.7809L15.9821 21.2797C15.9666 21.2757 15.9511 21.272 15.9354 21.2686V18.4633C16.2367 18.3968 16.5081 18.2262 16.6747 17.9688C16.8411 17.7117 16.8719 17.4185 16.7867 17.1541L19.523 15.751C19.5341 15.7612 19.5453 15.7711 19.5568 15.7809ZM20.7051 16.03L24.2791 21.5275C24.1991 21.5953 24.1286 21.6742 24.0707 21.7636C24.0132 21.8524 23.9719 21.9457 23.946 22.0407H16.8029C16.777 21.9458 16.7356 21.8525 16.6781 21.7636C16.62 21.6748 16.5497 21.5963 16.4701 21.5288L20.0447 16.0302C20.1493 16.0571 20.26 16.0714 20.3744 16.0714C20.4892 16.0714 20.6002 16.057 20.7051 16.03ZM21.2496 24.0039L23.969 22.6095C23.9608 22.5868 23.9535 22.5638 23.9471 22.5406H16.8014C16.7976 22.5542 16.7935 22.5678 16.7891 22.5813L19.5218 23.9825C19.7369 23.7842 20.0392 23.661 20.3744 23.661C20.7215 23.661 21.0333 23.7931 21.2496 24.0039Z"
            fill="#E535AB"
          />
        </g>
      </animated.g>
      <animated.g style={trail[2]}>
        <path d="M211.554 0.644043H0.730789V42.2322H211.554V0.644043Z" fill="#E6E6E6" />
        <path d="M5.22508 37.7417H207.06V5.13477H5.22508V37.7417Z" fill="white" />
        <path d="M175.495 16.6064H36.6252V19.5586H175.495V16.6064Z" fill="#CCCCCC" />
        <path d="M175.495 23.9868H36.6252V26.2009H175.495V23.9868Z" fill="#CCCCCC" />
        <g clipPath="url(#clip0)">
          <path d="M28.4998 13.6543H16.6811V25.4628H28.4998V13.6543Z" fill="#F7DF1E" />
          <path
            d="M24.6203 22.8795C24.8584 23.2679 25.1681 23.5534 25.7159 23.5534C26.1761 23.5534 26.47 23.3236 26.47 23.006C26.47 22.6255 26.168 22.4908 25.6615 22.2694L25.3838 22.1504C24.5824 21.8093 24.05 21.3819 24.05 20.4785C24.05 19.6462 24.6846 19.0127 25.6765 19.0127C26.3826 19.0127 26.8902 19.2582 27.2561 19.9011L26.3912 20.456C26.2008 20.1148 25.9954 19.9804 25.6765 19.9804C25.3512 19.9804 25.145 20.1866 25.145 20.456C25.145 20.7888 25.3514 20.9236 25.8279 21.1298L26.1055 21.2486C27.0491 21.6529 27.5819 22.0651 27.5819 22.9918C27.5819 23.9908 26.7964 24.5381 25.7416 24.5381C24.7102 24.5381 24.0438 24.0471 23.7178 23.4034L24.6203 22.8795ZM20.6971 22.9757C20.8715 23.2849 21.0302 23.5464 21.4118 23.5464C21.7767 23.5464 22.0069 23.4038 22.0069 22.8492V19.076H23.1174V22.8641C23.1174 24.0131 22.4432 24.5361 21.4591 24.5361C20.5699 24.5361 20.0549 24.0763 19.793 23.5225L20.6971 22.9757Z"
            fill="black"
          />
        </g>
      </animated.g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h633v440H0z" />
        </clipPath>
        <clipPath id="clip1">
          <path fill="#fff" d="M0 0h11.819v11.809H0z" transform="translate(232.681 144.654)" />
        </clipPath>
        <clipPath id="clip2">
          <path fill="#fff" d="M0 0h11.819v11.809H0z" transform="translate(230.465 78.97)" />
        </clipPath>
        <clipPath id="clip3">
          <path
            fill="#fff"
            d="M0 0h35.448v35.434H0z"
            transform="rotate(31.978 126.8 884.741) skewX(-.045)"
          />
        </clipPath>
        <pattern id="pattern0" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use transform="scale(.01563)" xlinkHref="#image0" />
        </pattern>
        <image
          id="image0"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </Box>
  );
};

export default CellPhoneImage;