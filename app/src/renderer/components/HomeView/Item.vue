<template>
	<md-layout id="item" class="grid-item">
		<div class="card-layout">
		    <md-card class="md-primary" md-theme="blue" md-with-hover>
		      <p>{{item.text}}</p>
		      <md-ink-ripple></md-ink-ripple>
		      <md-card-actions>
		        <md-button class="md-icon-button">
		          <md-icon>delete</md-icon>
		        </md-button>

		        <md-button class="md-icon-button">
		          <md-icon>edit</md-icon>
		        </md-button>
		      </md-card-actions>
		    </md-card>
		</div>
	</md-layout>
</template>
<script>
  export default {
    props: ['item']
  }
</script>
<style>
	#item {
		display: inline-flex;
		width: 50%;
	}
	#item p {
		text-align: left;
	}
	.card-layout {
		margin: 0px 5% 5% 5%;
  		display: flex;
	}
	.card-layout p {
		margin: 15px;
	}
	.card-layout .column {
		flex: 1;	
	}
	.card-layout .column + .column {
      	margin-left: 8px;
    }
    .card-layout .md-card + .md-card {
    	margin-top: 8px;
  	}
</style>
