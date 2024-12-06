import { defineComponent as i, computed as l, openBlock as m, createElementBlock as o, normalizeStyle as n, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoSensu",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const c = s, h = l(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (a, t) => (m(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "174",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 174",
      style: n(h.value)
    }, t[0] || (t[0] = [
      e("g", null, [
        e("path", {
          fill: "#2B335B",
          d: "M26.442 111.296c2.18-1.321 5.285-2.1 9.327-2.1 4.823 0 8.951.924 12.445 2.747 3.495 1.824 4.307 2.273 10.041 7.425l10.305-11.903c-4.44-4.915-9.248-8.442-14.414-10.615-5.165-2.174-11.427-3.257-18.76-3.257-6.85 0-12.782 1.083-17.802 3.224s-8.818 5.119-11.428 8.917c-2.609 3.798-3.963 8.138-3.963 12.947s1.19 8.786 3.567 11.903 5.734 5.595 10.04 7.425c4.308 1.83 9.803 3.389 16.416 4.717 5.284 1.017 9.247 2.067 11.493 3.223s3.462 2.642 3.462 4.373c0 2.272-1.084 4.003-3.224 5.185-2.133 1.222-5.284 1.797-9.63 1.797-5.285 0-9.91-.845-13.767-2.642-3.798-1.698-7.022-3.798-11.058-7.795L0 159.787c3.963 4.44 8.68 7.73 14.136 9.87s12.511 3.223 21.27 3.223c6.242 0 11.798-.951 16.752-2.814s8.818-4.577 11.626-8.17q4.21-5.393 4.208-12.717c0-6.784-2.273-12.035-6.817-15.767-4.545-3.733-12.175-6.58-22.823-8.588-5.529-1.017-9.426-2.1-11.731-3.322-2.306-1.222-3.462-2.775-3.462-4.717-.033-2.338 1.057-4.207 3.224-5.628zm77.385.951c-9.73 0-17.227 2.642-22.459 7.927-5.232 5.284-7.927 12.749-7.927 22.413s2.643 17.122 8.105 22.413c5.463 5.29 13.225 7.926 23.397 7.926 6.85 0 12.551-1.288 17.327-3.963a19.75 19.75 0 0 0 9.532-11.395l-16.105-5.119c-.607 2.1-1.862 3.7-3.66 4.783-1.796 1.083-4.16 1.624-7.054 1.624-3.422 0-6.17-.845-8.237-2.642-2.068-1.697-3.389-4.406-3.963-8.072h39.812c.42-2.156.612-4.35.574-6.546 0-9.327-2.51-16.514-7.53-21.772q-7.528-7.73-21.667-7.729zM92.5 137.58c1.155-7.63 4.914-11.428 11.19-11.428s9.802 3.798 10.747 11.428zm86.976-25.333c-4.578 0-8.614 1.017-12.036 3.085s-6.077 5.152-7.926 9.294l-.575-11.19h-17.736v58.36h19.836v-30.828c0-4.577.991-8.006 2.907-10.205a9.64 9.64 0 0 1 7.596-3.323c2.643 0 4.677.846 6.144 2.51 1.426 1.665 2.18 4.512 2.18 8.475v33.398h19.843v-38.927c0-6.605-1.83-11.692-5.496-15.292s-8.587-5.284-14.717-5.284zm50.533 14.48c1.559-.846 3.732-1.288 6.605-1.288 3.594 0 6.646.607 9.222 1.862s4.782 3.224 6.645 5.965l10.272-10.04c-2.642-3.66-6.104-6.408-10.345-8.237-4.24-1.83-9.697-2.748-16.415-2.748-6.077 0-11.23.924-15.457 2.748-4.227 1.823-7.484 4.247-9.598 7.186s-3.15 6.104-3.15 9.46a14.33 14.33 0 0 0 5.561 11.797c3.7 2.953 9.909 5.285 18.615 7.022 3.963.78 6.645 1.56 8.237 2.405s2.405 1.763 2.405 2.84c0 1.321-.78 2.246-2.339 2.986s-3.699 1.123-6.407 1.123c-8.171 0-13.74-2.002-18.1-7.399l-9.426 10.305q8.39 10.274 28.484 10.272c9.023 0 15.906-1.764 20.649-5.324 4.756-3.528 7.12-8.138 7.12-13.832 0-5.054-1.895-9.05-5.66-11.97s-9.935-5.12-18.516-6.579c-3.963-.78-6.75-1.559-8.343-2.404-1.592-.846-2.404-1.797-2.404-2.986.033-1.288.812-2.339 2.338-3.19zm103.18 32.077c-2.035 0-3.422-.542-4.208-1.625-.786-1.084-1.156-2.953-1.156-5.595v-38.18h-19.837v34.454c-.41 2.774-1.288 4.987-2.682 6.606-1.935 2.206-4.544 3.322-7.834 3.322-2.642 0-4.756-.78-6.077-2.338s-2.002-4.24-2.002-8.072v-33.98h-19.836v39.066c0 7.088 1.763 12.273 5.324 15.59 3.56 3.316 8.409 4.954 14.651 4.954 9.116 0 15.59-3.501 19.394-10.437.713 2.51 1.764 4.545 3.257 6.077 2.814 2.906 7.266 4.373 13.528 4.373 2.24-.007 4.47-.28 6.645-.813a22 22 0 0 0 5.496-2.1l1.288-12.24c-2.1.68-4.095 1.017-5.965 1.017z"
        }),
        e("path", {
          fill: "#73CC58",
          d: "M512.002 86.931 425.071 0l-87.002 86.931 87.002 87.002zm-86.931-63.815 32 32.048c-10.482-2.818-21.265-4.267-32.042-4.267a121.6 121.6 0 0 0-32.043 4.267zm-28.5 99.083a58.7 58.7 0 0 1 28.5-7.314c10.132 0 19.863 2.547 28.5 7.314l-28.5 28.5zm68.885-11.885a75.2 75.2 0 0 0-40.427-11.778 75.15 75.15 0 0 0-40.433 11.778L362.162 87.88c18.144-13.33 39.984-20.564 62.941-20.564s44.775 7.188 62.942 20.564z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};