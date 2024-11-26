import { defineComponent as m, computed as n, openBlock as l, createElementBlock as s, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ m({
  __name: "LogoJamstack2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#F0047F",
          d: "M128 0C57.221 0 0 57.221 0 128s57.221 128 128 128 128-57.222 128-128V0z"
        }),
        t("path", {
          fill: "#FFF",
          d: "M121.04 134.96v93.312c-49.663-2.837-89.64-42.345-93.215-91.81l-.097-1.502zm90.962 0c-2.6 49.664-38.816 89.64-84.159 93.215l-1.377.097V134.96zm.112-91.074v85.648h-85.648V43.886z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
