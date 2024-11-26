import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoPytorch2",
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
    return (c, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "310",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 310",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#EE4C2C",
          d: "M127.825 0v45.053l-69.224 69.222c-36.229 36.744-36.225 95.853.012 133.264l1.109 1.127c37.02 37.719 97.79 37.719 135.509 0 37.341-36.65 37.715-96.577 1.12-134.37l-1.12-1.14 23.05-23.05c50.292 50.292 50.292 130.969 0 181.61-49.244 50.292-130.27 50.292-180.562 0-49.79-49.789-50.287-129.7-1.494-180.092l1.494-1.518zm45.403 50.99c9.258 0 16.764 7.506 16.764 16.764 0 9.259-7.506 16.764-16.764 16.764-9.259 0-16.764-7.505-16.764-16.764 0-9.258 7.505-16.764 16.764-16.764"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
