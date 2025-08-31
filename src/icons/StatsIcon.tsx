export default function statsIcon() {
  return (
    <svg
      width="732"
      height="728"
      viewBox="0 0 732 728"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_117_33"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="265"
        width="418"
        height="434"
      >
        <path
          d="M4 698C9.04538 666.177 42.9215 674.634 75.9798 666.177C117.968 655.435 88.6902 585.843 152.478 585.843C202.211 585.843 200.433 541.448 217.347 500.323C237.529 451.254 260.601 376.187 329.427 431.16C380.773 472.171 374.771 279.652 417 269"
          stroke="black"
          stroke-width="8"
        />
      </mask>
      <g mask="url(#mask0_117_33)">
        <g filter="url(#filter0_f_117_33)">
          <circle cx="368" cy="364" r="364" fill="url(#paint0_linear_117_33)" />
        </g>
      </g>
      <path
        d="M417 268.519C459.904 257.151 429.987 183.504 495.165 183.504C545.982 183.504 544.165 136.522 561.448 93"
        stroke="#B8B8B8"
        stroke-width="8"
      />
      <g filter="url(#filter1_df_117_33)">
        <circle cx="417" cy="269" r="12" fill="#5968B2" />
      </g>
      <defs>
        <filter
          id="filter0_f_117_33"
          x="-26"
          y="-30"
          width="788"
          height="788"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="15"
            result="effect1_foregroundBlur_117_33"
          />
        </filter>
        <filter
          id="filter1_df_117_33"
          x="384"
          y="236"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="11"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_117_33"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.34902 0 0 0 0 0.407843 0 0 0 0 0.698039 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_117_33"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_117_33"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect2_foregroundBlur_117_33"
          />
        </filter>
        <linearGradient
          id="paint0_linear_117_33"
          x1="416.5"
          y1="264"
          x2="152.716"
          y2="654.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5968B2" />
          <stop offset="1" stop-color="#F441A5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
