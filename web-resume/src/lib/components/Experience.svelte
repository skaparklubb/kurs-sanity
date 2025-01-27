<script lang="ts">
	interface ExpProps {
		experience: SanityWorkExperience;
	}
	let { experience }: ExpProps = $props();
</script>


<li class="work-item">
        <article>
          
          <div class="company-and-date">
            <!-- <p>{experience.company}</p> -->
			<h3 class="semi-bold mb-xs">{experience.title} <span>- {experience.company}</span></h3>
            <p class="dark-grey">
              {experience.startDate.slice(0, 7)}
              {#if experience.endDate}
                / {experience.endDate.slice(0, 7)}
              {:else}
                / fremdeles
              {/if}
            </p>
          </div>
        </article>
      </li>

<style>
  .work-experience {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .work-experience-list {
    width: 50%;
  }

  .headline {
    text-align: right;
  }

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