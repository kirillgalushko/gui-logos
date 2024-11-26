import { defineComponent as F, computed as h, openBlock as p, createElementBlock as i, normalizeStyle as f, createStaticVNode as d } from "vue";
const M = /* @__PURE__ */ F({
  __name: "LogoSafari",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const l = t, a = h(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (e, c) => (p(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: f(a.value)
    }, c[0] || (c[0] = [
      d('<defs><linearGradient id="safari-gui-asset-a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="25%" stop-color="#DBDBDA"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient><linearGradient id="safari-gui-asset-d" x1="49.05%" x2="25.713%" y1="35.703%" y2="77.572%"><stop offset="0%" stop-color="#000" stop-opacity="0"></stop><stop offset="100%" stop-color="#000"></stop></linearGradient><filter id="safari-gui-asset-b" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.266007133 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><filter id="safari-gui-asset-e" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 13 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><radialGradient id="safari-gui-asset-c" cx="57.025%" cy="39.017%" r="61.032%" fx="57.025%" fy="39.017%"><stop offset="0%" stop-color="#2ABCE1"></stop><stop offset="11.363%" stop-color="#2ABBE1"></stop><stop offset="100%" stop-color="#3375F8"></stop></radialGradient></defs><g><g transform="translate(4 2)"><circle cx="124" cy="124" r="124" fill="url(#safari-gui-asset-a)" filter="url(#safari-gui-asset-b)"></circle><circle cx="124" cy="124" r="114.7" fill="url(#safari-gui-asset-c)"></circle><g transform="translate(9.688 8.719)"><path fill="#F3F3F3" d="M114.506 28.481c-.775 0-1.453-.581-1.453-1.356V6.878c0-.775.678-1.356 1.453-1.356s1.453.581 1.453 1.356v20.247c-.097.775-.678 1.356-1.453 1.356"></path><path fill="#FFF" d="M114.506 28.578c-.872 0-1.55-.678-1.55-1.453V6.878c0-.775.678-1.453 1.55-1.453s1.55.678 1.55 1.453v20.247c0 .775-.775 1.453-1.55 1.453m0-22.96c-.678 0-1.356.582-1.356 1.26v20.247c0 .678.581 1.26 1.356 1.26.678 0 1.356-.582 1.356-1.26V6.878c-.096-.678-.678-1.26-1.356-1.26"></path><path fill="#F3F3F3" d="M124.194 17.631c-.775-.097-1.356-.678-1.356-1.453l.678-9.01c.096-.774.775-1.356 1.55-1.259s1.356.679 1.356 1.454l-.678 9.009c-.097.775-.775 1.356-1.55 1.26"></path><path fill="#FFF" d="M124.194 17.728c-.872-.097-1.453-.775-1.453-1.55l.678-9.01c.097-.774.775-1.452 1.647-1.356.871.097 1.453.776 1.453 1.55l-.678 9.01c-.097.872-.775 1.453-1.647 1.356m.872-11.722c-.678 0-1.357.485-1.357 1.163l-.678 9.01c0 .677.485 1.259 1.26 1.355.678 0 1.356-.484 1.356-1.162l.678-9.01c0-.678-.581-1.259-1.26-1.356"></path><path fill="#F3F3F3" d="M131.46 30.225c-.776-.194-1.26-.872-1.163-1.647l3.972-19.86c.194-.774.872-1.259 1.647-1.065s1.259.872 1.162 1.647l-3.972 19.86c-.097.677-.872 1.162-1.647 1.065"></path><path fill="#FFF" d="M131.46 30.322c-.873-.194-1.357-.969-1.26-1.744l3.972-19.86c.194-.774.969-1.356 1.84-1.162s1.357.969 1.26 1.744L133.3 29.16c-.194.774-.969 1.259-1.84 1.162m4.552-22.572c-.678-.097-1.356.29-1.55.969l-3.971 19.86c-.097.677.29 1.355 1.065 1.55.678.096 1.356-.292 1.55-.97L137.078 9.3c.097-.775-.387-1.356-1.066-1.55"></path><path fill="#F3F3F3" d="M143.084 21.506a1.444 1.444 0 0 1-1.065-1.744l2.422-8.718c.193-.775.968-1.163 1.743-.969s1.26.969 1.066 1.744l-2.422 8.719c-.194.774-.969 1.162-1.744.968"></path><path fill="#FFF" d="M143.084 21.603c-.775-.194-1.356-1.065-1.065-1.84l2.422-8.72c.193-.774 1.065-1.259 1.84-1.065s1.356 1.066 1.066 1.84l-2.422 8.72c-.194.774-.969 1.259-1.84 1.065m3.197-11.334c-.678-.194-1.453.194-1.647.872l-2.421 8.718c-.194.678.193 1.357.968 1.55.678.194 1.453-.193 1.647-.871l2.422-8.72c.097-.677-.29-1.355-.969-1.55"></path><path fill="#F3F3F3" d="M147.831 35.166c-.775-.291-1.065-1.163-.775-1.841l7.75-18.697c.29-.678 1.163-1.065 1.84-.678.776.29 1.067 1.163.776 1.84l-7.75 18.697c-.29.679-1.163 1.066-1.84.679"></path><path fill="#FFF" d="M147.831 35.263a1.505 1.505 0 0 1-.872-1.938l7.75-18.697c.291-.775 1.163-1.065 2.035-.775a1.505 1.505 0 0 1 .872 1.938l-7.75 18.697c-.388.775-1.26 1.162-2.035.775m8.816-21.216c-.678-.29-1.453 0-1.744.678l-7.75 18.697c-.29.678.097 1.356.775 1.647s1.453 0 1.744-.678l7.75-18.697c.194-.582-.097-1.357-.775-1.647"></path><path fill="#F3F3F3" d="M160.91 28.966c-.679-.388-.97-1.163-.679-1.841l4.069-8.04c.387-.679 1.162-.97 1.938-.582.678.388.968 1.163.678 1.84l-4.07 8.041c-.387.678-1.162.97-1.937.582"></path><path fill="#FFF" d="M160.91 29.063c-.776-.388-1.066-1.26-.679-2.035l4.069-8.04c.387-.776 1.26-1.066 2.034-.679.775.388 1.066 1.26.678 2.035l-4.068 8.04c-.388.775-1.26 1.066-2.035.678m5.328-10.56c-.679-.29-1.454-.097-1.744.581l-4.069 8.041c-.29.581 0 1.356.581 1.744.678.29 1.453.097 1.744-.581l4.069-8.041c.29-.581 0-1.356-.581-1.744"></path><path fill="#F3F3F3" d="M162.847 43.303c-.678-.484-.872-1.356-.388-1.937l11.238-16.76c.387-.678 1.26-.775 1.937-.387.679.484.872 1.356.388 1.937l-11.238 16.76c-.387.678-1.259.872-1.937.387"></path><path fill="#FFF" d="M162.847 43.4c-.678-.484-.872-1.453-.484-2.131l11.237-16.76c.484-.678 1.356-.872 2.131-.387.678.484.872 1.453.485 2.131l-11.238 16.76c-.484.678-1.453.871-2.131.387m12.787-19.084c-.58-.388-1.453-.291-1.84.29l-11.238 16.76c-.387.58-.194 1.356.388 1.743.581.388 1.453.291 1.84-.29l11.238-16.663c.387-.581.194-1.453-.388-1.84"></path><path fill="#F3F3F3" d="M176.99 39.719c-.58-.485-.774-1.357-.29-1.938l5.619-7.072c.484-.58 1.356-.678 1.937-.193.582.484.775 1.356.29 1.937l-5.618 7.072c-.484.581-1.356.678-1.937.194"></path><path fill="#FFF" d="M176.894 39.816c-.678-.485-.775-1.454-.29-2.132l5.618-7.071c.484-.679 1.453-.776 2.131-.194.678.484.775 1.453.29 2.131l-5.618 7.072c-.484.678-1.453.775-2.131.194m7.265-9.204c-.58-.484-1.356-.387-1.84.194l-5.619 7.072c-.387.581-.29 1.356.29 1.84.582.485 1.357.388 1.841-.193l5.619-7.072c.388-.581.29-1.453-.29-1.84"></path><path fill="#F3F3F3" d="M176.022 54.25c-.581-.581-.581-1.453 0-1.937l14.337-14.241c.582-.581 1.453-.485 1.938 0 .484.484.581 1.453 0 1.937l-14.24 14.241c-.582.581-1.454.581-2.035 0"></path><path fill="#FFF" d="M175.925 54.347a1.52 1.52 0 0 1 0-2.131l14.337-14.241a1.52 1.52 0 0 1 2.132 0 1.52 1.52 0 0 1 0 2.131l-14.338 14.24a1.52 1.52 0 0 1-2.131 0m16.372-16.275c-.484-.485-1.356-.485-1.84 0l-14.338 14.24c-.485.485-.485 1.357 0 1.841.484.485 1.356.485 1.84 0l14.338-14.24c.484-.485.484-1.26 0-1.841"></path><path fill="#F3F3F3" d="M190.553 53.475c-.484-.581-.484-1.453.097-1.937l6.878-5.813c.581-.484 1.453-.388 1.938.194.484.581.484 1.453-.097 1.937l-6.878 5.813c-.582.484-1.454.387-1.938-.194"></path><path fill="#FFF" d="M190.456 53.572c-.581-.678-.484-1.647.097-2.131l6.878-5.813c.581-.581 1.55-.484 2.131.194.582.678.485 1.647-.096 2.131l-6.879 5.813c-.58.58-1.55.484-2.13-.194m8.913-7.653c-.485-.581-1.26-.581-1.84-.194l-6.879 5.813c-.484.484-.581 1.259-.097 1.84s1.26.581 1.84.194l6.879-5.813c.581-.484.581-1.259.097-1.84"></path><path fill="#F3F3F3" d="M186.678 67.425c-.484-.678-.29-1.55.388-1.937l16.856-11.238c.678-.388 1.55-.194 1.937.388.485.678.291 1.55-.387 1.937l-16.856 11.237c-.582.388-1.454.194-1.938-.387"></path><path fill="#FFF" d="M186.581 67.425c-.484-.678-.29-1.647.388-2.131l16.856-11.238c.678-.484 1.647-.29 2.131.485.485.678.29 1.647-.387 2.13L188.713 67.91c-.679.485-1.647.291-2.132-.484m19.182-12.69c-.388-.582-1.163-.776-1.744-.388l-16.857 11.237c-.58.388-.775 1.163-.29 1.841.387.581 1.162.775 1.744.388l16.856-11.238c.581-.484.678-1.26.29-1.84"></path><path fill="#F3F3F3" d="M201.113 69.46c-.388-.679-.194-1.55.484-1.938l7.847-4.456c.678-.388 1.55-.097 1.937.58.388.679.194 1.55-.484 1.938l-7.847 4.457c-.678.387-1.55.097-1.937-.582"></path><path fill="#FFF" d="M201.016 69.556c-.388-.775-.194-1.647.484-2.034l7.847-4.456c.678-.388 1.647-.097 2.034.58.388.776.194 1.648-.484 2.035l-7.847 4.457c-.678.387-1.647.096-2.034-.582m10.268-5.812c-.387-.678-1.162-.872-1.743-.485l-7.847 4.457c-.581.387-.775 1.162-.485 1.743.388.678 1.163.872 1.744.485l7.847-4.457c.581-.29.775-1.065.484-1.743"></path><path fill="#F3F3F3" d="M194.622 82.344c-.29-.775 0-1.55.775-1.84l18.697-7.75c.678-.291 1.55.096 1.84.774.291.775 0 1.55-.775 1.84l-18.696 7.75c-.679.291-1.55 0-1.841-.774"></path><path fill="#FFF" d="M194.525 82.44c-.29-.774 0-1.646.775-2.034l18.697-7.75a1.505 1.505 0 0 1 1.937.872c.291.775 0 1.647-.775 2.034l-18.696 7.75a1.505 1.505 0 0 1-1.938-.871m21.216-8.815c-.291-.678-1.066-.969-1.647-.775l-18.697 7.75c-.678.29-.969 1.066-.678 1.744s1.065.969 1.647.775l18.696-7.75c.679-.29.97-1.066.679-1.744"></path><path fill="#F3F3F3" d="M208.281 87.188c-.29-.776.097-1.55.872-1.841l8.525-2.81c.678-.29 1.55.194 1.744.872.29.775-.097 1.55-.872 1.841l-8.525 2.81c-.678.29-1.453-.097-1.744-.873"></path><path fill="#FFF" d="M208.184 87.284c-.29-.775.097-1.647.97-1.937l8.524-2.81c.775-.29 1.647.194 1.938.97.29.774-.097 1.646-.97 1.937l-8.524 2.81c-.775.193-1.647-.195-1.938-.97m11.238-3.68c-.194-.679-.969-1.067-1.647-.873l-8.525 2.81c-.678.193-.969.968-.775 1.647.194.678.969 1.065 1.647.871l8.525-2.809c.678-.29.969-.969.775-1.647"></path><path fill="#F3F3F3" d="M199.563 98.716c-.194-.775.29-1.55 1.065-1.647l19.86-3.875c.774-.194 1.453.387 1.646 1.162.194.775-.29 1.55-1.065 1.647l-19.86 3.875c-.775.097-1.55-.387-1.647-1.162"></path><path fill="#FFF" d="M199.369 98.716c-.194-.872.387-1.647 1.162-1.841L220.391 93c.775-.194 1.55.388 1.743 1.26.194.871-.387 1.646-1.162 1.84l-19.86 3.875c-.774.194-1.55-.387-1.743-1.26m22.572-4.36c-.097-.678-.775-1.162-1.453-1.065l-19.86 3.875c-.678.097-1.162.871-.969 1.55.097.678.775 1.162 1.454 1.065l19.859-3.875c.678-.194 1.162-.872.969-1.55"></path><path fill="#F3F3F3" d="M211.963 106.175c-.097-.775.387-1.453 1.162-1.55l8.912-1.066c.775-.096 1.454.485 1.55 1.26s-.387 1.453-1.162 1.55l-8.913 1.065c-.678.097-1.453-.484-1.55-1.259"></path><path fill="#FFF" d="M211.866 106.175c-.097-.872.484-1.647 1.259-1.744l8.912-1.065c.775-.097 1.55.484 1.647 1.356s-.484 1.647-1.259 1.744l-8.913 1.065c-.774.097-1.55-.484-1.646-1.356m11.721-1.356c-.096-.678-.774-1.26-1.453-1.163l-8.912 1.066c-.678.097-1.163.775-1.066 1.453s.775 1.26 1.453 1.163l8.913-1.066c.678-.097 1.162-.775 1.066-1.453"></path><path fill="#F3F3F3" d="M201.113 115.572c0-.775.58-1.453 1.356-1.453h20.247c.775 0 1.356.678 1.356 1.453s-.581 1.453-1.356 1.453h-20.247c-.775 0-1.356-.678-1.356-1.453"></path><path fill="#FFF" d="M201.016 115.572c0-.872.678-1.55 1.453-1.55h20.247c.775 0 1.453.678 1.453 1.55s-.678 1.55-1.453 1.55h-20.247c-.775 0-1.453-.678-1.453-1.55m22.959.097c0-.678-.581-1.356-1.26-1.356H202.47c-.678 0-1.26.58-1.26 1.356 0 .678.582 1.356 1.26 1.356h20.247c.678-.097 1.259-.678 1.259-1.356"></path><path fill="#F3F3F3" d="M211.866 125.356c.096-.775.678-1.356 1.453-1.356l9.01.678c.774.097 1.355.775 1.258 1.55s-.678 1.356-1.453 1.356l-9.009-.678c-.678-.097-1.26-.775-1.26-1.55"></path><path fill="#FFF" d="M211.769 125.356c.097-.872.775-1.453 1.55-1.453l9.01.678c.774.097 1.452.775 1.355 1.647s-.775 1.453-1.55 1.453l-9.009-.678c-.775-.097-1.356-.872-1.356-1.647m11.819.872c.096-.678-.485-1.356-1.163-1.356l-9.01-.678c-.677 0-1.259.484-1.356 1.26-.096.677.485 1.355 1.163 1.355l9.01.678c.677 0 1.259-.58 1.356-1.259"></path><path fill="#F3F3F3" d="M199.369 132.428c.194-.775.872-1.26 1.647-1.162l19.859 3.972c.775.193 1.26.871 1.066 1.646s-.872 1.26-1.647 1.163l-19.86-3.972c-.678-.097-1.162-.872-1.065-1.647"></path><path fill="#FFF" d="M199.272 132.428c.194-.872.969-1.356 1.744-1.26l19.859 3.973c.775.193 1.356.968 1.162 1.84-.193.872-.968 1.357-1.743 1.26l-19.86-3.972c-.775-.194-1.259-.969-1.162-1.84m22.572 4.553c.097-.678-.29-1.356-.969-1.55l-19.86-3.972c-.677-.096-1.356.291-1.55 1.066-.096.678.291 1.356.97 1.55l19.859 3.972c.775.097 1.356-.388 1.55-1.066"></path><path fill="#F3F3F3" d="M208.088 144.053a1.444 1.444 0 0 1 1.743-1.065l8.719 2.421c.775.194 1.162.97.969 1.744a1.444 1.444 0 0 1-1.744 1.066l-8.719-2.422c-.775-.194-1.162-.969-.969-1.744"></path><path fill="#FFF" d="M207.99 144.053c.194-.775 1.066-1.356 1.841-1.065l8.719 2.421c.775.194 1.26 1.066 1.066 1.841s-1.066 1.356-1.841 1.066l-8.719-2.422c-.775-.194-1.26-.969-1.065-1.84m11.335 3.197c.194-.678-.194-1.453-.872-1.647l-8.719-2.422c-.678-.194-1.356.194-1.55.969-.193.678.194 1.453.872 1.647l8.719 2.422c.678.097 1.356-.29 1.55-.969"></path><path fill="#F3F3F3" d="M194.428 148.703c.29-.775 1.163-1.066 1.84-.775l18.698 7.75c.678.29 1.065 1.163.775 1.84-.291.776-1.163 1.066-1.841.776l-18.697-7.75c-.775-.29-1.066-1.163-.775-1.84"></path><path fill="#FFF" d="M194.331 148.606a1.505 1.505 0 0 1 1.938-.872l18.697 7.75c.775.291 1.065 1.163.775 2.035a1.505 1.505 0 0 1-1.938.872l-18.697-7.75c-.775-.388-1.065-1.26-.775-2.035m21.216 8.816c.29-.678 0-1.453-.678-1.744l-18.697-7.75c-.678-.29-1.356.097-1.647.775s0 1.453.678 1.744l18.697 7.75c.678.194 1.453-.097 1.647-.775"></path><path fill="#F3F3F3" d="M200.725 161.781c.388-.678 1.162-.969 1.84-.678l8.041 4.069c.678.29.969 1.162.582 1.937-.388.678-1.163.97-1.841.678l-8.04-4.068c-.679-.388-.97-1.26-.582-1.938"></path><path fill="#FFF" d="M200.628 161.684c.388-.775 1.26-1.065 2.035-.678l8.04 4.069c.775.388 1.066 1.26.678 2.034-.387.775-1.26 1.066-2.034.678l-8.04-4.068c-.776-.29-1.066-1.26-.679-2.035m10.463 5.328c.29-.678.096-1.453-.582-1.743l-8.04-4.069c-.582-.29-1.356 0-1.744.581-.29.678-.097 1.453.581 1.744l8.04 4.069c.679.29 1.454.097 1.745-.582"></path><path fill="#F3F3F3" d="M186.484 163.622c.485-.678 1.26-.872 1.938-.388l16.856 11.238c.678.387.775 1.26.388 1.937-.485.679-1.26.872-1.938.388l-16.856-11.238c-.678-.484-.872-1.356-.388-1.937"></path><path fill="#FFF" d="M186.388 163.525c.484-.678 1.453-.872 2.13-.484l16.857 11.237c.678.484.872 1.356.387 2.131-.484.679-1.453.872-2.13.485l-16.857-11.238c-.775-.484-.872-1.453-.388-2.131m19.084 12.787c.387-.58.29-1.453-.29-1.84l-16.857-11.238c-.581-.387-1.356-.193-1.744.388s-.29 1.453.29 1.84l16.857 11.238c.581.388 1.356.194 1.744-.387"></path><path fill="#F3F3F3" d="M190.069 177.669c.484-.582 1.356-.775 1.937-.29l7.072 5.521c.581.484.678 1.356.194 1.938-.484.58-1.356.775-1.938.29l-7.072-5.522c-.58-.484-.678-1.356-.193-1.937"></path><path fill="#FFF" d="M189.972 177.572c.484-.678 1.453-.775 2.131-.29l7.072 5.521c.678.484.775 1.453.29 2.131-.484.679-1.453.775-2.13.291l-7.073-5.522c-.678-.484-.774-1.453-.29-2.131m9.3 7.266c.484-.582.387-1.357-.194-1.841l-7.072-5.522c-.581-.387-1.356-.29-1.84.29-.485.582-.388 1.357.193 1.841l7.072 5.522c.581.388 1.356.29 1.84-.29"></path><path fill="#F3F3F3" d="M175.634 176.7c.582-.581 1.454-.581 1.938 0l14.337 14.24c.582.582.485 1.454 0 1.938-.58.581-1.453.581-1.937 0l-14.338-14.24c-.484-.485-.484-1.454 0-1.938"></path><path fill="#FFF" d="M175.634 176.603a1.52 1.52 0 0 1 2.132 0l14.337 14.24a1.52 1.52 0 0 1 0 2.132 1.52 1.52 0 0 1-2.131 0l-14.338-14.24c-.678-.582-.678-1.55 0-2.132m16.275 16.178c.485-.484.485-1.356 0-1.84L177.572 176.7c-.484-.484-1.356-.484-1.84 0-.485.484-.485 1.356 0 1.84l14.337 14.241c.484.582 1.26.582 1.84 0"></path><path fill="#F3F3F3" d="M176.506 191.134c.582-.484 1.453-.484 1.938.097l5.91 6.781c.483.582.387 1.454-.195 1.938-.58.484-1.453.484-1.937-.097l-5.91-6.781c-.484-.484-.387-1.356.194-1.938"></path><path fill="#FFF" d="M176.41 191.134c.678-.58 1.55-.484 2.13.097l5.91 6.781c.581.582.484 1.55-.194 2.132-.678.581-1.55.484-2.131-.097l-5.91-6.781c-.484-.678-.484-1.647.194-2.132m7.75 8.816c.58-.484.58-1.26.193-1.84l-5.91-6.782c-.484-.484-1.259-.581-1.84-.097-.581.485-.581 1.26-.194 1.84l5.91 6.782c.484.581 1.26.581 1.84.097"></path><path fill="#F3F3F3" d="M162.556 187.453c.678-.484 1.55-.29 1.938.388L175.73 204.6c.388.678.194 1.55-.387 1.938-.678.484-1.55.29-1.938-.388l-11.237-16.76c-.388-.677-.194-1.55.387-1.937"></path><path fill="#FFF" d="M162.556 187.356c.678-.484 1.647-.29 2.131.388l11.238 16.76c.484.677.29 1.646-.484 2.13-.679.485-1.647.291-2.132-.387l-11.237-16.76c-.484-.774-.29-1.646.484-2.13m12.788 19.085c.581-.388.775-1.163.387-1.744l-11.237-16.76c-.388-.58-1.163-.678-1.84-.29-.582.387-.776 1.162-.388 1.744l11.237 16.759c.388.484 1.26.678 1.84.29"></path><path fill="#F3F3F3" d="M160.522 201.79c.678-.387 1.55-.193 1.937.485l4.457 7.847c.387.678.096 1.55-.582 1.937-.678.388-1.55.194-1.937-.484l-4.456-7.847c-.291-.678-.097-1.55.58-1.937"></path><path fill="#FFF" d="M160.522 201.694c.775-.388 1.647-.194 2.034.484l4.456 7.847c.388.678.194 1.647-.58 2.034-.776.388-1.648.194-2.035-.484l-4.456-7.847c-.388-.678-.194-1.55.58-2.034m5.812 10.269c.582-.388.872-1.163.485-1.744l-4.456-7.847c-.388-.581-1.163-.775-1.744-.485-.582.388-.872 1.163-.485 1.744l4.457 7.847c.29.581 1.162.872 1.743.484"></path><path fill="#F3F3F3" d="M147.638 195.397c.774-.29 1.55 0 1.84.678l7.847 18.697c.29.678-.097 1.55-.775 1.84s-1.55 0-1.84-.678l-7.847-18.696c-.291-.679.096-1.55.774-1.841"></path><path fill="#FFF" d="M147.638 195.3c.774-.29 1.646 0 2.034.775l7.847 18.697a1.505 1.505 0 0 1-.872 1.937c-.775.291-1.647 0-2.034-.775l-7.847-18.696c-.291-.679.097-1.55.871-1.938m8.815 21.216c.678-.291.969-1.066.678-1.647l-7.847-18.697c-.29-.678-1.065-.969-1.743-.678s-.97 1.065-.678 1.647l7.846 18.697c.388.678 1.066.968 1.744.678"></path><path fill="#F3F3F3" d="M142.89 209.153c.776-.29 1.55.097 1.841.872l2.81 8.525c.29.678-.194 1.55-.872 1.744-.775.29-1.55-.097-1.84-.872l-2.81-8.525c-.29-.678.097-1.453.872-1.744"></path><path fill="#FFF" d="M142.794 209.056a1.505 1.505 0 0 1 1.937.872l2.81 8.525c.29.775-.194 1.647-.97 1.938a1.505 1.505 0 0 1-1.937-.872l-2.809-8.525c-.194-.775.194-1.647.969-1.938m3.778 11.14c.678-.193 1.065-.968.872-1.646l-2.81-8.525c-.193-.678-.968-.969-1.646-.775-.679.194-1.066.969-.872 1.647l2.809 8.525a1.223 1.223 0 0 0 1.647.775"></path><path fill="#F3F3F3" d="M131.46 200.338c.774-.194 1.55.29 1.646 1.065l4.069 19.86c.194.774-.388 1.453-1.163 1.646-.774.194-1.55-.29-1.646-1.065l-4.07-19.86c-.096-.678.388-1.453 1.163-1.647"></path><path fill="#FFF" d="M131.46 200.24c.871-.193 1.646.388 1.84 1.163l4.069 19.86c.194.774-.388 1.646-1.163 1.743-.872.194-1.647-.387-1.84-1.162l-4.07-19.86c-.193-.775.292-1.55 1.163-1.743m4.552 22.572c.679-.096 1.163-.775 1.066-1.55l-4.069-19.859c-.096-.678-.871-1.162-1.55-.969-.678.097-1.162.775-1.065 1.55l4.069 19.86c.193.678.871 1.065 1.55.969"></path><path fill="#F3F3F3" d="M124.097 212.931c.775-.097 1.453.388 1.647 1.163l1.162 8.912c.097.775-.484 1.453-1.26 1.55-.774.097-1.452-.387-1.646-1.162l-1.162-8.913c-.097-.775.484-1.453 1.259-1.55"></path><path fill="#FFF" d="M124.097 212.834c.872-.096 1.647.485 1.744 1.26l1.162 8.912c.097.775-.484 1.55-1.356 1.647s-1.647-.484-1.744-1.26l-1.162-8.912c-.097-.775.484-1.55 1.356-1.647m1.453 11.625c.678-.096 1.26-.775 1.163-1.453l-1.163-8.912c-.097-.678-.775-1.163-1.453-1.066s-1.26.775-1.163 1.453l1.163 8.913c.097.678.775 1.162 1.453 1.065"></path><path fill="#F3F3F3" d="M114.119 202.081c.775 0 1.453.582 1.453 1.357v20.246c0 .775-.678 1.357-1.453 1.357s-1.453-.582-1.453-1.357v-20.246c.097-.775.678-1.357 1.453-1.357"></path><path fill="#FFF" d="M114.119 201.984c.872 0 1.55.678 1.55 1.453v20.247c0 .775-.678 1.453-1.55 1.453s-1.55-.678-1.55-1.453v-20.246c0-.775.775-1.454 1.55-1.454m0 22.96c.678 0 1.356-.581 1.356-1.26v-20.246c0-.679-.581-1.26-1.356-1.26-.678 0-1.356.581-1.356 1.26v20.246c.096.679.678 1.26 1.356 1.26"></path><path fill="#F3F3F3" d="M104.431 212.931c.775.097 1.356.678 1.356 1.453l-.678 9.01c-.096.775-.775 1.356-1.55 1.26-.775-.098-1.356-.679-1.356-1.454l.678-9.01c.097-.774.775-1.356 1.55-1.259"></path><path fill="#FFF" d="M104.431 212.834c.872.097 1.453.775 1.453 1.55l-.678 9.01c-.097.775-.775 1.453-1.647 1.356-.871-.097-1.453-.775-1.453-1.55l.678-9.01c.097-.871.775-1.452 1.647-1.356m-.872 11.722c.678 0 1.357-.484 1.357-1.162l.678-9.01c0-.678-.485-1.259-1.26-1.356-.678 0-1.356.484-1.356 1.163l-.678 9.009c0 .678.581 1.26 1.26 1.356"></path><path fill="#F3F3F3" d="M97.166 200.338c.775.193 1.259.871 1.162 1.646l-3.972 19.86c-.194.775-.872 1.26-1.647 1.065-.775-.193-1.259-.871-1.162-1.647l3.972-19.859c.097-.678.872-1.162 1.647-1.065"></path><path fill="#FFF" d="M97.166 200.24c.871.194 1.356.97 1.259 1.744l-3.972 19.86c-.194.775-.969 1.356-1.84 1.162s-1.357-.969-1.26-1.744l3.972-19.859c.194-.775.969-1.26 1.84-1.162m-4.553 22.572c.678.097 1.356-.29 1.55-.968l3.971-19.86c.097-.678-.29-1.356-1.065-1.55-.678-.096-1.356.291-1.55.97l-3.972 19.858c-.097.775.387 1.357 1.066 1.55"></path><path fill="#F3F3F3" d="M85.54 209.056c.776.194 1.26.969 1.066 1.744l-2.422 8.719c-.193.775-.968 1.162-1.743.969a1.444 1.444 0 0 1-1.066-1.744l2.422-8.719c.194-.775.969-1.162 1.744-.969"></path><path fill="#FFF" d="M85.54 208.96c.776.193 1.357 1.065 1.066 1.84l-2.422 8.719c-.193.775-1.065 1.26-1.84 1.065-.775-.193-1.356-1.065-1.066-1.84l2.422-8.719c.194-.775.969-1.26 1.84-1.066m-3.196 11.334c.678.194 1.453-.194 1.647-.872l2.421-8.719c.194-.678-.193-1.356-.968-1.55-.678-.194-1.453.194-1.647.872l-2.422 8.719c-.097.678.29 1.356.969 1.55"></path><path fill="#F3F3F3" d="M80.794 195.397c.775.29 1.065 1.162.775 1.84l-7.75 18.697c-.29.679-1.163 1.066-1.84.679-.679-.388-1.067-1.163-.776-1.841l7.75-18.697c.29-.678 1.163-1.066 1.84-.678"></path><path fill="#FFF" d="M80.794 195.3a1.505 1.505 0 0 1 .872 1.938l-7.75 18.696c-.291.775-1.163 1.066-2.035.775a1.505 1.505 0 0 1-.872-1.937l7.75-18.697c.388-.775 1.26-1.162 2.035-.775m-8.816 21.216c.678.29 1.453 0 1.744-.678l7.75-18.697c.29-.678-.097-1.357-.775-1.647s-1.453 0-1.744.678l-7.75 18.697c-.194.581.097 1.356.775 1.647"></path><path fill="#F3F3F3" d="M67.716 201.597c.678.387.968 1.162.678 1.84l-4.069 8.041c-.388.678-1.163.969-1.937.581-.679-.387-.97-1.162-.679-1.84l4.07-8.04c.387-.679 1.162-.97 1.937-.582"></path><path fill="#FFF" d="M67.716 201.5c.775.387 1.065 1.26.678 2.034l-4.069 8.041c-.388.775-1.26 1.066-2.034.678-.775-.387-1.066-1.26-.678-2.034l4.068-8.04c.388-.776 1.26-1.066 2.035-.679m-5.328 10.56c.678.29 1.453.096 1.743-.582l4.069-8.04c.29-.582 0-1.357-.581-1.744-.678-.29-1.453-.097-1.744.581l-4.069 8.04c-.29.582 0 1.357.582 1.744"></path><path fill="#F3F3F3" d="M65.778 187.26c.678.484.872 1.356.388 1.937l-11.238 16.76c-.387.677-1.26.774-1.937.387-.678-.485-.872-1.356-.388-1.938l11.238-16.76c.387-.677 1.259-.871 1.937-.387"></path><path fill="#FFF" d="M65.778 187.163c.678.484.872 1.453.484 2.13l-11.237 16.76c-.484.678-1.356.872-2.131.388-.678-.485-.872-1.453-.485-2.132l11.238-16.759c.484-.678 1.453-.872 2.131-.388m-12.787 19.084c.58.387 1.453.29 1.84-.29l11.238-16.76c.387-.581.194-1.356-.388-1.744-.581-.387-1.453-.29-1.84.29l-11.238 16.663c-.387.582-.194 1.453.388 1.84"></path><path fill="#F3F3F3" d="M51.634 190.844c.582.484.775 1.356.291 1.937l-5.619 7.072c-.484.581-1.356.678-1.937.194s-.775-1.356-.29-1.938l5.618-7.072c.484-.58 1.356-.678 1.937-.193"></path><path fill="#FFF" d="M51.731 190.747c.678.484.775 1.453.29 2.131l-5.618 7.072c-.484.678-1.453.775-2.131.194-.678-.485-.775-1.453-.29-2.132l5.618-7.071c.484-.679 1.453-.775 2.131-.194m-7.265 9.203c.58.484 1.356.388 1.84-.194l5.619-7.072c.388-.58.29-1.356-.29-1.84-.582-.485-1.357-.388-1.841.194l-5.619 7.071c-.387.582-.29 1.453.29 1.841"></path><path fill="#F3F3F3" d="M52.603 176.313c.581.58.581 1.453 0 1.937l-14.337 14.24c-.582.582-1.453.485-1.938 0-.484-.484-.581-1.453 0-1.937l14.24-14.24c.582-.582 1.454-.582 2.035 0"></path><path fill="#FFF" d="M52.7 176.216a1.52 1.52 0 0 1 0 2.13l-14.338 14.242a1.52 1.52 0 0 1-2.13 0 1.52 1.52 0 0 1 0-2.132l14.337-14.24a1.52 1.52 0 0 1 2.131 0M36.328 192.49c.484.484 1.356.484 1.84 0l14.338-14.241c.485-.484.485-1.356 0-1.84-.484-.485-1.356-.485-1.84 0l-14.338 14.24c-.484.484-.484 1.26 0 1.84"></path><path fill="#F3F3F3" d="M38.072 177.088c.484.58.484 1.453-.097 1.937l-6.878 5.813c-.581.484-1.453.387-1.938-.194-.484-.582-.484-1.453.097-1.938l6.878-5.812c.582-.485 1.453-.388 1.938.194"></path><path fill="#FFF" d="M38.169 176.99c.581.679.484 1.647-.097 2.132l-6.878 5.812c-.581.582-1.55.485-2.131-.193-.582-.679-.485-1.647.096-2.132l6.879-5.812c.58-.581 1.55-.484 2.13.194m-8.913 7.654c.485.581 1.26.581 1.84.194l6.879-5.813c.484-.484.581-1.26.097-1.84-.485-.582-1.26-.582-1.84-.194l-6.879 5.812c-.581.484-.581 1.26-.097 1.84"></path><path fill="#F3F3F3" d="M41.947 163.138c.484.678.29 1.55-.388 1.937l-16.856 11.238c-.678.387-1.55.193-1.937-.388-.485-.678-.291-1.55.387-1.937L40.01 162.75c.582-.387 1.453-.194 1.938.387"></path><path fill="#FFF" d="M42.044 163.138c.484.678.29 1.646-.388 2.13L24.8 176.507c-.678.485-1.647.29-2.131-.484-.485-.678-.29-1.647.387-2.131l16.857-11.238c.678-.484 1.646-.29 2.13.484m-19.181 12.69c.387.581 1.162.775 1.743.388l16.856-11.238c.582-.387.775-1.162.291-1.84-.387-.582-1.162-.775-1.744-.388l-16.856 11.238c-.581.484-.678 1.259-.29 1.84"></path><path fill="#F3F3F3" d="M27.513 161.103c.387.678.193 1.55-.485 1.938l-7.847 4.456c-.678.387-1.55.097-1.937-.581-.388-.678-.194-1.55.484-1.938l7.847-4.456c.678-.388 1.55-.097 1.938.581"></path><path fill="#FFF" d="M27.61 161.006c.387.775.193 1.647-.485 2.035l-7.847 4.456c-.678.387-1.647.097-2.034-.581-.388-.775-.194-1.647.484-2.035l7.847-4.456c.678-.388 1.647-.097 2.034.581m-10.27 5.813c.388.678 1.163.872 1.744.484l7.847-4.456c.581-.388.775-1.163.485-1.744-.388-.678-1.163-.872-1.744-.484l-7.847 4.456c-.581.29-.775 1.066-.484 1.744"></path><path fill="#F3F3F3" d="M34.003 148.219c.29.775 0 1.55-.775 1.84l-18.697 7.75c-.678.291-1.55-.096-1.84-.775-.291-.775 0-1.55.775-1.84l18.697-7.75c.678-.29 1.55 0 1.84.775"></path><path fill="#FFF" d="M34.1 148.122c.29.775 0 1.647-.775 2.034l-18.697 7.75a1.505 1.505 0 0 1-1.937-.872c-.291-.775 0-1.647.775-2.034l18.697-7.75a1.505 1.505 0 0 1 1.937.872m-21.216 8.815c.291.679 1.066.97 1.647.775l18.697-7.75c.678-.29.969-1.065.678-1.743s-1.065-.969-1.647-.775l-18.696 7.75c-.679.29-.97 1.065-.679 1.744"></path><path fill="#F3F3F3" d="M20.344 143.375c.29.775-.097 1.55-.872 1.84l-8.525 2.81c-.678.29-1.55-.194-1.744-.872-.29-.775.097-1.55.872-1.84l8.525-2.81c.678-.29 1.453.097 1.744.872"></path><path fill="#FFF" d="M20.44 143.278c.291.775-.096 1.647-.968 1.938l-8.525 2.809c-.775.29-1.647-.194-1.938-.969s.097-1.647.97-1.937l8.524-2.81c.775-.193 1.647.194 1.938.97M9.204 146.96c.194.678.969 1.066 1.647.872l8.525-2.81c.678-.193.969-.968.775-1.646s-.969-1.066-1.647-.872l-8.525 2.81c-.678.29-.969.968-.775 1.646"></path><path fill="#F3F3F3" d="M29.063 131.847c.193.775-.291 1.55-1.066 1.647l-19.86 3.875c-.775.194-1.453-.388-1.646-1.163-.194-.775.29-1.55 1.065-1.647l19.86-3.875c.775-.096 1.55.388 1.646 1.163"></path><path fill="#FFF" d="M29.256 131.847c.194.872-.387 1.647-1.162 1.84l-19.86 3.875c-.775.194-1.55-.387-1.743-1.259s.387-1.647 1.162-1.84l19.86-3.875c.774-.194 1.55.387 1.743 1.259m-22.572 4.36c.097.677.775 1.162 1.453 1.065l19.86-3.875c.678-.097 1.162-.872.969-1.55-.097-.678-.775-1.163-1.454-1.066l-19.859 3.875c-.678.194-1.162.872-.969 1.55"></path><path fill="#F3F3F3" d="M16.663 124.388c.096.774-.388 1.453-1.163 1.55l-8.912 1.065c-.776.097-1.454-.484-1.55-1.26-.097-.774.387-1.452 1.162-1.55l8.913-1.065c.678-.097 1.453.484 1.55 1.26"></path><path fill="#FFF" d="M16.76 124.388c.096.871-.485 1.646-1.26 1.743l-8.912 1.066c-.776.097-1.55-.484-1.647-1.356s.484-1.647 1.259-1.744l8.913-1.066c.774-.097 1.55.485 1.646 1.356m-11.723 1.356c.097.678.776 1.26 1.454 1.162l8.912-1.065c.678-.097 1.163-.775 1.066-1.453-.097-.679-.775-1.26-1.453-1.163l-8.913 1.066c-.678.097-1.162.775-1.065 1.453"></path><path fill="#F3F3F3" d="M27.513 114.99c0 .776-.582 1.454-1.357 1.454H5.91c-.775 0-1.356-.678-1.356-1.453s.581-1.454 1.356-1.454h20.247c.775 0 1.357.679 1.357 1.454"></path><path fill="#FFF" d="M27.61 114.99c0 .873-.679 1.55-1.454 1.55H5.91c-.775 0-1.453-.678-1.453-1.55 0-.871.678-1.55 1.453-1.55h20.247c.775 0 1.453.679 1.453 1.55m-22.96-.096c0 .678.581 1.356 1.26 1.356h20.246c.678 0 1.26-.581 1.26-1.356 0-.678-.582-1.357-1.26-1.357H5.91c-.678.097-1.259.679-1.259 1.357"></path><path fill="#E2E2E2" d="M16.76 105.206c-.098.775-.679 1.356-1.454 1.356l-9.01-.678c-.774-.097-1.355-.775-1.259-1.55s.679-1.356 1.454-1.356l9.009.678c.678.097 1.26.775 1.26 1.55"></path><path fill="#FFF" d="M16.856 105.206c-.097.872-.775 1.453-1.55 1.453l-9.01-.678c-.774-.097-1.452-.775-1.355-1.647.096-.871.775-1.453 1.55-1.453l9.009.678c.775.097 1.356.872 1.356 1.647m-11.819-.872c-.096.678.485 1.357 1.163 1.357l9.01.678c.677 0 1.259-.485 1.356-1.26.097-.678-.485-1.356-1.163-1.356l-9.01-.678c-.677 0-1.259.581-1.356 1.26"></path><path fill="#F3F3F3" d="M29.256 98.134c-.194.775-.872 1.26-1.647 1.163L7.75 95.228c-.775-.194-1.26-.872-1.066-1.647s.872-1.26 1.647-1.162l19.86 3.972c.678.193 1.162.968 1.065 1.743"></path><path fill="#FFF" d="M29.353 98.134c-.194.872-.969 1.357-1.744 1.26L7.75 95.422c-.775-.194-1.356-.969-1.162-1.84.193-.873.968-1.357 1.743-1.26l19.86 3.972c.775.194 1.259.969 1.162 1.84M6.781 93.581c-.097.678.29 1.356.969 1.55l19.86 3.972c.678.097 1.356-.29 1.55-1.065.096-.679-.291-1.357-.97-1.55L8.332 92.516c-.775-.097-1.356.387-1.55 1.065"></path><path fill="#F3F3F3" d="M20.538 86.51a1.444 1.444 0 0 1-1.744 1.065l-8.719-2.422c-.775-.194-1.162-.969-.969-1.744a1.444 1.444 0 0 1 1.744-1.065l8.719 2.422c.775.193 1.162.968.969 1.743"></path><path fill="#FFF" d="M20.634 86.51c-.193.774-1.065 1.356-1.84 1.065l-8.719-2.422c-.775-.194-1.26-1.065-1.066-1.84s1.066-1.357 1.841-1.066l8.719 2.422c.775.194 1.26.969 1.065 1.84M9.3 83.311c-.194.679.194 1.454.872 1.647l8.719 2.422c.678.194 1.356-.194 1.55-.969.193-.678-.194-1.453-.872-1.646l-8.719-2.422c-.678-.097-1.356.29-1.55.969"></path><path fill="#F3F3F3" d="M34.197 81.86c-.29.774-1.163 1.065-1.84.774l-18.698-7.75c-.678-.29-1.065-1.162-.775-1.84.291-.775 1.163-1.066 1.841-.775l18.697 7.75c.775.29 1.066 1.162.775 1.84"></path><path fill="#FFF" d="M34.294 81.956a1.505 1.505 0 0 1-1.938.872l-18.697-7.75c-.775-.29-1.065-1.162-.775-2.034a1.505 1.505 0 0 1 1.938-.872l18.697 7.75c.775.387 1.065 1.26.775 2.034m-21.216-8.815c-.29.678 0 1.453.678 1.743l18.697 7.75c.678.291 1.356-.097 1.647-.775s0-1.453-.678-1.743l-18.697-7.75c-.678-.194-1.453.097-1.647.775"></path><path fill="#F3F3F3" d="M27.9 68.781c-.387.678-1.162.969-1.84.678l-8.041-4.068c-.678-.291-.969-1.163-.581-1.938.387-.678 1.162-.969 1.84-.678l8.04 4.069c.679.387.97 1.26.582 1.937"></path><path fill="#FFF" d="M27.997 68.878c-.388.775-1.26 1.066-2.035.678l-8.04-4.068c-.775-.388-1.066-1.26-.678-2.035.387-.775 1.26-1.065 2.034-.678l8.04 4.069c.776.29 1.066 1.26.679 2.034M17.534 63.55c-.29.678-.096 1.453.582 1.744l8.04 4.069c.582.29 1.357 0 1.744-.582.29-.678.097-1.453-.581-1.744L19.18 62.97c-.581-.29-1.356-.097-1.647.581"></path><path fill="#F3F3F3" d="M42.14 66.94c-.484.679-1.259.873-1.937.388l-16.76-11.14c-.677-.388-.774-1.26-.387-1.938.388-.678 1.26-.872 1.938-.388L41.85 65.1c.581.388.775 1.26.29 1.84"></path><path fill="#FFF" d="M42.238 67.038c-.485.678-1.454.871-2.132.484l-16.76-11.238c-.677-.484-.871-1.356-.387-2.13.485-.679 1.454-.873 2.132-.485L41.85 64.906c.775.485.872 1.453.387 2.131M23.152 54.25c-.387.581-.29 1.453.29 1.84L40.3 67.329c.581.388 1.356.194 1.744-.387.387-.582.29-1.454-.29-1.841L24.896 53.863c-.581-.388-1.356-.194-1.744.387"></path><path fill="#F3F3F3" d="M38.556 52.894c-.484.581-1.356.775-1.937.29l-7.072-5.521c-.581-.485-.678-1.357-.194-1.938s1.356-.775 1.938-.29l7.071 5.521c.582.485.679 1.356.194 1.938"></path><path fill="#FFF" d="M38.653 52.99c-.484.679-1.453.776-2.131.291L29.45 47.76c-.678-.484-.775-1.453-.29-2.13.484-.679 1.453-.776 2.13-.291l7.072 5.521c.679.485.776 1.453.291 2.132m-9.3-7.265c-.484.581-.387 1.356.194 1.84l7.072 5.523c.581.387 1.356.29 1.84-.291.485-.581.388-1.356-.193-1.84l-7.072-5.523c-.581-.387-1.357-.29-1.84.291"></path><path fill="#F3F3F3" d="M52.99 53.863c-.58.58-1.453.58-1.937 0L36.62 39.622c-.581-.581-.485-1.453 0-1.938.581-.58 1.453-.58 1.937 0l14.338 14.241c.581.484.581 1.453.097 1.938"></path><path fill="#FFF" d="M52.99 53.96a1.52 1.52 0 0 1-2.13 0L36.521 39.718a1.52 1.52 0 0 1 0-2.132 1.52 1.52 0 0 1 2.131 0L52.99 51.827c.678.581.678 1.55 0 2.131M36.717 37.78c-.485.485-.485 1.357 0 1.84l14.337 14.241c.485.485 1.356.485 1.84 0 .485-.484.485-1.356 0-1.84L38.557 37.684c-.484-.484-1.26-.484-1.84.097"></path><path fill="#F3F3F3" d="M52.119 39.428c-.581.485-1.453.485-1.938-.097l-5.91-6.781c-.483-.581-.387-1.453.195-1.937.58-.485 1.453-.485 1.937.096l5.91 6.782c.484.484.387 1.356-.194 1.937"></path><path fill="#FFF" d="M52.216 39.428c-.678.581-1.55.485-2.132-.097l-5.909-6.781c-.581-.581-.484-1.55.194-2.131.678-.582 1.55-.485 2.131.097l5.91 6.78c.484.679.484 1.648-.194 2.132m-7.75-8.815c-.582.484-.582 1.259-.194 1.84l5.91 6.781c.484.485 1.259.582 1.84.097.581-.484.581-1.26.194-1.84l-5.91-6.782c-.484-.58-1.26-.58-1.84-.096"></path><path fill="#F3F3F3" d="M66.069 43.11c-.678.484-1.55.29-1.938-.388l-11.334-16.76c-.388-.678-.194-1.55.387-1.937.678-.484 1.55-.29 1.938.388l11.237 16.759c.485.678.291 1.55-.29 1.937"></path><path fill="#FFF" d="M66.069 43.206c-.678.485-1.647.29-2.132-.387L52.7 26.059c-.484-.678-.29-1.646.484-2.13.678-.485 1.647-.291 2.132.387l11.237 16.759c.484.775.29 1.647-.484 2.131M53.28 24.122c-.581.387-.775 1.162-.387 1.744L64.13 42.625c.388.581 1.163.678 1.84.29.582-.387.776-1.162.388-1.743L55.122 24.509c-.388-.58-1.26-.775-1.84-.387"></path><path fill="#F3F3F3" d="M68.103 28.772c-.678.387-1.55.194-1.937-.484l-4.457-7.847c-.387-.678-.097-1.55.582-1.938s1.55-.194 1.937.485l4.456 7.846c.291.678.097 1.55-.58 1.938"></path><path fill="#FFF" d="M68.103 28.869c-.775.387-1.647.194-2.034-.485l-4.457-7.846c-.387-.679-.193-1.647.582-2.035.775-.387 1.647-.194 2.034.485l4.456 7.846c.388.678.194 1.55-.58 2.035M62.291 18.6c-.582.387-.872 1.162-.485 1.744l4.457 7.847c.387.58 1.162.775 1.743.484.582-.387.872-1.163.485-1.744l-4.457-7.847c-.29-.58-1.162-.872-1.743-.484"></path><path fill="#F3F3F3" d="M80.988 35.166c-.775.29-1.55 0-1.841-.678L71.3 15.79c-.29-.678.097-1.55.775-1.841.775-.29 1.55 0 1.84.678l7.847 18.697c.291.678-.096 1.55-.775 1.84"></path><path fill="#FFF" d="M80.988 35.263c-.775.29-1.647 0-2.035-.776l-7.847-18.696a1.505 1.505 0 0 1 .872-1.938c.775-.29 1.647 0 2.035.775l7.846 18.697c.291.678-.096 1.55-.871 1.938m-8.816-21.216c-.678.29-.969 1.066-.678 1.647L79.34 34.39c.29.678 1.065.968 1.743.678s.97-1.066.678-1.647l-7.846-18.697c-.388-.678-1.066-.969-1.744-.678"></path><path fill="#F3F3F3" d="M85.734 21.41c-.775.29-1.55-.098-1.84-.872l-2.81-8.526c-.29-.678.194-1.55.872-1.743s1.55.097 1.84.872l2.81 8.525c.29.678-.097 1.453-.872 1.743"></path><path fill="#FFF" d="M85.831 21.506a1.505 1.505 0 0 1-1.937-.872l-2.81-8.525c-.29-.775.194-1.646.97-1.937a1.505 1.505 0 0 1 1.937.872l2.809 8.525c.194.775-.194 1.647-.969 1.937m-3.778-11.14c-.678.193-1.065.968-.872 1.646l2.81 8.526c.193.678.968.968 1.647.774.678-.193 1.065-.968.871-1.646L83.7 11.14a1.223 1.223 0 0 0-1.647-.775"></path><path fill="#F3F3F3" d="M97.166 30.225c-.775.194-1.55-.29-1.647-1.066L91.45 9.3c-.194-.775.388-1.453 1.162-1.647.776-.194 1.55.29 1.647 1.066l4.07 19.86c.096.677-.388 1.452-1.163 1.646"></path><path fill="#FFF" d="M97.166 30.322c-.872.194-1.647-.388-1.841-1.163L91.256 9.3c-.194-.775.388-1.647 1.163-1.744.872-.194 1.647.388 1.84 1.163l4.07 19.86c.193.774-.291 1.55-1.163 1.743M92.613 7.75c-.679.097-1.163.775-1.066 1.55l4.069 19.86c.097.677.871 1.162 1.55.968.678-.097 1.162-.775 1.065-1.55l-4.068-19.86c-.194-.677-.872-1.065-1.55-.968"></path><path fill="#F3F3F3" d="M104.528 17.631c-.775.097-1.453-.387-1.647-1.162l-1.162-8.913c-.097-.775.484-1.453 1.26-1.55.774-.097 1.452.388 1.646 1.163l1.162 8.912c.097.775-.484 1.453-1.259 1.55"></path><path fill="#FFF" d="M104.528 17.728c-.872.097-1.647-.484-1.744-1.26l-1.162-8.912c-.097-.775.484-1.55 1.356-1.647s1.647.485 1.744 1.26l1.162 8.912c.097.775-.484 1.55-1.356 1.647m-1.453-11.625c-.678.097-1.26.775-1.163 1.453l1.163 8.913c.097.678.775 1.162 1.453 1.065s1.26-.775 1.163-1.453l-1.163-8.912c-.097-.678-.775-1.163-1.453-1.066"></path><circle cx="114.991" cy="115.184" r="114.7" fill="url(#safari-gui-asset-d)" fill-opacity=".2"></circle></g><path fill="#000" fill-opacity=".05" d="M204.116 51.15 111.6 110.438h-.097v.096l-.097.097L53.67 205.86l84.862-68.297.097-.096v-.097z" filter="url(#safari-gui-asset-e)"></path><path fill="#CD151E" d="m202.372 45.628-91.45 65.003 27.125 26.932z"></path><path fill="#FA5153" d="m111.019 110.438 13.66 13.465 77.693-78.275z"></path><path fill="#ACACAC" d="m111.019 110.438 27.125 26.93-91.45 65.004z"></path><path fill="#EEE" d="m46.694 202.372 77.984-78.469-13.66-13.466z"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  M as _
};
