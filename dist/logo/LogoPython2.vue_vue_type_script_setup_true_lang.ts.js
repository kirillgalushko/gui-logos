import { defineComponent as i, computed as p, openBlock as h, createElementBlock as n, normalizeStyle as r, createStaticVNode as a } from "vue";
const c = /* @__PURE__ */ i({
  __name: "LogoPython2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "255",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 255",
      style: r(s.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="python-2-gui-asset-a" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%"><stop offset="0%" stop-color="#387EB8"></stop><stop offset="100%" stop-color="#366994"></stop></linearGradient><linearGradient id="python-2-gui-asset-b" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%"><stop offset="0%" stop-color="#FFE052"></stop><stop offset="100%" stop-color="#FFC331"></stop></linearGradient></defs><g><path fill="url(#python-2-gui-asset-a)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13"></path><path fill="url(#python-2-gui-asset-b)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};