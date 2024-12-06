import { defineComponent as c, computed as e, openBlock as p, createElementBlock as i, normalizeStyle as m, createStaticVNode as o } from "vue";
const n = /* @__PURE__ */ c({
  __name: "LogoAlfresco",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = a, l = e(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, h) => (p(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "255",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 255",
      style: m(l.value)
    }, h[0] || (h[0] = [
      o('<g><path fill="#87C040" d="m88.957 166.908 32.3-32.302-48.504.002h-.116c-26.878 0-48.667 21.79-48.667 48.665 0 26.88 21.787 48.667 48.665 48.667 2.041 0 4.05-.14 6.025-.385-10.622-20.925-7.198-47.154 10.297-64.647"></path><path fill="#87C040" d="M128.336 183.213v-45.678l-34.295 34.3-.083.08c-19.006 19.006-19.006 49.82 0 68.826s49.82 19.006 68.825 0c1.443-1.443 2.738-2.975 3.963-4.541-22.297-7.294-38.408-28.252-38.41-52.987"></path><path fill="#87C040" d="m167.714 166.898-32.3-32.3v48.62c0 26.88 21.79 48.666 48.667 48.666s48.667-21.787 48.667-48.665c0-2.041-.14-4.05-.385-6.025-20.925 10.625-47.154 7.199-64.65-10.296"></path><path fill="#87C040" d="M241.546 93.073c-1.442-1.442-2.972-2.738-4.539-3.963-7.293 22.296-28.253 38.408-52.986 38.408h-45.676l34.376 34.378c19.006 19.006 49.822 19.006 68.825 0 19.006-19.005 19.006-49.819 0-68.823"></path><path fill="#ED9A2D" d="M184.027 23.108c-2.041 0-4.05.139-6.025.384 10.622 20.927 7.198 47.154-10.297 64.648l-32.297 32.3h48.62c26.875 0 48.664-21.79 48.664-48.667.002-26.878-21.787-48.665-48.665-48.665"></path><path fill="#5698C6" d="M162.704 14.306c-19.006-19.004-49.82-19.004-68.825.002-1.44 1.442-2.736 2.972-3.96 4.54 22.294 7.294 38.407 28.253 38.407 52.985v45.678l34.295-34.297.083-.081c19.006-19.006 19.006-49.82 0-68.827"></path><path fill="#5698C6" d="m88.996 88.174 1.384 1.444 30.835 30.834h.033V71.83c0-26.878-21.79-48.667-48.667-48.667S23.914 44.949 23.916 71.827c0 2.037.139 4.04.381 6.01 20.94-10.615 47.202-7.16 64.699 10.337"></path><path fill="#5698C6" d="M19.798 165.515a56 56 0 0 1 1.241-3.345c.056-.139.106-.28.164-.415a55 55 0 0 1 1.606-3.467q.187-.373.384-.748a56 56 0 0 1 1.863-3.316c.07-.116.147-.226.217-.338a55 55 0 0 1 1.976-2.954q.209-.3.425-.597a57 57 0 0 1 2.313-2.939q.245-.29.497-.572a56 56 0 0 1 2.431-2.646c.075-.075.143-.154.218-.228a56 56 0 0 1 2.775-2.589q.31-.274.624-.541a58 58 0 0 1 2.947-2.354c.133-.098.272-.19.404-.284a56 56 0 0 1 2.896-1.97c.195-.124.387-.252.584-.375a56 56 0 0 1 3.267-1.867q.352-.182.706-.36a55 55 0 0 1 3.38-1.599c.057-.022.11-.05.167-.074a56 56 0 0 1 3.63-1.376q.398-.139.797-.27c1.216-.396 2.45-.76 3.701-1.078.191-.045.388-.087.579-.13q1.74-.419 3.519-.726c.222-.037.441-.083.663-.116a55 55 0 0 1 3.905-.478c.284-.025.57-.044.854-.067a57 57 0 0 1 4.11-.166l45.678-.002L83.941 93.15c-19.006-19.004-49.822-19.006-68.825 0-19.006 19.006-19.006 49.82 0 68.825a49 49 0 0 0 4.514 3.994c.052-.153.116-.3.168-.454"></path><path fill="#446BA6" d="m84.055 93.15 27.22 27.22H74.688l-2.075.043c-22.28 0-41.063-14.972-46.837-35.404 18.535-10.394 42.429-7.706 58.197 8.06zm37.175-21.331v38.494l-25.871-25.87-1.497-1.436c-15.756-15.754-18.45-39.625-8.085-58.154 20.457 5.758 35.452 24.554 35.452 46.85zm41.623 11.277-27.22 27.221V73.732l-.043-2.075c0-22.28 14.973-41.065 35.405-46.837 10.394 18.535 7.706 42.428-8.06 58.195z"></path><path fill="#FFF101" d="M183.996 120.338h-38.494l25.87-25.87 1.436-1.496c15.754-15.756 39.624-18.45 58.154-8.086-5.758 20.457-24.555 35.452-46.85 35.452z"></path><path fill="#45AB47" d="m172.628 161.704-27.22-27.22h36.586l2.075-.043c22.28.002 41.062 14.974 46.837 35.406-18.538 10.392-42.429 7.706-58.197-8.063zm-37.102 21.29v-38.495l25.87 25.87 1.499 1.437c15.754 15.756 18.448 39.622 8.083 58.153-20.457-5.758-35.452-24.552-35.452-46.851zm-41.367-11.047 27.22-27.222v36.586l.043 2.074c0 22.28-14.973 41.065-35.404 46.84-10.395-18.54-7.706-42.431 8.06-58.198zm-21.354-37.262h38.494l-25.87 25.87-1.436 1.497c-15.756 15.756-39.625 18.45-58.156 8.085 5.76-20.459 24.554-35.452 46.852-35.452z"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};