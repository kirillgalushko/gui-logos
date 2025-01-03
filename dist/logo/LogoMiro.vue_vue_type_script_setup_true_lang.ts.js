import { defineComponent as s, computed as c, openBlock as l, createElementBlock as m, normalizeStyle as n, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoMiro",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "188",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 188",
      style: n(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#000",
          d: "M387.729 95.357v41.362h16.944V97.893c0-17.292 23.538-17.32 23.538-17.32V63.745l-1.718.106c-2.3.166-6.505.556-10.063 1.357l-2.1.501c-13.942 3.535-26.601 11.02-26.601 29.648M260 62.908c6.6 0 14.848 3.734 19.338 10.303 4.65-5.974 12.295-10.005 21.742-10.158 12-.154 26.84 7.315 26.84 29.717v43.898h-16.949V92.77c0-7.469-5.4-12.838-13.485-12.838s-13.49 5.37-13.49 12.838v43.898h-16.943V92.77c0-7.469-5.396-12.838-13.489-12.838s-13.643 5.37-13.643 12.838v43.898H222.1V65.133h17.822v7.186c4.535-5.497 11.066-9.005 18.725-9.378zm106.883 3.136v70.676H349.65V66.044zm-8.618-11.245c5.312 0 9.62-4.286 9.62-9.573s-4.308-9.573-9.62-9.573c-5.313 0-9.62 4.286-9.62 9.573s4.307 9.573 9.62 9.573m115.959 7.956c-20.864 0-37.775 16.828-37.775 37.59s16.91 37.591 37.775 37.591S512 121.108 512 100.346s-16.91-37.59-37.775-37.59m0 58.279c-11.809 0-21.387-9.527-21.387-21.283s9.573-21.282 21.387-21.282 21.387 9.526 21.387 21.282-9.573 21.283-21.387 21.283"
        }),
        t("path", {
          fill: "#FD3",
          d: "M0 46.758C0 20.934 20.934 0 46.758 0h93.516c25.824 0 46.758 20.934 46.758 46.758v93.516c0 25.824-20.934 46.758-46.758 46.758H46.758C20.934 187.032 0 166.098 0 140.274z"
        }),
        t("polygon", {
          fill: "#000",
          points: "124.343525 35.652968 107.365114 35.652968 121.513498 60.5118539 90.3867032 35.652968 73.4088767 35.652968 88.972274 66.036895 56.4303489 35.652968 39.4520548 35.652968 56.4303489 74.3282557 39.4520548 151.671233 56.4303489 151.671233 88.972274 68.8032146 73.4088767 151.671233 90.3867032 151.671233 121.513498 63.2781735 107.365114 151.671233 124.343525 151.671233 155.47032 54.9869881"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
