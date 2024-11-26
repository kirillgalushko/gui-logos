import { defineComponent as i, computed as p, openBlock as n, createElementBlock as s, normalizeStyle as a, createStaticVNode as h } from "vue";
const c = /* @__PURE__ */ i({
  __name: "LogoGoogleSearchConsole",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, l = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (g, t) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "228",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 228",
      style: a(l.value)
    }, t[0] || (t[0] = [
      h('<defs><radialGradient id="google-search-console-gui-asset-a" cx="21.66%" cy="28.708%" r="82.87%" fx="21.66%" fy="28.708%" gradientTransform="matrix(.59503 .59486 -.44034 .80383 .214 -.073)"><stop offset="0%" stop-color="#F1F2F2"></stop><stop offset="100%" stop-color="#E6E7E8"></stop></radialGradient></defs><g><polygon fill="#737373" points="165.979466 0 90.0205339 0 71.0965092 19.0554415 71.0965092 37.9794661 90.0205339 37.9794661 90.0205339 19.0554415 165.979466 19.0554415 165.979466 37.9794661 184.903491 37.9794661 184.903491 19.0554415"></polygon><polygon fill="#BFBFBF" points="90.020534 8.8817842e-15 90.020534 19.0554415 165.979466 19.0554415 165.979466 8.8817842e-15"></polygon><path fill="url(#google-search-console-gui-asset-a)" d="M36.402 37.98 0 74.381v134.177c0 10.513 8.542 18.924 18.924 18.924h218.152c10.513 0 18.924-8.543 18.924-18.924V74.513L219.466 37.98z"></path><polygon fill="#FFF" points="28.5174538 109.075975 227.613963 109.075975 227.613963 227.613963 28.5174538 227.613963"></polygon><polygon fill="#E0E0E0" points="36.4024641 37.979466 0 74.3819301 0 109.075975 256 109.075975 256 74.5133469 219.466119 37.979466"></polygon><polygon fill="#D1D1D1" points="42.710472 213.289528 128 213.289528 128 227.482546 42.710472 227.482546"></polygon><path fill="#4285F4" d="M28.517 86.998a14.695 14.695 0 0 1 14.72-14.719h169.527a14.695 14.695 0 0 1 14.719 14.719v22.078H28.517z"></path><path fill="#E6E6E6" d="M56.903 90.152a7.067 7.067 0 0 1-7.096 7.096 7.067 7.067 0 0 1-7.097-7.096 7.067 7.067 0 0 1 7.097-7.097 7.067 7.067 0 0 1 7.096 7.097m23.656 0a7.067 7.067 0 0 1-7.097 7.096 7.067 7.067 0 0 1-7.096-7.096 7.067 7.067 0 0 1 7.096-7.097 7.067 7.067 0 0 1 7.097 7.097"></path><path fill="#BABABA" d="m227.483 165.191-29.832-29.832-9.988 30.883-40.739-40.608-1.183 62.686 15.113 23.655c2.234-.394-11.302 15.508-11.302 15.508h77.93z"></path><path fill="#4D4D4D" d="M208.821 164.008c0-16.821-9.856-31.277-23.918-38.242v39.95l-18.792 10.12-19.056-10.12v-40.082c-14.061 6.966-23.655 21.553-23.655 38.243 0 16.821 9.725 31.277 23.787 38.242v25.364h37.848v-25.364c13.93-6.834 23.786-21.42 23.786-38.11"></path><polygon fill="#D1D1D1" points="42.710472 123.268994 109.075975 123.268994 109.075975 199.096509 42.710472 199.096509"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
