import { defineComponent as l, computed as p, openBlock as c, createElementBlock as a, normalizeStyle as o, createStaticVNode as d } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoZeplin2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (c(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "205",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 205",
      style: o(i.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#FDBD39" d="m39.458 141.089-13.392 4.892-.72 39.841 46.36-16.936c-15.9-5.34-27.512-14.738-32.248-27.797"></path><path fill="#F69833" d="M46.467 98.95 0 115.925l26.066 30.056 13.392-4.892c-4.722-13.021-1.81-27.74 7.009-42.139"></path><path fill="#FECF33" d="M124.662 41.462c-59.171 21.616-97.318 66.22-85.204 99.627L253.735 62.81c-12.114-33.407-69.902-42.965-129.073-21.35"></path><path fill="#EE6723" d="M168.532 162.438c59.17-21.616 97.39-66.023 85.203-99.627L39.458 141.089c12.186 33.604 69.903 42.964 129.074 21.349"></path><path fill="#F69833" d="M253.735 62.81 39.458 141.09c4.196 11.57 20.196 17.27 42.647 17.27 21.887 0 49.905-5.413 79.115-16.084 59.171-21.616 100.802-56.614 92.515-79.464"></path><path fill="#FDBD39" d="M211.089 45.54c-21.888 0-49.906 5.414-79.116 16.084-59.17 21.616-100.801 56.614-92.515 79.465L253.735 62.81c-4.195-11.57-20.195-17.27-42.645-17.27"></path><path fill="#EE6723" d="M199.255 187.932h-.002c-6.304 0-15.605-5.695-27.644-16.926-14.244-13.287-30.56-32.748-45.942-54.799-15.383-22.05-28.023-44.094-35.592-62.072-8.247-19.593-9.423-31.64-3.495-35.806 1.3-.913 2.867-1.375 4.656-1.375 4.822 0 14.217 3.59 31.59 20.693l.38.374-.052.531a227 227 0 0 0-.326 3.685l-.193 2.416-1.705-1.717c-18.718-18.858-26.958-20.894-29.632-20.894-.763 0-1.37.155-1.805.461-2.572 1.807-2.737 10.655 5.258 29.648 7.434 17.658 19.89 39.37 35.074 61.133 15.185 21.766 31.25 40.94 45.24 53.99 15.084 14.071 21.882 15.59 24.104 15.59.767 0 1.391-.164 1.853-.49 2.713-1.905 2.716-11.384-6.2-31.827l-.41-.938.897-.49c.896-.491 1.763-.974 2.575-1.436l1.074-.61.494 1.133c6.322 14.485 12.232 32.895 4.483 38.343-1.306.917-2.88 1.383-4.68 1.383m-.002-2.235h.002l-.001 1.117z"></path><path fill="#EE6723" d="m169.968 161.827-.09 1.113c-1.496 18.51-5.435 40.764-15.705 41.664q-.31.028-.635.028c-6.976 0-13.577-9.996-19.617-29.71-5.716-18.651-10.15-43.693-12.488-70.513-2.338-26.815-2.303-52.25.098-71.618C124.15 11.685 129.132.662 136.341.03c.214-.02.435-.03.653-.03 5.061 0 12.689 5.73 20.497 32.424l-5.098.984c-2.607-8.92-5.449-16.175-8.27-21.16-2.609-4.611-5.146-7.15-7.143-7.15q-.1 0-.197.007c-3.125.275-7.676 7.855-10.214 28.315-2.358 19.022-2.387 44.075-.08 70.545 2.309 26.474 6.671 51.142 12.284 69.46 2.513 8.203 5.27 14.964 7.973 19.552 2.492 4.23 4.904 6.56 6.79 6.56q.098 0 .195-.008c2.99-.262 8.625-8.15 10.996-35.904z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
