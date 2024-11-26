import { defineComponent as n, computed as l, openBlock as m, createElementBlock as c, normalizeStyle as r, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoHhru",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "48",
      height: "48",
      version: "1.1",
      viewBox: "0 0 48 48",
      style: r(o.value)
    }, t[0] || (t[0] = [
      h("path", {
        fill: "#D6001C",
        d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24"
      }, null, -1),
      h("path", {
        fill: "#FEFEFE",
        d: "M13.65 13.169v8.164c1.243-1.482 2.733-2.228 4.461-2.228.89 0 1.687.17 2.402.507q1.074.503 1.615 1.287c.364.527.61 1.104.743 1.74q.198.95.198 2.954v8.729h-3.862V26.46q.002-2.339-.217-2.968a1.92 1.92 0 0 0-.775-1q-.557-.376-1.394-.375c-.64 0-1.214.16-1.713.478-.51.32-.876.798-1.108 1.437q-.355.96-.35 2.836l-.004 7.454H9.789V13.169zm15.206 0v8.164c1.244-1.482 2.733-2.228 4.46-2.228q1.331 0 2.406.507 1.07.503 1.61 1.287a4.7 4.7 0 0 1 .743 1.74q.2.95.199 2.954v8.729h-3.858V26.46q0-2.339-.22-2.968a1.9 1.9 0 0 0-.777-1q-.554-.376-1.394-.375c-.639 0-1.213.16-1.713.478q-.754.48-1.106 1.437-.349.96-.35 2.836v7.454H25V13.169z"
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
