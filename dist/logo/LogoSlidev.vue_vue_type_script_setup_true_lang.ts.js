import { defineComponent as i, computed as p, openBlock as l, createElementBlock as r, normalizeStyle as a, createStaticVNode as d } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoSlidev",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, o) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(s.value)
    }, o[0] || (o[0] = [
      d('<defs><linearGradient id="slidev-gui-asset-a" x1="0%" x2="100%" y1="-8.889%" y2="100%"><stop offset="0%" stop-color="#3ACBD4"></stop><stop offset="100%" stop-color="#2988B1"></stop></linearGradient><linearGradient id="slidev-gui-asset-b" x1="-10.556%" x2="84.536%" y1="-12.222%" y2="100%"><stop offset="0%" stop-color="#95F0CF"></stop><stop offset="100%" stop-color="#3AB9D5"></stop></linearGradient><linearGradient id="slidev-gui-asset-c" x1="-.132%" x2="12.361%" y1="-8.073%" y2="104.495%"><stop offset="0%" stop-color="#FFEB83"></stop><stop offset=".01%" stop-color="#FFEB83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="60.177%" stop-color="#FFBB13"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><g><path fill="url(#slidev-gui-asset-a)" d="M71.385 34.462h147.692c20.392 0 36.923 16.53 36.923 36.923v147.692C256 239.469 239.469 256 219.077 256H71.385c-20.392 0-36.923-16.531-36.923-36.923V71.385c0-20.392 16.53-36.923 36.923-36.923"></path><path fill="url(#slidev-gui-asset-b)" d="M110.77 0c61.175 0 110.768 49.593 110.768 110.77 0 61.175-49.593 110.768-110.769 110.768S0 171.945 0 110.77 49.593 0 110.77 0"></path><path fill="url(#slidev-gui-asset-c)" d="M138.159 157.354c-2.897-10.812-4.346-16.218-2.912-19.951a12.3 12.3 0 0 1 7.079-7.08c3.733-1.433 9.14.016 19.95 2.913l53.74 14.399c10.811 2.897 16.217 4.345 18.734 7.453a12.3 12.3 0 0 1 2.59 9.671c-.625 3.95-4.582 7.907-12.497 15.822l-39.34 39.34c-7.914 7.914-11.871 11.871-15.821 12.497a12.3 12.3 0 0 1-9.67-2.592c-3.109-2.516-4.557-7.922-7.454-18.734z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
