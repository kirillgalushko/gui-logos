import { defineComponent as o, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ o({
  __name: "LogoBuck",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, h) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "223",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 223",
      style: r(l.value)
    }, h[0] || (h[0] = [
      t("g", { fill: "#4A69A5" }, [
        t("path", { d: "M72.426 0h-18.56v52.508L76.5 75.142H49.34l-29.65-29.65V0H0v53.866l40.286 40.288h54.319l19.465 19.463H62.013l43.91 45.266-64.28 63.825h25.351l64.276-64.729-24.443-24.444h129.915v8.148L180.61 175.18l-47.076 47.53h26.706l32.138-32.592 63.374-38.024v-38.476h-59.75l-20.37-20.37 23.085-23.086V18.558h-19.24v43.005L160.695 80.12l-16.75-17.54V18.558h-18.107v52.51l42.337 42.549h-25.832L72.426 44.36z" }),
        t("path", { d: "M170.652 145.304h-25.348l12.221 13.126z" })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
