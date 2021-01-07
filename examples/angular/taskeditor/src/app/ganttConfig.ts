import './lib/ColorField';
import './lib/FilesTab';

// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { ProjectModel, TaskModel } from 'bryntum-gantt/gantt.lite.umd.js';

class MyModel extends TaskModel {
    static get fields() {
        return [
            { name : 'deadline', type : 'date' },
            { name : 'color' }
        ];
    }
}

const project = new ProjectModel({
    taskModelClass : MyModel as unknown as TaskModel,
    transport : {
        load : {
            url : 'assets/data/launch-saas.json'
        }
    },
    autoLoad  : true
});

export default {
    dependencyIdField : 'sequenceNumber',

    columns  : [
        { type : 'name', field : 'name', text : 'Name', width : 250 },
        { type : 'date', field : 'deadline', text : 'Deadline' }
    ],
    features : {
        taskEdit : {
            items : {
                generalTab : {
                    // change title of General tab
                    title : 'Common',
                    items : {
                        customDivider : {
                            html    : '',
                            dataset : {
                                text : 'Custom fields'
                            },
                            cls  : 'b-divider',
                            flex : '1 0 100%'
                        },
                        deadlineField : {
                            type  : 'datefield',
                            ref   : 'deadlineField',
                            name  : 'deadline',
                            label : 'Deadline',
                            flex  : '1 0 50%',
                            cls   : 'b-inline'
                        },
                        colorField : {
                            type  : 'colorfield',
                            name  : 'color',
                            ref   : 'colorField',
                            label : 'Color',
                            flex  : '1 0 50%',
                            cls   : 'b-inline'
                        }
                    }
                },
                // remove Notes tab
                notesTab : false,
                // add custom Files tab
                filesTab : { type : 'filestab' }
            }
        },
    },
    taskRenderer : ({ taskRecord, renderData }) => {
        if (taskRecord.color) {
            renderData.style += `background-color:${taskRecord.color}`;
        }
    },
    project
};
