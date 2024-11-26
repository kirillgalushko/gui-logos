import { defineComponent as s, computed as r, openBlock as a, createElementBlock as l, normalizeStyle as p, createStaticVNode as d } from "vue";
const c = /* @__PURE__ */ s({
  __name: "LogoGradio2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, o) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "224",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 224",
      style: p(i.value)
    }, o[0] || (o[0] = [
      d('<defs><linearGradient id="gradio-2-gui-asset-a" x1="-6.452%" x2="85.236%" y1="49.784%" y2="49.784%"><stop offset="0%" stop-color="#F9D100"></stop><stop offset="100%" stop-color="#F97700"></stop></linearGradient><linearGradient id="gradio-2-gui-asset-b" x1="106.079%" x2="14.268%" y1="49.784%" y2="49.784%"><stop offset="0%" stop-color="#F9D100"></stop><stop offset="100%" stop-color="#F97700"></stop></linearGradient><linearGradient id="gradio-2-gui-asset-c" x1="-12.871%" x2="169.796%" y1="75.863%" y2="74.878%"><stop offset="0%" stop-color="#F9D100"></stop><stop offset="100%" stop-color="#F97700"></stop></linearGradient></defs><g><path fill="url(#gradio-2-gui-asset-a)" d="M119.871 64.78a16.35 16.35 0 0 1 16.258 0l111.654 64c10.956 6.28 10.956 22.083 0 28.363l-111.654 64a16.35 16.35 0 0 1-16.258 0l-111.654-64c-10.956-6.28-10.956-22.083 0-28.364zm8.126 33.014-78.783 45.164 78.783 45.155 78.784-45.155z"></path><path fill="url(#gradio-2-gui-asset-b)" d="M119.871 2.165a16.35 16.35 0 0 1 16.258 0l111.654 64c10.956 6.28 10.956 22.083 0 28.363l-111.654 64a16.35 16.35 0 0 1-16.258 0l-111.654-64c-10.956-6.28-10.956-22.083 0-28.363zm8.126 33.015L49.214 80.343l78.783 45.156 78.784-45.156z"></path><polygon fill="url(#gradio-2-gui-asset-c)" points="120.189741 64.7554936 136.364372 93.1665843 24.4336358 156.889528 8.25900493 128.478437"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
