<template>
  <div id="app">
		<div class="container">
			<h1>webpack-es6-boilerplate!</h1>
		</div>
  </div>
</template>

<script>
export default {
  components: {
  	// ...
  }
}
</script>

<style lang="scss">
	@import '../scss/_globalimports.scss';

	#app {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;

		.container {

			h1 {
				font-family: $helvetica;
				font-style: italic;
				font-size: 18px;
				line-height: 24px;
			}
		}
	}
</style>