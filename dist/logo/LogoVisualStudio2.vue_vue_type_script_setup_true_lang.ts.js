import { defineComponent as i, computed as o, openBlock as s, createElementBlock as p, normalizeStyle as r, createStaticVNode as n } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoVisualStudio2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, a = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (s(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(a.value)
    }, e[0] || (e[0] = [
      n('<defs><linearGradient id="visual-studio-2-gui-asset-a" x1="50%" x2="50%" y1=".002%" y2="100%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient></defs><g><path fill="#52218A" fill-rule="nonzero" d="M36.987 200.406a10.67 10.67 0 0 1-11.04 1.734L6.56 194.006A10.67 10.67 0 0 1 0 184.22V70.46a10.67 10.67 0 0 1 6.56-9.787l19.387-8a10.67 10.67 0 0 1 11.04 1.733l4.346 3.6a5.893 5.893 0 0 0-9.333 4.8v129.067a5.893 5.893 0 0 0 9.333 4.8z"></path><path fill="#6C33AF" fill-rule="nonzero" d="M6.56 194.006A10.67 10.67 0 0 1 0 184.22v-.88a6.16 6.16 0 0 0 10.667 4.133L176 4.673a16 16 0 0 1 18.187-3.093l52.746 25.386A16 16 0 0 1 256 41.393v.613a10.107 10.107 0 0 0-16.507-7.813l-198.16 162.48-4.346 3.733a10.67 10.67 0 0 1-11.04 1.734z"></path><path fill="#854CC7" fill-rule="nonzero" d="M6.56 60.673A10.67 10.67 0 0 0 0 70.46v.88a6.16 6.16 0 0 1 10.667-4.134L176 250.006a16 16 0 0 0 18.187 3.094l52.746-25.387A16 16 0 0 0 256 213.286v-.613a10.107 10.107 0 0 1-16.507 7.813L41.333 58.006l-4.346-3.733a10.67 10.67 0 0 0-11.04-1.6z"></path><path fill="#B179F1" fill-rule="nonzero" d="M194.187 253.1A16 16 0 0 1 176 250.006a9.387 9.387 0 0 0 16-6.64v-232a9.387 9.387 0 0 0-16-6.693 16 16 0 0 1 18.187-3.093l52.746 25.36A16 16 0 0 1 256 41.366v171.947a16 16 0 0 1-9.067 14.427z"></path><path fill="url(#visual-studio-2-gui-asset-a)" fill-opacity=".25" d="M183.707 254.273a16 16 0 0 0 10.48-1.173l52.746-25.36A16 16 0 0 0 256 213.313V41.366a16 16 0 0 0-9.067-14.426L194.187 1.58A16 16 0 0 0 182.24.806 16 16 0 0 0 176 4.673L90.987 98.7 41.333 58.006l-4.346-3.733a10.67 10.67 0 0 0-9.627-2.213 6.8 6.8 0 0 0-1.413.48L6.56 60.673A10.67 10.67 0 0 0 0 69.66v115.36a10.66 10.66 0 0 0 6.56 8.986l19.387 8a6.8 6.8 0 0 0 1.413.48c3.378.882 6.973.056 9.627-2.213l4.346-3.6 49.654-40.693L176 250.006a16 16 0 0 0 7.707 4.267M192 73.153l-66.107 54.187L192 181.526zM32 90.726l33.093 36.614L32 163.953z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
