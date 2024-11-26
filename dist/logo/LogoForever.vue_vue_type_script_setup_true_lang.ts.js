import { defineComponent as n, computed as h, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoForever",
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
      height: "127",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 127",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M0 63.21q0-25.986 18.612-44.598T63.21 0t44.598 18.612l20.368 19.314 20.367-19.665Q166.804 0 192.79 0q25.635 0 44.423 18.612Q256 37.224 256 63.21t-18.787 44.598-44.423 18.612q-25.986 0-44.598-18.612l-20.016-19.314-20.72 19.665q-18.26 18.26-44.246 18.26t-44.598-18.611T0 63.21m63.21-26.69q-10.887 0-18.788 7.901t-7.9 18.788q0 11.236 7.725 18.963 7.725 7.725 18.963 7.725 11.236 0 18.963-7.725l19.314-18.963-19.314-18.612Q74.095 36.52 63.21 36.52m148.543 45.652q7.725-7.726 7.726-18.963 0-11.238-7.726-18.963t-18.787-7.726-18.788 7.726L154.513 63.21l19.314 18.612q7.726 7.726 18.963 7.9 11.238.177 18.963-7.55"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
