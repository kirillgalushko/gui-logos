import { defineComponent as h, computed as n, openBlock as m, createElementBlock as a, normalizeStyle as p, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoMicrosoftOnedrive",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, l = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, i) => (m(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "165",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 165",
      style: p(l.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#0364B8",
          d: "m154.66 110.682 52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"
        }),
        e("path", {
          fill: "#0078D4",
          d: "m97.618 45.552-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915 60.694-48.94z"
        }),
        e("path", {
          fill: "#1490DF",
          d: "M207.502 60.148a53 53 0 0 0-3.51-.131 51.8 51.8 0 0 0-20.61 4.254l-.002-.005-32.022 13.475 35.302 43.607 63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"
        }),
        e("path", {
          fill: "#28A8EA",
          d: "M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
