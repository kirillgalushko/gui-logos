import { defineComponent as e, computed as l, openBlock as i, createElementBlock as f, normalizeStyle as r, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ e({
  __name: "LogoIntellijIdea2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, t) => (i(), f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(p.value)
    }, t[0] || (t[0] = [
      n('<defs><linearGradient id="intellij-idea-2-gui-asset-a" x1="37.036%" x2="178.13%" y1="51.017%" y2="41.861%"><stop offset="9%" stop-color="#FC801D"></stop><stop offset="23%" stop-color="#B07F61"></stop><stop offset="41%" stop-color="#577DB3"></stop><stop offset="53%" stop-color="#1E7CE6"></stop><stop offset="59%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="intellij-idea-2-gui-asset-b" x1="73.557%" x2="35.575%" y1="114.76%" y2="1.075%"><stop offset="0%" stop-color="#FE2857"></stop><stop offset="8%" stop-color="#CB3979"></stop><stop offset="16%" stop-color="#9E4997"></stop><stop offset="25%" stop-color="#7557B2"></stop><stop offset="34%" stop-color="#5362C8"></stop><stop offset="44%" stop-color="#386CDA"></stop><stop offset="54%" stop-color="#2373E8"></stop><stop offset="66%" stop-color="#1478F2"></stop><stop offset="79%" stop-color="#0B7BF8"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="intellij-idea-2-gui-asset-c" x1="28.551%" x2="81.801%" y1="23.614%" y2="129.755%"><stop offset="0%" stop-color="#FE2857"></stop><stop offset="8%" stop-color="#FE295F"></stop><stop offset="21%" stop-color="#FF2D76"></stop><stop offset="30%" stop-color="#FF318C"></stop><stop offset="38%" stop-color="#EA3896"></stop><stop offset="55%" stop-color="#B248AE"></stop><stop offset="79%" stop-color="#5A63D6"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient></defs><g><polygon fill="url(#intellij-idea-2-gui-asset-a)" points="40.5333333 180.56 2.88 150.826667 25.04 109.786667 58.3466667 120.933333"></polygon><polygon fill="#087CFA" points="256 68.24 251.386667 216.506667 152.773333 256 99.0666667 221.333333"></polygon><polygon fill="url(#intellij-idea-2-gui-asset-b)" points="256 68.24 207.2 115.84 144.533333 38.96 175.466667 4.18666667"></polygon><polygon fill="url(#intellij-idea-2-gui-asset-c)" points="99.0666667 221.333333 20.64 249.68 37.0666667 192.16 58.3466667 120.933333 0 101.413333 37.0666667 0 120.853333 9.89333333 207.2 115.84"></polygon><polygon fill="#000" points="49.1466667 48 209.146667 48 209.146667 208 49.1466667 208"></polygon><path fill="#FFF" d="M69.093 177.76h60v10h-60zM99.04 78.987V68.053H69.2v10.934h8.373v37.76H69.2v10.933h29.84v-10.933h-8.347v-37.76zm28.427 49.44.186.106a23.7 23.7 0 0 1-11.706-2.666 27.1 27.1 0 0 1-7.787-6.294l8.24-9.2a23.6 23.6 0 0 0 5.173 4.374 10.67 10.67 0 0 0 5.734 1.6 7.6 7.6 0 0 0 5.84-2.32 11.1 11.1 0 0 0 2.133-7.547V68h13.333v39.067a27 27 0 0 1-1.466 9.306 17.3 17.3 0 0 1-10.854 10.667 26.3 26.3 0 0 1-8.826 1.387"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
