
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Parent extends Vue {
    created() {
        console.log("Parent is created")
    }

    click() {
        console.log("Parent is clicked")
    }

    parentClicked() {
        console.log("Parent is clicked")
    }
}
