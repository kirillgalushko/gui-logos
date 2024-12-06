import { defineComponent as m, computed as n, openBlock as s, createElementBlock as r, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoDelighted2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#4C4C4B",
          d: "M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0M82.264 189.391c29.127 23.608 74.724 17.006 100.988-14.427-25.477-3.377-55.559-11.357-79.962-20.873-6.599 12.739-11.664 22.868-21.026 35.3m74.897-128.716c-15.962 4.092-36.835 39.699-49.113 78.682 29.774 13.506 53.103 19.031 85.333 22.919 0 0 29.775-66.609-36.22-101.601m-10.744 163.709c-34.78 6.688-79.808-11.511-96.537-38.216 0 0 23.935-26.539 30.542-42.053-7.124-5.527-11.409-8.707-15.954-12.76-26.228-23.386-25.762-55.572.999-78.427 29.837-25.482 75.253-29.603 110.294-10.006 35.383 19.788 55.566 60.502 49.157 99.163-7.027 42.384-38.829 74.67-78.501 82.299M134.139 55.559c-20.057-.29-35.217 3.735-49.306 13.694-23.159 16.37-22.033 42.486 2.78 58.067 11.84-27.253 21.423-52.042 46.526-71.761"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};