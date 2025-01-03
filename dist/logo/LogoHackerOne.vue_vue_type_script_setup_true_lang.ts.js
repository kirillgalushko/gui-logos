import { defineComponent as c, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoHackerOne",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "478",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 478",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M9.132 5.98C3.075 9.966 0 15.178 0 21.486v433.84c0 5.503 3.15 10.5 9.457 15.14 6.263 4.647 13.983 6.963 23.196 6.963 8.806 0 16.527-2.316 23.233-6.963 6.67-4.595 10.063-9.637 10.063-15.14V21.523c0-6.346-3.23-11.476-9.737-15.542C49.704 2.034 41.866 0 32.653 0c-9.62 0-17.459 2.034-23.52 5.98M198.856 178.3l-88.296 55.346c-3.956 3.701-5.657 9.325-4.925 17.01.68 7.61 4.2 14.856 10.426 21.693 6.256 6.88 13.25 11.193 21.251 13.025 7.882 1.787 13.865.812 17.821-2.852l34.916-21.776v194.58c0 5.502 3.032 10.5 9.17 15.139 5.98 4.647 13.663 6.963 22.877 6.963s17.17-2.316 23.84-6.963c6.706-4.64 10.064-9.637 10.064-15.14V193.723c0-6.353-3.277-11.476-9.74-15.423-6.469-4.03-14.507-5.988-24.164-5.988-9.62 0-17.34 1.959-23.24 5.988"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
