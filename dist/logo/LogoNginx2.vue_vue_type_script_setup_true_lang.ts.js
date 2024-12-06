import { defineComponent as n, computed as h, openBlock as c, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoNginx2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "291",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 291",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#009639",
          d: "M2.054 218.187c1.32 2.347 3.227 4.108 5.575 5.428l112.962 65.137c4.695 2.787 10.416 2.787 14.964 0l112.963-65.137c4.695-2.64 7.482-7.629 7.482-13.057V80.284c0-5.428-2.787-10.416-7.482-13.056L135.555 2.09c-4.694-2.788-10.416-2.788-14.964 0L7.63 67.228C2.787 69.868 0 74.856 0 80.284v130.42c0 2.642.587 5.136 2.054 7.483"
        }),
        t("path", {
          fill: "#FFF",
          d: "M91.837 195.154a14.463 14.463 0 0 1-14.524 14.524 14.463 14.463 0 0 1-14.523-14.524V95.542c0-7.776 6.895-14.084 16.43-14.084 6.896 0 14.965 2.787 19.806 8.802l4.4 5.282 60.737 72.618V95.835a14.463 14.463 0 0 1 14.524-14.524 14.463 14.463 0 0 1 14.523 14.524v99.613c0 7.775-6.895 14.083-16.43 14.083-6.896 0-14.965-2.787-19.806-8.802l-65.137-77.754z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};