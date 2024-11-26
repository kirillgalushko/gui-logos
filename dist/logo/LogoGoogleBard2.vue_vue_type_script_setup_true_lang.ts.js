import { defineComponent as p, computed as r, openBlock as l, createElementBlock as c, normalizeStyle as i, createStaticVNode as a } from "vue";
const g = /* @__PURE__ */ p({
  __name: "LogoGoogleBard2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = r(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (l(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "258",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 258",
      style: i(e.value)
    }, t[0] || (t[0] = [
      a('<defs><radialGradient id="google-bard-2-gui-asset-a" cx="78.302%" cy="55.52%" r="78.115%" fx="78.302%" fy="55.52%" gradientTransform="scale(.99947 1)rotate(78.858 .783 .555)"><stop offset="0%" stop-color="#1BA1E3"></stop><stop offset=".01%" stop-color="#1BA1E3"></stop><stop offset="30.022%" stop-color="#5489D6"></stop><stop offset="54.552%" stop-color="#9B72CB"></stop><stop offset="82.537%" stop-color="#D96570"></stop><stop offset="100%" stop-color="#F49C46"></stop></radialGradient><radialGradient id="google-bard-2-gui-asset-b" cx="-3.409%" cy="-54.219%" r="169.363%" fx="-3.409%" fy="-54.219%" gradientTransform="matrix(.19314 .98115 -.98062 .19324 -.559 -.404)"><stop offset="0%" stop-color="#1BA1E3"></stop><stop offset=".01%" stop-color="#1BA1E3"></stop><stop offset="30.022%" stop-color="#5489D6"></stop><stop offset="54.552%" stop-color="#9B72CB"></stop><stop offset="82.537%" stop-color="#D96570"></stop><stop offset="100%" stop-color="#F49C46"></stop></radialGradient></defs><g><path fill="url(#google-bard-2-gui-asset-a)" d="m122.062 172.77-10.27 23.52c-3.947 9.042-16.459 9.042-20.406 0l-10.27-23.52c-9.14-20.933-25.59-37.595-46.108-46.703L6.74 113.52c-8.987-3.99-8.987-17.064 0-21.053l27.385-12.156C55.172 70.97 71.917 53.69 80.9 32.043L91.303 6.977c3.86-9.303 16.712-9.303 20.573 0l10.403 25.066c8.983 21.646 25.728 38.926 46.775 48.268l27.384 12.156c8.987 3.99 8.987 17.063 0 21.053l-28.267 12.547c-20.52 9.108-36.97 25.77-46.109 46.703"></path><path fill="url(#google-bard-2-gui-asset-b)" d="m217.5 246.937-2.888 6.62c-2.114 4.845-8.824 4.845-10.937 0l-2.889-6.62c-5.148-11.803-14.42-21.2-25.992-26.34l-8.898-3.954c-4.811-2.137-4.811-9.131 0-11.269l8.4-3.733c11.87-5.273 21.308-15.017 26.368-27.22l2.966-7.154c2.067-4.985 8.96-4.985 11.027 0l2.966 7.153c5.06 12.204 14.499 21.948 26.368 27.221l8.4 3.733c4.812 2.138 4.812 9.132 0 11.27l-8.898 3.953c-11.571 5.14-20.844 14.537-25.992 26.34"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
