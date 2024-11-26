import { defineComponent as o, computed as r, openBlock as h, createElementBlock as n, normalizeStyle as s, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoWearos",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const t = c, l = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, i) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "196",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 196",
      style: s(l.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("circle", {
          cx: "201.603",
          cy: "79.759",
          r: "26.544",
          fill: "#00A94B"
        }),
        e("circle", {
          cx: "231.199",
          cy: "25.201",
          r: "24.799",
          fill: "#FF4131"
        }),
        e("path", {
          fill: "#FFBC00",
          d: "M166.502 195.635c-9.483 0-18.586-5.505-22.673-14.716L78.805 34.902c-5.56-12.536.055-27.197 12.59-32.757 12.537-5.56 27.198.055 32.758 12.59l65.023 146.018c5.56 12.536-.054 27.197-12.59 32.757-3.27 1.471-6.704 2.125-10.084 2.125"
        }),
        e("path", {
          fill: "#0085F7",
          d: "M89.76 195.254c-10.355 0-20.22-5.996-24.69-16.024L2.336 38.282c-6.05-13.627.054-29.596 13.68-35.646s29.596.054 35.646 13.68l62.734 140.948c6.05 13.626-.054 29.596-13.68 35.646a27 27 0 0 1-10.956 2.344"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
