<template>
  <a v-if="isExternalLink" 
  target="_blank" 
  class="normal-link" 
  :href="link.to">{{ link.name }}</a>

  <router-link 
    v-else 
    :to="route"
    v-slot="{ isActive }"
  >
    <a :class="isActive ? 'is-active' : 'normal-link'">
        {{ link.name }}
    </a>
  </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    }, 
    computed: {
        isExternalLink() {
            return this.link.to.startsWith("https")
        },
        route() {
        return this.link.id === undefined
            ? { name: this.link.to }
            : { name: this.link.to, params: { id: this.link.id } }
        }
    }
}
</script>

<style>
.is-active {
    color: #42b883;
}

.normal-link {
    color: #075331;
}

a {
    font-weight: bold;
    margin: 0 10px;
    text-decoration: none;
    color: black;
}
</style>