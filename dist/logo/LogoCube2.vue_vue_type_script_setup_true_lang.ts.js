import { defineComponent as n, computed as l, openBlock as p, createElementBlock as g, normalizeStyle as s, createStaticVNode as h } from "vue";
const y = /* @__PURE__ */ n({
  __name: "LogoCube2",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const o = t, i = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, e) => (p(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: s(i.value)
    }, e[0] || (e[0] = [
      h('<g><polygon fill="#FF6492" points="256 74.2490728 128.031649 0 128.031649 51.3772356 256 125.299266 256 74.238523"></polygon><polygon fill="#141446" points="256 125.299266 217.609495 147.696365 128 95.8021924 76.8021099 125.341465 38.401055 104.590126 128.021099 51.3772356 256 125.299266"></polygon><polygon fill="#A14474" points="76.8021099 125.341465 38.401055 104.590126 38.401055 147.696365"></polygon><polygon fill="#141446" points="1.87401035e-14 221.143658 128 147.696365 256 221.143658 128 295.392731"></polygon><polygon fill="#FF6492" points="256 170.167312 128 95.0004121 128 147.696365 256 221.143658"></polygon><polygon fill="#7A77FF" points="38.401055 147.696365 38.401055 104.590126 128.021099 51.3772356 128.021099 0 9.37005174e-15 74.2490728 9.37005174e-15 221.143658 128 147.696365 128 95.0004121"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  y as _
};
