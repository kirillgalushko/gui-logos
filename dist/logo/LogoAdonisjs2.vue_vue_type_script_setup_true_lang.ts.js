import { defineComponent as s, computed as l, openBlock as h, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoAdonisjs2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#5A46FF",
          d: "M128 256C24.766 256 0 231.234 0 128S24.766 0 128 0s128 24.766 128 128-24.766 128-128 128M91.764 63.348l-40.147 91.243c-1.825 4.432-3.389 10.166-3.389 15.12 0 22.68 15.902 38.583 38.582 38.583 7.433 0 13.605-1.953 19.88-3.938l.005-.003c6.489-2.053 13.089-4.141 21.305-4.141 8.312 0 14.754 2.07 21.118 4.114l.002.001c6.21 1.995 12.345 3.967 20.069 3.967 22.68 0 38.583-15.903 38.583-38.583 0-4.954-1.565-10.688-3.389-15.12l-40.146-91.243c-6.78-15.38-19.813-23.723-36.237-23.723s-29.458 8.342-36.236 23.723m-3.39 105.581L128 79.251l39.104 89.678c-11.21-5.474-25.287-8.081-39.104-8.081-14.338 0-27.894 2.607-39.625 8.081"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
