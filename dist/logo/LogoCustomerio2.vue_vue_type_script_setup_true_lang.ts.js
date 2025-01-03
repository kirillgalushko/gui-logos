import { defineComponent as l, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as e } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoCustomerio2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, o = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "180",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 180",
      style: r(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#FFCD00",
          d: "M127.843 102.423a51.21 51.21 0 1 0-51.21-51.186 51.186 51.186 0 0 0 51.21 51.186"
        }),
        e("path", {
          fill: "#00ECBB",
          d: "M128.161 128.016h-.171c-35.127-.009-65.777-23.834-74.453-57.872-2.571-10.238-10.898-18.907-21.454-18.907H0c0 70.686 57.303 127.99 127.99 127.99h.171z"
        }),
        e("path", {
          fill: "#AF64FF",
          d: "M127.843 128.016h.147c35.13 0 65.785-23.829 74.452-57.872 2.597-10.238 10.923-18.907 21.48-18.907h32.082c-.013 70.69-57.323 127.99-128.014 127.99h-.147z"
        }),
        e("path", {
          fill: "#7131FF",
          d: "M218.509 141.73a127.99 127.99 0 0 1-181.013 0l36.197-36.197c30 29.98 78.618 29.98 108.618 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
