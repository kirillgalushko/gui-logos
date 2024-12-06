import { defineComponent as p, computed as i, openBlock as r, createElementBlock as a, normalizeStyle as f, createStaticVNode as l } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoStigg2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, o) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "252",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 252",
      style: f(e.value)
    }, o[0] || (o[0] = [
      l('<defs><radialGradient id="stigg-2-gui-asset-a" cx="-100.114%" cy="-37.2%" r="279.115%" fx="-100.114%" fy="-37.2%" gradientTransform="matrix(1 0 0 .66782 0 -.124)"><stop offset="0%" stop-color="#FFBE6E"></stop><stop offset="31.3%" stop-color="#FA9B68"></stop><stop offset="100%" stop-color="#F0465A"></stop></radialGradient><radialGradient id="stigg-2-gui-asset-b" cx="98.183%" cy="107.6%" r="331.879%" fx="98.183%" fy="107.6%" gradientTransform="matrix(.64575 0 0 1 .348 0)"><stop offset="0%" stop-color="#FFBE6E"></stop><stop offset="28.2%" stop-color="#FBAB69"></stop><stop offset="84.8%" stop-color="#F27B5D"></stop><stop offset="100%" stop-color="#F06E5A"></stop></radialGradient><linearGradient id="stigg-2-gui-asset-c" x1="-4.9%" x2="77.9%" y1="-41.5%" y2="102%"><stop offset="0%" stop-color="#003EE2"></stop><stop offset="10.8%" stop-color="#1458E6"></stop><stop offset="25.9%" stop-color="#2C77EC"></stop><stop offset="41.8%" stop-color="#3F8EF0"></stop><stop offset="58.7%" stop-color="#4C9FF3"></stop><stop offset="77.1%" stop-color="#54A9F5"></stop><stop offset="100%" stop-color="#57ADF6"></stop></linearGradient><linearGradient id="stigg-2-gui-asset-d" x1="125.2%" x2="-45.7%" y1="50%" y2="50%"><stop offset="0%" stop-color="#003EE2"></stop><stop offset="26.8%" stop-color="#1E64E8"></stop><stop offset="58.8%" stop-color="#3C8BF0"></stop><stop offset="84.4%" stop-color="#4FA4F4"></stop><stop offset="100%" stop-color="#57ADF6"></stop></linearGradient></defs><g><path fill="url(#stigg-2-gui-asset-a)" d="M213.917 16.511q-25.125 27.385-35.248 40.27-9.725 12.379-24.299 35.522l14.626 70.297c5.728.71 27.789 5.597 34.044 5.898 42.6 2.063 50.59-12.992 51.86-13.556.241-1.37 4.952-27.366-7.169-68.215a241.8 241.8 0 0 0-33.814-70.216"></path><path fill="url(#stigg-2-gui-asset-b)" d="m154.355 92.303 59.547-75.792A241.8 241.8 0 0 0 137.68.274c-42.556-2.108-66.7 8.62-67.97 9.18-.248 1.366-7.712 28.14 4.375 69.044 1.725 5.763 6.385 10.605 8.51 16.233z"></path><path fill="url(#stigg-2-gui-asset-c)" d="M69.744 9.458 1.12 96.118c-.252 1.364-4.98 27.282 7.105 68.187a254 254 0 0 0 21.746 51.406l65.765-91.876a253 253 0 0 1-18.887-46.19c-12.087-40.905-7.358-66.82-7.105-68.186"></path><path fill="url(#stigg-2-gui-asset-d)" d="M254.896 154.95c-1.266.564-25.328 11.296-67.933 9.232a253 253 0 0 1-49.372-7.425l-73.687 85.614a253.8 253.8 0 0 0 55.097 8.962c42.6 2.064 66.663-8.665 67.932-9.229z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};