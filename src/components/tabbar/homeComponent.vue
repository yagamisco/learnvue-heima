<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="p in pics" :key="p.id">
        <img :src="p.data">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'

export default {
  name: 'homeComponent',
  data: () => {
    return {
      pics: []
  }
  },
  created () {
    this.getPics()
  },
  methods: {
    async getPics () {
      for (let i = 0; i < 3; i++) {
        let resp = await axios.get(`https://picsum.photos/380/200`)
        if (resp['status'] === 200) {
          console.log(resp)
          this.pics.push({ id: i, data: `data:${resp['headers']['content-type']};base64,${resp['data']}` })
        } else {
          Toast('加载轮播图失败')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
         background-color: red;
       }
       &:nth-child(2) {
          background-color: blue;
        }
        &:nth-child(3) {
           background-color: cyan;
         }
    }
  }
</style>
