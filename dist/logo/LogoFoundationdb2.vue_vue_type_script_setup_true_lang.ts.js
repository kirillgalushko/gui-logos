import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoFoundationdb2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = p(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (s(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "123.59",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 123.59",
      style: m(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#0073E0",
          points: "0 123.590499 0 116.825707 53.6862712 116.825707 53.6862712 89.337445 107.027013 94.68278 107.027013 116.825707 161.129935 116.825707 161.129935 89.337445 256 99.2641571 256 123.590499"
        }),
        t("polygon", {
          fill: "#289DFC",
          points: "0 80.1693569 53.6862712 72.3004121 53.6862712 44.8121498 107.027013 58.031171 107.027013 80.1746909 161.129935 72.3004121 161.129935 44.8121498 256 68.7212483 256 93.1554568 161.129935 79.9358429 107.027013 87.0467565 53.6862712 79.9358429 0 87.0420151"
        }),
        t("polygon", {
          fill: "#9ACEFE",
          points: "107.027013 43.9053572 161.129935 27.4882623 161.129935 0 256 38.9417049 256 62.612548 161.129935 35.8876511 107.027013 50.7774228"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
