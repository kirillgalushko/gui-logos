import { defineComponent as h, computed as m, openBlock as s, createElementBlock as l, normalizeStyle as p, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoMailjet2",
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
    return (r, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "255",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 255",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("polygon", {
          fill: "#9585F4",
          points: "1.42108547e-14 97.9914749 93.4083546 140.330776 112.177323 121.670929 64.3819267 99.9556692 212.56948 43.2122762 155.607843 190.745098 134.001705 143.386189 115.123615 162.155158 116.105712 164.337596 157.462916 255.017903 256 -7.10542736e-15"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
