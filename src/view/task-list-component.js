import {createElement} from '../framework/render.js';

function createTaskListComponentTemplate() {
    return `
        <div class="taskboard__list">
            <h3 class="taskboard__heading">Бэклог</h3>
        </div>
    `;
}

export default class TaskListComponent {
    getTemplate() {
        return createTaskListComponentTemplate();
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