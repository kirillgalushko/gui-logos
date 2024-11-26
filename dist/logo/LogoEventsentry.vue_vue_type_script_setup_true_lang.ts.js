import { defineComponent as n, computed as l, openBlock as r, createElementBlock as a, normalizeStyle as h, createStaticVNode as o } from "vue";
const p = /* @__PURE__ */ n({
  __name: "LogoEventsentry",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const e = s, i = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(i.value)
    }, t[0] || (t[0] = [
      o('<defs><path id="eventsentry-gui-asset-a" d="m98.147 242.922-84.731-84.733c-16.708-16.707-16.708-43.795 0-60.503l84.73-84.73c16.708-16.708 43.796-16.708 60.503 0l84.73 84.73c16.708 16.708 16.708 43.796 0 60.503l-84.73 84.733c-16.707 16.707-43.795 16.707-60.502 0"></path></defs><g><mask id="eventsentry-gui-asset-b" fill="#fff"><use xlink:href="#eventsentry-gui-asset-a"></use></mask><use xlink:href="#eventsentry-gui-asset-a" fill="#FFF"></use><path fill="#F4922E" d="M247.196 102.089c-1.149-1.505-2.368-2.972-3.745-4.349l-29.876-29.876c-59.577 26.4-178.052 31.867-204.35 32.75.102-.122-8.405 15.74-8.322 15.456 33.347 1.642 196.137 8.138 246.293-13.981M33.081 77.19c31.763-.971 102.694-6.709 154.24-37.185l-28.923-28.16c-16.897-17.461-44.853-16.334-61.75 1.128zm63.554 165.837c16.707 16.707 44.122 19.027 62.933.432l29.86-29.86c-49.754-29.168-121.363-32.322-153.969-31.761zM-1.586 136.253 9.486 157.57c33.26 1.092 134.87 6.17 205.66 28.979l28.305-28.306a43 43 0 0 0 5.794-7.239c-48.07-23.458-215.645-16.34-247.424-14.752" mask="url(#eventsentry-gui-asset-b)"></path></g>', 2)
    ]), 4));
  }
});
export {
  p as _
};
