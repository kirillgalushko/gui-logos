import { defineComponent as n, computed as i, openBlock as p, createElementBlock as e, normalizeStyle as g, createStaticVNode as s } from "vue";
const a = /* @__PURE__ */ n({
  __name: "LogoLexical",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const o = t, h = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, l) => (p(), e("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "115",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 115",
      style: g(h.value)
    }, l[0] || (l[0] = [
      s('<g><g transform="translate(127.57)"><path fill="#000" d="M35.21 99.28H.577V87.448h9.669V11.833H0V0h25.542v87.448h9.668zm65.127-19.769q-.866 8.514-8.37 14.863t-20.635 6.35q-14.142 0-23.233-8.226-9.09-8.37-9.09-24.531 0-14.864 8.224-24.82 8.37-9.957 23.233-9.957 13.42 0 21.213 8.08 7.936 7.938 8.08 20.203 0 4.041-.865 8.658H55.17q1.299 18.183 17.316 18.182 7.504 0 10.679-3.607 3.32-3.608 4.329-7.648zm-16.45-18.904q.576-5.772-2.742-10.822-3.175-5.195-10.823-5.195-6.928 0-10.534 4.617-3.607 4.618-4.474 11.4zm91.276 38.673h-31.025V87.448h6.205l-11.688-13.276-11.545 13.276h5.484V99.28h-29.005V87.448h8.947l18.76-20.203-19.915-20.924h-7.36V34.488h31.603v11.833h-6.06l10.822 12.988L151.93 46.32h-5.627V34.488h27.273v11.833h-6.782l-18.615 19.481 20.058 21.646h6.926zm12.89-78.212V4.04h15.729v17.028zm25.83 78.212H179.25V87.448h9.668V46.466h-10.245V34.488h25.542v52.96h9.668zm64.07-23.232q-1.01 8.658-7.649 16.739-6.638 7.937-21.356 7.937-13.854 0-22.656-8.37-8.658-8.37-8.658-24.387 0-15.73 8.947-25.253 9.09-9.525 23.665-9.524 5.773 0 11.545 1.443t11.4 4.762l2.597 18.182-12.41 1.299-2.165-10.679a25.4 25.4 0 0 0-11.255-2.597q-16.162 0-16.162 21.645 0 21.068 16.595 21.068 12.12 0 14.574-14.718zm10.793-36.798q7.215-3.462 12.843-4.762 5.628-1.298 12.987-1.298 10.823 0 17.75 5.483 7.07 5.485 7.07 16.45v29.15q0 5.772 4.762 5.772 1.3 0 3.32-.577l.144 8.514q-4.762 2.742-10.39 2.742-12.266 0-13.276-12.843v-.29q-2.886 5.052-8.225 9.092-5.196 4.04-12.988 4.04-6.781 0-13.42-4.04-6.493-4.185-6.493-14.43 0-11.977 9.524-15.73 9.523-3.895 20.635-3.895 2.742 0 5.628.144t5.339.433v-3.608q0-5.772-2.02-10.39-2.02-4.617-10.101-4.617-3.03 0-5.773.433a16.6 16.6 0 0 0-5.05 1.731l-2.598 9.957-12.41-1.299zm35.21 34.345v-2.31q-2.524-.296-5.05-.577a48 48 0 0 0-5.34-.288q-5.772 0-10.39 2.02-4.473 2.02-4.473 8.081 0 8.803 9.38 8.803 5.483 0 10.39-3.897 4.905-4.04 5.483-11.832m60.473 25.685h-34.632V87.448h9.668V11.833h-10.246V0h25.542v87.448h9.668z"></path><polygon fill="#76B6FF" points="187.662642 3.93741098 203.982626 3.93741098 203.982626 21.116342 187.662642 21.116342"></polygon></g><g transform="translate(0 18.54)"><polygon fill="#76B6FF" points="17.178931 30.0631292 36.0757551 30.0631292 36.0757551 38.6525947 17.178931 38.6525947"></polygon><polygon fill="#000" points="40.3704878 30.0631292 59.2673119 30.0631292 59.2673119 38.6525947 40.3704878 38.6525947"></polygon><polygon fill="#76B6FF" points="63.5620446 30.0631292 71.2925636 30.0631292 71.2925636 38.6525947 63.5620446 38.6525947"></polygon><polygon fill="#76B6FF" points="17.178931 43.806274 48.1010067 43.806274 48.1010067 52.3957395 17.178931 52.3957395"></polygon><polygon fill="#76B6FF" points="52.3957395 43.806274 71.2925636 43.806274 71.2925636 52.3957395 52.3957395 52.3957395"></polygon><polygon fill="#000" points="17.178931 57.5494188 36.0757551 57.5494188 36.0757551 66.1388843 17.178931 66.1388843"></polygon><polygon fill="#76B6FF" points="40.3704878 57.5494188 59.2673119 57.5494188 59.2673119 66.1388843 40.3704878 66.1388843"></polygon><polygon fill="#000" points="63.5620446 57.5494188 71.2925636 57.5494188 71.2925636 66.1388843 63.5620446 66.1388843"></polygon><path fill="#000" d="M93.625 0v8.59h-9.448v79.023h9.448v8.589H66.998v-8.59h8.59V8.59h-8.59V0zM71.293 12.884v8.59H8.589v53.254h62.704v8.59H0V12.884zm30.063 0v70.434H88.47v-8.59h4.295V21.474H88.47v-8.59z"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  a as _
};