import { defineComponent as h, computed as n, openBlock as s, createElementBlock as r, normalizeStyle as p, createElementVNode as i } from "vue";
const l = /* @__PURE__ */ h({
  __name: "LogoMedium3",
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
    return (c, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "146",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 146",
      style: p(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M72.2 0c39.877 0 72.2 32.549 72.2 72.696 0 40.148-32.326 72.694-72.2 72.694-39.872 0-72.2-32.546-72.2-72.694C0 32.55 32.325 0 72.2 0m115.3 4.258c19.938 0 36.101 30.638 36.101 68.438h.003c0 37.791-16.163 68.438-36.1 68.438-19.939 0-36.101-30.647-36.101-68.438 0-37.79 16.16-68.438 36.098-68.438m55.803 7.129c7.011 0 12.697 27.449 12.697 61.31 0 33.85-5.684 61.31-12.697 61.31s-12.694-27.452-12.694-61.31 5.684-61.31 12.694-61.31"
        })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};
