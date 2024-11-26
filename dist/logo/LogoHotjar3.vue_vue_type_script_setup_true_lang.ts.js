import { defineComponent as n, computed as c, openBlock as h, createElementBlock as m, normalizeStyle as r, createElementVNode as l } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoHotjar3",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "288",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 288",
      style: r(o.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#FF3C00",
          d: "M256 100.585c0 53.068-23.654 81.018-49.308 99.403l-4.984 3.443-5 3.23-4.979 3.04-4.925 2.877-18.623 10.45q-1.454.831-2.867 1.656l-5.484 3.303c-19.473 12.156-31.858 25.278-32.898 54.98l-.071 4.155H71.752c0-51.355 22.158-79.19 46.838-97.595l4.964-3.56q1.246-.86 2.496-1.693l5-3.229 4.978-3.04 9.759-5.616 13.787-7.712 5.652-3.305c21.022-12.65 34.51-25.579 35.597-56.632l.071-4.155zM184.252.145c0 51.35-22.153 79.185-46.833 97.591l-4.964 3.56q-1.247.86-2.497 1.693l-5 3.23-4.979 3.04-9.76 5.616-13.788 7.713-5.652 3.305q-1.371.824-2.7 1.653l-5.131 3.351c-16.5 11.328-26.82 24.627-27.766 51.63l-.072 4.155H0c0-54.78 25.206-82.793 51.797-101.152l4.997-3.333 4.994-3.133 4.957-2.956L87.82 64.236l5.652-3.306c21.023-12.65 34.51-25.58 35.597-56.631l.072-4.155z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
