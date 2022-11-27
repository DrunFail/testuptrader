import { Todo, Comment } from "../interfaces/interfaces";

export const FAKE_DATA: Todo[] = [{
    'id': 1,
    'title': 'problem1',
    'description': 'problem1 problem1',
    'dateCreate': '11.11.2022',
    'timeWork': 'hour',
    'dateEnd': null,
    'priority': 'high',
    'files': null,
    'currentStatus': 'Development'
},
{

    'id': 2,
    'title': 'problem2',
    'description': 'problem2 problem2',
    'dateCreate': '11.11.2022',
    'timeWork': 'hour',
    'dateEnd': null,
    'priority': 'high',
    'files': null,
    'currentStatus': 'Queue'
}

]




export const COMMENTS_DATA: Comment[] = [
    {
        'id': 1,
        'taskId': 1,
        'commentId': null,
        'value': 'very simple',
        'comments': [
            {
                'id': 2,
                'taskId': 1,
                'commentId': null,
                'value': 'ggggggggggg',
                'comments': []

            },
            {
                'id': 3,
                'taskId': 1,
                'commentId': 2,
                'value': 'bbbbbbbbbbbbbbbbb',
                'comments': [
                    {
                        'id': 1,
                        'taskId': 1,
                        'commentId': null,
                        'value': 'very simple',
                        'comments': [
                            {
                                'id': 2,
                                'taskId': 1,
                                'commentId': null,
                                'value': 'ggggggggggg',
                                'comments': []

                            },
                            {
                                'id': 3,
                                'taskId': 1,
                                'commentId': 2,
                                'value': 'bbbbbbbbbbbbbbbbb',
                                'comments': []

                            }
                        ]
                    }
                ]

            }
        ]
    },
    {
        'id': 4,
        'taskId': 1,
        'commentId': null,
        'value': 'ok',
        'comments': []

    },
    {
        'id': 5,
        'taskId': 1,
        'commentId': 2,
        'value': 'not bad',
        'comments': []

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