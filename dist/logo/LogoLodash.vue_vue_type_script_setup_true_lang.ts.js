import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoLodash",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "233",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 233",
      style: s(h.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("path", {
          fill: "#000",
          d: "M.388 0H24.18v157.893h94.087v19.466H.387zm182.766 46.503c16.222-2.163 33.526 1.081 46.503 11.896 14.06 9.733 21.63 27.036 22.71 43.258 2.164 19.466 0 38.933-10.814 55.155-9.733 12.977-24.873 21.629-42.177 22.71-16.222 2.163-34.606-1.081-48.665-11.896-12.978-10.814-19.467-27.036-21.63-43.258-2.162-17.304 0-36.77 10.815-51.91 8.652-15.14 25.955-24.874 43.258-25.955m3.245 18.385c10.814-1.082 22.71 2.162 31.362 9.733 7.57 8.651 11.896 19.466 12.978 30.28 1.081 11.897 0 24.874-5.408 35.689-5.407 10.814-15.14 18.385-27.036 20.547-10.815 2.163-22.71-1.081-30.281-7.57-8.652-6.489-14.059-16.222-16.222-25.955-2.163-14.059-1.081-28.118 4.326-41.095 5.407-11.896 17.303-20.548 30.28-21.63"
        }),
        t("path", {
          fill: "#3492FF",
          d: "M.388 205.477h255.224v27.037H.388z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
