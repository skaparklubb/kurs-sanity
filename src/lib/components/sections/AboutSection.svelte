<script lang="ts">
	import SectionHeadline from '../SectionHeadline.svelte';
	import image from '$assets/person.jpg';
	// let { about } = $props();
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={'about-me'}>Om Meg</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={image} alt="" />
		<div class="text">
			<p>
				Hei, jeg er <span>&lt;Ditt navn&gt;</span>, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
			<p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi voluptatibus architecto reprehenderit 
                quidem sint a, perferendis, 
                velit commodi quod consectetur nihil deleniti neque incidunt aperiam, rem ex fugiat laborum!
				
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis soluta ad vel, tempora, in quos officiis blanditiis perferendis ipsa odit dolorem numquam officia ullam laudantium est similique! Fugit, ipsam!
			</p>
		</div>
	</div>
</section>

<style>
	p {
		font-size: 1.5rem;
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}
	.content-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	.image {
		width: 42%;
		border-radius: 20px;
		object-fit: cover;
	}

	.text {
		width: 55%;
		text-align: left;
	}
</style>
