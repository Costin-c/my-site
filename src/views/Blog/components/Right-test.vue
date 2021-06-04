<template>
    <RightList :list="list" @select="handleSelect"/>
</template>

<script>
import RightList from './RightList';
export default {
    components: {
        RightList
    },
    data() {
        return {
            list: [
                { name: "a", isSelected: true},
                { name: "b", isSelected: false},
                { name: "c", isSelected: false, children: [
                    {name: "c-1", isSelected: false},
                    {name: "c-2", isSelected: true},
                    {name: "c-3", isSelected: false},
                ]},
                { name: "d", isSelected: false},
            ]
        }
    },
    methods: {
        handleSelect(item) {
            console.log(item);
        }
    },
}
</script>

<style>

</style>