import { defineComponent as n, computed as c, openBlock as m, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoIos",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "257",
      height: "128",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 257 128",
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M1.862 124.978h21.17v-90.12H1.862zM12.405 23.04c6.631 0 11.817-5.101 11.817-11.477C24.222 5.1 19.036 0 12.405 0 5.858 0 .672 5.101.672 11.563c0 6.376 5.186 11.477 11.733 11.477M93.515.254c-35.792 0-58.238 24.401-58.238 63.426 0 39.024 22.444 63.34 58.239 63.34 35.707 0 58.153-24.316 58.153-63.34S129.225.254 93.516.254m0 18.705c21.85 0 35.793 17.344 35.793 44.72 0 27.291-13.943 44.636-35.792 44.636-21.935 0-35.793-17.344-35.793-44.636 0-27.376 13.859-44.72 35.793-44.72M160.6 90.46c.935 22.616 19.469 36.558 47.695 36.558 29.672 0 48.377-14.623 48.377-37.919 0-18.279-10.542-28.566-35.453-34.262l-14.113-3.23c-15.049-3.571-21.255-8.332-21.255-16.494 0-10.203 9.352-17.004 23.21-17.004 14.028 0 23.635 6.887 24.656 18.364h20.914c-.51-21.595-18.364-36.219-45.4-36.219-26.696 0-45.655 14.708-45.655 36.474 0 17.514 10.712 28.396 33.326 33.583l15.899 3.74c15.473 3.657 21.765 8.758 21.765 17.6 0 10.202-10.288 17.514-25.08 17.514-14.963 0-26.27-7.397-27.63-18.705z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
