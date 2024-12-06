import { defineComponent as v, computed as i, openBlock as a, createElementBlock as l, normalizeStyle as o, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ v({
  __name: "LogoMparticle",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const e = m, c = i(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (V, h) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "108",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 108",
      style: o(c.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#000",
          d: "M128.65 53.598v26.789l-42.884 26.796V80.387zm-42.884 0v26.789l-42.883 26.796V80.387zm-42.883 0v26.789L0 107.183V80.387zm223.082-4.301a22.16 22.16 0 0 1-3.458 26.402 20.65 20.65 0 0 1-14.171 5.823 15.54 15.54 0 0 1-10.461-3.717v21.683h-11.02V40.105h10.715v3.12a16.66 16.66 0 0 1 10.785-3.882 20.24 20.24 0 0 1 17.61 9.954m38.836-5.76v-3.458h10.454l-.025 40.51h-10.347v-3.456a15.33 15.33 0 0 1-11.133 4.39 19.97 19.97 0 0 1-17.547-10.15 20.65 20.65 0 0 1-2.867-10.969c0-8.177 4.218-15.009 10.46-18.472a20.06 20.06 0 0 1 10.036-2.614 15.37 15.37 0 0 1 10.969 4.219m122.546-4.225c8.013 0 14.001 3.038 17.966 9.198l-8.437 5.227c-2.36-3.375-5.481-5.075-9.446-5.075-6.407 0-10.708 4.98-10.708 11.895s4.13 11.469 10.625 11.469a11.97 11.97 0 0 0 9.954-4.973l8.094 5.354c-3.876 5.57-10.454 9.027-17.965 9.027-7.93 0-14.927-3.711-18.809-10.15a21.213 21.213 0 0 1 7.847-29.27 22.6 22.6 0 0 1 10.88-2.702m63.58-.069.492.005c12.23 0 20.578 8.609 20.578 22.02q.014.634-.04 1.266l-.042.42h-31.122c.844 5.9 4.916 9.021 10.626 9.021a12.75 12.75 0 0 0 9.92-4.39l.23-.272 7.73 5.087-.24.335c-4.059 5.524-10.366 8.604-17.642 8.604-6.325 0-11.977-2.348-15.606-6.154a21.14 21.14 0 0 1-5.817-14.762c0-7.847 3.622-14.501 10.207-18.307a21.6 21.6 0 0 1 10.234-2.866zm-314.503.113c5.57 0 9.617 1.859 11.977 5.57q6.705-5.57 14.679-5.57c9.534-.013 14.68 5.576 14.68 15.847v25.374h-10.97v-24.53c0-4.974-2.359-7.423-6.914-7.423q-5.074 0-8.88 4.301V80.59h-10.944V56.046c0-4.973-2.277-7.422-6.832-7.422-3.457 0-6.407 1.516-8.938 4.555v27.41h-11.05V40.106h10.289v3.806a19.77 19.77 0 0 1 12.903-4.555m171.704-.013v10.461a10.4 10.4 0 0 0-3.039-.336c-3.65.1-7.071 1.795-9.363 4.637V80.59h-11.044V40.105h10.289v3.71c3.286-3.292 6.915-4.472 13.157-4.472m24.188-12.731v13.493h9.11v9.11h-9.11V80.59h-10.974V49.214h-8.507v-9.11h8.507V26.613zm26.63 13.493V80.59h-11.05V40.105zm64.662-20.16V80.59h-10.962V19.944zm-168.285 28.68c-5.906 0-10.962 4.554-10.962 11.805s4.974 11.73 10.88 11.73a11.69 11.69 0 0 0 9.11-3.883V52.589a11.96 11.96 0 0 0-9.028-3.965m-48.326 0a12.1 12.1 0 0 0-9.274 4.129v15.44a11.72 11.72 0 0 0 8.88 3.965c6.205 0 11.178-4.472 11.178-11.894 0-7.169-5.075-11.64-10.784-11.64m244.694-.35c-5.203 0-8.79 2.504-10.355 7.124l-.1.305h20.155c-1.323-4.868-4.42-7.317-9.374-7.419l-.326-.003zM85.766 0v26.796L42.883 53.59V26.796zm42.884 0v26.796L85.766 53.59V26.796zM42.883 0v26.796L0 53.59V26.796zm356.318 23.573v11.133h-11.559V23.573z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};