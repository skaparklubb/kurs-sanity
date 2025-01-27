<script lang="ts">
	interface ExpProps {
		// experience: SanityWorkExperience;
		title: string;
		company: string;
		startDate: string;
		endDate?: string;
	}
	let { title, company, startDate, endDate }: ExpProps = $props();
</script>

<li class="work-item p-6">
	<article>
		<div class="company-and-date">
			<!-- <p>{experience.company}</p> -->
			<h3 class="semi-bold mb-xs">
				{title} <span class="text-primary font-sans italic">- {company}</span>
			</h3>
			<p class="dark-grey">
				{startDate.slice(0, 7)}
				{#if endDate}
					/ {endDate.slice(0, 7)}
				{:else}
					/ fremdeles
				{/if}
			</p>
		</div>
	</article>
</li>

<style>


	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-bottom: 12px;
	}

	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}

	.work-item p {
		margin-bottom: 0;
	}

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
