import { defineComponent as n, computed as m, openBlock as p, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoExpo",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -12.5 256 256",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000020",
          d: "M121.309 84.673c2.094-3.086 4.385-3.478 6.244-3.478 1.86 0 4.957.392 7.051 3.478 16.502 22.667 43.742 67.819 63.835 101.126 13.104 21.72 23.168 38.403 25.233 40.526 7.751 7.97 18.382 3.003 24.559-6.037 6.081-8.9 7.77-15.15 7.77-21.817 0-4.54-88.106-168.4-96.979-182.039C150.49 3.314 147.71 0 133.106 0h-10.93c-14.56 0-16.665 3.314-25.198 16.432C88.106 30.072 0 193.93 0 198.472c0 6.666 1.688 12.916 7.77 21.816 6.177 9.04 16.808 14.007 24.559 6.037 2.065-2.123 12.13-18.806 25.233-40.526 20.093-33.307 47.245-78.46 63.747-101.126"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
