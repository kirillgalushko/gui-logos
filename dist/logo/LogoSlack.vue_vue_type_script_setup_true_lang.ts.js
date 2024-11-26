import { defineComponent as i, computed as n, openBlock as o, createElementBlock as m, normalizeStyle as p, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoSlack",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = a, h = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, l) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: p(h.value)
    }, l[0] || (l[0] = [
      e("path", {
        fill: "#2EB67D",
        d: "M26.5 15a2.5 2.5 0 1 0-2.5-2.5V15zm-7 0a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-5 0v7a2.5 2.5 0 0 0 2.5 2.5"
      }, null, -1),
      e("path", {
        fill: "#E01E5A",
        d: "M5.5 17A2.5 2.5 0 1 0 8 19.5V17zm7 0a2.5 2.5 0 0 0-2.5 2.5v7a2.5 2.5 0 0 0 5 0v-7a2.5 2.5 0 0 0-2.5-2.5"
      }, null, -1),
      e("path", {
        fill: "#ECB22E",
        d: "M17 26.5a2.5 2.5 0 1 0 2.5-2.5H17zm0-7a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 0-5h-7a2.5 2.5 0 0 0-2.5 2.5"
      }, null, -1),
      e("path", {
        fill: "#36C5F0",
        d: "M15 5.5A2.5 2.5 0 1 0 12.5 8H15zm0 7a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0 0 5h7a2.5 2.5 0 0 0 2.5-2.5"
      }, null, -1)
    ]), 4));
  }
});
export {
  s as _
};
