<template>
	<div id="app">Hello, {{name}}</div>
</template>

<style lang="scss">
$bg: #fff;
@mixin white-bg {
	background-color: $bg;
}
* {
	margin: 0;
	padding: 0;
}
#app {
	opacity: .5;
	@include white-bg;
}
</style>

<script>
export default {
	name: "app",
	data() {
		return { name: "JowayYoung" };
	}
};
</script>