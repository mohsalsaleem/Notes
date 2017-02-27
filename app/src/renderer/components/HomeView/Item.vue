<template>
	<md-layout id="item" class="grid-item" @click.native="openDialog('editor')">
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
		<md-dialog md-open-from="#custom" md-close-to="#custom" ref="editor" class="fullscreen editor">
  			<md-dialog-content>
  				<md-input-container>
    				<md-textarea v-model="item.text"></md-textarea>
  				</md-input-container>
  			</md-dialog-content>
  			<md-dialog-actions>
    			<md-button class="md-primary" @click.native="closeDialog('editor')">Close</md-button>
  			</md-dialog-actions>
		</md-dialog>
	</md-layout>
</template>
<script>
  export default {
    props: ['item'],
    methods: {
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      },
      onOpen () {
        console.log('Opened')
      },
      onClose (type) {
        console.log('Closed', type)
      }
    }
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
	.fullscreen .md-dialog {
		max-height: 100%;
		max-width: 100%;
		width: 100%;
		height: 100%;
	}
	.editor textarea {
		min-height: 400px;
	}
	.card-layout {
		margin: 0px 5% 5% 5%;
  		display: flex;
  		background-color: white;
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
