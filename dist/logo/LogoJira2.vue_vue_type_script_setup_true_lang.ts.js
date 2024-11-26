import { defineComponent as s, computed as r, openBlock as a, createElementBlock as p, normalizeStyle as h, createStaticVNode as l } from "vue";
const c = /* @__PURE__ */ s({
  __name: "LogoJira2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(i.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="jira-2-gui-asset-a" x1="98.031%" x2="58.888%" y1=".161%" y2="40.766%"><stop offset="18%" stop-color="#0052CC"></stop><stop offset="100%" stop-color="#2684FF"></stop></linearGradient><linearGradient id="jira-2-gui-asset-b" x1="100.665%" x2="55.402%" y1=".455%" y2="44.727%"><stop offset="18%" stop-color="#0052CC"></stop><stop offset="100%" stop-color="#2684FF"></stop></linearGradient></defs><g><path fill="#2684FF" d="M244.658 0H121.707a55.5 55.5 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0"></path><path fill="url(#jira-2-gui-asset-a)" d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667"></path><path fill="url(#jira-2-gui-asset-b)" d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
