import { Todo } from "../interfaces/interfaces";

export const FAKE_DATA: Todo[] = [{
    'id': 1,
    'title': 'problem1',
    'description': 'problem1 problem1',
    'dateCreate': "2022-11-28T18:50:12.167Z",
    'timeWork': 'hour',
    'dateEnd': null,
    'priority': 'high',
    'files': null,
    'currentStatus': 'Development',
    'nestedTodo': [
        {
        'id': 1,
        'title': 'problem1-1',
        'description': 'problem1 problem1',
            'dateCreate': "2022-11-28T18:50:12.167Z",
        'timeWork': 'hour',
        'dateEnd': null,
        'priority': 'high',
        'files': null,
        'currentStatus': 'Development',
        'nestedTodo': []
    },
        {
            'id': 2,
            'title': 'problem1-2',
            'description': 'problem1 problem1',
            'dateCreate': "2022-11-28T18:50:12.167Z",
            'timeWork': 'hour',
            'dateEnd': null,
            'priority': 'high',
            'files': null,
            'currentStatus': 'Development',
            'nestedTodo': []
        }

    ]
},
{

    'id': 2,
    'title': 'problem2',
    'description': 'problem2 problem2',
    'dateCreate': "2022-11-28T18:50:12.167Z",
    'timeWork': 'hour',
    'dateEnd': null,
    'priority': 'high',
    'files': null,
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