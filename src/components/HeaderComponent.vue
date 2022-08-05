<template>
  <header>
    <div class="wrapper" v-if="filters.length > 0">
      <ul id="filters">
        <li
        v-for="(filter, index) in filters"
        :key="index"
        @click="removeFilter(filter)"
        @keyup="() => null"
        class="filter"
        >
          <span class="text">{{filter}}</span>
          <span class="icon">
            <img src="@/assets/icon-remove.svg" alt="remove" />
          </span>
        </li>
      </ul>
      <button @click="clearFilters">Clear</button>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const filters = computed(() => store.getters.getFilter);

    const removeFilter = (filter) => {
      store.commit('removeFilter', filter);
    };

    const clearFilters = () => {
      store.commit('clearFilters');
    };

    return {
      filters,
      removeFilter,
      clearFilters,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #5ea4a4;
  background-image: url('@/assets/bg-header-desktop.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  margin-bottom: 70px;
  position: relative;
  width: 100%;

  .wrapper {
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0px 5px 10px rgba($color: #58a5a5, $alpha: .3);
    display: flex;
    justify-content: space-between;
    left: 50%;
    max-width: 1200px;
    padding: 10px 30px;
    position: absolute;
    transform: translateX(-50%);
    top: 75%;
    width: 100%;

    #filters {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      list-style-type: none;
      padding: 0;
      width: 100%;

      li {
        align-content: center;
        background-color: #edf7f6;
        border-radius: 5px;
        color: #70b3ad;
        cursor: pointer;
        display: flex;
        height: 25px;
        overflow: hidden;

        &:hover .icon {
            background-color: #2d3a39;
          }

        .text {
          align-items: center;
          display: flex;
          padding: 0 7px;
        }

        .icon {
          align-items: center;
          background-color: #5da4a6;
          display: flex;
          height: 100%;
          padding: 0 7px;

          img {
            transform: scale(.9);
          }
        }
      }
    }

    button {
      background-color: transparent;
      border: none;
      color: #a4acab;
      cursor: pointer;
      font-weight: 700;

      &:hover {
        color: #70b3ad;
        text-decoration: underline;
      }
    }
  }

}

@media screen and (max-width:800px) {
  header {
    background-image: url('@/assets/bg-header-mobile.svg');

    .wrapper {
      width: calc(100% - 40px);
    }
  }
}

@media screen and (max-width: 350px) {
  header {
    margin-bottom: 200px;
  }
}

</style>
