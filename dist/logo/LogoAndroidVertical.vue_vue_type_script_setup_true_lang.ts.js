import { defineComponent as l, computed as m, openBlock as o, createElementBlock as s, normalizeStyle as a, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoAndroidVertical",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const c = h, i = m(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (n, t) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "157",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 157",
      style: a(i.value)
    }, t[0] || (t[0] = [
      e("g", null, [
        e("path", {
          fill: "#202124",
          d: "M226.335 39.703c0-6.72 4.876-12.046 11.022-12.046s10.653 5.162 10.653 12.046-4.548 12.21-10.653 12.21-11.022-5.409-11.022-12.21m-21.1 18.766h8.604v-37.45h-8.605zm-1.353-49.947c0 3.237 2.622 5.86 5.695 5.86s5.614-2.623 5.614-5.86c0-2.99-2.54-5.531-5.614-5.531s-5.695 2.54-5.695 5.531M170.12 39.621c0-6.72 4.958-11.964 11.309-11.964s11.309 5.244 11.309 11.964-5 12.292-11.31 12.292c-6.309-.041-11.308-5.49-11.308-12.292m-8.768 0c0 11.227 8.85 20.077 20.077 20.077s20.077-8.85 20.077-20.077-8.687-19.75-20.077-19.75c-11.39-.04-20.077 8.564-20.077 19.75M138.08 58.469h8.605V38.843c0-7.785 4.138-11.227 11.022-11.227 1.27 0 2.253.082 3.154.287v-7.58c-.901-.287-2.458-.533-4.179-.533-11.677 0-18.56 7.334-18.56 19.012v19.667zm-34.54-18.766c0-6.72 4.876-12.046 11.022-12.046s10.653 5.162 10.653 12.046-4.548 12.21-10.653 12.21-11.022-5.409-11.022-12.21m-8.768 0c0 10.858 8.686 19.995 18.93 19.995 4.26 0 8.153-1.721 10.489-4.548h.368v3.36h8.605V0h-8.605v24.092h-.368c-2.254-2.704-6.146-4.261-10.49-4.261-10.284 0-18.93 9.055-18.93 19.872M57.035 58.469h8.604V36.548c0-5.245 3.524-8.891 8.4-8.891 4.875 0 8.399 3.687 8.399 8.891v21.92h8.604v-21.92c0-9.137-7.252-16.717-17.004-16.717-9.751 0-17.003 7.58-17.003 16.717zm-39.54-22.454 9.301-26.591h.451l9.301 26.591zM0 58.47h9.752l4.875-13.931h24.871l4.876 13.93h9.67L32.41 0H21.634zm236.538 1.229c4.261 0 8.153-1.721 10.489-4.548h.369v3.36H256V0h-8.604v24.092h-.37c-2.253-2.704-6.145-4.261-10.488-4.261-10.325 0-18.93 9.055-18.93 19.831 0 10.817 8.686 20.036 18.93 20.036"
        }),
        e("path", {
          fill: "#34A853",
          d: "M195.36 153.977c-.041-.287-.082-.533-.123-.82a73 73 0 0 0-1.024-5.04 63 63 0 0 0-2.664-8.44 63 63 0 0 0-3.073-6.76 71 71 0 0 0-4.957-8.072c-2.254-3.155-4.753-6.064-7.458-8.81a54 54 0 0 0-3.564-3.277 66 66 0 0 0-8.482-6.228c.041-.04.041-.082.082-.123 1.352-2.376 2.746-4.712 4.098-7.088 1.352-2.295 2.663-4.59 4.015-6.925.942-1.639 1.926-3.318 2.868-4.957.246-.41.41-.779.533-1.23a6.1 6.1 0 0 0 .082-3.523c-.082-.287-.164-.574-.287-.82a4.7 4.7 0 0 0-.41-.778 5.7 5.7 0 0 0-2.171-2.13 6.2 6.2 0 0 0-2.664-.861 5.8 5.8 0 0 0-1.188 0 6 6 0 0 0-.942.164 6 6 0 0 0-2.991 1.802 6.4 6.4 0 0 0-.779 1.066c-.942 1.639-1.926 3.319-2.868 4.958l-4.015 6.924c-1.352 2.376-2.745 4.712-4.098 7.088-.163.246-.286.533-.45.779l-.615-.246c-7.539-2.868-15.693-4.425-24.256-4.425h-.697a68.3 68.3 0 0 0-21.715 3.77l-2.336.86c-.123-.246-.287-.492-.41-.738-1.352-2.376-2.745-4.712-4.097-7.088-1.352-2.295-2.663-4.589-4.015-6.924-.943-1.64-1.926-3.32-2.868-4.958a7 7 0 0 0-.779-1.066 6.15 6.15 0 0 0-2.99-1.802c-.329-.082-.656-.123-.943-.164a5.8 5.8 0 0 0-1.188 0 6.2 6.2 0 0 0-2.664.86 6.36 6.36 0 0 0-2.171 2.13 4.7 4.7 0 0 0-.41.78 6.5 6.5 0 0 0-.287.819 6.45 6.45 0 0 0 .082 3.523c.123.41.328.82.533 1.23.942 1.639 1.926 3.318 2.868 4.957 1.352 2.295 2.663 4.59 4.015 6.925 1.352 2.376 2.746 4.712 4.098 7.088l.04.041a71 71 0 0 0-7.866 5.695 64 64 0 0 0-4.261 3.893c-2.746 2.704-5.204 5.654-7.458 8.81a68 68 0 0 0-4.957 8.07 63 63 0 0 0-3.073 6.761 67 67 0 0 0-2.664 8.44 65 65 0 0 0-1.024 5.04c-.04.287-.082.533-.123.82a66 66 0 0 0-.41 2.991h135.417c0-1.024-.123-2.008-.246-2.991"
        }),
        e("path", {
          fill: "#202124",
          d: "M163.237 138.202c2.704-1.803 3.114-5.982.86-9.3-2.212-3.36-6.228-4.59-8.932-2.787s-3.114 5.982-.86 9.301c2.212 3.36 6.228 4.59 8.932 2.786m-61.377-2.745c2.212-3.36 1.843-7.498-.861-9.3-2.705-1.804-6.72-.574-8.932 2.785s-1.844 7.498.86 9.301 6.679.533 8.932-2.786"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
