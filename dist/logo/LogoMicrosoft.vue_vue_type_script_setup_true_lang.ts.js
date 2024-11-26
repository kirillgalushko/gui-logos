import { defineComponent as o, computed as n, openBlock as r, createElementBlock as m, normalizeStyle as c, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ o({
  __name: "LogoMicrosoft",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, l = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, i) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: c(l.value)
    }, i[0] || (i[0] = [
      e("rect", {
        width: "10",
        height: "10",
        x: "17",
        y: "17",
        fill: "#FEBA08"
      }, null, -1),
      e("rect", {
        width: "10",
        height: "10",
        x: "5",
        y: "17",
        fill: "#05A6F0"
      }, null, -1),
      e("rect", {
        width: "10",
        height: "10",
        x: "17",
        y: "5",
        fill: "#80BC06"
      }, null, -1),
      e("rect", {
        width: "10",
        height: "10",
        x: "5",
        y: "5",
        fill: "#F25325"
      }, null, -1)
    ]), 4));
  }
});
export {
  s as _
};
