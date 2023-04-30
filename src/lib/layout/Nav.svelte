<script lang="ts">
	import Logo from "./Logo.svelte";

	export let withHeader: boolean = false;
</script>

<nav class="nav container {withHeader ? 'with-header' : ''}">
	<div class="nav display">
		<a class="nav branding" href="/">
			<Logo className="nav svg" />
		</a>
		<ul class="nav button-list">
			<li class="nav button-item">
				<a class="nav button" title="Docs" href="/docs">Docs</a>
			</li>
			<li class="nav button-item">
				<a class="nav button" title="API References" href="/references"
					>API</a
				>
			</li>
			<!-- <a title="Docs" href="/docs"><i class="fas fa-book"></i></a>
			<a title="References" href="/references"><i class="fas fa-stream"></i></a>
			<a title="GitHub" href="https://github.com/Guilded-NET"><i class="fab fa-github"></i></a>
			<a title="Guilded Discussions" href="https://www.guilded.gg/guilded-api/groups/aDk5j9Jz/channels/8c247143-2009-415b-ab99-97912c0685bc/announcements"><i class="fab fa-guilded"></i></a> -->
		</ul>
	</div>
</nav>

<style lang="stylus">
@require "../../style/variables.styl"

.container
	background-color: var(--background-1)
	color: var(--foreground-1)
	font-size: 1.1rem
	padding: spacing-3 spacing-4
	&.with-header
		background-color: var(--background-2)
.display
	display: flex
	flex-direction: row
	align-items: center

.branding
	fill: var(--foreground-1)
	font-size: 0.85rem
// Navigation button list
.button
	text-decoration: none
	font-weight: bold

	margin-top: auto
	margin-bottom: auto
	padding: spacing-1 spacing-2
	border-radius: small-radius

	transition: 0.2s ease-out
	transition-property: background, color
	background-color: transparent
	border: solid 1px transparent

	// The button states
	&, &[href], &[href]:visited, &[href]:active
		color: var(--foreground-3)
		fill: var(--foreground-3)
	&:hover, &[href]:hover
		color: var(--foreground-0)
		fill: var(--foreground-0)
		background-color: var(--background-3)

	&-item
		margin-left: spacing-1
		list-style-position: inside

		&:first-child
			margin-left: 0
			list-style-type: none
		&::marker
			color: var(--foreground-4)
	// A button
	&-list
		display: flex
		flex-direction: row
		align-items: center

		float: right
		padding: spacing-0
		margin: 0
		margin-left: auto
</style>
