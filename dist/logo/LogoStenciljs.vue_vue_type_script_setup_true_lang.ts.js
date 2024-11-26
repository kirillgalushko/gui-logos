import { defineComponent as m, computed as o, openBlock as n, createElementBlock as s, normalizeStyle as l, createElementVNode as h } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoStenciljs",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "107",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 107",
      style: l(i.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "m104.577 75.018-28.889 31.649H22.533l28.601-31.649zm94.929-50.282c19.477 0 26.203 12.395 26.687 21.893H209.19c-.377-4.078-3.497-7.78-9.793-7.78-5.703 0-8.931 2.736-8.931 6.331 0 10.893 35.995 0 35.995 26.614 0 11.644-9.954 20.82-27.548 20.82-20.446-.054-27.386-10.464-28.247-22.59h17.863c.269 4.346 3.497 8.424 10.814 8.424 6.726 0 10.17-2.361 10.17-5.956 0-10.892-36.103-.644-36.103-26.346 0-11.751 10.061-21.41 26.095-21.41m230.174 0c20.23 0 29.808 14.22 31.045 25.273h-18.131c-1.346-5.58-6.565-9.658-13.021-9.658-9.416 0-14.904 7.405-14.904 18.297 0 10.893 5.488 18.298 14.904 18.298 6.456 0 11.675-4.079 13.02-9.659h18.132c-1.237 11-10.814 25.273-31.045 25.273-18.885 0-32.659-14.595-32.659-33.912s13.774-33.912 32.66-33.912m-137.523-.053c19.261 0 32.282 14.595 32.282 33.804 0 2.844-.269 5.205-.269 5.205h-47.186c1.238 8.907 6.94 13.736 15.765 13.736 5.327 0 10.437-2.36 12.536-7.082h17.755c-3.873 13.146-15.764 22.16-30.776 22.16-19.262 0-32.766-14.112-32.766-34.019 0-19.21 13.397-33.804 32.659-33.804m-42.613-13.576v15.078h12.967v14.327h-12.967v50.546h-17.648v-79.95zm117.024 13.63c15.657 0 23.943 10.409 23.943 25.862v40.459h-17.648V52.53c0-7.566-3.228-12.77-11.03-12.77-8.554 0-13.29 5.473-13.29 14.112v37.13h-17.647V26.186H347.2v7.941c2.96-5.58 9.685-9.39 19.37-9.39m118.369 1.448v64.873H467.29V26.185zM512 4.078v86.98h-17.648V4.077zM138.667 37.509l-28.874 31.648H0L28.874 37.51zm153.275 1.34c-8.017 0-13.236 4.829-14.743 12.233h29.539c-1.238-7.297-6.564-12.234-14.796-12.234M116.132 0 87.378 31.648H34.09L62.887 0zM476.06 0c6.187 0 10.653 4.454 10.653 10.624s-4.466 10.517-10.653 10.517c-6.134 0-10.654-4.292-10.654-10.517C465.405 4.454 469.871 0 476.06 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
