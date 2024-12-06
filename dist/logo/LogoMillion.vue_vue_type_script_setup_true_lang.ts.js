import { defineComponent as e, computed as a, openBlock as l, createElementBlock as r, normalizeStyle as p, createStaticVNode as n } from "vue";
const f = /* @__PURE__ */ e({
  __name: "LogoMillion",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, o) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "109",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 109",
      style: p(i.value)
    }, o[0] || (o[0] = [
      n('<defs><radialGradient id="million-gui-asset-a" cx="50%" cy="49.999%" r="32.306%" fx="50%" fy="49.999%" gradientTransform="translate(0 -380193.475)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient><radialGradient id="million-gui-asset-b" cx="50.061%" cy="104.167%" r="67.301%" fx="50.061%" fy="104.167%" gradientTransform="translate(0 -35820434.112)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient><radialGradient id="million-gui-asset-c" cx="99.122%" cy="34.222%" r="42.521%" fx="99.122%" fy="34.222%" gradientTransform="translate(0 -56809933.375)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient><radialGradient id="million-gui-asset-d" cx=".878%" cy="34.21%" r="42.506%" fx=".878%" fy="34.21%" gradientTransform="translate(0 -5447320.88)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient></defs><g><g><path fill="url(#million-gui-asset-a)" d="M38.852 91.671c7.04-10.077 21.367-16.976 37.896-16.976 16.53 0 30.857 6.899 37.897 16.976-7.04 10.077-21.368 16.976-37.897 16.976s-30.856-6.899-37.896-16.976"></path><path fill="url(#million-gui-asset-b)" d="M38.596 16.796C45.632 6.826 59.95 0 76.47 0s30.837 6.826 37.872 16.796c-7.035 9.97-21.354 16.795-37.872 16.795-16.52 0-30.837-6.825-37.873-16.795"></path><path fill="url(#million-gui-asset-c)" d="M77.192 54.522c-10.236 9.887-24.12 15.441-38.596 15.441S10.236 64.41 0 54.522l38.596-37.726z"></path><path fill="url(#million-gui-asset-d)" d="M153.03 54.54c-10.237 9.887-24.121 15.442-38.597 15.442s-28.36-5.555-38.596-15.442l38.596-37.744z"></path></g><path fill="#000" d="M172.162 83.996V34.329h19.264l.913 7.304h.913q2.374-4.017 6.574-6.117 4.29-2.1 9.952-2.1 6.025 0 10.5 2.465 4.472 2.374 6.755 7.486h.913q3.013-5.478 7.76-7.669 4.748-2.282 10.866-2.282 6.39 0 10.955 2.556 4.657 2.465 7.122 7.67 2.465 5.111 2.465 13.238v27.116h-20.177v-24.56q0-3.195-.64-5.66-.638-2.466-2.373-3.835-1.644-1.46-4.84-1.46-3.012 0-5.112 1.277-2.1 1.279-3.195 3.561-1.096 2.19-1.096 5.113v25.564h-20.086V59.254q0-3.105-.639-5.478-.548-2.466-2.282-3.835-1.735-1.46-5.022-1.46-3.013 0-5.113 1.369-2.01 1.278-3.104 3.56-1.096 2.191-1.096 5.022v25.564zm102.802 0V34.329h20.177v49.667zm0-54.78V17.438h20.177v11.778zm28.085 54.78V17.438h20.177v66.558zm28.085 0V17.438h20.178v66.558zm28.086 0V34.329h20.177v49.667zm0-54.78V17.438h20.177v11.778zm56.936 55.693q-6.939 0-12.6-1.644-5.66-1.734-9.768-5.021a22.3 22.3 0 0 1-6.209-8.034q-2.19-4.84-2.19-11.048 0-8.217 3.834-13.969t10.682-8.764q6.938-3.013 16.251-3.013 6.938 0 12.6 1.734 5.66 1.645 9.677 4.93 4.11 3.288 6.3 8.126 2.19 4.748 2.191 10.956 0 8.126-3.834 13.97-3.744 5.75-10.682 8.764-6.848 3.013-16.252 3.013m0-15.247q3.56 0 5.935-1.278 2.373-1.28 3.56-3.652 1.187-2.375 1.187-5.57 0-2.465-.73-4.382-.64-2.01-2.009-3.378-1.279-1.37-3.286-2.1-2.01-.73-4.657-.73-3.469 0-5.843 1.278t-3.56 3.652q-1.188 2.374-1.188 5.66 0 2.465.64 4.383.729 1.917 2.008 3.286 1.37 1.37 3.287 2.1 2.007.73 4.656.73m36.682 14.334V34.329h19.447l.73 7.212h.913q2.19-3.834 6.847-5.934 4.748-2.19 9.77-2.191 4.838 0 8.764 1.187 3.927 1.186 6.757 3.925 2.83 2.649 4.382 7.122Q512 50.124 512 56.697v27.299h-20.177V60.258q0-3.47-.73-6.117-.64-2.648-2.557-4.109-1.826-1.551-5.295-1.552-3.195 0-5.478 1.461-2.284 1.37-3.561 3.835-1.187 2.373-1.187 5.478v24.742z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};