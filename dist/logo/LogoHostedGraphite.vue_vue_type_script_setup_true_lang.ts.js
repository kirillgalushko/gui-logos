import { defineComponent as n, computed as s, openBlock as l, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoHostedGraphite",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "294",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 294",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#EC7A51",
          d: "M256 72.153v148.058l-129.55 73.328L0 220.21V72.153L126.45 0s24.605 14.52 36.674 20.703C194.374 36.722 256 72.153 256 72.153m-104.414-8.55v63.81H102.38v-63.81l-57.246 33.86v99.614l57.246 35.47V190.55l-39.395-24.106h88.602v66.102s38.569-25.232 55.318-35.47V97.463z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
