import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoImba2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "216",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 216",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#16CEC6",
          d: "M253.824 83.242C225.73 30.252-25.104-23.893 2.052 11.13 29.208 46.152 149.52 94.21 156.65 95.103c-36.913 11.59-135.436 32.382-114.347 49.896 21.09 17.513 121.262-2.047 121.097-1.735-27.739 20.903-62.277 84.008-27.576 70.525 54.75-21.273 134.37-99.67 118-130.547"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
