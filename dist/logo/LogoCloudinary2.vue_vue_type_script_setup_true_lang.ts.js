import { defineComponent as i, computed as o, openBlock as n, createElementBlock as c, normalizeStyle as m, createElementVNode as a } from "vue";
const p = /* @__PURE__ */ i({
  __name: "LogoCloudinary2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, h = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "168",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 168",
      style: m(h.value)
    }, t[0] || (t[0] = [
      a("g", null, [
        a("path", {
          fill: "#3448C5",
          d: "M75.06 75.202a.7.7 0 0 1 .498.208l23.56 23.581a.7.7 0 0 1-.488 1.188h-6.022a.72.72 0 0 0-.721.7v53.015a12.72 12.72 0 0 0 3.71 8.949l3.52 3.52a.7.7 0 0 1-.487 1.187H70.85c-7.027 0-12.723-5.696-12.723-12.723v-53.948a.7.7 0 0 0-.7-.7h-5.938a.7.7 0 0 1-.509-1.188l23.581-23.58a.7.7 0 0 1 .499-.21m52.103 13.656a.7.7 0 0 1 .498.209l23.581 23.496a.7.7 0 0 1-.509 1.188h-6.022a.72.72 0 0 0-.7.72v39.423a12.72 12.72 0 0 0 3.69 8.949l3.541 3.52a.7.7 0 0 1-.509 1.187h-27.716c-7.027 0-12.724-5.696-12.724-12.723v-40.313a.72.72 0 0 0-.7-.721h-6a.7.7 0 0 1-.488-1.188l23.56-23.538a.7.7 0 0 1 .498-.209m52.114 13.51c.183 0 .36.075.487.207l23.581 23.56a.7.7 0 0 1-.487 1.209h-6.044a.7.7 0 0 0-.7.7v25.85a12.72 12.72 0 0 0 3.711 8.949l3.52 3.52a.7.7 0 0 1-.487 1.187h-27.801c-7.027 0-12.724-5.696-12.724-12.723v-26.784a.7.7 0 0 0-.7-.7h-5.937a.7.7 0 0 1-.488-1.208l23.58-23.56a.68.68 0 0 1 .489-.207M126.686-.002c37.04.27 69.71 24.323 80.964 59.614 27.51 3.59 48.15 26.928 48.35 54.668 0 22.895-14.319 41.921-37.438 49.842l-.86.289-1.06.339v-17.092c14.695-6.192 23.326-18.428 23.326-33.378-.075-21.097-16.782-38.323-37.78-39.126l-.709-.02h-6.361l-1.527-6.066c-7.494-30.93-35.08-52.79-66.905-53.015a68.18 68.18 0 0 0-61.576 38.23l-2.36 4.861-4.454.467c-20.112 2.151-36.627 16.862-41.08 36.593-4.39 19.449 3.898 39.527 20.646 50.231l.734.46v18.025h-.106l-1.59-.721C11.744 152.636-2.99 126.08.51 98.616c3.502-27.463 24.428-49.474 51.68-54.358C66.912 16.851 95.575-.177 126.686-.002"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};