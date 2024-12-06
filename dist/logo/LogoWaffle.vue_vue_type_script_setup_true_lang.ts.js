import { defineComponent as o, computed as n, openBlock as h, createElementBlock as s, normalizeStyle as z, createElementVNode as l } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoWaffle",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const e = m, i = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (h(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "347",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 347",
      style: z(i.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#FFD150",
          d: "M184.778 249.117c-.618-21.607-.737-37.872-1.194-48.7L256 128 128.001 0 0 127.999 128.001 256l21.976-21.977c-.015 13.707.123 34.429-.49 64.797-.384 19.091-5.274 22.765-6.79 33.45-1.1 7.76 4.515 14.336 10.086 14.336s10.61-6.454 10.086-14.336c-.505-7.609-4.828-14.185-5.208-33.076-.717-35.571-.843-58.029-1.388-71.466l21.74-21.741c-.005 10.488.089 24.787-.43 42.898-.339 11.824-4.643 14.099-5.978 20.717-.969 4.806 3.975 8.879 8.879 8.879s9.34-3.997 8.88-8.879c-.445-4.713-4.251-8.785-4.586-20.485M168.941 98.98l17.1-17.1 17.099 17.1-17.1 17.099zM174.12 128l-17.1 17.099L139.921 128l17.1-17.1zm-17.099-40.94L139.92 69.959l17.1-17.1 17.101 17.102zm-11.92 11.92-17.1 17.099-17.1-17.099L128 81.88zm-46.12-11.921-17.1-17.099 17.1-17.1 17.099 17.099zM87.06 98.98l-17.1 17.1-17.1-17.1 17.1-17.1zm11.921 11.92 17.1 17.099L98.98 145.1 81.881 128zM87.06 157.02l-17.1 17.099-17.099-17.099 17.099-17.099zm11.92 11.92 17.099 17.1-17.099 17.099-17.099-17.1zm11.92-11.92 17.101-17.101 17.099 17.1L128 174.12zm46.121 11.919 17.1 17.1-17.101 17.101-17.1-17.1zm11.92-11.92 17.099-17.099 17.1 17.1-17.099 17.099zM215.06 145.1l-17.1-17.1 17.1-17.1 17.1 17.1zM145.099 40.939 128 58.039 110.901 40.94l17.1-17.1zM40.94 110.899 58.041 128l-17.1 17.1-17.101-17.101zm69.961 104.16L128 197.96l17.099 17.101-17.098 17.098z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};