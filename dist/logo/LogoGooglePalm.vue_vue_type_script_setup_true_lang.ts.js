import { defineComponent as l, computed as p, openBlock as o, createElementBlock as a, normalizeStyle as c, createStaticVNode as d } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoGooglePalm",
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
    return (m, e) => (o(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "229",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 229",
      style: c(i.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#F9AB00" d="M128 228.542c9.895 0 17.91-8.015 17.91-17.91V55.413h-35.82v155.219c0 9.895 8.015 17.91 17.91 17.91"></path><path fill="#5BB974" d="M199.356 112.053C180.043 92.755 151.193 88.845 128 100.307l76.669 76.67c3.164 3.163 8.612 1.91 9.955-2.344 6.746-21.357 1.657-45.64-15.268-62.58"></path><path fill="#129EAF" d="M56.644 112.053C75.957 92.755 104.807 88.845 128 100.307l-76.669 76.67c-3.164 3.163-8.612 1.91-9.955-2.344-6.746-21.357-1.657-45.64 15.268-62.58"></path><path fill="#AF5CF7" d="M193.67 52.548c-30.507 0-56.402 20-65.67 47.76h121.25c4.97 0 8.283-5.254 6.03-9.687-11.523-22.611-34.776-38.073-61.61-38.073"></path><path fill="#FF8BCB" d="M140.671 20.101C119.09 41.682 114.926 74.114 128 100.307l85.743-85.743c3.523-3.522 2.15-9.582-2.582-11.119-24.148-7.836-51.52-2.313-70.49 16.656"></path><path fill="#FA7B17" d="M115.329 20.101C136.91 41.682 141.074 74.114 128 100.307L42.257 14.564c-3.523-3.522-2.15-9.582 2.582-11.119 24.148-7.836 51.52-2.313 70.49 16.656"></path><path fill="#4285F4" d="M62.33 52.548c30.507 0 56.402 20 65.67 47.76H6.75c-4.97 0-8.283-5.254-6.03-9.687C12.244 68.01 35.497 52.548 62.33 52.548"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
