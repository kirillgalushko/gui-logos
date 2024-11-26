import { defineComponent as m, computed as h, openBlock as r, createElementBlock as s, normalizeStyle as c, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoGnome2",
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
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "315",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 315",
      style: c(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M210.658 136.723c10.613 63.064-150.402 86.092-89.773 132.253 19.046 14.5 38.493 3.392 35.547-19.101-2.458-18.766 65.957-30.13 60.598-1.77-7.016 37.191-44.519 66.55-77.033 66.55-66.092 0-129.432-76.857-117.052-132.256 18.29-81.907 178.903-98.023 187.713-45.676m-180.2-7.804c-13.944 6.136-45.617-33.426-21.915-49.803 23.712-16.374 35.86 43.665 21.916 49.803M69.75 97.493c-16.586 3.39-41.7-47.043-12.093-59.261C87.26 26.016 86.35 94.109 69.75 97.493M229.01 0c65.46 0-4.095 93.234-40.914 93.234C151.27 93.234 163.55 0 229.008 0M120.315 81.68c-19.615-1.196-32.57-65.26 4.268-70.042 36.85-4.781 15.339 71.24-4.268 70.043"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
