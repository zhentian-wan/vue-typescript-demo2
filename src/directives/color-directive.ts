import {DirectiveOptions} from "vue";

const directive: DirectiveOptions = {
    inserted(el, node) {
        if(node.modifiers.background) {
            el.style.backgroundColor = !!node.value.background && node.value.background;
            el.style.color = !!node.value.color && node.value.color;
        }
    }
};

export default directive;