import { defineComponent as n, computed as m, openBlock as s, createElementBlock as r, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoMicrosoftWindows2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#0078D4",
          d: "M0 0h121.329v121.329H0zm134.671 0H256v121.329H134.671zM0 134.671h121.329V256H0zm134.671 0H256V256H134.671z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
