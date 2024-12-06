import { defineComponent as m, computed as h, openBlock as s, createElementBlock as n, normalizeStyle as a, createElementVNode as i } from "vue";
const p = /* @__PURE__ */ m({
  __name: "LogoCoda",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, c = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (s(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "177",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 177",
      style: a(c.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#101010",
          d: "M0 107.937c0 42.462 29.392 68.854 66.58 68.854 13.07 0 26.14-3.157 35.675-10.292v-33.18a46.85 46.85 0 0 1-31.412 11.902c-19.321 0-34.727-13.827-34.727-37.19 0-22.996 14.867-36.51 33.821-36.926l.906-.01a45.78 45.78 0 0 1 31.57 11.807V49.66c-9.471-7.292-22.604-10.07-35.674-10.07C29.392 39.589 0 65.98 0 107.937M178.022 39.59c-37.884 0-64.34 28.16-64.34 68.348s26.393 68.854 64.34 68.854 64.56-28.413 64.56-68.854c0-40.44-26.36-68.348-64.56-68.348m0 106.295c-18.09 0-28.16-15.785-28.16-37.884s10.07-37.694 28.16-37.694S206.151 86.091 206.151 108s-9.787 37.884-28.129 37.884m168.204-92.468a45.75 45.75 0 0 0-33.18-13.827c-38.2 0-59.793 30.906-59.793 68.348 0 37.884 21.594 68.854 59.793 68.854a46.76 46.76 0 0 0 33.18-13.828v10.829h36.432V0h-36.432zm0 76.4a27.91 27.91 0 0 1-24.877 15.058c-19.857 0-31.57-15.785-31.57-36.937s11.807-36.684 31.57-36.684a27.94 27.94 0 0 1 24.877 15.343zm109.327-90.227c-17.585 0-34.412 4.798-43.977 10.828v31.57a65.63 65.63 0 0 1 35.926-10.829c18.595 0 29.423 8.05 29.423 20.868v7.293c-5.303-3.789-18.12-7.798-29.423-7.798-28.886 0-50.732 17.08-50.732 42.209 0 27.15 21.846 42.461 48.49 42.461 14.302 0 27.372-5.02 31.57-9.281v7.04H512V89.848c.094-31.917-20.521-50.26-56.447-50.26m21.372 98.497c-3.157 7.04-12.817 11.334-23.14 11.334-11.555 0-23.362-4.799-23.362-16.1 0-11.303 11.807-16.07 23.362-16.07 10.323 0 19.857 4.262 23.14 11.302z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};