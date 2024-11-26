import { defineComponent as o, computed as c, openBlock as r, createElementBlock as h, normalizeStyle as l, createStaticVNode as a } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoAwsElb",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(i.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="aws-elb-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#4D27A8"></stop><stop offset="100%" stop-color="#A166FF"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-elb-gui-asset-a)"></rect><path fill="#FFF" d="M96 169.6c-22.938 0-41.6-18.662-41.6-41.6S73.062 86.4 96 86.4s41.6 18.662 41.6 41.6-18.662 41.6-41.6 41.6m96 19.2c0 7.06-5.74 12.8-12.8 12.8s-12.8-5.74-12.8-12.8 5.74-12.8 12.8-12.8 12.8 5.74 12.8 12.8M179.2 54.4c7.06 0 12.8 5.74 12.8 12.8S186.26 80 179.2 80s-12.8-5.74-12.8-12.8 5.74-12.8 12.8-12.8m9.6 60.8c7.06 0 12.8 5.74 12.8 12.8s-5.74 12.8-12.8 12.8S176 135.06 176 128s5.74-12.8 12.8-12.8m-44.963 16h26.051c1.53 9.066 9.418 16 18.912 16 10.589 0 19.2-8.611 19.2-19.2s-8.611-19.2-19.2-19.2c-9.494 0-17.382 6.934-18.912 16h-26.051a47.5 47.5 0 0 0-4.407-17.107l28.397-25.06c3.187 2.356 7.114 3.767 11.373 3.767 10.589 0 19.2-8.611 19.2-19.2S189.789 48 179.2 48 160 56.611 160 67.2c0 4.02 1.245 7.747 3.363 10.835L136.26 101.95C127.693 88.762 112.867 80 96 80c-26.467 0-48 21.533-48 48s21.533 48 48 48c16.867 0 31.693-8.762 40.26-21.949l27.103 23.914A19.1 19.1 0 0 0 160 188.8c0 10.589 8.611 19.2 19.2 19.2s19.2-8.611 19.2-19.2-8.611-19.2-19.2-19.2c-4.26 0-8.186 1.411-11.373 3.766l-28.397-25.059a47.5 47.5 0 0 0 4.407-17.107"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
