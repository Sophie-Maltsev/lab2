import {createElement} from '../framework/render.js';

function createTaskBoardComponentTemplate() {
    return `
        <div class="taskboard__lists">
        </div>
    `;
}

export default class TaskBoardComponent {
    getTemplate() {
        return createTaskBoardComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}