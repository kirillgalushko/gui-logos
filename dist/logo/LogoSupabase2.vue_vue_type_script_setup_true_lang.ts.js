import { defineComponent as i, computed as a, openBlock as p, createElementBlock as l, normalizeStyle as r, createStaticVNode as h } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoSupabase2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, o = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "263",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 263",
      style: r(o.value)
    }, e[0] || (e[0] = [
      h('<defs><linearGradient id="supabase-2-gui-asset-a" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stop-color="#249361"></stop><stop offset="100%" stop-color="#3ECF8E"></stop></linearGradient><linearGradient id="supabase-2-gui-asset-b" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%" stop-color="#000"></stop><stop offset="100%" stop-color="#000" stop-opacity="0"></stop></linearGradient></defs><g><path fill="url(#supabase-2-gui-asset-a)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="url(#supabase-2-gui-asset-b)" fill-opacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
