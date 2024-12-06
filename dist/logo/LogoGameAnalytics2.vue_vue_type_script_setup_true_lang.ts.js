import { defineComponent as h, computed as m, openBlock as s, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoGameAnalytics2",
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
    return (p, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128A128 128 0 0 0 128 0m64.512 177.971-28.809-75.742s-11.639 30.277-14.899 39.254c-2.253 6.229-3.908 10.888-7.902 16.469a53.3 53.3 0 0 1-22.186 17.835 51.763 51.763 0 1 1-20.054-99.55 49.5 49.5 0 0 1 31.983 11.076l-7.014 18.5c-4.642-4.778-10.957-11.332-25.259-11.332-18.306.376-33.011 15.21-33.229 33.519-.045 15.841 11.016 29.547 26.51 32.847 15.493 3.3 31.18-4.709 37.593-19.194.444-.972.75-1.706.956-2.355h-40.26v-15.872l60.432-.12-12.8-3.413 15.36-40.362a52 52 0 0 1 10.667-1.23 50.7 50.7 0 0 1 10.65.974q17.408 45.67 34.799 91.392a54.9 54.9 0 0 1-16.538 7.304"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};