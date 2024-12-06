import { defineComponent as o, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as a, createElementVNode as l } from "vue";
const c = /* @__PURE__ */ o({
  __name: "LogoTnw",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "125",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 125",
      style: a(i.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#F42",
          "fill-rule": "nonzero",
          d: "M124.121 0h67.894a46.55 46.55 0 0 1 32.03 12.773l.883.86 25.176 25.155a46.58 46.58 0 0 1 13.637 31.68l.017 1.232v52.421h-46.546V78.127c0-3.84-1.442-7.535-4-10.376l-.566-.595L196.57 51.09a15.54 15.54 0 0 0-10.161-4.523l-.821-.022h-14.921v77.576H124.12zm201.697 0v77.576h14.921c3.84 0 7.534-1.424 10.375-3.98l.596-.565 16.088-16.066a15.55 15.55 0 0 0 4.544-10.15l.022-.82V0h46.545v52.42c0 8.545-2.384 16.834-6.734 24.029l-.703 1.127h22.358c3.84 0 7.534-1.424 10.375-3.98l.596-.565 16.088-16.066a15.55 15.55 0 0 0 4.544-10.15l.022-.82V0H512v52.42a46.56 46.56 0 0 1-12.794 32.03l-.86.883-25.166 25.155a46.57 46.57 0 0 1-31.69 13.617l-1.233.016h-44.62V94.948l-15.548 15.54a46.57 46.57 0 0 1-31.69 13.617l-1.233.016h-67.893V0zM108.606 0v46.545h-31.03v77.576H31.03V46.545H0V0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};