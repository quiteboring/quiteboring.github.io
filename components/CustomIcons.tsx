import { SVGProps } from "react";

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 256 255" {...props}>
      <defs>
        <linearGradient id="pythonBlue" x1="12.96%" y1="12.04%" x2="79.64%" y2="78.01%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pythonYellow" x1="19.13%" y1="20.58%" x2="90.03%" y2="88.08%">
          <stop offset="0%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
        fill="url(#pythonBlue)"
      />
      <path
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
        fill="url(#pythonYellow)"
      />
    </svg>
  );
}

export function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 38 57" {...props}>
      <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

export function IntelliJIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="0" y="0" width="24" height="24" fill="#FFF" />
      <path
        fill="#000"
        d="M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 0 1-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 0 1-1.279-1.056l1.39-1.555c.277.334.555.555.833.722.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z"
      />
    </svg>
  );
}

export function VSCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <defs>
        <linearGradient id="vscGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#2489CA" />
          <stop offset="100%" stopColor="#1E6BB8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#vscGrad)"
        d="M71.6 99.1c1.5.5 3.2.3 4.6-.6l19.2-9.3c2.1-1 3.4-3.1 3.4-5.3V16.1c0-2.2-1.3-4.3-3.4-5.3l-19.2-9.3c-2-1-4.3-.8-6.1.6L28.8 37.5 11.9 25.3c-1.6-1.2-3.8-1.1-5.3.2l-5.2 4.7c-1.7 1.6-1.7 4.3 0 5.9l14.7 13.4-14.7 13.4c-1.7 1.6-1.7 4.3 0 5.9l5.2 4.7c1.5 1.3 3.7 1.4 5.3.2l16.9-12.2 41.3 35.4c1.1.9 2.4 1.4 3.8 1.6l-2.3.6zM75 27.3v45.4L47.1 50 75 27.3z"
      />
    </svg>
  );
}