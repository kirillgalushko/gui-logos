import { defineComponent as s, computed as a, openBlock as p, createElementBlock as n, normalizeStyle as r, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoNeat",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (p(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="neat-gui-asset-a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#21E9F4"></stop><stop offset="100%" stop-color="#00D4FF"></stop></linearGradient></defs><g><path fill="#00D4FF" d="M256 223.693c-.016 1.087-.048 2.173-.16 3.26a31.8 31.8 0 0 1-1.776 7.717c-3.216 8.756-10.304 15.835-19.072 19.046-3.264 1.199-6.688 1.79-10.16 1.918-64.272.815-128.56.016-192.832.016-1.088-.016-2.176-.048-3.264-.16a32 32 0 0 1-7.728-1.774 32 32 0 0 1-12.688-8.548 31.7 31.7 0 0 1-6.64-11.233C.56 230.628.048 227.193 0 223.693V0l128 127.825L256 0zm-244-.08c.032 2.381.384 4.698 1.216 6.935 2 5.48 6.432 9.906 11.92 11.904 2.032.75 4.176 1.118 6.336 1.214q96.528 1.198 193.056 0c2.16-.096 4.304-.463 6.336-1.214 5.488-1.998 9.92-6.423 11.92-11.904.832-2.237 1.184-4.554 1.216-6.934V28.936L136.48 136.293l-.768.72c-.848.638-1.68 1.23-2.64 1.677a12.1 12.1 0 0 1-10.144 0 12.3 12.3 0 0 1-2.64-1.678c-.272-.223-.512-.48-.768-.719L12 28.936z"></path><path fill="url(#neat-gui-asset-a)" d="M9.376 246.286 128 127.825l118.624 118.461c-5.792 5.785-13.792 9.364-22.624 9.364H32c-8.832 0-16.832-3.58-22.624-9.364"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};