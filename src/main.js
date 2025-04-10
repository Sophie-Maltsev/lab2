import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from './view/taskboard-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js';
import {render, RenderPosition} from './framework/render.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const taskboardContainer = document.querySelector('.taskboard');

// Рендерим header
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

// Рендерим форму добавления
render(new FormAddTaskComponent(), formContainer);

// Рендерим доску задач
const taskBoard = new TaskBoardComponent();
render(taskBoard, taskboardContainer);

// Рендерим 4 списка задач
for (let i = 0; i < 4; i++) {
    const taskList = new TaskListComponent();
    render(taskList, taskBoard.getElement());

    // В каждый список рендерим по 4 задачи
    for (let j = 0; j < 4; j++) {
        render(new TaskComponent(), taskList.getElement());
    }
}