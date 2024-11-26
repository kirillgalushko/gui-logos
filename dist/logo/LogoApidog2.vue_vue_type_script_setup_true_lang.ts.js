import { defineComponent as s, computed as a, openBlock as p, createElementBlock as l, normalizeStyle as r, createStaticVNode as d } from "vue";
const g = /* @__PURE__ */ s({
  __name: "LogoApidog2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, o) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, o[0] || (o[0] = [
      d('<defs><linearGradient id="apidog-2-gui-asset-a" x1="0%" x2="99.996%" y1="36.301%" y2="64.611%"><stop offset="0%" stop-color="#3BF"></stop><stop offset="100%" stop-color="#73F"></stop></linearGradient><linearGradient id="apidog-2-gui-asset-b" x1="102.837%" x2="-5.655%" y1="70.777%" y2="28.962%"><stop offset="0%" stop-color="#99C2FF"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient><linearGradient id="apidog-2-gui-asset-c" x1="49.941%" x2="23.669%" y1="69.215%" y2="32.86%"><stop offset="0%" stop-color="#99C2FF"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient></defs><g><path fill="url(#apidog-2-gui-asset-a)" d="M198.391 180.368 194 175.984l-.816-.752a93.67 93.67 0 0 0-65.318-26.504 93.67 93.67 0 0 0-65.309 26.504l-.568.56-4.327 4.384-9.288 9.264a28.24 28.24 0 0 1-20.08 8.384 28.33 28.33 0 0 1-20.006-8.264A28.2 28.2 0 0 1 0 169.6c0-7.49 2.983-14.672 8.288-19.96l20.007-19.96-19.76-19.656A28.23 28.23 0 0 1 0 89.824a28.2 28.2 0 0 1 8.288-19.96c11.06-11.033 28.962-11.033 40.022 0L62.805 84.32a93.75 93.75 0 0 0 65.317 26.48c24.4 0 47.838-9.504 65.31-26.48a3 3 0 0 1 .632-.632l8.215-8.256 5.464-5.384a27.97 27.97 0 0 1 19.951-8.256 28.3 28.3 0 0 1 20 8.264 28.185 28.185 0 0 1 6.119 30.864 27.8 27.8 0 0 1-6.296 9.176l-19.823 19.776 19.823 19.776a28.04 28.04 0 0 1 8.472 20.144 28.2 28.2 0 0 1-8.288 19.952c-11.038 11.026-28.92 11.026-39.958 0l-9.416-9.376z"></path><path fill="url(#apidog-2-gui-asset-b)" d="M178.712 2.136a28.1 28.1 0 0 1 9.184 6.12 28.185 28.185 0 0 1-.064 39.864l-20 19.96-.503.44c-21.958 21.404-56.975 21.404-78.933 0l-.504-.44-20.015-19.96c-10.934-11.033-10.88-28.833.12-39.8C79.011-2.686 96.85-2.715 107.9 8.256l20.015 19.968 19.952-19.968A28.3 28.3 0 0 1 167.88 0a28.2 28.2 0 0 1 10.84 2.136z"></path><path fill="url(#apidog-2-gui-asset-c)" d="M77.117 253.864a28.2 28.2 0 0 1-9.184-6.12 28.185 28.185 0 0 1 .064-39.864l20.015-19.96.504-.44c21.959-21.395 56.966-21.395 78.925 0l.504.44 20.015 19.96c10.932 11.035 10.875 28.835-.128 39.8-11.014 11.006-28.853 11.035-39.902.064l-20.016-19.968-19.95 19.96A28.3 28.3 0 0 1 87.947 256a28.2 28.2 0 0 1-10.831-2.136"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
