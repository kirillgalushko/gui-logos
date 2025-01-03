import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoCoda2",
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
    return (d, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "275",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 275",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F46A54",
          d: "M233.065 0H22.915C10.292.023.057 10.23 0 22.851V251.42c.058 12.628 10.3 22.84 22.928 22.858h210.15c12.627-.019 22.868-10.232 22.922-22.858v-10.661c-.384-13.72-.768-42.289-.768-55.24 0-7.24-5.348-13.335-12.225-13.335-7.645 0-12.61 4.573-16.428 8.378-11.464 10.291-28.66 12.197-43.566 9.53-6.87-1.529-13.37-3.428-18.711-6.856-16.435-9.53-27.131-27.431-27.131-46.477 0-19.047 10.696-36.57 27.124-46.478 5.732-3.428 12.232-5.334 18.725-6.856 14.522-2.667 32.095-.768 43.559 9.523 4.203 3.812 9.167 8.378 16.428 8.378 6.877 0 12.225-6.095 12.225-13.335 0-12.567.384-41.52.768-55.233v-9.907C256 10.284 245.681 0 233.072 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
