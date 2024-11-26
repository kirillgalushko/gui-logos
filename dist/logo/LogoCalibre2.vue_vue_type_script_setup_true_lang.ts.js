import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoCalibre2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "283",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 283",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#3057F4",
          d: "M28.423 222.25c48.024 29.86 84.58-8.211 84.58-8.211-13.064 46.678-43.093 55.183-43.093 55.183l6.775 13.539h102.63l6.787-13.539s-30.04-8.505-43.093-55.195c0 0 36.544 38.082 84.568 8.212C275.601 192.39 275.092 76.459 128 0-19.092 76.436-19.601 192.38 28.423 222.25"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
