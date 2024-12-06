import { defineComponent as n, computed as h, openBlock as s, createElementBlock as l, normalizeStyle as p, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoHelpscout2",
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
    return (r, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "310",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 310",
      style: p(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#1292EE",
          d: "m18.432 180.969 90.484-90.485a63.72 63.72 0 0 0 18.99-45.428A64.25 64.25 0 0 0 109.476 0L18.99 90.484A63.72 63.72 0 0 0 0 135.913c0 17.687 7.075 33.512 18.432 45.056m219.136-52.876-90.484 90.484a63.72 63.72 0 0 0-18.99 45.429 64.25 64.25 0 0 0 18.431 45.056l90.484-90.485A63.72 63.72 0 0 0 256 173.15c0-17.687-7.075-33.513-18.432-45.056m-.559-37.422A63.72 63.72 0 0 0 256 45.242 64.25 64.25 0 0 0 237.568.186L18.991 218.577C7.26 230.307 0 246.32 0 264.192a64.25 64.25 0 0 0 18.432 45.056z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};