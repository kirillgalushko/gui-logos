import { defineComponent as s, computed as i, openBlock as l, createElementBlock as n, normalizeStyle as a, createStaticVNode as r } from "vue";
const g = /* @__PURE__ */ s({
  __name: "LogoAppcode",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, p = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (d, t) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(p.value)
    }, t[0] || (t[0] = [
      r('<defs><linearGradient id="appcode-gui-asset-a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="19%" stop-color="#07C3F2"></stop><stop offset="90%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="appcode-gui-asset-b" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="19%" stop-color="#07C3F2"></stop><stop offset="90%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="appcode-gui-asset-c" x1="65.642%" x2="16.245%" y1="103.177%" y2="34.031%"><stop offset="9%" stop-color="#21D789"></stop><stop offset="48%" stop-color="#07C3F2"></stop><stop offset="90%" stop-color="#087CFA"></stop></linearGradient></defs><g><polygon fill="#087CFA" points="195.626667 256 256 96.3733333 208 85.4933333"></polygon><polygon fill="url(#appcode-gui-asset-a)" points="255.253333 205.333333 195.626667 256 110.533333 234.08"></polygon><polygon fill="url(#appcode-gui-asset-b)" points="31.8666667 117.28 4.66666667 39.4666667 140.48 -7.10542736e-15"></polygon><polygon fill="url(#appcode-gui-asset-c)" points="223.36 148.213333 185.253333 83.1733333 185.973333 82.72 140.48 0 0 151.706667 0 256 255.253333 205.333333"></polygon><polygon fill="#000" points="48 48 208 48 208 208 48 208"></polygon><path fill="#FFF" d="M67.947 177.76h60v10h-60zm112.24-101.573-8.48 9.786a22.3 22.3 0 0 0-15.467-6.826c-10.073 0-17.383 8.266-17.544 18.481l-.003.532c0 10.373 7.174 19.013 17.547 19.013 6.436 0 10.556-2.315 15.015-6.212l.655-.582.33-.299 8.373 8.587a31.01 31.01 0 0 1-24.8 10.666 30.533 30.533 0 0 1-31.044-30.517l.004-.656a30.747 30.747 0 0 1 31.547-31.28 31.28 31.28 0 0 1 23.867 9.307M101.333 68l25.547 60.08h-13.707l-5.333-13.333H82.507l-5.334 13.333H63.84L89.333 68zm-6.186 15.76-8 19.36h16z"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
