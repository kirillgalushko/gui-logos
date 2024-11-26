import { defineComponent as s, computed as h, openBlock as l, createElementBlock as m, normalizeStyle as n, createStaticVNode as c } from "vue";
const r = /* @__PURE__ */ s({
  __name: "LogoWatchman",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = a, i = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (o, e) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(i.value)
    }, e[0] || (e[0] = [
      c('<defs><path id="watchman-gui-asset-a" d="M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0s128 57.308 128 128"></path></defs><g><mask id="watchman-gui-asset-b" fill="#fff"><use xlink:href="#watchman-gui-asset-a"></use></mask><use xlink:href="#watchman-gui-asset-a" fill="#4356E6"></use><path fill="#FFF" d="M128 172.296c-11.365.293-35.131-7.026-71.484-43.146 31.923-32.31 53.981-43.45 71.016-43.861 11.365-.293 32.033 6.064 71.8 43.86-31.008 30.927-54.296 42.736-71.332 43.147m86.814-41.733c-.39-.378-1.041-1.04-1.43-1.413 18.29-18.18 31.437-31.542 40.111-40.468a131 131 0 0 0-3.54-9.878c-11.601 11.59-30.94 30.99-43.444 44.105-32.592-31.384-58.718-46.945-78.409-46.792l-.791.01c-21.119.13-45.97 15.872-77.669 46.45-.342-.327-28.069-29.484-43.009-45.211A131 131 0 0 0 2.566 88.49c15.67 16.527 40.004 40.974 40.269 41.228-.586.563-24.106 23.978-39.503 40.148a130 130 0 0 0 4.008 10.42c14.948-15.622 41.555-43.393 42.256-44.066 33.644 31.217 58.995 45.96 77.724 45.96q.398 0 .791-.008c19.619-.475 42.322-12.616 78.535-46.42.336.324 27.247 28.043 42.395 43.664a130 130 0 0 0 3.682-9.72c-9.338-10.224-22.91-24.64-37.909-39.134" mask="url(#watchman-gui-asset-b)"></path><path fill="#FFF" d="M149.691 114.465v29.513l-21.69 10.785-21.693-11.396v-29.513l21.692-10.7zm-25.746-19.53-21.692 10.7a9.17 9.17 0 0 0-5.109 8.22v29.512a9.17 9.17 0 0 0 4.901 8.113l21.692 11.397a9.17 9.17 0 0 0 8.343.092l21.691-10.785a9.16 9.16 0 0 0 5.084-8.206v-29.513a9.16 9.16 0 0 0-4.927-8.126l-21.69-11.312a9.15 9.15 0 0 0-8.293-.093" mask="url(#watchman-gui-asset-b)"></path></g>', 2)
    ]), 4));
  }
});
export {
  r as _
};
