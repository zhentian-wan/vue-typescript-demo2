
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Parent extends Vue {
    public created() {
        console.log('Parent is created');
    }

    public click() {
        console.log('Parent is clicked');
    }

    public parentClicked() {
        console.log('Parent is clicked');
    }
}
