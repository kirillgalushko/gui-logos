import { defineComponent as m, computed as o, openBlock as n, createElementBlock as q, normalizeStyle as r, createElementVNode as e } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoMariadb",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, h) => (n(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "151",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 151",
      style: r(i.value)
    }, h[0] || (h[0] = [
      e("g", null, [
        e("path", {
          fill: "#A57242",
          "fill-rule": "nonzero",
          d: "M391.383 77.757q9.66 0 15.682 8.25v-7.209h4.98v39.466h-4.98v-6.763q-6.764 8.1-15.46 8.101-8.695 0-14.716-6.169-5.946-6.243-5.946-14.79 0-8.622 6.02-14.717 6.02-6.168 14.42-6.169m-89.886 0q9.662 0 15.682 8.25v-7.209h4.98v39.466h-4.98v-6.763q-6.763 8.1-15.46 8.101-8.695 0-14.716-6.169-5.946-6.243-5.946-14.79 0-8.622 6.02-14.717 6.02-6.168 14.42-6.169M434.469 64.9q11.371 0 16.649 1.71 5.351 1.635 9.216 5.277 3.865 3.567 5.946 8.77t2.081 12.19q0 6.911-3.27 13.08-3.196 6.096-8.77 9.217-5.501 3.12-15.906 3.121h-17.02V64.9zm-73.121 13.899v39.466h-5.129V78.798zm-139.722-13.9 21.702 43.777L264.882 64.9h.818l7.656 53.365h-5.277l-5.203-38.202-18.879 38.202h-1.338l-19.101-38.5-5.203 38.5h-5.128l7.581-53.365zM344.36 77.757q2.452 0 4.906 1.338l-2.676 4.311q-1.115-.669-2.304-.669-2.304 0-4.385 2.379-2.007 2.378-2.973 6.169-.966 3.715-.966 13.6v13.38h-5.203V78.797h5.203v5.723q2.08-3.493 4.013-5.128 2.007-1.635 4.385-1.636M490.044 64.9q8.398 0 12.71 3.42 4.384 3.344 4.384 9.661a12.34 12.34 0 0 1-1.783 6.467q-1.71 2.898-5.054 4.682 5.5 1.785 8.324 5.351 2.899 3.568 2.899 8.473 0 6.615-4.831 11-4.831 4.311-12.487 4.311H479.49V64.9zM391.68 82.663q-6.54 0-11.075 4.831-4.533 4.757-4.533 11.297t4.608 11.372q4.607 4.757 11 4.757 6.465 0 11.074-4.608 4.608-4.608 4.608-11.595 0-6.764-4.534-11.372-4.533-4.682-11.148-4.682m-89.886 0q-6.54 0-11.074 4.831-4.534 4.757-4.534 11.297t4.608 11.372q4.608 4.757 11 4.757 6.465 0 11.074-4.608 4.608-4.608 4.609-11.595 0-6.764-4.534-11.372-4.534-4.682-11.149-4.682m130.52-12.561h-3.791v43.108h6.169q9.662 0 13.973-.966 4.385-.966 7.655-3.79 3.27-2.9 4.98-6.987 1.71-4.088 1.71-9.365t-2.007-9.736q-1.933-4.46-5.574-7.359t-8.622-3.864q-4.906-1.041-14.493-1.041m55.426 22.446h-2.973v20.514h6.615q5.723 0 8.398-1.115 2.75-1.19 4.46-3.568 1.71-2.453 1.71-4.98 0-2.526-.967-4.459-.966-1.932-2.899-3.419-1.858-1.486-4.533-2.23-2.602-.743-9.811-.743m3.196-22.446h-6.17v17.095h3.048q6.986 0 10.406-2.23 3.418-2.23 3.418-6.987 0-7.878-10.702-7.878m-132.19-6.54q1.784 0 2.973 1.263 1.264 1.19 1.264 2.973 0 1.71-1.264 2.973-1.19 1.19-2.973 1.19-1.71 0-2.973-1.264-1.19-1.264-1.189-2.9 0-1.709 1.19-2.972 1.263-1.264 2.972-1.264"
        }),
        e("path", {
          fill: "#002B64",
          d: "M222.34.004c-3.513.112-2.401 1.125-9.993 2.993-7.666 1.886-17.03 1.308-25.285 4.77-24.643 10.335-29.588 45.658-51.99 58.311-16.746 9.459-33.64 10.213-48.83 14.973-9.982 3.13-20.902 9.55-29.946 17.343-7.02 6.052-7.203 11.373-14.538 18.963-7.846 8.119-31.182.137-41.758 12.563 3.407 3.445 4.9 4.41 11.615 3.516-1.39 2.635-9.584 4.855-7.98 8.73 1.687 4.08 21.497 6.844 39.506-4.029 8.386-5.063 15.066-12.361 28.128-14.103 16.902-2.253 36.374 1.445 55.94 4.266-2.9 8.651-8.726 14.404-13.392 21.294-1.445 1.556 2.903 1.73 7.862.79 8.921-2.206 15.35-3.982 22.084-7.901 8.272-4.815 9.525-17.16 19.674-19.832 5.655 8.691 21.034 10.744 30.578 3.792-8.374-2.37-10.689-20.194-7.862-28.049 2.678-7.435 5.323-19.328 8.02-29.155 2.895-10.555 3.963-23.859 7.467-29.235 5.27-8.089 11.095-10.867 16.152-15.428s9.685-9.001 9.533-19.439c-.048-3.361-1.787-5.235-4.984-5.133"
        }),
        e("path", {
          fill: "#C49A6C",
          "fill-rule": "nonzero",
          d: "M215.447 6.206c.845 2.879 2.166 4.2 7.877 4.728-.834 7.241-5.665 11.202-11.08 15.002-4.766 3.343-9.988 6.561-13.343 11.783-3.437 5.348-5.62 23.654-10.949 41.732-4.607 15.62-11.564 31.065-23.713 37.832-1.269-3.194.162-9.09-2.362-11.028-1.634 4.658-3.48 9.103-5.644 13.234-7.128 13.626-17.683 23.828-35.321 26.943 8.369-11.325 16.371-23.02 16.544-42.539-5.89 1.274-5.765 15.187-11.816 18.906-3.88.422-7.81.42-11.766.182-16.245-.973-32.91-5.856-48.107-.98-10.347 3.321-18.81 11.156-27.572 14.956-10.298 4.466-18.097 6.303-30.92 4.466-1.63-2.193 9.385-5.024 8.726-9.786-5.019-.555-7.933.661-12.296-1.321.482-.887 1.19-1.627 2.081-2.243 7.996-5.534 30.709-1.307 36.787-7.275 3.752-3.681 6.214-7.535 8.762-11.28 2.472-3.635 5.027-7.169 8.92-10.353 1.437-1.176 3-2.338 4.658-3.472 6.633-4.54 14.839-8.657 22.915-11.495 11-3.867 22.148-4.186 33.874-8.666 7.244-2.769 15.12-6.188 21.542-10.973a43 43 0 0 0 4.3-3.65c18.335-17.873 21.97-49.401 50.575-52.339 3.459-.355 6.29-.24 8.868-.319 2.97-.088 5.6-.433 8.46-2.045m-34.872 100.907c.342 5.464 3.513 16.304 6.314 18.939-5.484 1.334-14.932-.87-17.355-4.738 1.245-5.586 7.725-10.692 11.041-14.201"
        }),
        e("path", {
          fill: "#002B64",
          d: "M216.84 12.225c-1.077 2.26-3.139 5.172-3.139 10.923-.009.987-.75 1.663-.762.141.055-5.62 1.543-8.05 3.124-11.243.734-1.309 1.177-.77.777.179m-1.085-.85c-1.27 2.155-4.33 6.086-4.835 11.816-.094.982-.893 1.59-.771.072.55-5.593 2.996-9.094 4.852-12.137.842-1.237 1.237-.66.754.248m-.988-1.128c-1.448 2.04-6.157 6.762-7.142 12.43-.177.969-1.024 1.51-.775.007 1.02-5.529 5.079-9.874 7.184-12.747.943-1.164 1.288-.556.733.31m-.883-1.258-.476.506c-2.105 2.258-6.997 7.764-8.627 12.803-.314.936-1.228 1.353-.769-.101 1.785-5.33 6.702-11.07 9.19-13.62 1.098-1.02 1.354-.368.682.412m-25.275 11.41c1.091-4.686 4.736-6.821 11.028-6.3 1.518 6.994-6.979 9.816-11.028 6.3"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};