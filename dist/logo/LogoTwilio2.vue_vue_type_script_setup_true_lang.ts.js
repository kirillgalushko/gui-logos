import { defineComponent as s, computed as n, openBlock as h, createElementBlock as c, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoTwilio2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (h(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F12E45",
          d: "M128 0c70.656 0 128 57.344 128 128s-57.344 128-128 128S0 198.656 0 128 57.344 0 128 0m0 33.792c-52.224 0-94.208 41.984-94.208 94.208S75.776 222.208 128 222.208s94.208-41.984 94.208-94.208S180.224 33.792 128 33.792m31.744 99.328c14.704 0 26.624 11.92 26.624 26.624s-11.92 26.624-26.624 26.624-26.624-11.92-26.624-26.624 11.92-26.624 26.624-26.624m-63.488 0c14.704 0 26.624 11.92 26.624 26.624s-11.92 26.624-26.624 26.624-26.624-11.92-26.624-26.624 11.92-26.624 26.624-26.624m63.488-63.488c14.704 0 26.624 11.92 26.624 26.624s-11.92 26.624-26.624 26.624-26.624-11.92-26.624-26.624 11.92-26.624 26.624-26.624m-63.488 0c14.704 0 26.624 11.92 26.624 26.624s-11.92 26.624-26.624 26.624-26.624-11.92-26.624-26.624 11.92-26.624 26.624-26.624"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
