<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
    <p>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
    </p>
  </div>
</template>

<script>
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia
  },
  data () {
    return {
      colors: ['system', 'light', 'dark', 'sepia']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
</style>






 <!--

// import { mapState } from 'vuex';

// export default {
//     name:'ThemeOption',

//     data: () => {
//         return {
//             darkTheme: false,
//             showThemeOption: false
//         };
//     },
//     computed: {
//         ...mapState({
//             darkMode: state => state.theme.darkMode
//         }),
//         navigationType() {
//             return !this.isLoggedIn ? 'navigation' : 'navigation-logged-in';
//         }
//     },
//     mounted() {
//         if (this.darkMode === true) {
//             this.darkTheme = true;
//         } else {
//             this.darkTheme = false;
//         }
//     },
//     methods: {
//         handleChangeTheme() {
//             if (this.darkTheme === false) {
//                 this.$store.commit('theme/changeTheme', false);
//             } else {
//                 this.$store.commit('theme/changeTheme', true);
//             }
//         },
//         handleShowThemeOption() {
//             if (!this.showThemeOption === true) {
//                 this.showThemeOption = true;
//             } else {
//                 this.showThemeOption = false;
//             }
//         },

//         handleChangeThemeColor() {
//             const rootElement = document.querySelector(':root');
//             rootElement.style.setProperty('--color-1st', 'hsl(45, 96%, 48%)');
//         }
//     }
// }
// </script>

// <style lang="scss">
// .ps-panel--theme-option {
//     position: fixed;
//     top: 50%;
//     right: 0;
//     z-index: 999999;
//     transform: translate(100%, -50%);
//     width: 200px;
//     height: auto;
//     padding: 50px 30px;
//     border-radius: 0;
//     background-color: #fff;
//     transition: all 0.4s ease;
//     .ps-panel__toggle {
//         position: absolute;
//         top: 0;
//         right: 100%;
//         width: 40px;
//         height: 40px;
//         background-color: #fff;
//     }
//     &.active {
//         transform: translate(0, -50%);
//     }
// }


// </style>