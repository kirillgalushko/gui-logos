import { defineComponent as n, computed as l, openBlock as p, createElementBlock as g, normalizeStyle as h, createStaticVNode as s } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoSendgrid2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, i = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (r, t) => (p(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(i.value)
    }, t[0] || (t[0] = [
      s('<g><path fill="#9DD6E3" d="M256 0v170.667h-85.333v85.33H.002v-85.331H0V85.332h85.333V0z"></path><polygon fill="#3F72AB" points="0.00201096905 255.996382 85.3354791 255.996382 85.3354791 170.662915 0.00201096905 170.662915"></polygon><polygon fill="#00A9D1" points="170.666936 170.666936 256.000405 170.666936 256.000405 85.3314569 170.666936 85.3314569"></polygon><polygon fill="#00A9D1" points="85.3334681 85.3334679 170.666936 85.3334679 170.666936 0 85.3334681 0"></polygon><polygon fill="#2191C4" points="85.3334681 170.664925 170.666936 170.664925 170.666936 85.3314569 85.3334681 85.3314569"></polygon><polygon fill="#3F72AB" points="170.666936 85.3334679 256.000405 85.3334679 256.000405 0 170.666936 0"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
