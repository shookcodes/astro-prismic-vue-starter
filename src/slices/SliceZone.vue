<script setup lang="ts">
	import { SliceSimulator } from "@slicemachine/adapter-nuxt/simulator";
	import {
		SliceZone,
		type SliceZoneComponents,
		type SliceLike,
	} from "@prismicio/vue";
	interface Props {
		slices: SliceLike<string>[] | [];
		components: SliceZoneComponents;
	}

	defineProps<Props>();
</script>
<template>
	<SliceSimulator #default="{ slices }">
		<SliceZone :slices="slices" :components="components" />
	</SliceSimulator>
</template>
