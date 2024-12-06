import { defineComponent as i, computed as l, openBlock as v, createElementBlock as o, normalizeStyle as n, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoForestadmin",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const h = m, q = l(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (c, e) => (v(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "130",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 130",
      style: n(q.value)
    }, e[0] || (e[0] = [
      t("g", null, [
        t("path", {
          fill: "#233A5E",
          d: "M161.913 47.226v12.722h17.952v6.328h-17.952v19.825h-6.716V40.898h26.153v6.328zm37.372 8.072q4.65 0 8.33 2.067 3.746 2.066 5.876 5.683t2.131 8.136-2.13 8.137-5.877 5.682q-3.68 2.067-8.33 2.067t-8.395-2.067a15.35 15.35 0 0 1-5.812-5.682q-2.13-3.616-2.131-8.137 0-4.52 2.131-8.136a15.35 15.35 0 0 1 5.812-5.683q3.745-2.067 8.395-2.067m0 6.2q-4.263 0-6.974 2.647-2.648 2.648-2.648 7.04 0 4.39 2.648 7.038 2.712 2.647 6.974 2.647 4.261 0 6.91-2.647 2.71-2.648 2.711-7.039t-2.712-7.039q-2.647-2.647-6.91-2.647m38.965 1.291h-.968q-4.714 0-7.104 2.454-2.39 2.39-2.389 7.62v13.238h-6.328V56.267h6.328v6.522h.13q1.096-3.422 3.615-5.424 2.583-2.002 6.264-2.002h.452zm16.189-7.49q6.716 0 10.46 4.326 3.81 4.261 3.81 11.56v1.032h-23.117q.193 3.939 2.647 6.393 2.52 2.39 6.393 2.39 3.23 0 5.36-1.486a16.6 16.6 0 0 0 3.81-3.745l4.456 4.197q-5.166 7.104-13.497 7.104-4.713 0-8.265-1.938-3.487-2.001-5.425-5.553-1.872-3.616-1.872-8.33 0-4.52 1.808-8.137 1.872-3.681 5.295-5.747 3.487-2.067 8.137-2.067m-.388 5.811q-3.293 0-5.424 1.68-2.13 1.679-2.712 4.842h15.95q-.194-3.1-2.325-4.778-2.066-1.744-5.489-1.744m29.679 25.96q-3.164 0-6.393-.84-3.164-.84-5.747-2.325l2.841-5.618q4.908 2.842 9.493 2.842 4.65 0 4.65-2.777 0-.969-.711-1.679-.646-.775-2.454-1.679l-5.424-2.648q-6.264-2.97-6.264-8.588 0-4.068 2.776-6.264 2.843-2.196 7.814-2.196 2.52 0 5.166.646 2.712.581 5.166 1.68l-2.583 5.488q-4.519-1.937-7.943-1.937-3.68 0-3.68 2.26 0 1.098.71 1.873.775.774 2.712 1.679l5.554 2.647q2.97 1.356 4.455 3.423 1.486 2.002 1.486 4.972 0 4.455-3.165 6.78-3.099 2.26-8.46 2.26m25.529-25.443v15.627q0 1.614.71 2.39.775.71 2.39.71h1.55v5.812H311q-3.938 0-6.005-2.002t-2.067-5.683V61.627h-5.295v-5.36h5.295V44.321h6.329v11.946h6.07v5.36zm56.574 13.238h-19.76L341.745 86.1h-7.362l18.469-45.203h6.2L377.52 86.1h-7.362zm-2.39-6.2-7.49-19.372-7.491 19.373zm30.222 18.405q-4.005 0-7.297-1.938-3.293-1.936-5.295-5.489-1.938-3.615-1.938-8.459t1.938-8.395q2.002-3.616 5.295-5.553 3.293-1.938 7.297-1.938 3.552 0 6.07 1.421a10.65 10.65 0 0 1 4.004 3.94h.129v-19.76h6.328V86.1h-6.328v-4.39h-.13a10.65 10.65 0 0 1-4.003 3.939q-2.518 1.42-6.07 1.42m1.356-6.2q4.132 0 6.651-2.647 2.52-2.713 2.519-7.039 0-4.327-2.519-6.974-2.519-2.712-6.651-2.712t-6.651 2.712q-2.52 2.648-2.519 6.974t2.519 7.039q2.519 2.647 6.65 2.647m23.258-24.603h6.328v4.65h.13q1.226-2.906 3.551-4.262 2.39-1.357 5.425-1.357 6.522 0 9.04 6.07h.13q1.29-3.035 3.81-4.52 2.518-1.55 5.553-1.55 4.52 0 7.362 3.035 2.84 3.035 2.84 9.3V86.1h-6.328V67.955q0-3.1-1.55-4.714-1.485-1.614-4.326-1.614-3.099 0-4.908 2.195-1.808 2.131-1.808 6.78v15.5H437.2V67.954q0-3.1-1.55-4.714-1.485-1.614-4.391-1.614-3.036 0-4.843 2.195-1.809 2.196-1.809 6.845V86.1h-6.328zm51.908 0h6.329V86.1h-6.329zm3.164-15.627q1.938 0 3.294 1.356T478 45.289t-1.356 3.294-3.294 1.356-3.293-1.356-1.356-3.294 1.356-3.293 3.293-1.356m27.413 14.658q5.166 0 8.2 3.035Q512 61.303 512 67.762v18.34h-6.328V68.858q0-7.232-6.845-7.232-3.682 0-5.812 2.454t-2.131 7.749V86.1h-6.329V56.267h6.329v4.52h.129q3.1-5.489 9.75-5.489"
        }),
        t("path", {
          fill: "#54BD7E",
          d: "M10.763 0h107.626c5.944 0 10.763 4.819 10.763 10.763v107.626c0 5.944-4.819 10.763-10.763 10.763H10.763C4.819 129.152 0 124.333 0 118.389V10.763C0 4.819 4.819 0 10.763 0"
        }),
        t("path", {
          fill: "#FFF",
          d: "M68.457 42.689c15.573-1.173 24.987-8.59 27.92-18.473-20.552 9.47-46.197-2.115-51.05 18.808L42.839 54.18c4.328-6.716 10.045-10.317 25.618-11.49m-8.098 1.9c-7.654 1.1-13.793 4.65-17.239 10.887-1.109 2.007-1.498 4.163-1.498 4.163l-1.762 7.895c2.207-3.934 6.152-8.962 16.493-11.355.232-1.252 1.644-8.428 4.006-11.593M38.253 74.74l-2.69 12.06c7.127-13.57 22.465-16.204 24.359-16.6 13.356-2.793 19.787-9.425 22.344-18.043-11.654 6.59-38.857-1.685-44.013 22.583m-3.985 17.87-1.98 8.876c15.795-.889 17.537-16.068 20.114-28.127-4.914 1.715-15.744 8.437-18.134 19.252"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};