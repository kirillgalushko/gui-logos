import { defineComponent as c, computed as l, openBlock as o, createElementBlock as s, normalizeStyle as v, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ c({
  __name: "LogoNvidia",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, h) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "98",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 98",
      style: v(m.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#000",
          d: "M312.805 18.394v63.838h18.015V18.394zm-141.742-.108v63.892h18.178v-49.61l14.174.054c4.653 0 7.899 1.136 10.117 3.517 2.867 3.03 4.003 7.952 4.003 16.879v29.16h17.637V46.904c0-25.21-16.068-28.618-31.757-28.618zm170.793.108v63.838h29.214c15.58 0 20.666-2.597 26.13-8.386 3.896-4.057 6.384-13.038 6.384-22.83 0-8.98-2.11-16.987-5.843-21.964-6.6-8.927-16.23-10.658-30.62-10.658zm17.853 13.85h7.736c11.253 0 18.503 5.03 18.503 18.123s-7.25 18.177-18.503 18.177h-7.736zm-72.872-13.85-15.04 50.583-14.39-50.583H237.93l20.558 63.838h25.967l20.775-63.838zm125.187 63.838h18.015V18.394h-18.015zm50.529-63.838-25.157 63.784h17.745l4.004-11.307h29.754l3.787 11.252H512l-25.373-63.73zm11.685 11.631 10.929 29.863h-22.181z"
        }),
        t("path", {
          fill: "#76B900",
          d: "M54.803 28.997v-8.764c.866-.054 1.731-.108 2.597-.108 24.02-.757 39.763 20.666 39.763 20.666S80.176 64.38 61.944 64.38c-2.434 0-4.815-.379-7.087-1.136V36.626c9.36 1.136 11.253 5.247 16.825 14.606L84.18 40.737s-9.143-11.956-24.507-11.956c-1.623-.054-3.246.054-4.869.216m0-28.997v13.092l2.597-.162c33.38-1.136 55.182 27.374 55.182 27.374S87.587 70.708 61.566 70.708c-2.273 0-4.49-.216-6.709-.595v8.115c1.84.217 3.733.379 5.572.379 24.237 0 41.765-12.389 58.753-26.996 2.813 2.272 14.336 7.736 16.717 10.117-16.122 13.525-53.721 24.399-75.037 24.399a53 53 0 0 1-5.95-.325v11.415h92.077V0zm0 63.243v6.924c-22.397-4.003-28.619-27.32-28.619-27.32s10.766-11.902 28.619-13.85v7.574h-.054c-9.36-1.136-16.717 7.628-16.717 7.628s4.166 14.77 16.771 19.044M15.04 41.873s13.254-19.584 39.817-21.64v-7.14C25.427 15.472 0 40.357 0 40.357s14.39 41.657 54.803 45.444v-7.574C25.156 74.55 15.04 41.873 15.04 41.873"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
