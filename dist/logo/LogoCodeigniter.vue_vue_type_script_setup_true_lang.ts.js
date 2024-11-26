import { defineComponent as m, computed as i, openBlock as o, createElementBlock as v, normalizeStyle as n, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ m({
  __name: "LogoCodeigniter",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const q = e, t = i(() => ({
      width: q.width || "1em",
      height: q.height || "1em",
      minWidth: q.width || "1em",
      minHeight: q.height || "1em"
    }));
    return (l, a) => (o(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "85",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 85",
      style: n(t.value)
    }, a[0] || (a[0] = [
      h("g", { fill: "#DD4814" }, [
        h("path", { d: "M21.64 83.327a15.94 15.94 0 0 1-9.458-13.282 18.75 18.75 0 0 1 8.51-14.746 6.78 6.78 0 0 0 .521 6.147 5.64 5.64 0 0 0 5.749 2.243 5.894 5.894 0 0 0 4.084-7.265 5.97 5.97 0 0 0-1.792-2.842 13.05 13.05 0 0 1-4.689-11.933 12.2 12.2 0 0 1 3.806-6.2c-1.406 3.752 2.56 7.453 5.223 9.274a138 138 0 0 1 13.629 9.328A18.36 18.36 0 0 1 54.17 69.68c-1.07 6.392-5.593 11.67-11.756 13.65 12.329-2.743 25.04-12.538 25.283-26.43a28.79 28.79 0 0 0-17.018-25.631h-.45c.224.544.333 1.13.312 1.722a6.5 6.5 0 0 0 0-1.147q.082.677 0 1.355a5.9 5.9 0 0 1-7.127 4.334 5.88 5.88 0 0 1-3.209-2.05c-4.064-5.21 0-11.138.68-16.869A21.43 21.43 0 0 0 32.015 0c2.973 4.954-.987 11.461-3.865 15.163-2.884 3.701-7.052 6.46-10.448 9.69A85 85 0 0 0 7.676 36.002 33.96 33.96 0 0 0 .728 64.499c2.905 9.69 10.959 16.97 20.891 18.86h.055zm84.544-41.626q0-4.668 1.604-9.263 1.678-4.668 4.814-8.314t7.731-5.908q4.595-2.334 10.43-2.334 6.93 0 11.816 3.136 4.959 3.136 7.293 8.169l-4.011 2.48q-1.24-2.553-3.064-4.303a16.1 16.1 0 0 0-3.792-2.845 15.3 15.3 0 0 0-4.23-1.532 19 19 0 0 0-4.304-.51q-4.668 0-8.242 1.896-3.573 1.896-6.053 4.96-2.407 3.063-3.647 6.929a24.7 24.7 0 0 0-1.24 7.731q0 4.303 1.459 8.242 1.53 3.938 4.084 7.002a21 21 0 0 0 6.127 4.813q3.574 1.75 7.731 1.75 2.188 0 4.45-.51a18.4 18.4 0 0 0 4.448-1.75 20 20 0 0 0 4.012-2.99q1.822-1.824 3.063-4.377l4.23 2.188a16.3 16.3 0 0 1-3.5 5.179 23.7 23.7 0 0 1-5.033 3.72 25 25 0 0 1-5.908 2.334q-3.063.802-6.054.802-5.324 0-9.773-2.334-4.45-2.334-7.658-6.054a29.5 29.5 0 0 1-5.033-8.533q-1.75-4.814-1.75-9.774m68.632 26.987q-4.157 0-7.585-1.532a19.6 19.6 0 0 1-5.98-4.303q-2.48-2.7-3.866-6.273a20.6 20.6 0 0 1-1.386-7.512q0-4.012 1.386-7.586 1.458-3.573 3.938-6.272a19.6 19.6 0 0 1 5.981-4.303q3.428-1.605 7.512-1.605 4.085 0 7.513 1.605 3.5 1.605 5.98 4.303 2.553 2.699 3.94 6.272 1.458 3.574 1.458 7.586 0 3.938-1.386 7.512-1.386 3.575-3.938 6.273-2.48 2.698-5.981 4.303-3.428 1.532-7.586 1.532M161.031 49.14q0 3.21 1.095 5.98 1.093 2.7 2.917 4.814a14.1 14.1 0 0 0 4.376 3.21q2.553 1.166 5.397 1.166 2.846 0 5.325-1.167a14.9 14.9 0 0 0 4.449-3.282q1.895-2.115 2.99-4.886 1.094-2.772 1.094-5.981 0-3.136-1.094-5.908-1.094-2.844-2.99-4.887a13.4 13.4 0 0 0-4.45-3.282 11.74 11.74 0 0 0-5.324-1.24q-2.844 0-5.324 1.24a13.6 13.6 0 0 0-4.376 3.282q-1.896 2.116-2.99 4.96-1.095 2.772-1.095 5.98m56.599 19.547q-3.939 0-7.294-1.605-3.354-1.677-5.762-4.376-2.406-2.7-3.792-6.2a21.4 21.4 0 0 1-1.313-7.44q0-4.01 1.313-7.585 1.312-3.646 3.574-6.345 2.334-2.7 5.47-4.23 3.21-1.605 7.002-1.605 4.813 0 8.533 2.553 3.72 2.48 5.835 6.054V14.715h4.96V61.54q0 2.042 1.75 2.042v4.376q-1.095.219-1.75.219-1.75 0-3.064-1.094-1.312-1.167-1.312-2.772v-3.72q-2.262 3.72-6.127 5.908-3.866 2.19-8.023 2.189m1.094-4.377q1.823 0 3.866-.729a16.6 16.6 0 0 0 3.938-1.97q1.824-1.311 3.063-2.99 1.313-1.75 1.605-3.72V43.16a12.5 12.5 0 0 0-2.115-3.647 16 16 0 0 0-3.21-3.063 14.3 14.3 0 0 0-3.792-2.042q-2.042-.73-4.011-.73-3.064 0-5.544 1.313a14.2 14.2 0 0 0-4.303 3.501q-1.75 2.115-2.698 4.887a17.5 17.5 0 0 0-.949 5.689q0 3.063 1.094 5.835 1.095 2.77 2.99 4.886a14.9 14.9 0 0 0 4.45 3.282q2.625 1.24 5.616 1.24m45.074 4.377q-4.157 0-7.658-1.532a19.6 19.6 0 0 1-5.98-4.303 21 21 0 0 1-4.012-6.346q-1.386-3.573-1.386-7.658 0-4.012 1.386-7.512 1.458-3.575 3.938-6.2 2.553-2.7 6.054-4.23 3.501-1.605 7.586-1.605 4.157 0 7.585 1.605 3.5 1.53 5.98 4.23a19.9 19.9 0 0 1 3.866 6.2q1.386 3.5 1.386 7.439v1.167q0 .583-.073.802h-32.53q.219 3.064 1.386 5.69 1.24 2.552 3.137 4.448a14.6 14.6 0 0 0 4.303 2.99 13.7 13.7 0 0 0 5.251 1.022q1.824 0 3.647-.51a14.7 14.7 0 0 0 3.355-1.386 13 13 0 0 0 2.772-2.116q1.239-1.312 1.896-2.844l4.303 1.167a13.1 13.1 0 0 1-2.48 3.865 19 19 0 0 1-3.72 2.99q-2.115 1.24-4.667 1.97a21.3 21.3 0 0 1-5.325.657m-13.93-21.735h27.934q-.219-3.064-1.459-5.544-1.167-2.552-3.063-4.376a13 13 0 0 0-4.303-2.844q-2.407-1.02-5.179-1.021-2.771 0-5.25 1.02a13.9 13.9 0 0 0-4.377 2.845q-1.823 1.824-2.99 4.376-1.094 2.553-1.313 5.544m50.326 21.005h-10.066V16.174h10.066zm24.36.219q-3.865 0-7.002-1.532a17.6 17.6 0 0 1-5.47-4.157q-2.26-2.7-3.5-6.2t-1.24-7.439q0-4.158 1.312-7.731 1.313-3.575 3.647-6.273a16.6 16.6 0 0 1 5.616-4.23q3.282-1.532 7.22-1.532 4.45 0 7.805 2.042 3.355 1.97 5.543 5.325v-6.71h8.534v36.395q0 4.23-1.605 7.585a16.44 16.44 0 0 1-4.45 5.69q-2.77 2.332-6.71 3.573-3.865 1.24-8.46 1.24-6.273 0-10.576-2.042-4.23-2.115-7.293-5.908l5.324-5.179q2.188 2.7 5.47 4.23a16.8 16.8 0 0 0 7.075 1.532 15.6 15.6 0 0 0 4.303-.583q2.115-.656 3.72-1.97 1.604-1.313 2.48-3.354.948-2.042.948-4.814V61.32q-1.896 3.282-5.324 5.106-3.428 1.75-7.367 1.75m3.282-7.804q1.605 0 3.064-.51 1.459-.511 2.698-1.386a11 11 0 0 0 2.188-2.043 9.2 9.2 0 0 0 1.46-2.48v-9.117q-1.314-3.354-4.158-5.397-2.772-2.042-5.835-2.042-2.26 0-4.085 1.021a9.5 9.5 0 0 0-3.136 2.626q-1.313 1.605-2.042 3.72a14.7 14.7 0 0 0-.656 4.376q0 2.334.802 4.376t2.188 3.574a10.9 10.9 0 0 0 3.355 2.407q1.896.875 4.157.875m63.528-16.265v23.85h-9.774V46.515q0-4.595-1.604-6.71t-4.45-2.115q-1.458 0-2.99.583a11 11 0 0 0-2.917 1.678 13 13 0 0 0-2.407 2.48 10 10 0 0 0-1.605 3.209v22.318h-9.773V29.74h8.825v7.074q2.115-3.645 6.127-5.689 4.011-2.042 9.044-2.042 3.573 0 5.835 1.313 2.26 1.313 3.5 3.428t1.678 4.814q.51 2.698.51 5.47m18.307 23.85h-9.774V29.74h9.774zm0-43.543h-9.774v-9.7h9.774zm29.758 33.843 1.969 7.73q-1.97.876-4.814 1.751-2.844.876-5.98.876-2.043 0-3.866-.51a9.1 9.1 0 0 1-3.137-1.606q-1.312-1.166-2.115-2.917-.802-1.824-.802-4.376V37.252h-5.033V29.74h5.033v-12.4h9.773v12.4h8.023v7.512h-8.023v18.672q0 2.042 1.022 2.917 1.094.802 2.625.802a9 9 0 0 0 2.99-.51q1.46-.51 2.335-.875m23.85 10.43q-4.595 0-8.315-1.532-3.72-1.605-6.345-4.303a19.4 19.4 0 0 1-4.085-6.273 20.6 20.6 0 0 1-1.386-7.512q0-4.084 1.386-7.659 1.386-3.646 4.012-6.345 2.625-2.771 6.345-4.376 3.793-1.605 8.46-1.605 4.669 0 8.315 1.605 3.72 1.605 6.273 4.303 2.625 2.7 3.938 6.273a20.4 20.4 0 0 1 1.386 7.44q0 .947-.073 1.822 0 .876-.146 1.46h-29.539q.219 2.26 1.094 4.01a9.9 9.9 0 0 0 2.261 2.991 9.9 9.9 0 0 0 3.137 1.896q1.75.657 3.646.657a11.3 11.3 0 0 0 5.47-1.386q2.626-1.459 3.574-3.793l8.388 2.334q-2.115 4.377-6.783 7.221-4.594 2.772-11.013 2.772m-9.92-23.048h19.839q-.365-4.304-3.21-6.856-2.77-2.625-6.782-2.626a9.6 9.6 0 0 0-3.72.73 9.2 9.2 0 0 0-2.99 1.896q-1.314 1.24-2.188 2.99-.802 1.75-.949 3.866M512 29.302V38.2q-4.449.073-7.95 1.75-3.501 1.606-5.033 4.887v23.121h-9.773V29.74h8.971v8.169a16.5 16.5 0 0 1 2.407-3.501 17.8 17.8 0 0 1 2.99-2.772q1.605-1.167 3.21-1.75 1.677-.657 3.209-.657h1.167q.437 0 .802.073" })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
