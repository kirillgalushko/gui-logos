import { defineComponent as h, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoWorkos2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "222",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 222",
      style: s(l.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#6363F1",
          d: "M149.078 0a44.2 44.2 0 0 0-12.137 12.95l-.575.963-10.844 18.766-45.14 78.256 42.755 73.9-10.834 18.776c-8.692 15.106-26.867 21.938-43.357 16.298-8.41-2.806-15.229-8.964-19.833-16.536l-.468-.788-44.892-77.737C1.276 120.66 0 115.798 0 110.935a27.44 27.44 0 0 1 3.305-13.107l.448-.797 46.168-79.966C55.844 6.72 66.757.285 78.653.01l.795-.01zm14.329 1.96c16.235-5.47 34.053 1.05 42.946 15.61l.41.688 45.484 78.763c2.477 4.179 3.753 9.05 3.753 13.914 0 4.558-1.121 9.117-3.303 13.112l-.45.791-46.168 79.966c-5.923 10.345-16.836 16.781-28.732 17.056l-.795.009h-69.63c4.802-3.44 8.929-7.783 12.092-12.883l.62-1.03 10.844-18.776 45.14-78.245-42.755-73.994 10.243-17.657c4.603-7.94 11.61-14.421 20.3-17.324"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
