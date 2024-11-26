import { defineComponent as s, computed as l, openBlock as p, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoTestcafe",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (p(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "164",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 164",
      style: m(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#404142",
          points: "158.898436 109.30245 150.072263 118.40871 185.383786 118.40871 220.695309 150.290868 35.3115227 150.290868 70.6230453 118.40871 97.1083952 118.40871 88.2685595 109.30245 61.7968725 109.30245 0 163.953675 256 163.953675 194.209959 109.30245"
        }),
        t("polygon", {
          fill: "#37B5E5",
          points: "237.425415 22.0790948 215.462454 0 123.238512 92.7567914 88.1114373 57.4179431 66.1553077 79.5038693 123.245343 136.921812 237.425415 22.0859262"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
