<template>
   <md-layout id="items">
   	<md-whiteframe md-elevation="2" class="grid">
   		<item v-for="item in items()" :item="item"></item>
   	</md-whiteframe>
   </md-layout>
</template>

<script>
  import Item from './Item'
  export default {
    mounted () {
      console.log('hello')
      // this.mason()
    },
    components: {
      Item
    },
    name: 'items',
    data () {
      return {
        items () {
          let items = []
          for (let i = 0; i < 10; i++) {
            let item = {}
            let arrayLength = Math.floor(Math.random() * (100 - 20) + 20)
            item.text = Array(arrayLength).join('Lorem ')
            items.push(item)
          }
          return items
        }
      }
    },
    methods: {
      mason: function () {
        var $grid = window.$('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: 250
        })
        console.log('Hello')
        $grid.masonry('layout')
      }
    }
  }
</script>

<style>
	#items {
		margin: 15px;
    background-color: #2196f3;
	}

	#items .md-whiteframe {
		width: 100%;
		padding: 15px;
		text-align: center;
		overflow-y: auto
	}
</style>
