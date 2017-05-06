<template>
	<div class="foo">
		<h3>This is the foo component</h3>
		<ul  class="nav nav-pills">
			<li class="active">
				<a  href="#1a" data-toggle="tab">Tab1</a>
			</li>
			<li>
				<a href="#2a" data-toggle="tab">Tab2</a>
			</li>
		</ul>
		<div class="tab-content clearfix">
			<div class="tab-pane active" id="1a" >
				First
			</div>
			<div class="tab-pane" id="2a" >
				Second
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'foo',
		data () {
			return {
				msg: 'This is the foo component'
			}
		}
	}
</script>