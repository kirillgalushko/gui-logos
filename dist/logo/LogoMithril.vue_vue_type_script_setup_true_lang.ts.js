import { defineComponent as m, computed as h, openBlock as n, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const a = /* @__PURE__ */ m({
  __name: "LogoMithril",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, c = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (n(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "246",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 246",
      style: r(c.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#010002",
          d: "M213.424 160.075c-.114 47.306-38.639 85.764-85.972 85.764-47.408 0-85.98-38.572-85.98-85.98l.027-.437C16.67 144.328 0 117.095 0 85.98 0 38.565 38.565 0 85.98 0c15.261 0 29.574 4.044 42.017 11.05C140.439 4.043 154.759 0 170.02 0 217.435 0 256 38.572 256 85.98c0 31.566-17.146 59.143-42.576 74.095M127.997 29.117c-15.558 11.528-26.285 29.212-28.398 49.474 8.748-3.015 18.095-4.724 27.853-4.724 10.188 0 19.918 1.87 28.982 5.14-2.005-20.436-12.772-38.282-28.437-49.89m-70.684 121.55c8.768 3.897 18.458 6.117 28.666 6.117a70.3 70.3 0 0 0 27.954-5.773c-14.226-12.288-24.42-29.104-28.23-48.229-15.228 11.184-25.826 28.263-28.39 47.885m70.139-61.62a70.3 70.3 0 0 0-27.65 5.633c2.428 19.703 12.98 36.89 28.195 48.161 15.093-11.184 25.584-28.175 28.128-47.676-8.775-3.91-18.465-6.117-28.673-6.117m14.609 61.97a70.4 70.4 0 0 0 27.953 5.774 70.3 70.3 0 0 0 27.657-5.632c-2.396-19.414-12.671-36.365-27.516-47.657-3.916 18.835-14.044 35.376-28.094 47.515m-14.61 79.647c36.554 0 66.72-27.838 70.429-63.423-8.748 3.008-18.095 4.724-27.86 4.724-15.261 0-29.581-4.044-42.023-11.049-12.436 7.005-26.749 11.05-42.018 11.05-10.188 0-19.918-1.871-28.982-5.135 3.519 35.78 33.767 63.833 70.455 63.833M85.98 15.168c-39.05 0-70.811 31.762-70.811 70.811 0 23 11.07 43.41 28.108 56.358 5.006-24.098 20.18-44.46 40.772-56.58.074-25.887 11.675-49.076 29.891-64.809a70.2 70.2 0 0 0-27.96-5.78m84.042 0a70.3 70.3 0 0 0-27.954 5.773c18.27 15.78 29.905 39.057 29.905 65.032l-.027.437c20.235 12.308 35.053 32.65 39.824 56.633 17.583-12.9 29.063-33.64 29.063-57.064-.006-39.043-31.768-70.811-70.811-70.811"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};