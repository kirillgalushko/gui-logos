import { defineComponent as l, computed as p, openBlock as c, createElementBlock as o, normalizeStyle as s, createStaticVNode as a } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoDiscourse2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (c(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: s(h.value)
    }, e[0] || (e[0] = [
      a('<g><path fill="#000" d="M129.095 0C59.01 0 0 56.82 0 126.93v131.434l129.07-.124c70.085 0 126.93-59.01 126.93-129.095S199.106 0 129.095 0"></path><path fill="#FFF9AE" d="M130.34 49.13a78.696 78.696 0 0 0-69.165 116.153L46.94 211.077l51.12-11.548c29.274 13.189 63.625 7.265 86.79-14.967s30.497-56.31 18.523-86.1c-11.974-29.792-40.85-49.317-72.958-49.333z"></path><path fill="#00AEEF" d="M191.857 176.492c-22.347 28.19-60.971 37.625-93.798 22.912l-51.12 11.698 52.041-6.148c34.5 20.21 78.672 11.318 102.665-20.666s20.17-76.88-8.886-104.347c21.816 28.603 21.444 68.36-.902 96.55"></path><path fill="#00A94F" d="M187.456 161.546c-19.28 30.369-56.707 43.785-90.89 32.582L46.94 211.102l51.12-11.573c36.408 16.446 79.361 2.983 99.87-31.3 20.508-34.285 12.054-78.497-19.655-102.798 24.681 26.169 28.462 65.747 9.182 96.115"></path><path fill="#F15D22" d="M65.88 167.025c-14.25-34.345-2.508-73.973 28.15-95.012s71.857-17.743 98.779 7.903c-24.934-32.72-70.866-40.708-105.381-18.324s-45.958 67.58-26.253 103.69L46.94 211.078z"></path><path fill="#D0232B" d="M61.175 165.283c-17.679-32.655-10.117-73.225 18.138-97.318s69.51-25.15 98.961-2.534c-28.251-29.748-74.62-32.792-106.518-6.993-31.898 25.798-38.616 71.778-15.434 105.625l-9.358 47.039z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
