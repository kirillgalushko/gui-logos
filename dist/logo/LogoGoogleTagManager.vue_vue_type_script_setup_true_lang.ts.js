import { defineComponent as n, computed as h, openBlock as r, createElementBlock as s, normalizeStyle as m, createElementVNode as e } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoGoogleTagManager",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, l = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, i) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(l.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#8AB4F8",
          points: "150.261818 245.516364 105.825455 202.185455 201.258182 104.730909 247.265455 149.821818"
        }),
        e("path", {
          fill: "#4285F4",
          d: "M150.45 53.938 106.176 8.731 9.36 104.629c-12.48 12.48-12.48 32.713 0 45.207l95.36 95.986 45.09-42.182-72.654-76.407z"
        }),
        e("path", {
          fill: "#8AB4F8",
          d: "m246.625 105.37-96-96c-12.494-12.494-32.756-12.494-45.25 0s-12.495 32.757 0 45.252l96 96c12.494 12.494 32.756 12.494 45.25 0s12.495-32.757 0-45.251"
        }),
        e("circle", {
          cx: "127.265",
          cy: "224.731",
          r: "31.273",
          fill: "#246FDB"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
