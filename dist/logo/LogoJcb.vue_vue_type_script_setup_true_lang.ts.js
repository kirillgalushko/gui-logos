import { defineComponent as p, computed as i, openBlock as c, createElementBlock as r, normalizeStyle as l, createStaticVNode as f } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoJcb",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, o) => (c(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "198",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 198",
      style: l(e.value)
    }, o[0] || (o[0] = [
      f('<defs><linearGradient id="jcb-gui-asset-a" x1="-57.527%" x2="232.391%" y1="50.124%" y2="50.124%"><stop offset="0%" stop-color="#007940"></stop><stop offset="22.85%" stop-color="#00873F"></stop><stop offset="74.33%" stop-color="#40A737"></stop><stop offset="100%" stop-color="#5CB531"></stop></linearGradient><linearGradient id="jcb-gui-asset-b" x1=".183%" x2="100.273%" y1="49.96%" y2="49.96%"><stop offset="0%" stop-color="#007940"></stop><stop offset="22.85%" stop-color="#00873F"></stop><stop offset="74.33%" stop-color="#40A737"></stop><stop offset="100%" stop-color="#5CB531"></stop></linearGradient><linearGradient id="jcb-gui-asset-c" x1="-62.802%" x2="253.671%" y1="49.858%" y2="49.858%"><stop offset="0%" stop-color="#007940"></stop><stop offset="22.85%" stop-color="#00873F"></stop><stop offset="74.33%" stop-color="#40A737"></stop><stop offset="100%" stop-color="#5CB531"></stop></linearGradient><linearGradient id="jcb-gui-asset-d" x1=".176%" x2="101.808%" y1="50.006%" y2="50.006%"><stop offset="0%" stop-color="#1F286F"></stop><stop offset="47.51%" stop-color="#004E94"></stop><stop offset="82.61%" stop-color="#0066B1"></stop><stop offset="100%" stop-color="#006FBC"></stop></linearGradient><linearGradient id="jcb-gui-asset-e" x1="-.576%" x2="98.133%" y1="49.914%" y2="49.914%"><stop offset="0%" stop-color="#6C2C2F"></stop><stop offset="17.35%" stop-color="#882730"></stop><stop offset="57.31%" stop-color="#BE1833"></stop><stop offset="85.85%" stop-color="#DC0436"></stop><stop offset="100%" stop-color="#E60039"></stop></linearGradient></defs><g><path fill="#FFF" d="M256 157.418c0 21.907-17.839 39.746-39.746 39.746H0V39.746C0 17.839 17.839 0 39.746 0H256z"></path><path fill="url(#jcb-gui-asset-a)" d="M185.584 117.046h16.43c.47 0 1.565-.156 2.035-.156 3.13-.626 5.79-3.443 5.79-7.355 0-3.755-2.66-6.572-5.79-7.354-.47-.157-1.408-.157-2.034-.157h-16.43z"></path><path fill="url(#jcb-gui-asset-b)" d="M200.137 13.3c-15.648 0-28.48 12.676-28.48 28.48v29.575h40.216c.939 0 2.034 0 2.816.156 9.076.47 15.805 5.164 15.805 13.3 0 6.416-4.538 11.893-12.988 12.989v.312c9.232.626 16.274 5.79 16.274 13.77 0 8.607-7.824 14.24-18.152 14.24h-44.127v57.898h41.78c15.648 0 28.48-12.675 28.48-28.48V13.3z"></path><path fill="url(#jcb-gui-asset-c)" d="M207.804 86.69c0-3.756-2.66-6.26-5.79-6.73-.312 0-1.095-.156-1.564-.156h-14.866v13.77h14.866c.47 0 1.408 0 1.565-.156 3.13-.47 5.79-2.973 5.79-6.729"></path><path fill="url(#jcb-gui-asset-d)" d="M42.719 13.3c-15.648 0-28.48 12.676-28.48 28.48v70.26c7.981 3.911 16.274 6.415 24.568 6.415 9.858 0 15.178-5.946 15.178-14.083V71.198h24.411v33.017c0 12.831-7.98 23.316-35.051 23.316-16.43 0-29.262-3.6-29.262-3.6v59.932h41.78c15.648 0 28.48-12.675 28.48-28.48V13.302z"></path><path fill="url(#jcb-gui-asset-e)" d="M121.428 13.3c-15.648 0-28.48 12.676-28.48 28.48v37.242c7.199-6.103 19.717-10.015 39.903-9.076 10.797.47 22.376 3.443 22.376 3.443v12.049c-5.79-2.973-12.674-5.634-21.594-6.26-15.335-1.095-24.567 6.416-24.567 19.56 0 13.301 9.232 20.812 24.567 19.56 8.92-.626 15.805-3.442 21.594-6.259v12.049s-11.423 2.973-22.376 3.443c-20.186.938-32.704-2.974-39.902-9.076v65.721h41.78c15.648 0 28.479-12.675 28.479-28.48V13.302z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
