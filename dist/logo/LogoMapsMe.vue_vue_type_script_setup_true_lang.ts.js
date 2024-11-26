import { defineComponent as c, computed as i, openBlock as o, createElementBlock as h, normalizeStyle as n, createElementVNode as l } from "vue";
const r = /* @__PURE__ */ c({
  __name: "LogoMapsMe",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, m = i(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (o(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(m.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#4CD960",
          d: "M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0s128 57.308 128 128"
        }),
        l("path", {
          fill: "#FFF",
          d: "M81.354 154.734a1.287 1.287 0 0 0-1.827-.009l-21.211 21.201 1.372 6.51c2.152 11.202 13.079 18.949 24.282 16.797l32.5-6.245a1.124 1.124 0 0 0 .59-1.891zm-6.341-4.857a1.367 1.367 0 0 0 .01-1.927l-24.13-24.572c-.949-.966-2.574-.113-2.318 1.217l7.839 40.801c.207 1.076 1.532 1.484 2.308.711zm38.133-40.32a1.64 1.64 0 0 0 2.325.011l37.974-37.832c.896-.893.095-2.408-1.148-2.169L88.649 81.796a1.284 1.284 0 0 0-.673 2.161zm73.349 7.289 24.418 24.569c.8.805 2.159.09 1.949-1.025l-7.798-41.45a1.152 1.152 0 0 0-1.942-.606l-16.617 16.413a1.48 1.48 0 0 0-.01 2.099m-32.93-33.625 26.125 26.724a1.61 1.61 0 0 0 2.284.018l21.137-20.921-1.333-7.933c-2.153-11.202-12.713-18.607-23.915-16.454l-9.493 1.715-14.784 14.578a1.61 1.61 0 0 0-.021 2.273m-71.918 59.512 26.628-26.018a1.77 1.77 0 0 0 .025-2.51L78.608 84.006l-16.169 2.826c-10.572 2.031-17.757 11.318-16.724 21.835l33.429 34.04a1.773 1.773 0 0 0 2.503.026m66.703.96 27.125-26.896c.456-.452.46-1.188.009-1.645l-27.031-27.428a1.164 1.164 0 0 0-1.653-.005l-26.976 26.976a1.164 1.164 0 0 0-.007 1.64l26.883 27.347a1.163 1.163 0 0 0 1.65.011m-.024 11.174a1.3 1.3 0 0 0-1.85-.012l-27.037 26.967a1.3 1.3 0 0 0-.002 1.84l7.156 7.179 45.44-8.747a1.322 1.322 0 0 0 .696-2.222zM215.704 156l-33.794-34.296a1.49 1.49 0 0 0-2.122-.005l-26.467 26.604a1.494 1.494 0 0 0-.006 2.101l29.074 29.577 17.004-3.268c10.053-1.931 16.536-10.792 16.311-20.713m-101.778-14.444a7.555 7.555 0 1 0 0 15.111 7.555 7.555 0 0 0 7.555-7.556 7.554 7.554 0 0 0-7.555-7.555m-21.687-64.37 6.282-1.372a1.62 1.62 0 0 0 1.273-1.466l-.09-2.866c.17-2.265 1.318-4.591 2.789-6.321 1.728-2.033 3.741-3.625 6.293-4.14l15.186-3.111c3.425-.691 8.324.905 10.991 3.794a16.8 16.8 0 0 1 3.131 5.107c.231.598.85.95 1.481.835l6.158-1.125a1.32 1.32 0 0 0 1.057-1.583c-.364-1.622-1.478-4.672-4.864-9.012-3.63-4.889-12.745-7.978-19.354-6.644L107.617 52.3c-7.441 1.502-14.061 6.959-15.839 14.589-.997 3.043-1.028 7.09-.961 9.192a1.17 1.17 0 0 0 1.422 1.105"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
