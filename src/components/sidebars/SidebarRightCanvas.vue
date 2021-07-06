<template>
    <div class="p-4 right-sidebar-canvas">
        <div class="accordion" id="rightCanvasAccordion">
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
                            <p class="mb-0 mx-1">{{ item.title }}</p>
                        </div>
                    </button>
                </h2>
                <div :id="`collapse-${index}`"
                     class="accordion-collapse collapse"
                     :class="{'show': index === activeIndex}"
                     :aria-labelledby="`heading-${index}`"
                     data-bs-parent="#rightCanvasAccordion">
                    <div class="accordion-body">
                        <ul v-if="item.subMenu" class="list-unstyled mb-0">
                            <li v-for="(subItem, subIndex) in item.subMenu"
                                :class="{'mb-2': subIndex < item.subMenu.length - 1}">
                                {{subItem}}
                            </li>
                        </ul>
                        <p v-else class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SidebarRightCanvas",
    props: ['data'],
    data() {
        return {
            activeIndex: 3
        }
    }
}
</script>
