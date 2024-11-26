import { defineComponent as e, computed as l, openBlock as r, createElementBlock as i, normalizeStyle as f, createStaticVNode as c } from "vue";
const h = /* @__PURE__ */ e({
  __name: "LogoMps",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (n, t) => (r(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "133",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 133",
      style: f(p.value)
    }, t[0] || (t[0] = [
      c('<defs><linearGradient id="mps-gui-asset-a" x1="75.7%" x2="-19.46%" y1="132.918%" y2="11.028%"><stop offset="9.1%" stop-color="#0B8FFF"></stop><stop offset="20.8%" stop-color="#0D94F6"></stop><stop offset="39.6%" stop-color="#11A3DE"></stop><stop offset="63.3%" stop-color="#18BBB7"></stop><stop offset="87.1%" stop-color="#21D789"></stop></linearGradient><linearGradient id="mps-gui-asset-b" x1="76.46%" x2="28.669%" y1="92.419%" y2="-29.471%"><stop offset="9.1%" stop-color="#0B8FFF"></stop><stop offset="20.8%" stop-color="#0D94F6"></stop><stop offset="39.6%" stop-color="#11A3DE"></stop><stop offset="63.3%" stop-color="#18BBB7"></stop><stop offset="87.1%" stop-color="#21D789"></stop></linearGradient><linearGradient id="mps-gui-asset-c" x1="32.174%" x2="64.565%" y1="103.685%" y2="-22.392%"><stop offset="12.3%" stop-color="#21D789"></stop><stop offset="13.2%" stop-color="#27D788"></stop><stop offset="21.6%" stop-color="#59D87B"></stop><stop offset="30.3%" stop-color="#85D970"></stop><stop offset="39.4%" stop-color="#ABDA67"></stop><stop offset="48.7%" stop-color="#CADB5F"></stop><stop offset="58.5%" stop-color="#E1DB59"></stop><stop offset="68.8%" stop-color="#F2DC55"></stop><stop offset="80.2%" stop-color="#FCDC53"></stop><stop offset="94.6%" stop-color="#FFDC52"></stop></linearGradient></defs><g><path fill="#000" d="M170.63 1.844h30.624l33.943 54.604L269.14 1.844h30.623v129.132h-28.225V46.671l-36.341 55.158h-.738l-35.973-54.603v83.75h-27.855zM460.163 0c18.816 0 34.866 5.902 47.964 16.417l-14.758 21.4c-11.438-7.933-22.691-12.729-33.574-12.729-10.885 0-16.603 4.98-16.603 11.252v.37c0 5.092 1.992 8.124 8.407 10.97l.657.285q.503.213 1.04.425l.733.282.764.283q.195.072.394.142l.812.284.844.286.878.287.912.289.946.292.98.294 1.017.298 1.052.302 1.09.306 1.702.467 1.788.48 1.875.492 1.964.507C497.242 60.507 512 69.916 512 92.421v.37c0 25.64-19.555 40.03-47.41 40.03a82.18 82.18 0 0 1-54.79-20.661l16.788-20.108c11.622 9.593 23.797 15.68 38.556 15.68 2.137 0 4.118-.155 5.929-.457l.67-.12c7.622-1.457 12.032-5.598 12.032-11.598v-.37q0-.215-.006-.427l-.016-.419c-.233-4.293-2.362-7.32-9.423-10.356l-.699-.294-.361-.147-.746-.294a64 64 0 0 0-.779-.296l-.811-.296-.845-.297-.879-.299-.453-.15-.931-.302-.967-.303-1.003-.306-1.04-.309-1.079-.312-1.115-.314-1.155-.318-1.194-.322-1.234-.326-2.824-.729-1.527-.401-1.504-.405-.744-.204-1.469-.41-1.445-.416-.714-.21-1.409-.426c-20.02-6.147-32.437-14.554-32.437-36.606v-.37C414.966 15.495 433.783 0 460.162 0m-98.424 1.844c30.807 0 49.439 18.264 49.439 44.643v.368c0 29.886-23.244 45.381-52.206 45.381h-21.584v38.74h-28.409V1.844zm-2.399 25.641h-21.952v39.478h22.506c14.205 0 22.506-8.486 22.506-19.554v-.369c0-12.728-8.855-19.555-23.06-19.555"></path><g transform="translate(0 1.577)"><polygon fill="url(#mps-gui-asset-a)" points="0 129.241461 129.240538 129.241461 64.3327068 64.4462546 0 0.000923153294"></polygon><polygon fill="url(#mps-gui-asset-b)" points="129.240538 129.241461 64.3327068 64.4462546 129.240538 0"></polygon><polygon fill="url(#mps-gui-asset-c)" points="93.9465413 93.9465413 64.3327068 64.4462546 129.240538 0"></polygon></g></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
