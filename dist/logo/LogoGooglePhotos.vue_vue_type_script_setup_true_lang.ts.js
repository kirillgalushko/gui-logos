import { defineComponent as l, computed as n, openBlock as c, createElementBlock as p, normalizeStyle as m, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoGooglePhotos",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, h = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, i) => (c(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(h.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#FBBB05",
          d: "M64 58.149c35.328 0 64 28.672 64 64V128H5.851C2.633 128 0 125.367 0 122.149c0-35.328 28.672-64 64-64"
        }),
        e("path", {
          fill: "#E94335",
          d: "M197.851 64c0 35.328-28.672 64-64 64H128V5.851C128 2.633 130.633 0 133.851 0c35.328 0 64 28.672 64 64"
        }),
        e("path", {
          fill: "#4285F4",
          d: "M192 197.851c-35.328 0-64-28.672-64-64V128h122.149c3.218 0 5.851 2.633 5.851 5.851 0 35.328-28.672 64-64 64"
        }),
        e("path", {
          fill: "#0F9D58",
          d: "M58.149 192c0-35.328 28.672-64 64-64H128v122.149c0 3.218-2.633 5.851-5.851 5.851-35.328 0-64-28.672-64-64"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};