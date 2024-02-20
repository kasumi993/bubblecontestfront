<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
</script>

<template>
  <router-view></router-view>
</template>


<script lang="ts">
import PocketBase from 'pocketbase'
import initDatabase from '../init.json'
const pb = new PocketBase('http://127.0.0.1:8090')
pb.autoCancellation(false)
await pb.admins.authWithPassword('helder.bastosg@gmail.com', 'Azertyuiop12')

try{
  await pb.collections.getOne('contests')
}catch(err){
  if(err.status === 404){
    console.log('Collection not found')
    await pb.collections.create({
      name: 'contests',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: '',
      deleteRule: '',
      schema: [
        {
          name: 'title',
          type: 'text',
          required: true
        },
        {
          name: 'description',
          type: 'text'
        },
        {
          name: 'elements',
          type: 'json',
          options: {
            maxSize: 200000
          }
        },
        {
          name: 'premium',
          type: 'bool'
        }
      ]

    })
  
  }
}

const updateBDD = async (element: NonNullable<object>) => {
  const record = await pb.collection('contests').create(element)
  console.log(record)
}

export default {
  methods: {
    update() {
      initDatabase.initBDD.forEach(async (element) => {
        await updateBDD(element)
      })
    }
  }
}

</script>

<style lang="scss">
@import "styles/styles.scss";
</style>
