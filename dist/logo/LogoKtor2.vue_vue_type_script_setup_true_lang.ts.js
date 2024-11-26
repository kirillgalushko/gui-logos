import { defineComponent as p, computed as i, openBlock as r, createElementBlock as l, normalizeStyle as n, createStaticVNode as f } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoKtor2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(e.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="ktor-2-gui-asset-a" x1="23.965%" x2="74.641%" y1="23.965%" y2="74.641%"><stop offset="29.6%" stop-color="#00AFFF"></stop><stop offset="69.4%" stop-color="#5282FF"></stop><stop offset="100%" stop-color="#945DFF"></stop></linearGradient><linearGradient id="ktor-2-gui-asset-b" x1="26.206%" x2="74.117%" y1="26.206%" y2="74.117%"><stop offset="10.8%" stop-color="#C757BC"></stop><stop offset="17.3%" stop-color="#CD5CA9"></stop><stop offset="49.2%" stop-color="#E8744F"></stop><stop offset="71.6%" stop-color="#F88316"></stop><stop offset="82.3%" stop-color="#FF8900"></stop></linearGradient></defs><g><polygon fill="url(#ktor-2-gui-asset-a)" points="170.666667 85.3333333 128.176988 42.8436543 85.3333333 0 40.2773333 45.056 0 85.3333333 85.3333333 170.666667"></polygon><polygon fill="url(#ktor-2-gui-asset-b)" points="85.3333333 170.666667 127.823012 213.156346 170.666667 256 215.722667 210.944 256 170.666667 170.666667 85.3333333"></polygon><polygon fill="#000" points="170.666667 85.3333333 85.3333333 85.3333333 85.3333333 170.666667 170.666667 170.666667"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
