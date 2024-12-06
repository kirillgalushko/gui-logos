import { defineComponent as l, computed as c, openBlock as e, createElementBlock as p, normalizeStyle as i, createStaticVNode as v } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoPartytown",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const q = t, h = c(() => ({
      width: q.width || "1em",
      height: q.height || "1em",
      minWidth: q.width || "1em",
      minHeight: q.height || "1em"
    }));
    return (m, a) => (e(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "107",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 107",
      style: i(h.value)
    }, a[0] || (a[0] = [
      v('<g><g><path fill="#FF37AD" d="M418.942 27.487a4.72 4.72 0 1 0 .142-9.44 4.72 4.72 0 0 0-.142 9.44m72.29-4.002a4.72 4.72 0 1 0 .142-9.44 4.72 4.72 0 0 0-.141 9.44"></path><path fill="#FCC954" d="M495.064 84.13a4.72 4.72 0 1 0 .141-9.44 4.72 4.72 0 0 0-.141 9.44M438.22 9.44a4.72 4.72 0 1 0 .143-9.44 4.72 4.72 0 0 0-.143 9.44"></path><path fill="#2890E9" d="M466.147 42.22a3.686 3.686 0 0 1-3.577-4.576q.222-.887.358-1.775a10.1 10.1 0 0 1-3.48.758c-2.143.082-4.063-.28-5.698-1.072a8.86 8.86 0 0 1-3.832-3.538c-1.76-3.05-1.608-7.06.384-10.22 1.9-3.016 5.116-4.649 8.603-4.382 2.686.21 5.04 1.216 6.925 2.942a51 51 0 0 0 .986-3.11c1.926-6.798 2.562-13.624 2.568-13.693a3.68 3.68 0 0 1 4.001-3.336 3.685 3.685 0 0 1 3.336 4.003c-.027.305-.705 7.584-2.817 15.039-1.066 3.764-2.326 6.944-3.754 9.484q.158.85.252 1.742c.297 2.874.06 5.968-.684 8.945a3.69 3.69 0 0 1-3.571 2.79m-8.02-17.466c-.38 0-1.052.112-1.593.968-.517.821-.618 1.943-.234 2.609.511.885 2.014.963 2.865.93.967-.036 1.957-.642 2.925-1.746a6.5 6.5 0 0 0-.57-.965c-.8-1.11-1.812-1.679-3.187-1.786q-.079-.008-.206-.01"></path><path fill="#F0A420" d="M455.552 52.315C440.272 40.27 424.3 35.05 419.878 40.659a5.1 5.1 0 0 0-.9 1.797 2 2 0 0 0-.062.243v.01q-.09.377-.133.764l-8.651 50.653c-1.386 8.135 6.667 14.648 14.334 11.594l46.916-18.694c.827-.33 2.863-1.587 3.42-2.281q.222-.217.414-.46c4.42-5.61-4.384-19.922-19.664-31.971"></path><path fill="#FCC954" d="M475.21 84.288c4.424-5.612-4.377-19.927-19.658-31.973-15.28-12.047-31.255-17.263-35.679-11.652-4.423 5.612 4.378 19.927 19.659 31.973s31.255 17.263 35.678 11.652"></path><path fill="#F0A420" d="M472.543 81.02c3.63-4.606-4.367-16.963-17.861-27.601-13.495-10.639-27.378-15.53-31.008-10.925s4.366 16.963 17.86 27.6c13.495 10.64 27.378 15.531 31.009 10.926"></path><path fill="#2E6AC9" d="M440.287 99.417c-5.71.028-10.363-2.83-16.004-7.276-6.564-5.176-10.923-11.372-11.267-14.9l-1.86 10.89c.86 3.108 3.795 7.047 8.05 10.402 3.54 2.792 7.112 4.708 10.815 4.974zm-5.711-19.767c-10.937-8.624-18.043-18.52-17.842-24.18l-1.814 10.614c.14 5.055 6.048 13.225 14.452 19.85 7.53 5.936 15.377 10.115 21.385 9.31l10.2-4.064c-8.218.568-16.889-4.044-26.381-11.53"></path><path fill="#2890E9" d="M457.216 57.808a4.72 4.72 0 1 0 .142-9.44 4.72 4.72 0 0 0-.142 9.44"></path><path fill="#FF37AD" d="m482.673 48.624.034-.039q.065-.071.238-.247c.232-.233.606-.59 1.116-1.02a24 24 0 0 1 4.62-3.041c4.037-2.043 10.046-3.71 17.929-1.892a4.4 4.4 0 1 0 1.977-8.576c-10.203-2.352-18.315-.201-23.88 2.617a33 33 0 0 0-6.32 4.164 26 26 0 0 0-1.68 1.541q-.312.314-.61.644l-.047.053-.017.02-.008.008-.003.004c-.001.002-.003.004 3.332 2.873l-3.335-2.87a4.401 4.401 0 0 0 6.654 5.761M439.08 17.236a4.68 4.68 0 0 0-6.468-1.46 4.686 4.686 0 0 0-1.46 6.466c.17.273 3.657 5.923 4.374 13.66.73 7.863-1.581 15.09-6.876 21.57 1.783 2.265 3.928 4.62 6.38 6.976 3.391-3.919 5.943-8.13 7.62-12.586 2.062-5.483 2.791-11.295 2.17-17.276-.992-9.515-5.131-16.384-5.74-17.35"></path><path fill="#2890E9" d="M497.75 62.402c2.391.618 4.082 1.293 4.813 1.607a4.73 4.73 0 0 0 5.555-.446 4.722 4.722 0 0 0-1.575-8.047c-2.24-.994-10.723-4.351-21.938-3.755-7.548.401-14.807 2.492-21.573 6.22-6.407 3.53-12.357 8.533-17.757 14.915a79 79 0 0 0 8.038 5.025c9.12-10.394 19.64-16.028 31.364-16.773a42.2 42.2 0 0 1 13.072 1.254"></path></g><path fill="#2E6AC9" d="M1.868 93.109q-.822 0-1.345-.51T0 91.286V43.88q0-.802.523-1.313t1.345-.51h20.398q6.052 0 10.46 1.823 4.484 1.823 6.949 5.543 2.54 3.646 2.54 9.117 0 5.542-2.54 9.19-2.465 3.573-6.95 5.324-4.407 1.75-10.458 1.75H12.254v16.482q0 .803-.523 1.313t-1.345.51zM12.029 65.76h9.863q3.811 0 5.902-1.824 2.168-1.824 2.168-5.47 0-3.21-1.943-5.25-1.869-2.043-6.127-2.043H12.03zm47.614 28.08q-3.96 0-7.098-1.459-3.138-1.532-5.006-4.084t-1.868-5.69q0-5.177 4.259-8.167 4.334-2.99 11.356-4.084l9.788-1.386v-1.313q.001-2.844-1.345-4.376-1.343-1.531-4.707-1.531-2.465 0-3.96.948a6.6 6.6 0 0 0-2.316 2.48q-.596.947-1.719.947H49.93q-.823 0-1.27-.437a1.45 1.45 0 0 1-.374-1.167q0-1.24.971-2.918.972-1.676 2.988-3.282 2.018-1.677 5.157-2.77 3.138-1.095 7.695-1.095 4.708.001 8.07 1.094 3.362 1.095 5.38 3.064a12.3 12.3 0 0 1 2.987 4.595q.972 2.551.972 5.541v22.537q0 .803-.523 1.313-.522.51-1.345.51h-7.321q-.749 0-1.27-.51-.524-.51-.524-1.313v-2.699q-.972 1.387-2.615 2.626-1.644 1.167-3.96 1.896-2.242.73-5.305.73m2.988-7.586q2.466 0 4.409-1.02t3.064-3.136q1.12-2.115 1.12-5.325v-1.24l-6.948 1.095q-4.034.655-5.904 1.97-1.868 1.311-1.868 3.208 0 1.385.823 2.407.897 1.02 2.316 1.531 1.42.51 2.988.51m30.715 6.856a1.75 1.75 0 0 1-1.27-.51q-.525-.51-.524-1.313v-34.28q.001-.729.524-1.24.523-.582 1.27-.582h7.323q.746-.001 1.27.583.597.51.598 1.24v2.918a12.8 12.8 0 0 1 4.557-3.502q2.765-1.24 6.35-1.24h3.214q.746 0 1.27.51.524.512.524 1.313v6.274q0 .801-.523 1.313a1.76 1.76 0 0 1-1.271.51h-6.575q-3.288 0-5.155 1.823-1.868 1.751-1.868 5.032v19.327q0 .803-.523 1.313-.524.51-1.345.51zm49.356 0q-4.632 0-7.92-1.458-3.287-1.531-5.006-4.668-1.644-3.135-1.644-7.877V63.791h-5.828q-.822 0-1.344-.511-.523-.51-.523-1.313v-4.96q0-.8.523-1.312.522-.51 1.344-.51h5.828V43.15q0-.803.524-1.313a2 2 0 0 1 1.344-.51h7.322q.823 0 1.345.51.523.51.523 1.313v12.034h9.34q.747 0 1.27.51t.523 1.312v4.961q0 .801-.523 1.313a1.75 1.75 0 0 1-1.27.51h-9.34v14.44q0 2.771.972 4.377 1.046 1.53 3.586 1.531h5.455q.746 0 1.27.51.522.51.523 1.24v5.397q0 .803-.523 1.313a1.75 1.75 0 0 1-1.27.51zm21.91 13.857q-.597 0-1.12-.437a1.47 1.47 0 0 1-.449-1.094q0-.146.075-.438.075-.218.224-.583l5.828-13.638-14.346-33.039q-.225-.583-.224-.947c.039-.416.224-.804.523-1.095.278-.33.69-.518 1.12-.51h7.249q.971 0 1.42.51.447.438.672.949l9.264 22.608 9.49-22.608c.191-.38.444-.725.747-1.022q.448-.437 1.42-.438h7.098q.67 0 1.12.51.523.439.523 1.023 0 .364-.3 1.02l-21.144 47.771c-.156.4-.413.751-.746 1.021q-.45.437-1.42.437zM219.9 93.11q-4.632 0-7.92-1.458-3.287-1.531-5.006-4.668-1.644-3.135-1.644-7.877V63.791h-5.828q-.822 0-1.344-.511-.524-.51-.524-1.313v-4.96q0-.8.524-1.312.522-.51 1.344-.51h5.828V43.15q0-.803.524-1.313a2 2 0 0 1 1.344-.51h7.322q.823 0 1.345.51.523.51.523 1.313v12.034h9.34q.747 0 1.27.51t.523 1.312v4.961q0 .801-.523 1.313a1.75 1.75 0 0 1-1.27.51h-9.34v14.44q0 2.771.972 4.377 1.046 1.53 3.586 1.531h5.455q.745 0 1.27.51.522.51.523 1.24v5.397q0 .803-.523 1.313a1.75 1.75 0 0 1-1.27.51zm32.595.73q-6.202 0-10.386-1.97-4.185-2.041-6.426-5.76-2.167-3.721-2.39-8.68a64 64 0 0 1-.075-3.282q0-1.897.075-3.282.222-5.032 2.54-8.678 2.316-3.72 6.5-5.69 4.184-2.041 10.162-2.042 5.902 0 10.087 2.042 4.184 1.97 6.5 5.69 2.316 3.646 2.54 8.678.15 1.385.15 3.282 0 1.823-.15 3.282-.223 4.959-2.465 8.68-2.167 3.718-6.351 5.76-4.184 1.97-10.311 1.97m0-8.022q3.66 0 5.529-2.19 1.867-2.26 2.017-6.563.075-1.093.075-2.916a45 45 0 0 0-.075-2.918q-.15-4.23-2.017-6.491-1.868-2.26-5.529-2.26-3.663 0-5.604 2.259-1.868 2.261-2.018 6.492-.084 1.457-.074 2.917 0 1.824.074 2.917.15 4.304 2.018 6.564 1.941 2.189 5.604 2.189m36.681 7.292q-1.046 0-1.644-.51-.523-.51-.822-1.313L276.026 57.52a1.9 1.9 0 0 1-.15-.73q0-.657.45-1.094.522-.51 1.195-.51h6.574q.972 0 1.495.51.522.51.673.949l6.798 22.535 7.248-22.39q.15-.51.673-1.021.597-.583 1.643-.583h4.259q1.046-.001 1.569.583.599.51.748 1.022l7.247 22.39 6.8-22.536q.073-.438.597-.95.597-.51 1.494-.51h6.575q.673 0 1.121.51.523.439.523 1.095 0 .364-.075.73l-10.759 33.767c-.134.51-.42.969-.822 1.313q-.522.51-1.568.51h-5.754q-1.046 0-1.644-.51a3.1 3.1 0 0 1-.897-1.313l-7.247-21.588-7.397 21.588c-.134.51-.421.969-.822 1.313q-.599.51-1.644.51zm53.057 0q-.748 0-1.27-.51-.524-.51-.524-1.313v-34.28q0-.8.523-1.312c.337-.336.796-.52 1.271-.51h7.322q.822 0 1.345.51t.523 1.312v2.846q1.943-2.335 5.006-3.866t7.472-1.532q4.407 0 7.696 1.97 3.36 1.896 5.23 5.616 1.942 3.646 1.942 8.897v20.348q0 .803-.598 1.313c-.336.335-.795.52-1.27.51h-7.92q-.821 0-1.344-.51t-.523-1.313v-19.91q0-3.866-1.943-5.98-1.868-2.189-5.53-2.188-3.51 0-5.602 2.187-2.094 2.115-2.093 5.981v19.91q0 .803-.523 1.313a1.75 1.75 0 0 1-1.27.51z"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};