import { defineComponent as n, computed as h, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoDovetail2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "293",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 293",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#230078",
          d: "m256 182.857-64 36.572v-73.143l-64-36.974 64-36.17 64 36.572zm-128.01-73.143-64 36.572V73.143L0 36.57 64 0l63.99 36.571zm0 146.286-64 36.571.01-73.142-64-36.572 63.99-36.571 64 36.571z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
