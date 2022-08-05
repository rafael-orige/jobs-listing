<template>
  <div :class="{
    job: 'job',
    featured: featured ? 'featured' : null
  }">
    <div class="job-wrapper">
      <div class="logo">
        <img :src="require(`../assets/logos/${logo}`)" :alt="company" />
      </div>

      <div class="information">
        <div class="tags">
          <h3>{{company}}</h3>
          <span class="tag new" v-if="this.new">NEW!</span>
          <span class="tag featured" v-if="featured">FEATURED</span>
        </div>
        <h2 class="position">{{position}}</h2>
        <div class="meta">
          <span>{{postedAt}}</span> - <span>{{contract}}</span> - <span>{{location}}</span>
        </div>
      </div>
    </div>

    <hr class="separate-mobile" />

    <div class="general-tags">
      <ul>
        <li
          v-for="tag in [role, level, ...languages, ...tools]"
          :key="tag"
          :class="{active: filters.includes(tag) ? 'active' : null}"
          @click="handleFilter(tag)"
          @keyup="(event) => console.log(event)"
        >
          {{tag}}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'JobCard',
  props: {
    featured: Boolean,
    new: Boolean,
    languages: Array,
    tools: Array,
    company: String,
    position: String,
    logo: String,
    location: String,
    postedAt: String,
    contract: String,
    role: String,
    level: String,
  },
  setup() {
    const store = useStore();
    const filters = computed(() => store.getters.getFilter);

    function handleFilter(filter) {
      if (!filter) return;

      if (filters.value.includes(filter)) {
        store.commit('removeFilter', filter);
        return;
      }

      store.commit('addFilter', filter);
    }

    return {
      handleFilter,
      filters,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2, h3 {
  margin: 0;
  font-size: 1em;
}

.job {
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px rgba($color: #58a5a5, $alpha: .3);
  display: flex;
  height: auto;
  justify-content: space-between;
  margin: 20px 0;
  padding: 30px;
  width: 100%;

  &.featured {
    background: white;
    background: linear-gradient(
      90deg,
      rgba(92, 164, 166, 1) 5px,
      rgba(255, 255, 255, 1) 1px
    );
  }

  .job-wrapper {
    align-items: center;
    display: flex;
    height: 90px;
    text-align: left;

    .information {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
      margin-left: 25px;
    }

    .tags {
      align-items: center;
      display: flex;

      h3 {
        color: #739e9b;
        cursor: pointer;
        font-size: 1em;
        margin-right: 10px;
      }

      span {
        border-radius: 50px;
        color: #f2f2f2;
        cursor: pointer;
        font-size: .7em;
        font-weight: 700;
        margin: 0 5px;
        padding: 5px 7px;

        &.new {
          background-color: #58a5a5;
        }

        &.featured {
          background-color: #2a3835;
        }
      }
    }

    .position {
      cursor: pointer;
      font-size: 1.15em;

      &:hover {
        color: #679e9c;
      }
    }
  }

  .meta {
    color: #afb9b8;
    font-size: .8em;
    font-weight: 700;
  }

  .logo {
    border-radius: 50%;
    cursor: pointer;
    height: 90px;
    width: 90px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .separate-mobile {
    background-color: #d2d4d4;
    border: none;
    display: none;
    height: 2px;
    width: 100%;
  }

  .general-tags ul {
    display: flex;
    gap: 15px;
    list-style-type: none;
    margin: 0;

    li {
      background-color: #f0f5f7;
      border-radius: 3px;
      color: #5aa79d;
      cursor: pointer;
      font-weight: 700;
      padding: 7px;

      &:hover,
      &.active {
        background-color: #5aa79d;
        color: #f0f5f7;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .job {
    align-items: flex-start;
    box-sizing: border-box;
    flex-direction: column;
    margin-bottom: 50px;

    .general-tags ul {
      flex-wrap: wrap;
      padding: 0;
    }

    .job-wrapper {
      position: relative;

      .logo {
        height: 60px;
        left: 0px;
        position: absolute;
        top: -60px;
        width: 60px;
      }

      .information {
        margin: 20px 0 0 0;
      }
    }

    .separate-mobile {
      display: block;
    }
  }
}
</style>
