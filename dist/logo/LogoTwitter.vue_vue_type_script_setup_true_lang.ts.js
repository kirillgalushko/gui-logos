import { defineComponent as n, computed as h, openBlock as m, createElementBlock as l, normalizeStyle as r, createElementVNode as p } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoTwitter",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: r(o.value)
    }, t[0] || (t[0] = [
      p("path", {
        fill: "#47ACDF",
        d: "M11.789 28c-3.235 0-6.25-.94-8.789-2.564 2.155.14 5.958-.195 8.324-2.451-3.559-.163-5.164-2.893-5.373-4.059.302.117 1.744.257 2.558-.07-4.093-1.026-4.721-4.619-4.582-5.715.768.537 2.07.723 2.582.676-3.814-2.729-2.442-6.834-1.767-7.72 2.737 3.792 6.84 5.922 11.914 6.04a6 6 0 0 1-.146-1.305C16.51 7.61 19.113 5 22.325 5a5.8 5.8 0 0 1 4.25 1.853c1.122-.263 2.81-.878 3.634-1.41-.416 1.493-1.71 2.738-2.493 3.2.006.016-.007-.016 0 0 .688-.104 2.549-.462 3.284-.96-.364.838-1.736 2.233-2.862 3.013C28.348 19.938 21.276 28 11.788 28"
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
