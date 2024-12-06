import { defineComponent as e, computed as h, openBlock as i, createElementBlock as m, normalizeStyle as p, createStaticVNode as o } from "vue";
const n = /* @__PURE__ */ e({
  __name: "LogoAerogear",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, a = h(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (d, l) => (i(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "161",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 161",
      style: p(a.value)
    }, l[0] || (l[0] = [
      o('<g><path fill="#E25027" d="M406.426 89.675H372.39c-.025 1.278-.238 2.994 0 4.439.084.51.155 1.583.37 2.22.062.185.568 1.235.74 1.48 1.013 1.437 5.233 2.764 8.14 2.959 6.94.47 16.996-1.766 21.087-2.96 1.549 4.248 2.291 9.3 2.959 14.428-9.093 2.771-19.58 4.773-29.597 3.7-1.298-.14-1.976-.032-3.699-.37-.192-.038-2.985-.696-4.81-1.48-1.51-.648-4.592-2.322-6.288-3.699-.788-.637-1.626-1.215-2.22-1.85-.317-.339-1.653-1.916-1.85-2.221-.472-.716-1.271-2.632-1.85-4.068-.316-.782-.519-1.483-.74-2.22-2.388-7.938-2.65-28.903.74-36.256.44-.957 1.082-3.28 1.85-4.44.267-.403 1.372-1.112 1.85-1.85 1.82-2.813 6.42-5.128 10.359-6.287.723-.216 2.507-.823 4.069-1.111 2.496-.461 7.688-.458 9.25-.37 1.524.087 3.095.177 4.44.37.543.076 2.896.395 4.073.823 1.716.623 5.067 2.217 5.544 2.507 1.673 1.014 3.587 2.701 4.44 3.698.576.675 1.304 2.006 1.85 2.96 3.88 6.808 3.545 17.568 3.33 29.598m-17.76-19.238c-.078-.984-.53-2.197-.737-2.59-.731-1.39-2.068-2.13-2.22-2.22-1.56-.902-5.687-1.156-7.771-.741-4.668.936-6.19 5.542-5.549 10.361h16.276c.065-1.41.131-3.204.001-4.81m76.097 44.394h-7.4c-2.525 0-6.467.07-7.084-.216-1.743-.805-1.53-2.05-2.164-3.854-6.092 3.275-16.244 7.67-24.785 4.44-.735-.277-3.239-1.49-4.442-2.59-2.943-2.685-5.104-7.966-5.55-12.949-.744-8.359 1.578-14.968 6.66-18.127 1.324-.822 4.337-2.262 7.028-2.59 6.197-.753 10.88.54 18.868 0 .124-1.27.065-3.082 0-4.809-.079-2.045.037-3.68-.368-4.809-.49-1.356-1.89-2.664-3.332-3.329-1.226-.566-4.866-.739-7.03-.739-6.199 0-13.818 1.273-17.755 1.85-.508-4.92-1.764-9.09-2.222-14.06 5.508-2.283 13.604-2.52 20.349-3.328 1.857-.226 3.976-.108 6.29 0 4.18.193 7.631.728 11.098 1.848 2.881.933 4.077 1.615 5.919 2.96.848.622 1.796 1.606 2.133 2 .586.682 1.737 2.418 2.306 3.92 1.198 3.167 1.676 8.416 1.851 12.58.537 12.772-.113 29.922-.37 41.802m-32.189-21.826c-1.472 1.423-1.45 5.909 0 7.4 1.019 1.046 2.282 1.121 2.223 1.11 3.7.791 9.807-1.355 11.467-2.962-.856-1.485-.127-4.558-.37-6.658-4.361.5-11.082-1.048-13.32 1.11M512 67.477c-5.829 2.682-11.939 5.08-17.018 8.51v38.845h-18.867V50.83c4.256-.006 11.548-.038 15.141.232.763 0 .62.95 1.136 2.728.28.964.432 2.073.74 2.96.11.402.432.208.74 0 1.661-1.125 4.338-2.62 6.66-3.7 2.77-1.288 6.222-2.463 9.247-3.329.315-.069.348.144.37.37.599 2.823 1.455 11.143 1.851 17.386"></path><path fill="#669EB2" d="M27.005 61.69h25.529c2.362 7.246 4.446 14.542 6.657 21.826 1.646 5.419 3.588 10.82 5.18 16.277.552 1.89.923 3.733 1.479 5.55 4.446 14.532 9.213 28.95 13.32 43.654H58.821c-1.675-5.602-3.068-11.482-4.81-17.017-.747.007-27.772.15-28.855.369-1.886 5.268-3.148 11.157-4.81 16.648H0c6.36-21.664 12.859-43.21 19.608-64.743 2.254-7.194 4.13-14.41 6.659-21.455-.016-.633.275-.958.738-1.11m11.84 19.607c-2.854 11.05-6.204 22.847-9.248 34.034.636.043 18.676-.028 19.607 0-3.114-11.806-6.195-23.649-9.618-35.144-.351.14-.65.751-.74 1.11m95.359 42.546H100.17c-.118 2.02.005 3.64.37 5.178.2.842.352.978.74 1.85.973 2.188 3.437 3.142 4.07 3.33 3.013.897 5.994.707 9.988.368 3.967-.334 7.688-.726 11.1-1.477 1.725-.38 3.27-.674 4.44-.742 1.051 4.499 2.038 9.837 2.59 14.06-5.974 1.938-13.282 3.572-20.718 4.07-5.953.398-11.857-.28-16.675-2.016-.874-.316-1.815-.6-2.563-.944-1.188-.547-2.692-1.608-4.068-2.588-.132-.092-2.47-2.321-3.701-4.07-1.23-1.748-3.454-5.733-4.07-8.879-.714-3.656-.37-8.349-.37-12.947 0-4.702-.367-9.563 0-13.69.313-3.504 1.465-6.87 2.96-9.62 1.052-1.93 2.1-3.934 3.33-5.177.306-.31 1.913-1.638 2.22-1.852 2.553-1.762 6.36-3.056 9.99-4.068 4.17-1.166 11.401-.885 16.277 0 1.624.294 3.018.602 4.44 1.11 1.255.447 2.588.97 3.555 1.507.642.357 1.67 1 1.782 1.07 4.92 3.03 7.844 10.455 8.349 17.03.42 5.444.136 11.883-.001 18.497m-20.346-23.679c-3.332-2.158-10.4-1.04-12.21 1.11-.115.141-.646.978-.738 1.112-1.096 1.594-.796 5.788-.74 7.027h16.278c.232-4.6-.324-7.778-2.59-9.249m66.134 1.11c-.133.837-.442.838-1.849 1.482-1.875.86-4.565 1.568-6.66 2.59-2.927 1.426-6.195 3.112-8.138 4.437v39.216c.017.033-19.235.033-19.307-.039 0-21.086.069-42.507.069-63.591 3.81-.047 12.091-.007 15.908 0 .354 1.988.637 3.551 1.11 5.917 5.208-2.93 10.728-5.548 17.018-7.399 1.304 5.11 1.763 13.234 1.849 17.387"></path><path fill="#E25027" d="m363.13 61.195-3.154-15.961c-.252-1.246-1.098-2.247-2.096-2.454l-9.275-1.895a55.8 55.8 0 0 1 4.752 14.151 56 56 0 0 1 .855 14.603l7.913-5.372c.844-.571 1.247-1.82 1.004-3.072"></path><path fill="#E25027" d="M353.527 54.201c-6.302-30.505-36.141-50.127-66.649-43.823-30.506 6.303-50.126 36.144-43.823 66.65 5.523 26.734 29.125 45.104 55.407 44.997-18.657-3.063-34.388-17.272-38.44-36.89-5.257-25.438 11.102-50.32 36.54-55.576 25.436-5.257 50.316 11.103 55.572 36.541a47 47 0 0 1 .806 13.5 56.16 56.16 0 0 0 .587-25.399"></path><path fill="#E25027" d="m242.32 60.648-9.412 6.221c-.855.566-1.265 1.805-1.031 3.058l3.03 15.985c.238 1.255 1.083 2.262 2.082 2.483l11.065 2.397a55.97 55.97 0 0 1-5.734-30.144M302.267 9.66l-5.776-8.577c-.572-.847-1.82-1.256-3.074-1.014L277.448 3.17c-1.256.242-2.253 1.086-2.463 2.087l-2.142 10.317a56.3 56.3 0 0 1 14.787-5.066 56.2 56.2 0 0 1 14.637-.849m-40.463 13.285-10.574-2.067c-1.002-.191-2.175.402-2.888 1.457l-9.101 13.484c-.715 1.062-.828 2.367-.266 3.217l5.95 9.075a56.36 56.36 0 0 1 16.879-25.166m-6.82 78.45-2.195 10.93c-.199 1.003.39 2.169 1.451 2.888l13.472 9.117c1.06.716 2.365.824 3.221.27l9.071-5.88a56.37 56.37 0 0 1-25.02-17.325m85.445-72.726 1.906-9.49c.202-.994-.39-2.169-1.449-2.882l-13.473-9.118c-1.055-.71-2.366-.822-3.221-.271l-8.4 5.446a56.3 56.3 0 0 1 24.637 16.315"></path><path fill="#EB8467" d="M334.704 77.658c.126-11.02-8.967-17.377-17.517-19.652a25 25 0 0 0-7.453-.84c-10.43.428-19.002 7.596-21.84 18.265-1.765 6.634-1.017 13.34 2.103 18.875 3.088 5.478 8.268 9.418 14.579 11.097 2.646.704 5.311 1.01 7.92.902 4.057-.166 9.62-1.423 14.383-6.166l-23.516-6.258a1.944 1.944 0 0 1-1.38-2.378l2.69-10.11a1.943 1.943 0 0 1 2.379-1.38l38.121 10.143a35.2 35.2 0 0 0 1.172-9.926l-9.819-.609a1.944 1.944 0 0 1-1.822-1.963"></path><path fill="#669EB2" d="m252.266 122.05-5.947-4.048c-.007-.085-.008-.172-.016-.258a32.7 32.7 0 0 0-1.135-5.914c-.024-.081-.055-.162-.078-.243l4.053-6.1c.34-.506.28-1.288-.134-1.922l-5.284-8.096c-.414-.633-1.103-.995-1.696-.884l-7.162 1.354c-.066-.054-.126-.115-.191-.169a32 32 0 0 0-4.765-3.283c-.073-.039-.15-.072-.222-.112l-1.454-7.301c-.121-.597-.709-1.106-1.447-1.257l-9.42-1.915c-.738-.15-1.477.087-1.818.588l-4.066 6.033c-.084.005-.168.007-.253.015a32 32 0 0 0-5.912 1.13c-.085.025-.167.058-.252.083l-6.032-4.03c-.503-.334-1.277-.274-1.906.147l-8.03 5.379c-.63.422-.989 1.118-.876 1.717l1.306 7.001c-.055.062-.117.123-.17.188a32.7 32.7 0 0 0-3.508 5.158c-.041.075-.075.153-.117.228l-7.145 1.415c-.593.116-1.102.709-1.256 1.453l-1.98 9.517c-.153.745.08 1.492.575 1.841l5.978 4.18c.007.087.008.17.016.256a32.6 32.6 0 0 0 1.144 6.061c.023.085.053.166.079.248l-4.03 6.062c-.337.506-.28 1.286.134 1.924l5.284 8.092c.413.634 1.102.997 1.697.886l7.094-1.339c.067.053.127.115.193.173a32.3 32.3 0 0 0 5.17 3.512c.075.043.155.075.228.114l1.37 7.088c.116.597.702 1.109 1.443 1.253l9.415 1.932c.74.152 1.479-.09 1.826-.59l4.133-6.056c.083-.01.174-.01.258-.018a32 32 0 0 0 4.013-.694c-1.92.202-3.889.2-5.887-.083-13.148-1.866-22.293-14.039-20.424-27.185 1.866-13.15 14.038-22.296 27.188-20.427 13.146 1.866 22.29 14.036 20.424 27.186a23.9 23.9 0 0 1-2.829 8.331c.964-1.282 1.867-2.624 2.643-4.059.041-.077.075-.158.117-.235l7.096-1.491c.59-.127 1.097-.725 1.246-1.47l1.904-9.53c.151-.751-.084-1.493-.585-1.835"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};