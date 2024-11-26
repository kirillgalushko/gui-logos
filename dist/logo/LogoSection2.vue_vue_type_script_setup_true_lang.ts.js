import { defineComponent as m, computed as h, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ m({
  __name: "LogoSection2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "431",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 431",
      style: r(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#00A86B",
          d: "m98.184 302.837 121.62 25.912V101.305l-121.62 25.812zm157.827 73.216L69.03 325.517V104.36l186.703-50.17.267 321.874z"
        }),
        t("path", {
          fill: "#00A86B",
          d: "M179.319 0 0 65.041v300.15l179.319 65.052zM31.954 347.564V82.69l111.557-34.431v333.725l-111.557-34.43z"
        }),
        t("path", {
          fill: "#038754",
          d: "m179.319 109.88 17.693-3.744V69.973l-17.693 4.742zm0 245.437 17.693 4.776v-36.197l-17.693-3.777z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
