import { defineComponent as s, computed as h, openBlock as o, createElementBlock as i, normalizeStyle as c, createStaticVNode as r } from "vue";
const m = /* @__PURE__ */ s({
  __name: "LogoAwsOpsworks",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const a = e, l = h(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (p, t) => (o(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(l.value)
    }, t[0] || (t[0] = [
      r('<defs><linearGradient id="aws-opsworks-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-opsworks-gui-asset-a)"></rect><path fill="#FFF" d="M128 76.16c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44-13.44-6.029-13.44-13.44 6.029-13.44 13.44-13.44m0 33.28c10.94 0 19.84-8.9 19.84-19.84s-8.9-19.84-19.84-19.84-19.84 8.9-19.84 19.84 8.9 19.84 19.84 19.84M89.6 84.72l3.53.202c1.443.076 2.953-.96 3.302-2.487a32.1 32.1 0 0 1 4.182-10.08 3.2 3.2 0 0 0-.572-4.096l-2.644-2.361 6.903-6.9 2.355 2.64a3.2 3.2 0 0 0 4.093.576 32.2 32.2 0 0 1 10.083-4.172 3.2 3.2 0 0 0 2.486-3.303l-.198-3.539h9.76l-.198 3.546a3.2 3.2 0 0 0 2.486 3.302 32 32 0 0 1 10.074 4.176 3.21 3.21 0 0 0 4.096-.58l2.361-2.646 6.903 6.9-2.637 2.355a3.2 3.2 0 0 0-.573 4.096 32.1 32.1 0 0 1 4.18 10.083c.348 1.526 1.826 2.566 3.302 2.49l3.526-.202v9.76l-3.523-.202c-1.479-.076-2.954.964-3.303 2.493a32 32 0 0 1-4.176 10.09 3.2 3.2 0 0 0 .573 4.096l2.63 2.345-6.899 6.903-2.332-2.618a3.204 3.204 0 0 0-4.1-.576 32.1 32.1 0 0 1-10.102 4.186 3.2 3.2 0 0 0-2.486 3.305l.198 3.498h-9.76l.198-3.504a3.2 3.2 0 0 0-2.486-3.302 32.2 32.2 0 0 1-10.096-4.19 3.19 3.19 0 0 0-4.096.577l-2.342 2.624-6.9-6.903 2.624-2.339a3.206 3.206 0 0 0 .576-4.096 31.9 31.9 0 0 1-4.179-10.096c-.345-1.53-1.82-2.576-3.302-2.493l-3.517.202zm-3.018 16.342 4.285-.243a38.5 38.5 0 0 0 2.941 7.107l-3.203 2.855a3.2 3.2 0 0 0-1.069 2.3c-.022.88.317 1.732.938 2.353l11.696 11.692c.62.624 1.468.99 2.352.935a3.2 3.2 0 0 0 2.297-1.069l2.855-3.2a38.7 38.7 0 0 0 7.107 2.95l-.243 4.276a3.195 3.195 0 0 0 3.193 3.382h16.538a3.2 3.2 0 0 0 3.193-3.382l-.243-4.272a38.5 38.5 0 0 0 7.114-2.948l2.848 3.194a3.2 3.2 0 0 0 2.297 1.069c.82.064 1.735-.31 2.352-.935l11.696-11.692c.621-.621.96-1.472.938-2.352a3.2 3.2 0 0 0-1.069-2.298l-3.21-2.864a38.5 38.5 0 0 0 2.941-7.1l4.292.242c.88.042 1.74-.262 2.38-.867a3.2 3.2 0 0 0 1.002-2.326V81.334a3.2 3.2 0 0 0-1.002-2.326 3.18 3.18 0 0 0-2.38-.87l-4.298.246a38.5 38.5 0 0 0-2.94-7.094l3.215-2.87a3.2 3.2 0 0 0 1.069-2.298 3.2 3.2 0 0 0-.938-2.352L153.83 52.077a3.1 3.1 0 0 0-2.352-.935 3.18 3.18 0 0 0-2.297 1.07l-2.877 3.225a38.6 38.6 0 0 0-7.085-2.938l.243-4.317a3.18 3.18 0 0 0-.867-2.377 3.2 3.2 0 0 0-2.326-1.005H119.73a3.2 3.2 0 0 0-2.326 1.005 3.18 3.18 0 0 0-.867 2.377l.243 4.31a38.7 38.7 0 0 0-7.091 2.935l-2.87-3.219a3.2 3.2 0 0 0-2.298-1.066 3.18 3.18 0 0 0-2.352.935L90.474 63.77a3.2 3.2 0 0 0-.938 2.352c.026.88.413 1.712 1.069 2.297l3.222 2.874a38.4 38.4 0 0 0-2.944 7.091l-4.3-.246a3.16 3.16 0 0 0-2.381.87 3.2 3.2 0 0 0-1.002 2.326V97.87a3.2 3.2 0 0 0 1.002 2.326c.64.605 1.497.912 2.38.867M179.2 208h19.2v-32h-19.2zm-60.8 0h19.2v-32h-19.2zm-60.8 0h19.2v-32H57.6zm144-38.4H192v-16a3.2 3.2 0 0 0-3.2-3.2h-57.6v-9.6h-6.4v9.6H67.2a3.2 3.2 0 0 0-3.2 3.2v16h-9.6a3.2 3.2 0 0 0-3.2 3.2v38.4a3.2 3.2 0 0 0 3.2 3.2H80a3.2 3.2 0 0 0 3.2-3.2v-38.4a3.2 3.2 0 0 0-3.2-3.2h-9.6v-12.8h54.4v12.8h-9.6a3.2 3.2 0 0 0-3.2 3.2v38.4a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2v-38.4a3.2 3.2 0 0 0-3.2-3.2h-9.6v-12.8h54.4v12.8H176a3.2 3.2 0 0 0-3.2 3.2v38.4a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2v-38.4a3.2 3.2 0 0 0-3.2-3.2"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
