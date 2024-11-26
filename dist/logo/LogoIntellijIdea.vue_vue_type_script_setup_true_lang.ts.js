import { defineComponent as e, computed as l, openBlock as i, createElementBlock as f, normalizeStyle as r, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ e({
  __name: "LogoIntellijIdea",
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
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(p.value)
    }, t[0] || (t[0] = [
      n('<defs><linearGradient id="intellij-idea-gui-asset-a" x1="0%" x2="99.799%" y1="50%" y2="50%"><stop offset="26%" stop-color="#F97A12"></stop><stop offset="46%" stop-color="#B07B58"></stop><stop offset="72%" stop-color="#577BAE"></stop><stop offset="91%" stop-color="#1E7CE5"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="intellij-idea-gui-asset-b" x1=".345%" x2="121.182%" y1="34.54%" y2="77.619%"><stop offset="0%" stop-color="#F97A12"></stop><stop offset="7%" stop-color="#CB7A3E"></stop><stop offset="15%" stop-color="#9E7B6A"></stop><stop offset="24%" stop-color="#757B91"></stop><stop offset="33%" stop-color="#537BB1"></stop><stop offset="43%" stop-color="#387CCC"></stop><stop offset="54%" stop-color="#237CE0"></stop><stop offset="66%" stop-color="#147CEF"></stop><stop offset="79%" stop-color="#0B7CF7"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="intellij-idea-gui-asset-c" x1="78.169%" x2="30.106%" y1="97.749%" y2="-6.624%"><stop offset="0%" stop-color="#FE315D"></stop><stop offset="8%" stop-color="#CB417E"></stop><stop offset="16%" stop-color="#9E4E9B"></stop><stop offset="25%" stop-color="#755BB4"></stop><stop offset="34%" stop-color="#5365CA"></stop><stop offset="44%" stop-color="#386DDB"></stop><stop offset="54%" stop-color="#2374E9"></stop><stop offset="66%" stop-color="#1478F3"></stop><stop offset="79%" stop-color="#0B7BF8"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="intellij-idea-gui-asset-d" x1="20%" x2="103.422%" y1="24.087%" y2="132.676%"><stop offset="0%" stop-color="#FE315D"></stop><stop offset="4%" stop-color="#F63462"></stop><stop offset="10%" stop-color="#DF3A71"></stop><stop offset="17%" stop-color="#C24383"></stop><stop offset="29%" stop-color="#AD4A91"></stop><stop offset="55%" stop-color="#755BB4"></stop><stop offset="92%" stop-color="#1D76ED"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient></defs><g><polygon fill="url(#intellij-idea-gui-asset-a)" points="64.8 199.6 2.8 150.8 33.6 93.6 122 128"></polygon><polygon fill="url(#intellij-idea-gui-asset-b)" points="256 68.4 251.2 216.4 152.8 256 93.6 217.6 180 128 142.4 44.8 176.4 4"></polygon><polygon fill="url(#intellij-idea-gui-asset-c)" points="256 68.4 178 160.4 142.4 44.8 176.4 4"></polygon><polygon fill="url(#intellij-idea-gui-asset-d)" points="123.2 212.4 20.8 249.6 37.2 192 58.4 120.8 0 101.2 37.2 0 117.2 9.6 196.4 100"></polygon><rect width="160" height="160" x="48" y="48" fill="#000"></rect><path fill="#FFF" d="M63.2 178h60v10h-60zM106 80.8v-12H73.2v12h9.2v42h-9.2v12.4H106v-12.4h-9.2v-42zm32 55.2a26.84 26.84 0 0 1-13.2-2.8 31.5 31.5 0 0 1-8.8-7.2l9.2-10.4a30 30 0 0 0 5.6 4.8 11.7 11.7 0 0 0 6.4 1.6 7.44 7.44 0 0 0 6.4-2.8 11.72 11.72 0 0 0 2.4-8.4V68h14.8v43.2a27.1 27.1 0 0 1-1.6 10.4 20 20 0 0 1-5.6 8.8A28.6 28.6 0 0 1 138 136"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
