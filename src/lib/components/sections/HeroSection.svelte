<script lang="ts">

	interface Props {
		name?: string;
		heroTitle?: string;
		heroSubtitle?: string;
	}
	let { name= '<ditt navn her>', heroTitle = 'Her må vi ha en catchty tittel', heroSubTitle='og en undertittel' } = $props();

	const about: any = {
		name: '<ditt navn her>',
		heroTitle: 'Her må vi ha en catchty tittel',
		heroSubTitle: 'og en undertittel'
	};
</script>

<section class="hero-section default-margin">
	<div class="hero-container">
		<div class="overlay"></div>
		<div class="content">
			<h3 class="text-left text-5xl text-neutral-300">
				Hei! Jeg er <span class="name text-7xl text-primary">{name}</span>
			</h3>
			<div class="underscore mb-m"></div>
			<h1 class="lead m-0 text-right">{heroTitle}</h1>
			<h1 class="dark-grey mb-m sub text-right text-secondary">{heroSubTitle}</h1>
		</div>
	</div>
</section>

<style>
	
	.name {
		font-weight: bold;
		font-family: 'text me one';
	}

	.lead {
		font-size: 9.5rem;
		line-height: 0.8;
		margin-bottom: -1 rem;
		text-justify: right;
		
	}

	.sub {
		font-size: 8.5rem;
	}

	.hero-container {
		position: relative;
		width: 100%;
		height: 600px;
		background-image: url('$assets/hero.webp'); /* Replace with your image URL */
		background-size: cover; /* Ensures the image covers the entire div */
		background-position: center; /* Centers the image */
		background-repeat: no-repeat; /* Prevents tiling of the image */
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8); /* Darken with transparency */
	}

	.content {
		position: relative; /* Ensures it's above the overlay */
		color: white; /* For text visibility */
		text-align: center;
		padding: 20px;
	}
</style>
