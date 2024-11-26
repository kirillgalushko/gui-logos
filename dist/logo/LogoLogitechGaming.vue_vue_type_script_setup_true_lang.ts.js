import { defineComponent as m, computed as n, openBlock as p, createElementBlock as c, normalizeStyle as g, createElementVNode as i } from "vue";
const l = /* @__PURE__ */ m({
  __name: "LogoLogitechGaming",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (p(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "118pt",
      height: "118pt",
      viewBox: "0 0 118 118",
      style: g(h.value)
    }, t[0] || (t[0] = [
      i("g", { fill: "#00a7e0" }, [
        i("path", { d: "M19.08 18.97C29.93 7.54 45.55.9 61.31.95c0 8.03.01 16.07 0 24.1-10.65.1-21.21 5.22-27.43 13.94-7.85 10.55-8.65 25.73-1.93 37.04 5.83 10.4 17.51 16.86 29.36 16.92.01 8.03.01 16.07 0 24.1-13.89.01-27.7-5.07-38.18-14.19C10.75 92.29 3.14 76.31 2.99 60 2.63 44.9 8.6 29.83 19.08 18.97m42.98 29.59H114c0 17.36.01 34.72-.01 52.07-7.97-.01-15.95-.01-23.92 0-.02-9.35 0-18.71-.01-28.06q-13.995-.015-27.99 0c-.02-8-.01-16.01-.01-24.01" })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};
