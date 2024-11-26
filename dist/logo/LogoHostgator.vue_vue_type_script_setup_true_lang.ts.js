import { defineComponent as l, computed as p, openBlock as i, createElementBlock as s, normalizeStyle as E, createStaticVNode as d } from "vue";
const M = /* @__PURE__ */ l({
  __name: "LogoHostgator",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const a = t, h = p(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (e, c) => (i(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "92",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 92",
      style: E(h.value)
    }, c[0] || (c[0] = [
      d('<g><path fill="#1F2044" d="M307.59 13.623c13.6 0 25.494 6.39 29.772 18.362l-14.478 4.197c-3.557-6.946-9.415-8.772-15.294-8.772-9.928 0-17.481 7.86-17.481 18.173 0 10.315 7.73 18.268 17.93 18.268 8.014 0 13.84-4.197 16.121-10.954h-18.673v-12.79h33.601c.238 1.847.36 3.708.367 5.57 0 18.541-13.203 31.877-31.593 31.877s-32.87-14.007-32.87-31.97 14.29-31.96 32.598-31.96M213.407 28.68c11.33 0 18.83 5.183 20.661 13.095l-13.233 2.633c-.45-2.822-3.139-5.361-7.616-5.361-3.892 0-5.848 1.636-6.204 3.546-.24 1.249.356 2.287 4.488 3.148 1.078.233 3.028.634 4.972 1.029l.554.112c2.67.542 5.166 1.041 5.166 1.041 8.61 1.816 12.553 6.999 12.553 13.725 0 10.093-8.704 15.371-20.671 15.371-10.692 0-19.877-3.914-21.393-13.273l14.195-2.885c.628 3.913 4.185 5.372 8.066 5.372s6.852-1.648 6.936-3.641c.136-3.022-2.228-4.816-5.576-5.467-2.312-.44-9.248-1.815-9.248-1.815-8.431-1.542-13.233-3.987-13.233-11.174 0-9.36 8.065-15.456 19.583-15.456m151.186-.776c12.846.02 20.943 6.505 20.943 18.194V75.14h-14.018v-3.379a20.18 20.18 0 0 1-13.662 4.753c-10.19 0-17.02-5.938-17.02-14.983 0-9.044 6.83-14.773 18.997-14.773h11.654v-.913a6.12 6.12 0 0 0-1.778-4.657 6.08 6.08 0 0 0-4.645-1.775c-4.373 0-6.926 1.731-7.648 5.75L343.67 42.33c1.998-8.856 10.012-14.427 20.923-14.427M259.332 13.949v15.35h13.474v11.542h-13.4v15.948c0 4.743 2.27 6.663 6.098 6.663 2.326-.081 4.6-.707 6.643-1.825l3.316 11.51a24.8 24.8 0 0 1-12.47 3.378c-11.381 0-18.233-6.211-18.233-18.215V40.893h-8.265V29.352h8.265V17.096zm151.259 0v15.35h13.474v11.542H410.57v15.948c0 4.743 2.28 6.663 6.099 6.663 2.33-.08 4.607-.705 6.653-1.825l3.369 11.51a24.85 24.85 0 0 1-12.46 3.378c-11.381 0-18.202-6.211-18.202-18.267V40.893h-8.285V29.352h8.285V17.096zM166.802 28.082c13.569.031 25.045 9.706 25.045 24.133 0 14.521-11.508 24.206-25.045 24.206-13.84 0-25.316-9.685-25.316-24.206 0-14.522 11.508-24.133 25.316-24.133m282.924 0c13.568.031 25.034 9.706 25.034 24.133 0 14.521-11.507 24.206-25.034 24.206-13.84 0-25.316-9.685-25.316-24.206 0-14.522 11.507-24.133 25.316-24.133M97.152 13.949v23.839h25.682v-23.84h14.928v61.193h-14.928V50.956H97.152V75.14H82.129V13.949zm411.565 14.668a12 12 0 0 1 3.285.41l-.638 14.584h-2.647c-10.19 0-15.744 5.246-15.744 17.176v14.354H478.4V32.447l14.573-3.148v8.761c3.274-5.477 8.285-9.443 15.744-9.443M371.518 56.013h-10.022c-3.64 0-5.91 1.92-5.91 4.753s2.542 4.743 6.37 4.743c5.012.042 9.562-3.337 9.562-8.447zM166.792 40.348a11.4 11.4 0 0 0-8.133 3.548 11.47 11.47 0 0 0-3.144 8.319c0 7.219 5.366 11.877 11.287 11.877 5.65 0 11.006-4.658 11.006-11.877 0-7.125-5.367-11.867-11.016-11.867m282.934 0a11.4 11.4 0 0 0-8.147 3.54 11.47 11.47 0 0 0-3.15 8.327c0 7.219 5.376 11.877 11.297 11.877 5.639 0 11.016-4.658 11.016-11.877 0-7.125-5.377-11.867-11.016-11.867"></path><g><path fill="#2E93EE" d="M49.48 66.065c-2.553 2.476-5.095 5.876-7.668 8.33 1.224 6.454-1.172 9.287 1.715 11.606 1.047.829 7.323 2.602 10.932.545.074-3.347-1.747-4.344-3.692-5.592-1.978-4.197-1.266-10.703-1.308-14.89"></path><path fill="#2E578B" d="M50.944 87.49a5.83 5.83 0 0 0-3.598-4.196 4.7 4.7 0 0 1 2.238 4.197c.46.02.91.02 1.36 0m3.045-.693a5.79 5.79 0 0 0-3.578-4.197c1.862 1.438 2.458 2.98 2.197 4.659a7.6 7.6 0 0 0 1.38-.462"></path><path fill="#2E93EE" d="M46.498 32.657c-1.318 1.92-1.904 5.949 8.579 11.856 0 0-4.405 7.628-5.796 9.024s-2.239 5.11-.879 6.977a17 17 0 0 0 2.406 2.697s3.474.65 4.959-.189a6.73 6.73 0 0 0 1.046-7.46s8.84-9.276 8.275-12.067c-.565-2.79-14.416-16.924-18.59-10.838"></path><path fill="#2E578B" d="M56.76 55.562s-3.577 2.959-4.477 3.462c.73-.22 1.431-.524 2.093-.902 0 0 1.59 1.952.429 3.599 0 0 2.092-1.228.7-4.05a17 17 0 0 0 1.319-1.92z"></path><g fill="#2E93EE"><path d="M19.916 53.841a3.83 3.83 0 0 1-.606 1.93c-.607.956-.952.85.554 1.669 1.122.57 2.331.946 3.578 1.112 2.092.346 1.621.116.69-1.878a17 17 0 0 0-1.454-2.57c-2.092-2.886-2.678-2.687-2.762-.284m-7.511-.976c-.774 1.438.408 1.669 1.925 2.204a7.6 7.6 0 0 0 1.758.388c1.705.189 1.265-.063.512-1.448a25 25 0 0 0-1.506-2.476c-3.003-4.323-1.57-.766-2.689 1.332m-6.485-.64q.038.493 0 .987c-.105 1.196-.241.996 1.234 1.133a8.8 8.8 0 0 0 1.977 0c1.883-.284 1.192-.945.21-2.046a8 8 0 0 0-1.11-1.05c-3.724-2.875-2.322-.85-2.27.987"></path></g><path fill="#2E93EE" d="M30.87 10.035s-10.682 5.519-10.587 7.271c.094 1.752 3.012 1.511 4.184 3.861 0 0-6.538 4.533-6.12 6.61s4.635 1.323 5.68 2.97c0 0-1.045 4.134-.093 5.645.951 1.51.805.21 2.092 2.099.094.041-.66-15.383 4.843-28.456"></path><path fill="#2E93EE" d="M28.63 15.05c3.767 3.589 8.516 5.845 12.847 8.625a28.3 28.3 0 0 1 7.752 6.852c2.594 3.483 1.046 7.586 1.694 11.856.2 1.448.293 2.917.356 4.386a57 57 0 0 1-.23 8.006c-.659 6.358-.983 11.542-5.46 16.305-5.587 5.96-11.738 7.345-18.716 2.162a34 34 0 0 1-6.664-5.73c-1.433-1.678-3.211-2.748-4.75-4.312a22.4 22.4 0 0 0-6.862-4.963c-2.699-1.049-4.56.378-5.89.987-.68.315-1.62.923-2.384.315a.81.81 0 0 1-.262-.955 7 7 0 0 1 1.768-2.508c4.111-3.777 10.754-3.861 15.692-1.207 1.872 1.05 3.912 2.151 6.078 2.288a5.78 5.78 0 0 0 4.268-1.217 5.63 5.63 0 0 0 1.747-3.274 10 10 0 0 0-.366-5.246c-.806-2.435-2.25-4.638-3.19-7.04-3.14-8.174-4.185-17.492.91-25.13l.71-1.05z"></path><path fill="#FFCF00" d="M9.476 58.594c3.599 1.805 7.428 5.845 11.1 10.199 4.801 5.718 16.737 14.144 26.686.902C56.583 57.23 52.2 39.76 51.656 37.777l-.063-.21c-.314-.399-8.62-11.038-16.236-12.59-2.03 1.762-2.427 4.878.272 10.25 4.55 9.034 8.191 22.203.105 30.292a11 11 0 0 1-4.31 2.728c-5.743 1.9-8.788-1.595-12.386-4.973a17.3 17.3 0 0 0-9.562-4.68"></path><path fill="#ECA93F" d="M48.381 68.1a19.1 19.1 0 0 1-9.603-3.934 13.26 13.26 0 0 0 8.484 5.55c.398-.524.826-1.07 1.12-1.616m-16.174.808a22.2 22.2 0 0 0 5.796 7.544 12.5 12.5 0 0 0 2.28-.776 18.5 18.5 0 0 1-8.076-6.768m-12.218-.787.585.693.272.325a4.1 4.1 0 0 1 .262-2.539q-.613.722-1.12 1.521m4.039 4.04c.418.336.847.672 1.297 1.05-.304-1.449-.44-2.96.052-3.799a14 14 0 0 0-1.35 2.749"></path><path fill="#FF9144" d="m16.14 63.935.931.955a8 8 0 0 1 .21-2.004q-.611.48-1.141 1.049"></path><path fill="#ECA93F" d="M41.351 57.251a19.27 19.27 0 0 1 11.163 0c.094-.524.177-1.05.25-1.553-7.312-1.741-11.413 1.553-11.413 1.553m11.633-11.479a70 70 0 0 0-.178-1.804c-7.751-.19-11.747 3.588-11.747 3.588a18.9 18.9 0 0 1 11.925-1.784M49.93 35.595a19 19 0 0 0-1.046-1.123c-8.233 0-10.462 3.84-10.462 3.84a18.16 18.16 0 0 1 11.508-2.717"></path><path fill="#ECA93F" d="M52.88 44.587a52 52 0 0 0-.91-5.55l-.597-.368c-2.625-1.72-14.196-8.698-17.585-10.797a7 7 0 0 0 0 1.553c3.557 4.994 11.539 13.451 19.092 15.162"></path><path fill="#2E93EE" d="M26.643 64.774a5.23 5.23 0 0 1 4.77-2.277c5.294.693 3.62 6.978 2.354 10.671a30.3 30.3 0 0 0-1.506 8.216c0 3.651 1.391 4.753-.304 6.18a14.37 14.37 0 0 1-9.247 2.581c-2.94-.671-3.013-6.736 1.673-8.278 1.298-2.833 1.245-5.73 1.14-8.751-.073-2.099-.25-6.296 1.12-8.394"></path><path fill="#2E578B" d="M25.503 90.114a17 17 0 0 0 1.245-.231 5.43 5.43 0 0 1 1.464-4.921c-1.925 1.102-2.552 2.98-2.71 5.152m-2.834.042a6.2 6.2 0 0 1 1.412-5.477 5.63 5.63 0 0 0-2.657 4.7c.322.385.758.657 1.245.777m2.72-33.062s-.607 3.515 1.778 4.69c2.009 1.05 4.477 1.05 5.712-.451 1.705-2.099 4.184-6.296-2.605-10.42-4.184-2.549-4.446 6.107-4.446 6.107zm.585-16.851c.89 1.94 1.695 3.441 1.737 3.578.042.136 5.524-6.873 4.498-8.006s-5.366 2.906-6.235 4.428"></path><path fill="#2E93EE" d="M31.35 30.19c5.932 5.74-6.38 13.337-6.38 13.337 1.338.85 3.033 3.756 4.299 5.876s1.768 1.773 3.316 3.536c1.548 1.762-2.866 4.396-2.866 4.396s-14.814-8.027-14.772-13.168c0-.64 3.442-6.358 6.915-9.905 1.747-1.784 6.654-6.81 9.489-4.071"></path><path fill="#2E93EE" d="M25.597 54.481s-1.046 5.467 2.155 7.062c0 0 2.647.167 3.986-.798 0 0 3.337-5.141.847-7.806s-6.988 1.542-6.988 1.542"></path><path fill="#2E578B" d="M25.534 54.87s4.279 2.297 5.021 2.507a3.93 3.93 0 0 1-2.186-.325s-1.046 2.098.178 3.4c0 0-1.967-.347-1.266-3.642l-1.789-1.846z"></path><path fill="#2E93EE" d="M29.373 13.403S31.602.224 37.052.004c3.588-.157 5.398 4.428 5.398 4.428 2.198.01 4.347.65 6.193 1.846 0 0 1.046-1.815 2.71-1.227s3.556 4.407 2.876 10.681a5.46 5.46 0 0 1 3.913 2.697 2.92 2.92 0 0 1-1.873 1.206c-1.13.095-6.005-1.689-7.323-.524a4.26 4.26 0 0 0-1.747 4.197s-5.387-.546-7.783-3.62c-2.395-3.074-4.456-9.034-10.043-6.285"></path><path fill="#F1F1F2" d="M47.921 14.358s1.34-4.428 3.913-5.666c.091 2.143.325 4.278.7 6.39a40 40 0 0 0-4.613-.724M36.267 5.282s3.317 1.605 5.545 8.499a47 47 0 0 0-7.511-.672 18.2 18.2 0 0 0 1.966-7.827"></path><path fill="#2E578B" d="M37.627 8.346c.806 0 1.465.902 1.465 2.025s-.66 2.014-1.465 2.014-1.464-.902-1.464-2.014c0-1.113.648-2.025 1.464-2.025m12.386 5.372c.638 0 1.151-.682 1.151-1.532s-.513-1.532-1.15-1.532a1 1 0 0 0-.356.084 4.1 4.1 0 0 0-.785 1.395.4.4 0 0 0 0 .105c-.01.798.502 1.48 1.14 1.48"></path><path fill="#FF9144" d="M36.581 16.687s-3.975-3.148-5.994-.902c-2.406 2.707 0 6.914 0 6.914s.293-1.804 1.192-2.403c0 0 .356 5.698 9.604 12.035 9.248 6.338 13.275 5.645 15.294 5.11s4.07-1.983 3.295-3.61c-.774-1.625-5.994-6.043-5.994-6.043s-1.977.241-6.005-1.175-9.415-4.197-12.888-9.024a17 17 0 0 0 1.496-.902"></path><path fill="#FF6B17" d="M34.259 24.095a15.66 15.66 0 0 1 14.489 3.913l-1.047-.566s4.75-.23 5.409.43a11.3 11.3 0 0 1 4.917 8.394c.136 1.626-3.704 2.55-12.26-1.72-5.315-2.687-11.508-10.451-11.508-10.451"></path><path fill="#FF9144" d="m44.657 25.176.199.104z"></path><path fill="#EBEEF2" d="M53.591 27.757s-1.15 4.732-2.93 4.197c-.595-.179-.355-1.522-.595-2.445-.241-.923-.931-2.686-.931-2.686zm8.798-1.795s-.366 4.858-2.207 4.628c-.618-.074-.597-1.438-.984-2.309-.387-.87-1.339-2.507-1.339-2.507z"></path><path fill="#FFCF00" d="M64.345 21.702c-.23-3.42-4.728-4.92-8.034-2.518-2.699-.598-5.69-2.402-8.369.305a3.154 3.154 0 0 0-.826 3.756s-5.608-.902-7.543-3.767-4.467-6.705-7.176-6.977c-1.444-.137-3.881-.347-5.294 2.413s-2.092 7.743 8.37 15.634c10.46 7.89 15.042 10.02 17.323 10.01 2.898 0 3.076-1.05 6.413-1.553 1.705-.242 3.002-3.148 1.13-5.666a21.5 21.5 0 0 0-5.608-4.974c-.104.105 4.06 3.452 4.833 5.079.775 1.626-1.516 2.654-3.525 3.147-2.009.494-4.592 1.05-13.83-5.246-9.237-6.295-10.23-12.664-10.23-12.664-1.172-.179-1.308 2.371-1.308 2.371s-1.35-2.948.46-4.711c2.186-2.099 4.446.493 4.446.493h-.136c-1.37-.661-1.559.525-1.559.525a33.83 33.83 0 0 0 13.955 10.608c4.028 1.416 6.141-.179 6.141-.179a39 39 0 0 0 5.712-.462c1.444-.388 4.98-.996 4.655-5.624"></path><path fill="#ECA93F" d="M50.944 21.335c.942-.294 1.664.976.43 1.522-.179.472.104.986.857 1.164a1.484 1.484 0 0 1-1.982-.697 1.49 1.49 0 0 1 .695-1.989m10.608-.388c-.774-.252-1.37.797-.345 1.26.136.387-.094.807-.722.954 1.988.41 2.092-1.847 1.046-2.214"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  M as _
};
