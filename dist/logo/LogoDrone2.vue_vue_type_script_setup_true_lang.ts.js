import { defineComponent as n, computed as h, openBlock as r, createElementBlock as l, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoDrone2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#00ABE4",
          d: "m51.091 28.487-1.268 1.153 44.393 43.816a65.5 65.5 0 0 0-9.8 35.17 60.767 60.767 0 0 0 63.303 62.61 65.7 65.7 0 0 0 35.514-9.8l44.624 44.393a125.57 125.57 0 0 1-101.009 49.236A124.993 124.993 0 0 1 .01 129.726a122.57 122.57 0 0 1 51.081-101.24m24.791-16.95a128.8 128.8 0 0 1 54.08-11.53 124.76 124.76 0 0 1 126.03 125.339 126.85 126.85 0 0 1-11.53 54.194l-39.782-39.781a65.84 65.84 0 0 0 9.801-34.592 60.88 60.88 0 0 0-63.418-63.304 64.7 64.7 0 0 0-34.593 9.801zm75.872 129.72a36.67 36.67 0 0 1-37.936-37.475 36.67 36.67 0 0 1 37.936-38.051 37.014 37.014 0 0 1 37.821 38.051 36.437 36.437 0 0 1-37.82 37.82z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
