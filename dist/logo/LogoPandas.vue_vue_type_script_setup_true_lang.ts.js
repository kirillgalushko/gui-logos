import { defineComponent as l, computed as m, openBlock as s, createElementBlock as o, normalizeStyle as n, createElementVNode as e } from "vue";
const v = /* @__PURE__ */ l({
  __name: "LogoPandas",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const t = c, i = m(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, h) => (s(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "152",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 152",
      style: n(i.value)
    }, h[0] || (h[0] = [
      e("g", null, [
        e("path", {
          fill: "#130754",
          d: "M174.728 98.678c-7.046 0-14.223-2.916-18.717-8.631v30.876h-14.114V44.7h12.762l.487 8.384c4.378-6.442 12.152-9.845 19.569-9.845 14.223 0 24.7 11.918 24.7 27.719s-10.463 27.726-24.687 27.72m-4.37-44.975c-8.268 0-14.95 6.443-14.95 17.263s6.682 17.276 14.95 17.276 14.95-6.442 14.95-17.262c0-10.712-6.55-17.147-14.703-17.275zm82.252 43.528-.487-8.385c-4.377 6.443-12.158 9.846-19.575 9.84-14.223 0-24.7-11.912-24.7-27.713s10.456-27.72 24.7-27.713c7.417 0 15.198 3.43 19.575 9.846l.487-8.384h12.79V97.23zM236.933 53.71c-8.268 0-14.951 6.443-14.958 17.263s6.683 17.27 14.95 17.27c8.268 0 14.958-6.443 14.958-17.263s-6.683-17.27-14.95-17.27m77.779 43.528v-29.05c0-10.21-3.52-13.614-9.963-13.614-6.69 0-13.983 6.073-13.983 13.366v29.298h-14.107V44.722h12.892l.611 9.729c3.527-6.69 11.424-11.184 19.452-11.184 13.976 0 19.211 9.73 19.211 22.731v31.246zm65.799.013-.487-8.391c-4.378 6.443-12.158 9.846-19.568 9.846-14.224 0-24.701-11.918-24.701-27.72s10.457-27.712 24.7-27.712c7.047 0 14.217 2.923 18.718 8.631V24.316h14.107v72.935zm-15.678-43.52c-8.233 0-14.95 6.442-14.95 17.255 0 10.814 6.682 17.256 14.95 17.256s14.95-6.435 14.95-17.256c0-10.82-6.662-17.256-14.95-17.256m81.43 43.527-.488-8.384c-4.377 6.442-12.158 9.839-19.575 9.839-14.223 0-24.7-11.911-24.7-27.72s10.456-27.712 24.7-27.712c7.417 0 15.198 3.43 19.575 9.852l.487-8.39h12.762V97.25zm-15.679-43.52c-8.233 0-14.95 6.442-14.957 17.262s6.69 17.242 14.95 17.242c8.261 0 14.958-6.442 14.958-17.262 0-10.712-6.55-17.114-14.703-17.24zm59.68 45.229a41.3 41.3 0 0 1-21.03-5.963l2.312-9.722.715.423c4.246 2.478 10.406 5.416 17.762 5.416 5.592 0 9.483-1.702 9.483-6.08 0-3.766-4.014-5.104-11.184-6.806-12.886-2.8-17.503-9.605-17.503-17.022 0-8.268 6.442-16.042 20.666-16.042 8.631 0 16.172 3.767 17.839 4.741l-2.312 9.242a30.6 30.6 0 0 0-15.191-4.377c-5.709 0-8.508 1.941-8.508 5.104 0 3.52 3.65 5.105 9.235 6.443C506.408 67.24 512 73.683 512 80.736c.027 11.3-8.24 18.23-21.737 18.23"
        }),
        e("g", null, [
          e("path", {
            fill: "#130754",
            d: "M26.546 8.94h16.529v34.32H26.546zm0 70.5h16.529v34.32H26.546zM0 37.16h16.529v114.082H0zm52.55 70.596h16.53v34.32H52.55zm0-70.554h16.53v34.32H52.55zM78.548 0h16.528v114.082H78.548z"
          }),
          e("rect", {
            width: "16.529",
            height: "16.193",
            x: "26.546",
            y: "53.278",
            fill: "#FFCA00"
          }),
          e("rect", {
            width: "16.529",
            height: "16.193",
            x: "52.55",
            y: "81.539",
            fill: "#E70488"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};