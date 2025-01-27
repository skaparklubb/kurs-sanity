<script lang="ts">
	import { goto } from '$app/navigation';
	import image from '$assets/hero.webp';
</script>

<section class="hero-section default-margin">
	<div class="hero-container">
		<!-- <img src={image} alt="hero" style="background-image: {image};" /> -->
		<div class="overlay"></div>
		<div class="content">
			<h3 class="text-left text-6xl text-gray-400">Hei! Jeg er <span class="name text-white text-6xl">No Name</span></h3>
			<div class="underscore mb-m"></div>
			<h1 class="m-0 lead">I'm a Developer crafting intuitive and performant</h1>
			<h1 class="dark-grey mb-m text-gray-400 text-right sub">web experiences.</h1>
		</div>
	</div>
</section>

<style>
	.hero-section {
		/* padding-top: 60px; */
        
	}

    .name {
        font-weight: bold;
        font-family: "text me one";
    }

    .lead {
        font-size: 9.5rem;
        line-height: 0.8;
        margin-bottom: -1 rem;
    }

    .sub {
        font-size: 8.5rem;
    }

	.hero-container {
		position: relative;
		width: 100%;
		height: 800px;    
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
