import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoVimeo3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "223",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 223",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#32B8E8",
          d: "M255.876 51.662c-1.139 24.968-18.545 59.157-52.209 102.55q-52.21 67.99-88.343 67.989c-14.918 0-27.551-13.799-37.863-41.406-6.892-25.306-13.775-50.61-20.664-75.915-7.663-27.592-15.878-41.406-24.661-41.406-1.915 0-8.617 4.038-20.091 12.081L0 60.008a3257 3257 0 0 0 37.36-33.38C54.21 12.038 66.86 4.366 75.29 3.59q29.886-2.876 36.79 40.938c4.974 31.514 8.415 51.116 10.35 58.788 5.742 26.145 12.06 39.201 18.965 39.201 5.358 0 13.407-8.478 24.138-25.436 10.722-16.963 16.464-29.868 17.24-38.733 1.525-14.638-4.22-21.975-17.24-21.975-6.128 0-12.447 1.413-18.946 4.206 12.58-41.29 36.618-61.343 72.1-60.199 26.304.773 38.705 17.867 37.19 51.282"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};