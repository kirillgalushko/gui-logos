import { defineComponent as o, computed as p, openBlock as l, createElementBlock as a, normalizeStyle as d, createStaticVNode as c } from "vue";
const r = /* @__PURE__ */ o({
  __name: "LogoMobx",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (l(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: d(i.value)
    }, e[0] || (e[0] = [
      c('<g><path fill="#EA6618" d="M256 236.394V19.607c0-8.894-5.923-16.4-14.037-18.8l-9.215 5.514-102.265 109.037-3.206 10.021-1.873 9.62 31.89 119.18 4.933 1.82h74.167c10.828 0 19.606-8.777 19.606-19.605"></path><path fill="#d65813" d="M0 19.606v216.787c0 6.705 3.367 12.62 8.5 16.155l6.287-3.01 108.246-115.894 4.244-8.265.159-7.99L97.976 5.306 93.513 0H19.606C8.778 0 0 8.778 0 19.606"></path><path fill="#e05e11" d="M127.277 125.38 241.963.806a19.6 19.6 0 0 0-5.57-.807H93.515z"></path><path fill="#de5c16" d="M19.606 256h142.622l-34.951-130.621L8.499 252.549A19.5 19.5 0 0 0 19.606 256"></path><path fill="#FFF" d="M94.918 97.03h14.225c5.668 21.386 12.119 40.152 19.316 57.085 8.152-19.05 14.127-37.83 19.185-57.086h13.442c-6.02 23.926-15.868 48.04-27.132 72.93h-11.89c-10.82-23.586-20.03-47.837-27.146-72.93m-46.92-37.055h31.63v135.637h-31.77v-10.456H67.33V70.152H47.998zm160.169 10.177h-19.332v115.004h19.47v10.456h-31.769V59.975h31.63z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
