import { defineComponent as l, computed as n, openBlock as r, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoReddit3",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (h, c) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(o.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          fill: "#FF4500"
        }),
        t("path", {
          fill: "#FFF",
          "fill-rule": "nonzero",
          d: "M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981 27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667 7.324 0 13.275-5.95 13.275-13.278 0-7.324-5.95-13.275-13.275-13.275-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617 0 7.629 4.577 14.037 10.988 16.939a33.6 33.6 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036 41.202 0 74.622-23.196 74.622-52.036a35 35 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093M85.272 142.495c0-7.324 5.95-13.275 13.278-13.275 7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278m74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768-5.188 0-22.584-.765-31.59-9.768-1.371-1.373-1.371-3.51 0-4.883 1.374-1.371 3.51-1.371 4.884 0 5.8 5.8 18.008 7.782 26.706 7.782s21.058-1.983 26.704-7.782c1.374-1.371 3.51-1.371 4.884 0 1.22 1.373 1.22 3.51 0 4.883m-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275 0 7.17-5.95 13.275-13.277 13.275"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};