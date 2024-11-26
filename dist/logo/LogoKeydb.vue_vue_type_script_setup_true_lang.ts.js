import { defineComponent as m, computed as i, openBlock as o, createElementBlock as n, normalizeStyle as p, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoKeydb",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, a = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (z, h) => (o(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "165.18",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 165.18",
      style: p(a.value)
    }, h[0] || (h[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#FF0",
          points: "72.6199965 8.06858334 8.06926869 119.842527 137.17101 119.842527",
          opacity: ".88"
        }),
        e("path", {
          fill: "#000200",
          d: "M72.62 0a8.07 8.07 0 0 1 8.006 9.08l51.667 29.829a8.069 8.069 0 1 1 8.019 13.863v59.636a8.07 8.07 0 1 1-8.019 13.863L80.626 156.1q.063.496.063 1.01a8.069 8.069 0 1 1-16.075-1.01l-51.667-29.83a8.069 8.069 0 1 1-8.02-13.862V52.771a8.069 8.069 0 1 1 8.019-13.863L64.615 9.08A8.07 8.07 0 0 1 72.62 0m-3.14 122.982H19.76l47.981 27.701a8 8 0 0 1 1.737-1.007zm55.998 0H75.76l.001 26.695a8 8 0 0 1 1.737 1.006zm-21.73-54.747L80.626 81.579q.063.496.063 1.01a8.07 8.07 0 0 1-4.928 7.435v26.677h53.975a8 8 0 0 1 1.003-1.731zm-62.257 0L14.5 114.97c.402.53.74 1.11 1.003 1.731h53.975V90.025a8.07 8.07 0 0 1-4.924-7.189l-.004-.247q0-.514.063-1.01zM12.948 51.764a8 8 0 0 1-1.738 1.007l-.001 55.368 24.854-43.036zm119.343 0-23.115 13.339 24.854 43.036V52.772a8 8 0 0 1-1.469-.812zM73.626 16.075a8.2 8.2 0 0 1-2.012 0L44.62 62.82l23.12 13.343a8.03 8.03 0 0 1 4.633-1.639l.247-.003a8.03 8.03 0 0 1 4.88 1.642l23.12-13.344zm7.55.545 24.872 43.067 23.117-13.34a8 8 0 0 1-.06-.763l-.003-.247q0-.514.063-1.012zm-17.114 0L16.075 44.325a8.2 8.2 0 0 1 0 2.022l23.115 13.34z"
        }),
        e("path", {
          fill: "#FF0",
          d: "M382.53 42.662v83.603h26.598q15.63 0 24.267-4.547 8.695-4.547 14.095-14.095 5.456-9.548 5.456-22.108 0-14.55-6.877-25.064-6.82-10.513-18.982-14.776-8.467-3.012-27.222-3.013zm79.402 0v83.6h22.96q12.39 0 19.72-6.932Q512 112.34 512 102.28q0-4.945-1.989-9.15-1.932-4.262-5.456-7.218-3.523-3.011-10.06-5.228 5.286-2.842 8.014-7.39 2.729-4.602 2.728-10.172 0-5.967-3.125-10.854-3.07-4.888-8.411-7.218-5.343-2.387-15.289-2.388zm-71.387 8.129h5.91q18.015 0 25.858 2.386 10.457 3.183 16.31 11.764 5.854 8.581 5.854 20.687 0 11.537-5.398 19.55-5.4 7.957-14.834 11.027-6.706 2.159-24.04 2.158h-9.66zm79.57.055h9.661q8.753 0 12.73 3.298 4.036 3.239 4.036 8.978 0 4.263-2.386 7.787-2.388 3.465-6.48 5.114-4.092 1.59-12.786 1.591h-4.774zm0 35.18h4.717q10.572 0 14.834 1.023 6.366 1.535 10.003 5.683 3.637 4.149 3.637 9.718 0 4.434-2.615 8.241-2.557 3.808-6.82 5.626-4.263 1.762-13.413 1.762h-10.342z"
        }),
        e("path", {
          fill: "#000200",
          d: "M307.638 63.551h8.411l21.256 47.626 20.63-47.626h8.468l-36.884 84.453h-8.412l11.935-27.28zm-16.936 41.317 6.706 3.524q-3.296 6.48-7.615 10.457a30.7 30.7 0 0 1-9.719 6.081q-5.399 2.046-12.219 2.046-15.117 0-23.642-9.889-8.525-9.945-8.525-22.449 0-11.765 7.218-20.97 9.15-11.708 24.495-11.708 15.8 0 25.233 11.991 6.707 8.469 6.82 21.142h-55.582q.228 10.799 6.877 17.732 6.65 6.876 16.424 6.877 4.717 0 9.15-1.649 4.49-1.647 7.616-4.376 3.126-2.727 6.763-8.809m0-16.652q-1.59-6.364-4.66-10.173-3.012-3.807-8.014-6.138a24.6 24.6 0 0 0-10.514-2.33q-9.093 0-15.629 5.854-4.773 4.263-7.217 12.787zM171.183 41.784h8.525v31.372l33.36-31.372h11.31l-40.18 37.51 43.306 46.09h-11.082l-36.714-38.986v38.987h-8.525z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
