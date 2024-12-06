import { defineComponent as h, computed as m, openBlock as r, createElementBlock as l, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoArchlinux",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#1793D1",
          d: "M127.976 0c-11.397 27.936-18.27 46.21-30.959 73.315 7.78 8.245 17.329 17.846 32.837 28.69-16.673-6.859-28.045-13.746-36.544-20.892C77.07 114.992 51.63 163.25 0 256c40.579-23.422 72.035-37.863 101.35-43.373a74.3 74.3 0 0 1-1.926-17.378l.049-1.3c.644-25.992 14.168-45.98 30.188-44.624 16.02 1.357 28.473 23.542 27.83 49.535-.122 4.89-.674 9.596-1.638 13.96C184.851 218.49 215.97 232.894 256 256c-7.893-14.529-14.938-27.626-21.666-40.1-10.598-8.212-21.652-18.9-44.2-30.47 15.498 4.025 26.595 8.67 35.244 13.863C156.973 71.958 151.434 55.038 127.976 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};