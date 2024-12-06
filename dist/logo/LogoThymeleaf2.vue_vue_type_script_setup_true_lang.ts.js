import { defineComponent as l, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoThymeleaf2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: p(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "256.431",
          x: "0",
          y: "0",
          fill: "#005F0F"
        }),
        t("path", {
          fill: "#FFF",
          d: "M218.187 34.965c-31.528 38.634-70.032 70.992-111.094 99.043-13.348 9.555-28.084 18.06-38.347 31.144-3.92 6.886-4.865 16.584 1.836 22.172 11.16 10.517 28.544 12.805 42.525 6.917 19.575-7.456 33.094-24.427 44.458-41.25 25.358-36.533 40.737-78.555 60.622-118.026"
        }),
        t("path", {
          fill: "#AEA99F",
          d: "M200.104 48.324c-39.254 31.102-70.652 47.91-110.797 62.37-12.116 5.184-25.1 11.763-30.73 24.485-5.794 12.036-3.895 28.82 2.753 39.963-.497-4.69 2.009-12.27 5.738-15.829 12.372-13.778 28.488-22.806 42.663-33.269l.034-.028.034-.023c32.806-22.53 63.563-48.276 90.305-77.67"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};