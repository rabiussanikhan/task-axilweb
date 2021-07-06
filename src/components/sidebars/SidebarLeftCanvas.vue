<template>
    <div class="p-4 left-sidebar-canvas overflow-auto">
        <div class="accordion" id="accordionExample">
            <div v-for="(item, index) in data"
                 :key="index"
                 class="accordion-item">
                <h2 class="accordion-header" :id="`heading-${index}`">
                    <button
                        @click.prevent="activeIndex = index"
                        class="accordion-button shadow-none"
                        :class="{'collapsed': index !== activeIndex}"
                        type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapse-${index}`"
                        :aria-expanded="activeIndex === index ? 'true' : 'false'"
                        :aria-controls="`collapse-${index}`">
                        <div class="d-flex align-items-center">
                            <div class="width-50"><img :src="urlGenerator(item.icon)" alt="not found"></div>
                            <p class="mb-0 mx-1">{{ item.title }}</p>
                        </div>
                    </button>
                </h2>
                <div :id="`collapse-${index}`"
                     class="accordion-collapse collapse"
                     :class="{'show': index === activeIndex}"
                     :aria-labelledby="`heading-${index}`"
                     data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <component v-if="index === 0" :is="`side-${item.title.toLowerCase()}`"></component>
                        <p v-else class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {urlGenerator} from "../helper/helper";

export default {
    name: "SidebarLeftCanvas",
    props: ['data'],
    data() {
        return {
            urlGenerator,
            activeIndex: 1
        }
    }
}
</script>