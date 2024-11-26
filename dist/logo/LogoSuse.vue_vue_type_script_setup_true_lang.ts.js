import { defineComponent as t, computed as m, openBlock as i, createElementBlock as o, normalizeStyle as v, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ t({
  __name: "LogoSuse",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const l = h, e = m(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (n, a) => (i(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "238",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 238",
      style: v(e.value)
    }, a[0] || (a[0] = [
      c("g", null, [
        c("path", {
          fill: "#0D2C40",
          d: "M503.298 218.599a8.116 8.116 0 0 1 8.116 7.953 7.954 7.954 0 1 1-8.116-7.953m.072 1.596a6.358 6.358 0 0 0-.507 12.696l.424.019.492-.012a6.33 6.33 0 0 0 3.672-1.47l.376-.343a6.33 6.33 0 0 0 1.882-4.533 6.36 6.36 0 0 0-6.34-6.357m-3.048 2.407h3.408c1.717 0 2.845.825 2.988 2.21l.015.306a2.35 2.35 0 0 1-1.37 2.356l-.28.106 1.867 2.705h-1.975l-1.65-2.461h-1.326v2.38h-1.677zh3.408zm3.354 1.488H502v2.246h1.704v-.054c.866 0 1.326-.298 1.326-1.055 0-.674-.428-1.048-1.093-1.123zm-288.546-95.93v63.223a23.915 23.915 0 1 0 47.816.817l-.014-.817V128.16h23.022v61.79a46.937 46.937 0 1 1-93.86 1l.013-1v-61.79zm-95.203.037.95.017h59.435v22.022h-59.516a8.116 8.116 0 0 0-8.116 8.115c0 4.905 2.968 7.973 8.832 9.083l.663.115 36.63 5.411c19.154 2.976 27.486 17.395 27.486 31.327a30.705 30.705 0 0 1-30.808 30.372l-.952-.018H93.282v-1.975c0-12.953 8.87-19.682 17.494-20.185l.55-.023h43.285a8.116 8.116 0 0 0 8.116-8.116c0-4.93-2.943-8-8.83-9.11l-.666-.115-36.63-5.411c-19.126-2.949-27.486-17.368-27.486-31.273a30.73 30.73 0 0 1 30.811-30.236m203.6-.001.951.018h59.381v22.022h-59.516a8.116 8.116 0 0 0-8.116 8.115c0 4.905 2.968 7.973 8.832 9.083l.663.115 36.63 5.411c19.208 2.976 27.567 17.395 27.567 31.327a30.73 30.73 0 0 1-30.834 30.372l-.953-.018h-59.246v-22.183h59.327a8.116 8.116 0 0 0 8.116-8.116c0-4.93-2.968-8-8.856-9.11l-.667-.115-36.602-5.411c-19.154-2.949-27.513-17.368-27.513-31.273a30.73 30.73 0 0 1 30.837-30.237m103.262-.053.95.017h64.306v1.948c0 12.927-8.897 19.68-17.522 20.185l-.55.024h-46.315a8.116 8.116 0 0 0-8.102 7.639l-.014.477v20.154a14.28 14.28 0 0 1 11.707-6.89l.657-.008h48.235c-3.133 12.24-12.99 22.89-30.056 23.281l-.974.011h-20.073a8.846 8.846 0 0 0-9.53 8.642l.007.583a8.116 8.116 0 0 0 7.64 8.102l.476.014h46.315c8.636.265 17.686 6.73 18.06 19.392l.011.817v1.975h-64.25a30.73 30.73 0 0 1-31.758-29.269l-.03-.95v-45.854a30.73 30.73 0 0 1 30.81-30.29"
        }),
        c("path", {
          fill: "#02D35F",
          d: "m48.536 27.631 1.353-.839C94.067-.402 125.994-.574 149.68.197l3.253.11c28.324 1.001 58.515 10.74 62.654 12.147l.163-9.387a.352.352 0 0 1 .343-.397l1.9.272c8.332 1.259 42.577 7.033 57.923 15.978a18.7 18.7 0 0 1 3.904 3.231l.56.638c4.49 4.626 9.847 22.914 11.416 28.324.379 1.353-1.217 2.408-1.65 2.705l-1.57 1.086c-4.574 3.098-13.098 8.124-23.617 7.166-10.82-.947-24.943-7.115-41.824-18.234l4.87 11.524.243.271 2.33 1.164c6.775 3.335 25.391 12.057 35.355 11.849a53.9 53.9 0 0 0 22.33-6.516l1.332-.748c.446-.225 1.891-.824 1.362 1.177l-.733 2.788c-.105.386-.21.751-.31 1.063l-.147.423-.325.839a7.1 7.1 0 0 1-1.758 3.084 47.2 47.2 0 0 1-12.093 6.465 89.8 89.8 0 0 1-35.548 6.466c-4.308-.095-8.512-.52-12.323-.952l-3.72-.418c-11.774-1.278-20.153-1.606-21.992 9.432-1.282 7.662 2.569 16.715 8.154 24.934l.584.847h-22.454l-.609-1.107c-7.005-13.051-10.831-30.49-36.291-30.49-23.313 0-22.509 22.363-19.942 30.984l.193.613h-21.21c-8.738-31.814-31.976-45.503-47.315-48.208l-1.055-.172c-10.98-1.689-29.738-1.287-39.823 17.756a31.084 31.084 0 0 0 24.537 44.178c10.2 1.11 17.855-1.272 22.184-6.844a18.67 18.67 0 0 0 2.056-19.533 17.8 17.8 0 0 0-15.23-10.821 11.42 11.42 0 0 0-10.606 3.95 7.7 7.7 0 0 0-1.146 3.26l-.044.581.012.438a6.49 6.49 0 0 0 5.534 6.028c.89-.017 1.777-.114 2.65-.287l.867-.2.893-.298.622-.189h.433a6.493 6.493 0 0 1 5.24 11.513l-.398.282h-.19l-.297.19c-.843.531-1.753.95-2.705 1.244a23.1 23.1 0 0 1-7.386 1.163c-10.642-.39-19.099-9.073-19.207-19.721a21.4 21.4 0 0 1 9.982-18.126 30.35 30.35 0 0 1 31.215.232l.789.498c12.903 8.092 18.858 23.771 14.582 38.389C81 140.09 65.525 149.37 45.019 147.476A49.62 49.62 0 0 1 8.93 126.943a51 51 0 0 1-7.629-16.53 58.14 58.14 0 0 1 2.516-32.95c7.667-19.036 22.207-35.54 43.24-48.905l2.832-1.766zm225.28-2.25a17.422 17.422 0 0 0-30.146 11.313c-.29 9.592 7.21 17.623 16.8 17.99a17.422 17.422 0 0 0 13.345-29.302m-12.889-.461.57.006a12.18 12.18 0 1 1-.811 24.348 12.174 12.174 0 0 1-11.714-12.661c.228-6.494 5.525-11.615 11.955-11.693m2.464 6.174.108.027c-2.948 0-5.518 1.596-5.518 3.57 0 1.976 2.407 3.599 5.41 3.599s5.41-1.596 5.41-3.598c0-1.897-2.184-3.429-4.945-3.585z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
