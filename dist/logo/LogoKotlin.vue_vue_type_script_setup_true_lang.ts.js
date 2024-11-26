import { defineComponent as p, computed as i, openBlock as l, createElementBlock as r, normalizeStyle as n, createStaticVNode as f } from "vue";
const g = /* @__PURE__ */ p({
  __name: "LogoKotlin",
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
    return (a, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(e.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="kotlin-gui-asset-a" x1="26.599%" x2="73.845%" y1="146.559%" y2="52.381%"><stop offset="9.677%" stop-color="#0095D5"></stop><stop offset="30.07%" stop-color="#238AD9"></stop><stop offset="62.11%" stop-color="#557BDE"></stop><stop offset="86.43%" stop-color="#7472E2"></stop><stop offset="100%" stop-color="#806EE3"></stop></linearGradient><linearGradient id="kotlin-gui-asset-b" x1="13.984%" x2="68.682%" y1="37.105%" y2="-13.554%"><stop offset="11.83%" stop-color="#0095D5"></stop><stop offset="41.78%" stop-color="#3C83DC"></stop><stop offset="69.62%" stop-color="#6D74E1"></stop><stop offset="83.33%" stop-color="#806EE3"></stop></linearGradient><linearGradient id="kotlin-gui-asset-c" x1="-16.836%" x2="76.219%" y1="91.94%" y2="-1.116%"><stop offset="10.75%" stop-color="#C757BC"></stop><stop offset="21.38%" stop-color="#D0609A"></stop><stop offset="42.54%" stop-color="#E1725C"></stop><stop offset="60.48%" stop-color="#EE7E2F"></stop><stop offset="74.3%" stop-color="#F58613"></stop><stop offset="82.32%" stop-color="#F88909"></stop></linearGradient></defs><g><polygon fill="url(#kotlin-gui-asset-a)" points="0 256 128.426667 127.573333 256 256"></polygon><polygon fill="url(#kotlin-gui-asset-b)" points="0 0 128.426667 0 0 138.666667"></polygon><polygon fill="url(#kotlin-gui-asset-c)" points="128.426667 0 0 135.253333 0 256 128.426667 127.573333 256 0"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
