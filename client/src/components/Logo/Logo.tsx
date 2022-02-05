import { useColorModeValue } from "@chakra-ui/react";

const Logo: React.FC = () => {
  const fillColor = useColorModeValue("#7e7e7e", "white");

  return (
    <svg
      viewBox="0 0 1200 630"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
      }}
    >
      <defs>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1={251.882}
          y1={78.426}
          x2={251.882}
          y2={421.573}
          gradientTransform="matrix(1.0609 0 0 1.0609 720.454 49.774)"
          xlinkHref="#a"
        />
        <linearGradient id="a">
          <stop
            offset={0}
            style={{
              stopColor: "#ed63d1",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#ed257b",
            }}
          />
        </linearGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          cx={210.763}
          cy={357.891}
          r={299.871}
          id="c"
          spreadMethod="pad"
          gradientTransform="matrix(1.57912 0 0 1.57912 152.862 -223.335)"
          xlinkHref="#a"
        />
      </defs>
      <path
        d="M985.677 132.978c105.649 0 191.602 77.356 191.602 172.442 0 33.241-10.52 65.439-30.453 93.272 3.779 41.749 13.892 72.747 28.581 87.427a6.386 6.386 0 0 1-5.409 10.838c-2.587-.361-62.674-9.016-106.13-34.089-24.684 9.955-50.972 14.994-78.191 14.994-62.972 0-118.945-27.484-153.89-69.818 32.243 23.44 77.51 38.018 127.636 38.018 97.904 0 177.273-55.621 177.273-124.235 0-68.613-79.369-124.238-177.273-124.238-71.678 0-133.42 29.816-161.357 72.716 18.071-78.304 95.328-137.327 187.611-137.327Z"
        style={{
          strokeWidth: 0,
          fill: "url(#b)",
        }}
      />
      <circle
        style={{
          stroke: "#000",
          strokeWidth: 0,
          fill: "#ed63d1",
        }}
        cx={839.229}
        cy={251.467}
        r={10.031}
      />
      <circle
        style={{
          stroke: "#000",
          strokeWidth: 0,
          fill: "#ed63d1",
        }}
        cx={867.11}
        cy={238.252}
        r={13.984}
      />
      <circle
        style={{
          stroke: "#000",
          strokeWidth: 0,
          fill: "#ed63d1",
        }}
        cx={904.22}
        cy={227.144}
        r={17.146}
      />
      <circle
        style={{
          stroke: "#000",
          strokeWidth: 0,
          fill: "#ed63d1",
        }}
        cx={818.981}
        cy={265.104}
        r={7.523}
      />
      <path
        d="M78.095 377.621c7.582 0 14.208-2.297 19.876-6.894 5.669-4.595 8.808-10.338 9.419-17.233h20.106c-.382 7.124-2.832 13.903-7.352 20.336-4.52 6.434-10.55 11.565-18.095 15.395-7.545 3.829-15.529 5.744-23.954 5.744-16.927 0-30.387-5.649-40.383-16.946-9.994-11.297-14.992-26.748-14.992-46.357v-3.561c0-12.101 2.221-22.863 6.662-32.283 4.444-9.421 10.818-16.736 19.129-21.943 8.312-5.208 18.133-7.813 29.469-7.813 13.94 0 25.525 4.174 34.753 12.523 9.23 8.349 14.151 19.187 14.763 32.513H107.39c-.611-8.043-3.656-14.649-9.133-19.819-5.476-5.169-12.235-7.755-20.277-7.755-10.8 0-19.166 3.888-25.102 11.663-5.935 7.773-8.905 19.012-8.905 33.718v4.02c0 14.322 2.951 25.353 8.846 33.088 5.898 7.736 14.323 11.604 25.276 11.604Zm94.543-94.207c9.421-11.564 21.675-17.348 36.764-17.348 26.272 0 39.521 14.821 39.751 44.46v82.144h-21.254v-82.257c-.076-8.962-2.125-15.588-6.145-19.877-4.023-4.288-10.283-6.433-18.786-6.433-6.893 0-12.943 1.838-18.151 5.515-5.209 3.676-9.268 8.502-12.179 14.476v88.576h-21.252V216.204h21.252ZM357.719 392.67c-1.225-2.45-2.22-6.814-2.986-13.096-9.881 10.263-21.675 15.395-35.385 15.395-12.256 0-22.308-3.465-30.159-10.398-7.851-6.93-11.776-15.72-11.776-26.365 0-12.945 4.922-22.997 14.763-30.16 9.843-7.16 23.687-10.739 41.533-10.739h20.68v-9.766c0-7.43-2.223-13.347-6.664-17.751-4.442-4.405-10.991-6.606-19.647-6.606-7.582 0-13.94 1.915-19.07 5.745-5.132 3.83-7.699 8.463-7.699 13.9h-21.368c0-6.203 2.203-12.197 6.605-17.978 4.405-5.784 10.379-10.36 17.924-13.729 7.545-3.371 15.834-5.056 24.872-5.056 14.323 0 25.544 3.58 33.662 10.742 8.118 7.16 12.331 17.023 12.638 29.582v57.216c0 11.412 1.456 20.487 4.366 27.227v1.837Zm-35.27-16.198c6.664 0 12.982-1.722 18.957-5.17 5.975-3.445 10.301-7.927 12.983-13.441v-25.504h-16.66c-26.041 0-39.061 7.62-39.061 22.862 0 6.662 2.222 11.872 6.663 15.624 4.443 3.752 10.147 5.629 17.118 5.629Zm115.325-138.208v30.101h23.206v16.427h-23.206v77.089c0 4.979 1.034 8.713 3.101 11.202 2.069 2.489 5.592 3.734 10.571 3.734 2.45 0 5.82-.46 10.109-1.379v17.232c-5.591 1.532-11.029 2.299-16.314 2.299-9.496 0-16.658-2.872-21.484-8.617-4.825-5.744-7.238-13.901-7.238-24.471v-77.089h-22.632v-16.427h22.632v-30.101Z"
        style={{
          fill: "url(#c)",
          whiteSpace: "pre",
          paintOrder: "fill",
        }}
      />
      <path
        d="m487.923 318.421.275 12.076c2.745-4.483 6.176-7.845 10.294-10.086 4.117-2.242 8.692-3.362 13.725-3.362 11.711 0 19.147 4.803 22.303 14.41 2.653-4.62 6.198-8.178 10.636-10.67 4.438-2.495 9.334-3.74 14.685-3.74 15.921 0 24.043 8.69 24.36 26.076v49.545h-8.232v-48.926c-.046-6.634-1.476-11.553-4.288-14.756-2.815-3.203-7.403-4.803-13.762-4.803-5.9.091-10.887 2.002-14.958 5.73-4.073 3.728-6.337 8.268-6.794 13.622v49.133h-8.234v-49.545c-.047-6.359-1.546-11.105-4.497-14.239-2.949-3.133-7.491-4.701-13.621-4.701-5.17 0-9.607 1.476-13.313 4.425-3.705 2.952-6.452 7.332-8.234 13.141v50.919h-8.235v-74.249Zm112.523 36.028c0-7.139 1.386-13.566 4.152-19.285 2.768-5.719 6.68-10.167 11.735-13.347 5.056-3.18 10.784-4.768 17.19-4.768 9.883 0 17.889 3.464 24.018 10.395 6.132 6.932 9.198 16.116 9.198 27.552v1.717c0 7.182-1.385 13.645-4.154 19.387-2.767 5.74-6.667 10.165-11.699 13.277-5.033 3.11-10.775 4.668-17.225 4.668-9.835 0-17.83-3.466-23.984-10.397-6.154-6.932-9.231-16.116-9.231-27.553Zm8.236 2.264c0 8.874 2.3 16.161 6.896 21.856 4.598 5.696 10.625 8.543 18.083 8.543 7.412 0 13.416-2.847 18.013-8.543 4.598-5.695 6.897-13.21 6.897-22.544v-1.576c0-5.675-1.051-10.867-3.157-15.578-2.104-4.713-5.054-8.361-8.853-10.945-3.796-2.586-8.143-3.879-13.038-3.879-7.32 0-13.291 2.871-17.91 8.612-4.621 5.743-6.931 13.258-6.931 22.543Zm119.474 17.088c0-4.073-1.636-7.343-4.905-9.815-3.273-2.47-8.202-4.403-14.789-5.798-6.589-1.395-11.703-2.996-15.339-4.804-3.636-1.807-6.337-4.014-8.097-6.622-1.761-2.608-2.642-5.764-2.642-9.469 0-5.857 2.447-10.695 7.342-14.516 4.896-3.819 11.164-5.728 18.803-5.728 8.281 0 14.926 2.046 19.936 6.141 5.01 4.093 7.514 9.434 7.514 16.023h-8.235c0-4.346-1.819-7.96-5.455-10.842-3.638-2.883-8.223-4.324-13.76-4.324-5.399 0-9.733 1.201-13.004 3.603-3.27 2.403-4.906 5.525-4.906 9.367 0 3.706 1.361 6.577 4.082 8.614 2.722 2.035 7.688 3.899 14.892 5.591 7.206 1.693 12.604 3.501 16.195 5.42 3.592 1.923 6.256 4.234 7.995 6.933 1.739 2.699 2.609 5.97 2.609 9.813 0 6.267-2.529 11.276-7.583 15.029-5.057 3.751-11.656 5.628-19.8 5.628-8.645 0-15.656-2.095-21.032-6.28-5.374-4.187-8.062-9.481-8.062-15.886h8.233c.32 4.803 2.344 8.542 6.074 11.22 3.727 2.675 8.658 4.013 14.787 4.013 5.72 0 10.341-1.256 13.864-3.774 3.521-2.515 5.283-5.696 5.283-9.537Zm86.371-17.5c0 11.574-2.563 20.759-7.686 27.551-5.123 6.795-11.986 10.193-20.587 10.193-10.156 0-17.935-3.569-23.332-10.707v37.882h-8.167V318.421h7.618l.411 10.498c5.353-7.914 13.107-11.87 23.265-11.87 8.875 0 15.839 3.362 20.896 10.086 5.054 6.727 7.582 16.059 7.582 27.998Zm-8.235-1.441c0-9.471-1.945-16.949-5.833-22.441-3.889-5.488-9.31-8.234-16.263-8.234-5.032 0-9.357 1.211-12.971 3.637-3.615 2.424-6.381 5.948-8.303 10.568v35.615c1.967 4.254 4.78 7.503 8.441 9.745 3.659 2.243 7.984 3.362 12.968 3.362 6.909 0 12.298-2.755 16.162-8.268 3.866-5.513 5.799-13.509 5.799-23.984Zm34.597-23.881c2.698-4.439 6.152-7.87 10.361-10.293 4.208-2.427 8.806-3.637 13.794-3.637 7.961 0 13.885 2.241 17.772 6.725 3.89 4.483 5.858 11.208 5.904 20.174v48.722h-8.168v-48.791c-.046-6.632-1.453-11.573-4.219-14.822-2.769-3.248-7.194-4.872-13.28-4.872-5.077 0-9.573 1.589-13.484 4.769-3.912 3.179-6.805 7.469-8.68 12.868v50.848h-8.167V287.265h8.167Zm97.718 63.066c-6.314 0-12.02-1.558-17.121-4.668-5.101-3.112-9.071-7.446-11.907-13.005-2.836-5.558-4.253-11.79-4.253-18.699v-2.95c0-7.138 1.383-13.564 4.151-19.283 2.768-5.719 6.622-10.215 11.562-13.485 4.941-3.272 10.295-4.906 16.058-4.906 9.015 0 16.162 3.076 21.445 9.23 5.285 6.152 7.927 14.558 7.927 25.217v4.599h-52.978v1.578c0 8.418 2.413 15.429 7.239 21.034 4.826 5.603 10.9 8.405 18.221 8.405 4.391 0 8.269-.8 11.632-2.401 3.362-1.602 6.415-4.163 9.16-7.686l5.147 3.912c-6.039 8.738-14.8 13.108-26.283 13.108Zm-1.51-69.998c-6.175 0-11.379 2.264-15.611 6.794-4.232 4.53-6.806 10.614-7.72 18.255h44.537v-.893c-.229-7.136-2.264-12.948-6.107-17.431-3.844-4.482-8.877-6.725-15.099-6.725Zm79.662 1.373c-1.738-.32-3.593-.481-5.559-.481-5.123 0-9.458 1.43-13.004 4.289-3.547 2.86-6.073 7.012-7.583 12.457v50.985h-8.167v-74.249h8.03l.137 11.801c4.347-8.783 11.322-13.173 20.93-13.173 2.287 0 4.094.296 5.421.892Zm40.409 68.625c-6.312 0-12.02-1.558-17.122-4.668-5.1-3.112-9.069-7.446-11.904-13.005-2.838-5.558-4.256-11.79-4.256-18.699v-2.95c0-7.138 1.385-13.564 4.15-19.283 2.77-5.719 6.624-10.215 11.565-13.485 4.941-3.272 10.293-4.906 16.058-4.906 9.012 0 16.16 3.076 21.445 9.23 5.283 6.152 7.924 14.558 7.924 25.217v4.599h-52.975v1.578c0 8.418 2.413 15.429 7.238 21.034 4.828 5.603 10.902 8.405 18.221 8.405 4.392 0 8.269-.8 11.631-2.401 3.364-1.602 6.416-4.163 9.162-7.686l5.146 3.912c-6.038 8.738-14.799 13.108-26.283 13.108Zm-1.509-69.998c-6.176 0-11.381 2.264-15.613 6.794-4.23 4.53-6.804 10.614-7.721 18.255h44.539v-.893c-.23-7.136-2.265-12.948-6.109-17.431-3.841-4.482-8.875-6.725-15.096-6.725Z"
        style={{
          //   fill: "#7e7e7e",
          fill: fillColor,
          whiteSpace: "pre",
        }}
      />
    </svg>
  );
};

export default Logo;
