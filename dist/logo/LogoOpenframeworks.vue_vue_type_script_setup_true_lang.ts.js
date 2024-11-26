import { defineComponent as m, computed as n, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ m({
  __name: "LogoOpenframeworks",
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
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "135",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 135",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M67.49 0c37.237 0 67.492 30.255 67.492 67.49 0 37.237-30.255 67.492-67.491 67.492S0 104.727 0 67.49 30.255 0 67.49 0m128 0v134.982h-58.18V0zm37.237 60.51v34.908h-34.909V60.51zM256 0l-58.182 58.182V0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
