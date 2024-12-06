import { defineComponent as i, computed as o, openBlock as v, createElementBlock as a, normalizeStyle as l, createElementVNode as h } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoMatter",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, m = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (v(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "110",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 110",
      style: l(m.value)
    }, t[0] || (t[0] = [
      h("g", { fill: "#231F20" }, [
        h("path", { d: "M33.367 28.217A36.1 36.1 0 0 0 49.7 35.713V3.755L56.21 0l6.503 3.755v31.958a36.2 36.2 0 0 0 16.34-7.496l11.816 6.834c-19.217 19.012-50.157 19.012-69.374 0zm14.36 81.607c6.853-26.156-8.632-52.953-34.715-60.077v13.674a36.16 36.16 0 0 1 14.665 10.396L0 89.795v7.516l6.508 3.735 27.673-15.978a36.1 36.1 0 0 1 1.674 17.897zm51.65-60.077c-26.07 7.14-41.537 33.93-34.684 60.077l11.841-6.839a36.2 36.2 0 0 1 1.674-17.897l27.652 15.958 6.504-3.755v-7.496L84.686 73.817A36.2 36.2 0 0 1 99.352 63.42zm215.853-3.974V35.05h6.417v54.744h-6.417V79.11a25.95 25.95 0 0 1-22.054 11.8c-15.575-.208-28.091-12.892-28.091-28.468s12.516-28.26 28.09-28.469a25.95 25.95 0 0 1 22.055 11.8m-22.054-5.404c-12.18 0-22.055 9.874-22.055 22.054s9.874 22.055 22.055 22.055a22.03 22.03 0 0 0 22.054-22.055c0-12.18-9.874-22.054-22.054-22.054m97.29-24.009-6.411 3.68v15.01H351.44V16.36l-6.412 3.678V35.05h-8.605v6.178h8.605v36.053a12.386 12.386 0 0 0 12.437 12.513h9.542v-6.411h-9.542a6.107 6.107 0 0 1-6.025-6.023V41.229h32.614v36.053a12.366 12.366 0 0 0 12.355 12.513h9.623v-6.411h-9.623a6.107 6.107 0 0 1-5.943-6.025V41.23h15.566v-6.18h-15.567zM244.69 57.34v32.455h6.412V57.34c0-13.638-10.467-23.409-23.408-23.409-8.37 0-15.994 4.3-20.217 13.063-4.3-8.681-11.847-13.063-20.136-13.063-12.915 0-23.408 9.745-23.408 23.409v32.455h6.416V57.34c0-10.096 7.598-16.971 16.971-16.971s17.027 6.875 17.027 16.97v32.456h6.412V57.34c0-10.096 7.597-16.971 16.97-16.971 9.374 0 16.961 6.875 16.961 16.97m264.888-16.971H512v-6.412h-2.422c-12.915 0-23.408 9.745-23.408 23.408V89.82h6.417V57.34c.02-9.996 7.466-16.833 16.71-16.97zm-65.382-6.062c15.42 0 28.006 12.267 28.458 27.624l.01.492c0 .626-.081 1.333-.081 1.96h-50.745c1.018 11.276 10.89 20.095 23.688 20.095 7.898 0 14.152-3.359 18.223-8.524l5.628 3.206c-5.241 7.124-13.607 11.734-23.85 11.734-17.053 0-29.8-12.747-29.8-28.496.208-15.575 12.893-28.091 28.469-28.091m-.003 6.062c-10.686 0-19.988 7.658-22.024 17.836h44.048c-2.036-10.178-11.338-17.836-22.024-17.836" })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};