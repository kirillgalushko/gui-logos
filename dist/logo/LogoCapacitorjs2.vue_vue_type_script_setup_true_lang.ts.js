import { defineComponent as l, computed as n, openBlock as p, createElementBlock as g, normalizeStyle as s, createStaticVNode as h } from "vue";
const m = /* @__PURE__ */ l({
  __name: "LogoCapacitorjs2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const o = i, e = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (r, t) => (p(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(e.value)
    }, t[0] || (t[0] = [
      h('<g><polygon fill="#53B9FF" points="39.8626133 54.11456 0.310594133 93.71648 61.30624 154.894933 0 216.385067 39.4282667 256.004267 100.858027 194.497067 161.9552 255.5648 201.5072 215.962667"></polygon><polygon fill="#119EFF" points="140.517333 154.896 100.859413 194.497067 161.956267 255.565867 201.508267 215.963733"></polygon><polygon fill="#000" fill-opacity=".2" points="140.517333 154.896 100.859413 194.497067 116.125867 209.678933"></polygon><polygon fill="#53B9FF" points="194.5696 100.985173 256 39.4779733 216.430933 0 155.018667 61.3835733 93.9165867 0.310993067 54.3645867 39.91296 216.0096 201.761067 255.5616 162.158933"></polygon><polygon fill="#119EFF" points="115.36 100.986773 155.018667 61.3850667 93.9165867 0.312500267 54.3645867 39.9144533"></polygon><polygon fill="#000" fill-opacity=".2" points="115.358933 100.985387 155.0176 61.3837867 139.7472 46.1978667"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};
