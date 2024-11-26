import { defineComponent as n, computed as p, openBlock as l, createElementBlock as m, normalizeStyle as s, createStaticVNode as g } from "vue";
const a = /* @__PURE__ */ n({
  __name: "LogoCompose",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, o) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "148",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 148",
      style: s(i.value)
    }, o[0] || (o[0] = [
      g('<g fill="#038DC8"><path d="M202.368 29.568h-.128L152.576.64l-49.024 28.544L53.248 0 0 30.976v56.32L102.784 147.2l49.152-28.416 50.432 29.184L256 116.992v-56.32zm-.256 57.728L160 62.848l42.496-24.832 42.112 24.704zM102.4 37.632l42.496 24.576-41.984 24.448-42.368-24.704zm92.416-3.84-41.6 24.192-42.368-24.576 41.728-24.32zm-99.2-.768-8.576 4.992L52.352 57.6 11.008 33.024 53.376 8.448zM7.424 39.168l41.6 25.088v44.288L7.424 83.2zm49.92 29.44 41.6 24.704v44.16l-41.6-24.704zm98.944.512 42.368 24.96v43.776l-42.368-25.216z"></path><g opacity=".5" transform="translate(7.424 39.168)"><polygon points="49.92 73.728 91.52 98.176 91.52 54.144 49.92 29.44"></polygon><polygon points="0 43.904 41.6 69.248 41.6 25.088 0 0"></polygon><polygon points="148.864 73.6 191.232 98.816 191.232 54.912 148.864 29.952"></polygon></g></g>', 1)
    ]), 4));
  }
});
export {
  a as _
};
