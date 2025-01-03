import { defineComponent as h, computed as r, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoGravatar2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#4678EB",
          d: "M102.397 25.589v89.595c0 14.132 11.457 25.589 25.59 25.589s25.588-11.457 25.588-25.59V55.578c32.265 11.375 53.116 42.72 51.14 76.873-1.977 34.154-26.305 62.883-59.666 70.46-33.362 7.577-67.713-7.825-84.249-37.775-16.535-29.95-11.268-67.225 12.918-91.42 9.827-10.034 9.744-26.11-.187-36.04-9.931-9.932-26.007-10.015-36.04-.187C-5.687 80.665-12.352 148.33 21.574 199.103c33.925 50.771 98.99 70.507 155.405 47.138 56.414-23.37 88.463-83.336 76.548-143.224C241.61 43.127 189.049-.004 127.987 0c-14.133 0-25.59 11.457-25.59 25.589"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
