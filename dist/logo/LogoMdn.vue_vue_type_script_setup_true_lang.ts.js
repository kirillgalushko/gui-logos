import { defineComponent as s, computed as o, openBlock as c, createElementBlock as m, normalizeStyle as n, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ s({
  __name: "LogoMdn",
  props: {
    width: {},
    height: {}
  },
  setup(v) {
    const h = v, i = o(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (l, t) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "148",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 148",
      style: n(i.value)
    }, t[0] || (t[0] = [
      e("g", null, [
        e("path", {
          fill: "#000",
          d: "M279.156 104.024H254.79v-7.837h5.415V73.672c0-5.272-.998-8.977-2.993-11.257s-4.702-3.278-8.122-3.278c-4.56 0-7.98 1.568-10.26 4.845-2.28 3.278-3.42 6.555-3.563 9.833v22.23h8.55v7.837H219.45v-7.837h5.415V73.672c0-5.415-.998-9.12-2.993-11.257s-4.702-3.278-7.98-3.278c-4.56 0-7.837 1.568-10.26 4.703-2.28 3.135-3.42 6.412-3.562 9.832v22.515h9.832v7.837h-28.784v-7.837h8.55V60.135h-8.693v-7.98h19.095v9.12c1.71-2.993 3.848-5.415 6.697-7.41 2.85-1.853 6.27-2.85 10.403-2.85 4.132 0 7.552.997 10.687 2.992s5.273 4.988 6.413 9.12c1.567-3.562 3.847-6.412 6.982-8.692s6.84-3.42 11.258-3.42c4.987 0 9.262 1.567 12.682 4.702s5.273 7.98 5.273 14.535v25.935h8.692zm60.562 0h-18.81v-10.26c-1.71 3.136-3.99 5.843-6.982 7.98-2.993 2.28-6.84 3.42-11.827 3.42-6.84 0-12.398-2.28-16.53-6.982-4.133-4.56-6.128-10.972-6.128-18.952 0-7.125 1.853-13.68 5.7-19.523 3.705-5.842 9.833-8.835 18.24-8.835s13.965 3.135 17.527 9.263V32.062h-12.255v-7.98h22.515v72.105h8.55zm-18.952-23.94v-6.27c-.143-4.274-1.71-7.837-4.56-10.402s-6.27-3.99-10.26-3.99c-5.13 0-8.977 1.853-11.685 5.558-2.707 3.705-3.99 8.265-3.99 13.68 0 5.842 1.425 10.402 4.275 13.537s6.413 4.703 10.545 4.703c4.56 0 8.265-1.853 11.115-5.415 2.992-3.705 4.417-7.553 4.56-11.4m87.637 23.94h-27.502v-7.837h8.55V73.672c0-5.272-.998-8.977-3.135-11.257-1.995-2.28-4.845-3.278-8.123-3.278-4.417 0-7.98 1.425-10.545 4.275s-3.99 6.27-4.132 9.975v22.658h8.55v7.837h-27.503v-7.837h8.55v-35.91h-8.835v-7.98h19.38v8.835c3.705-6.555 9.69-9.833 18.098-9.833 5.13 0 9.547 1.568 13.11 4.703s5.272 7.98 5.272 14.535V96.33h8.55v7.694z"
        }),
        e("path", {
          fill: "#0069C2",
          d: "M57.427 0 16.672 131.242H0L40.612 0zm14.82 0v131.242h-14.82V0zm57.427 0L89.062 131.242H72.39L113.002 0zm14.82 0v131.242h-14.82V0z"
        }),
        e("polygon", {
          fill: "#0069C2",
          points: "416.525466 135.08934 512 135.08934 512 147.629279 416.525466 147.629279"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
