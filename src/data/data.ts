import { Todo } from "../interfaces/interfaces";

export const FAKE_DATA: Todo[] = [{
    'id': 1,
    'title': 'problem1',
    'description': 'problem1 problem1',
    'dateCreated': new Date('May 20, 2022'),
    'timeWork': null,
    'dateEnd': null,
    'priority': 'high',
    'files': null,
    'parentId': null,
    'currentStatus': 'Development',
    'nestedTodo': [
        {
        'id': 1,
        'title': 'problem1-1',
        'description': 'problem1 problem1',
        'dateCreated': new Date('May 21, 2022'),
        'timeWork': null,
        'dateEnd': null,
        'priority': 'high',
            'files': null,
        'parentId': 1,
        'currentStatus': 'Development',
        'nestedTodo': []
    },
        {
            'id': 6,
            'title': 'problem1-2',
            'description': 'problem1 problem1',
            'dateCreated': new Date('May 22, 2022'),
            'timeWork': null,
            'dateEnd': null,
            'priority': 'high',
            'files': null,
            'parentId': 1,
            'currentStatus': 'Development',
            'nestedTodo': []
        }

    ]
},
{

    'id': 2,
    'title': 'problem2',
    'description': 'problem2 problem2',
    'dateCreated': new Date('May 20, 2022'),
    'timeWork': null,
    'dateEnd': null,
    'priority': 'high',
    'files': null,
    'parentId': null,
    'currentStatus': 'Queue',
    'nestedTodo': []
}

]

export const PROJECT_DATA = [
    {
    'id': 1,
    'title': 'Project 1',
    },
    {
        'id': 2,
        'title': 'Project 2'
    },
    {
        'id': 3,
        'title': 'Project 3',
    },
    {
        'id': 4,
        'title': 'Project 4'
    },
]