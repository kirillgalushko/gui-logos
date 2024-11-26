import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoNewRelic2",
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
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: m(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#00AC69",
          points: "206.744916 102.321906 206.744916 193.264381 128 238.744916 128 295.586287 256 221.694364 256 73.8919233"
        }),
        t("polygon", {
          fill: "#1CE783",
          points: "128 56.8599651 206.744916 102.321906 256 73.8919233 256 73.8919233 128 0 0 73.8919233 0 73.8919233 49.2364904 102.321906"
        }),
        t("polygon", {
          fill: "#1D252C",
          points: "78.7635096 176.232423 78.7635096 267.174898 128 295.586287 128 147.80244 -5.2846874e-14 73.8919233 -5.2846874e-14 130.751888"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
