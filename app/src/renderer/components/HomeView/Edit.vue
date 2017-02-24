<template>
<md-dialog md-open-from="#custom" md-close-to="#custom" ref="editor">
  <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

  <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

  <md-dialog-actions>
    <md-button class="md-primary" @click.native="closeDialog('editor')">Cancel</md-button>
    <md-button class="md-primary" @click.native="closeDialog('editor')">Ok</md-button>
  </md-dialog-actions>
</md-dialog>
</template>
