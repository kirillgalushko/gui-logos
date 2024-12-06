import { defineComponent as i, computed as m, openBlock as o, createElementBlock as s, normalizeStyle as n, createElementVNode as l } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoDelighted",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, h = m(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (r, e) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "174",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 174",
      style: n(h.value)
    }, e[0] || (e[0] = [
      l("g", null, [
        l("path", {
          fill: "#323232",
          d: "M21.548 97.805c4.089-6.085 9.278-15.076 11.985-21.96 15.07 6.233 31.9 10.288 47.584 12.783-7.842 9.428-20.78 17.626-34.02 17.626a42.63 42.63 0 0 1-25.549-8.45M65.164 22.19c15.18 6.556 25.795 21.637 25.795 39.191 0 7.525-1.945 14.595-5.37 20.729-16.325-1.866-34.355-5.779-49.513-13.297C41.858 52.375 49.92 28.747 65.164 22.19M33.66 21.163c4.521-1.626 9.448-2.463 14.534-2.463 1.792 0 3.562.11 5.293.322-13.93 7.76-22.2 27.444-28.94 42.87-20.019-15.022-12.39-33.38 9.113-40.73m285.979 9.236c7.913-21.105 22.331-20.356 21.948-13.018-.46 6.233-10.177 11.65-21.948 13.018M279.37 91.01c-3.003 6.205-11.387 10.796-16.966 14.413l20.731-51.088c.416-1.028-.148-1.855-1.255-1.855h-11.267c-1.107 0-2.34.827-2.757 1.85l-2.466 6.058c-1.024-5.062-6.104-9.97-13.524-9.97-17.526 0-28.628 27.086-31.895 44.022-1.068 5.943-12.072 14.009-16.199 14.009-2.482 0-4.839-2.233.625-15.875l15.63-38.343c.416-1.023-.143-1.85-1.25-1.85H207.51c-1.107 0-2.34.832-2.757 1.856 0 0-13.514 34.578-16.758 42.704-2.767 6.944-10.604 11.508-14.308 11.508-2.483 0-4.845-2.233.619-15.875l30.59-74.245c.41-1.023-.148-1.85-1.255-1.85h-11.267c-1.107 0-2.34.827-2.751 1.856l-29.187 70.929c-3.255 8.367-19.729 19.185-30.201 19.185-13.969 0-10.889-13.368-10.001-16.422h7.42c13.875.28 22.419-4.596 27.543-15.573 7.453-15.87-.62-26.037-13.41-26.037-16.588 0-28.546 16.181-33.796 31.673-.126.383-.252.75-.367 1.116a474 474 0 0 1-6.647-.246 56.6 56.6 0 0 0 4.241-21.577c0-31.431-25.531-56.91-57.025-56.91a56.9 56.9 0 0 0-25.335 5.91l.017.017c-26.678 12.695-33.369 41.528-1.913 59.443-4.39 9.128-10.44 16.225-16.495 24.214-.795 1.051-.943 2.167-.197 3.295 1.912 2.878 6.285 7.097 9.557 9.477l.016.011.987.706c9.382 6.764 20.906 10.747 33.363 10.747 20.906 0 39.188-11.228 49.118-27.973 2.093.18 5.26.312 8.433.405-.476 2.637-.717 5.15-.717 7.431 0 12.772 7.326 19.842 21.482 19.842 12.286 0 22.287-5.434 30.167-12.898-.158 9.363 5.289 12.898 12.418 12.898 6.39 0 12.396-3.371 18.008-8.821 1.299 6.331 6.1 8.82 12.078 8.82 7.195 0 13.903-4.267 20.117-10.97 1.168 6.265 5.316 10.97 12.079 10.97 8.696 0 14.16-8.558 14.16-8.558l-1.973 6.627c-16.511 14.605-43.665 20.947-44.652 39.985-1.101 21.346 31.527 26.556 43.715-3.667l14.04-33.86c5.053-3.684 11.201-7.656 17.268-12.942l-4.521 10.955c-.417 1.018.137 1.85 1.244 1.85h11.267c1.107 0 2.34-.832 2.762-1.856l18.249-44.537c5.463-6.2 11.426-9.051 14.653-9.051 1.99 0 3.48.99 3.48 2.725 0 1.86-8.198 22.32-8.198 22.32-8.944 21.95-3.228 30.01 7.826 30.01 5.792 0 11.206-2.616 16.297-7.004 1.803 4.98 6.297 7.004 12.035 7.004 7.425 0 14.308-3.99 20.517-10.118 3.009 6.583 9.601 10.118 19.613 10.118 11.892 0 21.641-5.1 29.406-12.192.779 6.9 4.954 12.192 12.528 12.192 10.308 0 18.134-10.047 18.134-10.047s.964 7.229 12.417 10.047c41.907 10.298 75.143-49.999 25.505-74.196l10.363-25.467c.41-1.024-.148-1.856-1.255-1.856h-11.273c-1.101 0-2.334.832-2.745 1.856l-8.32 20.53c-21.574-6.013-53.562-6.62-98.964 2.556l9.382-23.086c.41-1.024-.154-1.856-1.255-1.856h-11.273c-1.107 0-2.334.832-2.745 1.856l-9.568 24.214v.23h-.094l-.904 2.265q-5.844 1.387-11.952 2.97c-1.069.28-2.285 1.298-2.707 2.315-.586 1.43-1.55 2.26-2.137 3.684-.417 1.023 1.112 1.641 2.186 1.39a614 614 0 0 1 11.152-2.715c-8.149 20.362-17.328 43.985-18.83 47.57-2.378 5-7.732 8.191-10.675 8.191-1.983 0-5.211-1.363.625-15.875l7.075-17.357c2.608-6.446 3.979-11.284 3.979-14.879 0-6.325-4.346-9.92-10.681-9.92-9.81 0-18.134 8.186-18.134 8.186l8.401-19.71c17.821-.899 34.558-6.983 36.552-21.014-.033-21.335-33.582-27.278-44.438 2.939l-3.507 8.99c-10.905-.99-20.901-4.558-28.381-8.777-1.058-.59-2.286-.164-2.746.952l-1.178 1.872c-.46 1.116-.143 2.725.795 3.486 4.603 3.742 15.12 8.219 28.233 10.063h.022zm-41.533 14.588c-2.735 0-4.1-1.614-4.1-4.963 0-9.177 10.308-37.446 21.362-37.446 5.957 0 5.957 8.187 5.957 8.187l-9.563 23.557s-6.582 10.665-13.656 10.665m-10.703 46.786c-6.434 11.164-16.588 10.578-17.536 5.67-1.672-8.668 10.264-16.253 28.962-27.92-3.59 8.253-6.428 13.583-11.426 22.25M403.56 62.816c4.225 0 4.351 3.47 1.37 10.041-2.981 6.572-7.453 12.526-19.126 10.545 0 0 7.453-20.586 17.756-20.586m-262.644 0c4.22 0 4.345 3.47 1.364 10.041-2.532 5.593-6.335 10.72-14.593 10.961h-3.381c-.455-.055-.932-.12-1.414-.208 0 0 7.716-20.794 18.024-20.794m296.264 42.781c-2.608 0-3.973-1.614-3.973-4.963 0-9.177 10.308-37.446 21.356-37.446 5.962 0 5.962 8.187 5.962 8.187l-9.562 23.557s-6.582 10.665-13.783 10.665m33.084-58.934-5.393 13.795s-2.236-10.042-13.037-10.042c-17.69 0-28.716 26.212-32.206 43.186-1.792 7.782-17.613 14.846-26.743 14.846-15.772 0-9.69-16.865-9.69-16.865 18.255 2.233 28.69-2.353 34.652-15.13 7.447-15.87-.625-26.037-13.416-26.037-22.726 0-36.76 30.381-36.76 47.739l.01.804c-.295 4.05-10 9.489-13.935 9.489-2.855 0-5.71-1.735 0-15.875l17.591-43.454c48.296-9.773 79.593-8.788 98.927-2.456m12.807 5.964c33.702 23.71 2.745 66.48-17.745 57.758-3.672-1.833-3.683-4.17 1.907-17.812zm-263.774-7.42c4.845 0 8.818-3.967 8.818-8.679 0-4.837-3.973-8.679-8.818-8.679s-8.691 3.842-8.691 8.68c0 4.71 3.847 8.678 8.691 8.678"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};