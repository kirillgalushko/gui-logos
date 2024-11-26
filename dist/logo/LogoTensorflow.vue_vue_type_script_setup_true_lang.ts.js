import { defineComponent as m, computed as h, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoTensorflow",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, l) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "274",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 274",
      style: r(o.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#E55B2D",
          d: "M145.726 42.065v42.07l72.861 42.07v-42.07zM0 84.135v42.07l36.43 21.03V105.17zm109.291 21.035-36.43 21.034v126.2l36.43 21.035v-84.135l36.435 21.035v-42.07l-36.435-21.034z"
        }),
        t("path", {
          fill: "#ED8E24",
          d: "M145.726 42.065 36.43 105.17v42.065l72.861-42.065v42.065l36.435-21.03zM255.022 63.1l-36.435 21.035v42.07l36.435-21.035zm-72.865 84.135-36.43 21.035v42.07l36.43-21.036zm-36.43 63.104-36.436-21.035v84.135l36.435-21.035z"
        }),
        t("path", {
          fill: "#F8BF3C",
          d: "M145.726 0 0 84.135l36.43 21.035 109.296-63.105 72.861 42.07L255.022 63.1zm0 126.204-36.435 21.03 36.435 21.036 36.43-21.035z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
