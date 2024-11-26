import { defineComponent as n, computed as a, openBlock as h, createElementBlock as l, normalizeStyle as p, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoReplay2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (h(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "289",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 289",
      style: p(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F41C52",
          d: "M114.621 56.42 20.201 1.806a13.456 13.456 0 0 0-18.395 4.94A13.5 13.5 0 0 0 0 13.49v109.228a13.5 13.5 0 0 0 6.735 11.684 13.45 13.45 0 0 0 13.467.002l94.42-54.614a13.5 13.5 0 0 0 4.93-4.939 13.507 13.507 0 0 0-4.93-18.431m0 152.103-94.42-54.614a13.455 13.455 0 0 0-18.395 4.94A13.5 13.5 0 0 0 0 165.596v109.227c0 2.368.624 4.694 1.806 6.745a13.5 13.5 0 0 0 4.93 4.938 13.44 13.44 0 0 0 13.466.002l94.42-54.614a13.5 13.5 0 0 0 4.93-4.938 13.51 13.51 0 0 0-4.93-18.432m134.644-76.037-94.42-54.613a13.455 13.455 0 0 0-18.395 4.94 13.5 13.5 0 0 0-1.806 6.745v109.227c0 2.368.623 4.694 1.806 6.746a13.5 13.5 0 0 0 4.929 4.937 13.45 13.45 0 0 0 13.466.003l94.42-54.614a13.5 13.5 0 0 0 4.93-4.94 13.52 13.52 0 0 0 0-13.492 13.5 13.5 0 0 0-4.93-4.939"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
