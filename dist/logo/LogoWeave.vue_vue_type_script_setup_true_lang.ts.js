import { defineComponent as h, computed as m, openBlock as n, createElementBlock as p, normalizeStyle as c, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoWeave",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, l = m(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "261",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 261",
      style: c(l.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#FF4B19",
          d: "M64.653 244.896c-10.596-5.665-20.27-12.791-28.859-21.048v-37.887l38.05-34.36v34.273L226.665 47.851c8.356 10.224 15.112 21.773 20.071 34.241z"
        }),
        e("path", {
          fill: "#00D2FF",
          d: "m144.814 210.882 109.836-98.518c.795 5.817 1.35 11.711 1.35 17.747 0 13.002-1.963 25.536-5.513 37.384L147.326 258.31c-6.989 1.161-14.118 1.913-21.437 1.913-6.516 0-12.867-.635-19.125-1.56V1.56C113.022.635 119.373 0 125.889 0c6.445 0 12.73.624 18.925 1.529z"
        }),
        e("path", {
          fill: "#556991",
          d: "m106.764 116.824 99.078-89.214c-10.484-8.191-22.25-14.76-34.956-19.452L0 162.475a129.2 129.2 0 0 0 15.6 36.436z"
        }),
        e("path", {
          fill: "#FF4B19",
          d: "M35.794 180.727v9.177l38.05-34.361V10.899c-14.196 6.207-27.036 14.888-38.05 25.475z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};