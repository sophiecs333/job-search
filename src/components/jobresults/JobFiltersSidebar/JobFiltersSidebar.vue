<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>

      <accordion header="Degree" />

      <accordion header="Job types">Placeholder</accordion>

      <accordion header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="w-1/2 h-8">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Between Vue and Me" type="checkbox" class="mr-3" />
                <label for="Between Vue and Me">Between Vue...</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Vue can do it" type="checkbox" class="mr-3" />
                <label for="Vue can do it">Vue can do it</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
                <label for="Vue and a Half Men">Vue and a Half...</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </accordion>
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import Accordion from "@/components/shared/Accordion.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
  },
};
</script>
