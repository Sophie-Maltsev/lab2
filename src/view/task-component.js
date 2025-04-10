import {createElement} from '../framework/render.js';

function createTaskComponentTemplate() {
    return `
        <div class="taskboard__item task">
            <div class="task__body">
                <p class="task__view">Название первой задачи</p>
                <input type="text" class="task__input" value="Название первой задачи">
            </div>
            <button class="task__edit" type="button" aria-label="Изменить"></button>
        </div>
    `;
}

export default class TaskComponent {
    getTemplate() {
        return createTaskComponentTemplate();
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