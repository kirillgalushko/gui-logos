import { defineComponent as h, computed as n, openBlock as s, createElementBlock as r, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoBasekit",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "217",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 217",
      style: l(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#02161F",
          d: "M0 216.306V0h256v216.306zm111.265-57.261c19.563 0 29.65-12.216 29.65-27.638 0-12.674-8.56-23.21-19.563-24.89 9.628-1.985 17.576-10.689 17.576-23.362 0-13.59-9.935-25.959-29.345-25.959H55.938v101.849zm90.659 0-36.243-52.618 36.139-49.23h-26.747l-36.43 49.23 8.309 11.695 28.121 40.923zm-96.162-42.297c8.406 0 12.991 5.191 12.991 11.605 0 7.33-4.89 11.605-12.99 11.605H77.64v-23.21zm-.917-40.465c7.337 0 11.922 4.428 11.922 10.689 0 6.566-4.585 10.689-11.922 10.689H77.641V76.283z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
