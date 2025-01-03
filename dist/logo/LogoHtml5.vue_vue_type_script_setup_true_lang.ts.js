import { defineComponent as l, computed as p, openBlock as o, createElementBlock as m, normalizeStyle as v, createStaticVNode as a } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoHtml5",
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
    return (d, h) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "361",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 361",
      style: v(i.value)
    }, h[0] || (h[0] = [
      a('<g><path fill="#E44D26" d="m255.555 70.766-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766z"></path><path fill="#F16529" d="m128 337.95 84.417-23.403 19.86-222.49H128z"></path><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604z"></path><path fill="#000" d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"></path><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
