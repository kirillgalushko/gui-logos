import { defineComponent as o, computed as l, openBlock as c, createElementBlock as i, normalizeStyle as p, createStaticVNode as r } from "vue";
const m = /* @__PURE__ */ o({
  __name: "LogoApacheCamel",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, s = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (h, t) => (c(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(s.value)
    }, t[0] || (t[0] = [
      r('<defs><linearGradient id="apache-camel-gui-asset-b" x1="-12.564%" x2="101.304%" y1="108.214%" y2="-1.964%"><stop offset="0%" stop-color="#F69923"></stop><stop offset="10.996%" stop-color="#F79A23"></stop><stop offset="94.502%" stop-color="#E97826"></stop></linearGradient><linearGradient id="apache-camel-gui-asset-d" x1="-12.564%" x2="101.304%" y1="108.214%" y2="-1.964%"><stop offset="0%" stop-color="#F69923"></stop><stop offset="8.048%" stop-color="#F79A23"></stop><stop offset="41.874%" stop-color="#E97826"></stop></linearGradient><linearGradient id="apache-camel-gui-asset-e" x1="74.724%" x2="6.653%" y1="-3.059%" y2="100.066%"><stop offset="0%" stop-color="#F6E423"></stop><stop offset="41.191%" stop-color="#F79A23"></stop><stop offset="73.271%" stop-color="#E97826"></stop></linearGradient><circle id="apache-camel-gui-asset-a" cx="128" cy="128" r="128"></circle></defs><g><mask id="apache-camel-gui-asset-c" fill="#fff"><use xlink:href="#apache-camel-gui-asset-a"></use></mask><circle cx="127.994" cy="127.994" r="123.111" fill="url(#apache-camel-gui-asset-b)" fill-rule="nonzero" mask="url(#apache-camel-gui-asset-c)"></circle><path fill="url(#apache-camel-gui-asset-d)" fill-rule="nonzero" d="M128 256C57.308 256 0 198.692 0 128S57.308 0 128 0s128 57.308 128 128-57.308 128-128 128m0-9.768c65.298 0 118.232-52.934 118.232-118.232S193.298 9.768 128 9.768 9.768 62.702 9.768 128 62.702 246.232 128 246.232" mask="url(#apache-camel-gui-asset-c)"></path><path fill="url(#apache-camel-gui-asset-e)" fill-rule="nonzero" d="M98.044 75.517c-1.751-.002-3.524.01-5.292.061-2.056.06-4.817.713-8 1.785 53.775 40.834 73.108 114.497 39.875 178.514 1.129.03 2.249.123 3.385.123 60.736 0 111.492-42.323 124.609-99.071-38.542-45.178-90.813-81.314-154.578-81.412" mask="url(#apache-camel-gui-asset-c)" opacity=".75"></path><path fill="#28170B" fill-rule="nonzero" d="M84.752 77.368C66.895 83.378 32.83 104.546.079 132.81c2.487 67.334 57.028 121.313 124.548 123.07 33.233-64.016 13.901-137.68-39.875-178.513" mask="url(#apache-camel-gui-asset-c)" opacity=".75"></path><path fill="#FFF" fill-rule="nonzero" d="M128.747 54.005c-10.985 5.495 0 27.466 0 27.466C95.774 108.954 102.78 155.9 64.312 155.9c-20.97 0-42.242-24.077-64.233-38.828-.283 3.479-.785 6.972-.785 10.524 0 48.095 26.263 89.924 65.42 111.897 10.952-1.38 22.838-4.114 31.05-9.592 43.146-28.765 53.857-83.491 71.487-109.925 10.979-16.492 62.434-15.061 65.906-22.01 5.502-10.991-10.99-27.467-16.491-27.467h-43.958c-3.071 0-7.897-5.456-10.974-5.456h-16.492s-7.307-11.085-13.794-11.526c-.93-.066-1.83.053-2.7.488" mask="url(#apache-camel-gui-asset-c)"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
