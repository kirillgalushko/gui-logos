import { defineComponent as m, computed as l, openBlock as n, createElementBlock as v, normalizeStyle as c, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoWifi2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (n(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "192",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 192",
      style: c(o.value)
    }, t[0] || (t[0] = [
      h("g", { "fill-rule": "evenodd" }, [
        h("path", {
          fill: "#000",
          d: "M198.751 31.302C181.263 12.072 156.041 0 128 0S74.737 12.072 57.249 31.302zM57.25 159.91c17.488 19.23 42.71 31.302 70.751 31.302s53.263-12.072 70.751-31.302zM42.464 39.431C19.012 39.431 0 58.443 0 81.896v27.42c0 23.452 19.012 42.464 42.464 42.464h171.072c23.452 0 42.464-19.012 42.464-42.464v-27.42c0-23.453-19.012-42.465-42.464-42.465zm209.168 41.98c0-20.773-16.839-37.612-37.611-37.612h-42.465c-20.772 0-37.611 16.839-37.611 37.611v28.512c0 20.773-16.839 37.612-37.611 37.612H214.02c20.772 0 37.611-16.84 37.611-37.612zM104.1 83.957v40.16h12.132v-40.16zm-1.214-12.678a7.219 7.219 0 1 0 14.438 0 7.219 7.219 0 0 0-14.438 0M21.96 65.517l15.651 58.6h10.07l11.77-40.523 11.768 40.524h10.434l15.409-58.601h-11.77l-8.977 38.582-11.162-38.582H54.355l-11.163 37.611L34.7 65.517zm131.276 0v58.6h12.86v-22.93h29.12v-11.89h-29.12v-11.89h31.06v-11.89zm52.656 18.441v40.16h12.133v-40.16zm-1.092-12.8a7.219 7.219 0 1 0 14.438 0 7.219 7.219 0 0 0-14.438 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
