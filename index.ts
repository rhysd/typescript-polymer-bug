/// <reference path="./bower_components/polymer/types/polymer-element.d.ts"/>

class MyElement extends Polymer.Element {
    static get is() {
        return 'my-element';
    }

    static get properties() {
        return {};
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }
}
