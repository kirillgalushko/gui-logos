import { defineComponent as o, computed as l, openBlock as p, createElementBlock as c, normalizeStyle as n, createStaticVNode as m } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoClioLang",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, e) => (p(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(h.value)
    }, e[0] || (e[0] = [
      m('<g><polygon fill="#351330" points="6.34560283 6.34779662 249.804223 6.34779662 249.804223 249.658627 6.34560283 249.658627"></polygon><path fill="#CC2A41" d="M256 0H0v256.002h256zm-9.966 9.971v236.06H9.966V9.97z"></path><path fill="#504E4D" d="m172.534 166.936-10.671 3.94c-5.485-6.701-8.712-14.41-11.979-22.096q-.675-1.793-1.352-3.584c-1.1-2.725-2.068-5.511-2.907-9.025-1.89-8.033-3.948-15.59-5.749-24.116l-8.287 24.07-3.243 9.12-9.356 25.855-9.952-2.192 8.504-23.574 3.431-9.163L132 106.892c.35-.928.708-1.925 1.105-2.971h4.214c-2.828-11.36-9.73-18.258-21.767-19.507.546-2.834 1.057-5.556 1.6-8.377 7.961.815 15.322 2.4 21.147 8.768 5.825 6.367 7.853 11.061 9.718 17.776 1.15 4.143 2.225 8.307 3.334 12.463q2.228 8.23 4.453 16.46l1.314 4.721 3.23 9.12c2.539 7.962 6.471 15.153 12.186 21.59"></path><path fill="#CC2A41" d="M76.74 136.457v8.947h102.364q-2.978 1.534-25.394 26.576l7.823 6.975 33.804-38.089-33.804-38.086-7.823 6.691q21.143 24.14 25.394 26.986z"></path><path fill="#E8CAA4" d="m149.643 166.936-10.67 3.94c-5.485-6.701-8.712-14.41-11.98-22.096q-.674-1.793-1.352-3.584c-1.1-2.725-2.067-5.511-2.907-9.025-1.89-8.033-3.947-15.59-5.748-24.116l-8.288 24.07-3.243 9.12L96.1 171.1l-9.952-2.192 8.503-23.574 3.432-9.163q5.512-14.64 11.027-29.279c.35-.928.708-1.925 1.105-2.971h4.214c-2.829-11.36-9.731-18.258-21.768-19.507.546-2.834 1.057-5.556 1.6-8.377 7.962.815 15.323 2.4 21.148 8.768 5.825 6.367 7.853 11.061 9.717 17.776 1.15 4.143 2.226 8.307 3.334 12.463l4.454 16.46 1.314 4.721 3.23 9.12c2.538 7.962 6.47 15.153 12.185 21.59"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
