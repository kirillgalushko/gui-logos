import { defineComponent as n, computed as m, openBlock as s, createElementBlock as c, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoCouchbase",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (s(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#ED2226",
          d: "M128 0C57.426 0 0 57.233 0 128c0 70.574 57.233 128 128 128 70.574 0 128-57.233 128-128S198.574 0 128 0m86.429 150.429c0 7.734-4.447 14.502-13.148 16.048-15.082 2.707-46.792 4.254-73.281 4.254s-58.2-1.547-73.281-4.254c-8.7-1.546-13.148-8.314-13.148-16.048v-49.885c0-7.734 5.994-14.888 13.148-16.049 4.447-.773 14.888-1.546 23.01-1.546 3.093 0 5.606 2.32 5.606 5.994v34.997l44.858-.967 44.858.967V88.943c0-3.674 2.514-5.994 5.608-5.994 8.12 0 18.562.773 23.009 1.546 7.347 1.16 13.148 8.315 13.148 16.049-.387 16.435-.387 33.257-.387 49.885"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
