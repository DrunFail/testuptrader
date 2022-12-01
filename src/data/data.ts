import { Todo, Projects } from "../interfaces/interfaces";


export const PROJECT_DATA: Projects[] = [
    {
        'id': 1,
        'title': 'Project 1',
        'tasks': [
            {
                'id': 2,
                'title': 'problem1',
                'description': 'problem1 problem1',
                'dateCreated': '11/29/2022',
                'timeWork': null,
                'dateEnd': Date | null,
                'priority': 'High',
                'files': null,
                'parentId': null,
                'currentStatus': 'Development',
                'comments': [],
            'nestedTodo': [
                    {
                        'id': 3,
                        'title': 'problem1-1',
                        'description': 'problem1 problem1',
                    'dateCreated': '11/29/2022',
                        'timeWork': null,
                        'dateEnd': null,
                        'priority': 'High',
                        'files': null,
                        'parentId': 2,
                        'currentStatus': 'Development'
                        
                    },
                    {
                        'id': 4,
                        'title': 'problem1-2',
                        'description': 'problem1 problem1',
                        'dateCreated': '11/29/2022',
                        'timeWork': null,
                        'dateEnd': null,
                        'priority': 'High',
                        'files': null,
                        'parentId': 2,
                        'currentStatus': 'Development'
                        
                    }

                ]
            },
            {

                'id': 5,
                'title': 'problem2',
                'description': 'problem2 problem2',
                'dateCreated': '11/29/2022',
                'timeWork': null,
                'dateEnd': null,
                'priority': 'High',
                'files': null,
                'parentId': null,
                'currentStatus': 'Queue',
            'comments':[],
            'nestedTodo': []
        }

        ]
    },
    {
        'id': 6,
        'title': 'Project 2',
        'tasks': [{
            'id': 7,
            'title': 'problem1',
            'description': 'problem1 problem1',
            'dateCreated': '11/29/2022',
            'timeWork': null,
            'dateEnd': null,
            'priority': 'High',
            'files': null,
            'parentId': null,
            'currentStatus': 'Development',
            'comments': [],
            'nestedTodo': [
                {
                    'id': 8,
                    'title': 'problem1-1',
                    'description': 'problem1 problem1',
                    'dateCreated': '11/29/2022',
                    'timeWork': null,
                    'dateEnd': null,
                    'priority': 'High',
                    'files': null,
                    'parentId': 7,
                    'currentStatus': 'Development'
                    
                },
                {
                    'id': 9,
                    'title': 'problem1-2',
                    'description': 'problem1 problem1',
                    'dateCreated': '11/29/2022',
                    'timeWork': null,
                    'dateEnd': null,
                    'priority': 'High',
                    'files': null,
                    'parentId': 7,
                    'currentStatus': 'Development'
                    
                }

            ]
        },
        {

            'id': 10,
            'title': 'problem2',
            'description': 'problem2 problem2',
            'dateCreated': '11/29/2022',
            'timeWork': null,
            'dateEnd': null,
            'priority': 'High',
            'files': null,
            'parentId': null,
            'currentStatus': 'Queue',
            'comments': [],
            'nestedTodo': []
        }

        ]
    },
    {
        'id': 11,
        'title': 'Project 3',
        'tasks': [
            {
                'id': 12,
                'title': 'problem1',
                'description': 'problem1 problem1',
                'dateCreated': '11/29/2022',
                'timeWork': null,
                'dateEnd': null,
                'priority': 'High',
                'files': null,
                'parentId': null,
                'currentStatus': 'Development',
                'comments': [],
                'nestedTodo': [
                    {
                        'id': 13,
                        'title': 'problem1-1',
                        'description': 'problem1 problem1',
                        'dateCreated': '11/29/2022',
                        'timeWork': null,
                        'dateEnd': null,
                        'priority': 'High',
                        'files': null,
                        'parentId': 12,
                        'currentStatus': 'Development'
                        
                    },
                    {
                        'id': 14,
                        'title': 'problem1-2',
                        'description': 'problem1 problem1',
                        'dateCreated': '11/29/2022',
                        'timeWork': null,
                        'dateEnd': null,
                        'priority': 'High',
                        'files': null,
                        'parentId': 12,
                        'currentStatus': 'Development'
                        
                    }

                ]
            },
            {

                'id': 15,
                'title': 'problem2',
                'description': 'problem2 problem2',
                'dateCreated': '11/29/2022',
                'timeWork': null,
                'dateEnd': null,
                'priority': 'High',
                'files': null,
                'parentId': null,
                'currentStatus': 'Queue',
                'comments': [],
                'nestedTodo': []
            }

        ]
    },
    {
        'id': 16,
        'title': 'Project 4',
        'tasks': [{
            'id': 21,
            'title': 'problem1',
            'description': 'problem1 problem1',
            'dateCreated': '11/29/2022',
            'timeWork': null,
            'dateEnd': null,
            'priority': 'High',
            'files': null,
            'parentId': null,
            'currentStatus': 'Development',
            'comments': [],
            'nestedTodo': [
                {
                    'id': 17,
                    'title': 'problem1-1',
                    'description': 'problem1 problem1',
                    'dateCreated': '11/29/2022',
                    'timeWork': null,
                    'dateEnd': null,
                    'priority': 'High',
                    'files': null,
                    'parentId': 21,
                    'currentStatus': 'Development'
                    
                },
                {
                    'id': 18,
                    'title': 'problem1-2',
                    'description': 'problem1 problem1',
                    'dateCreated': '11/29/2022',
                    'timeWork': null,
                    'dateEnd': null,
                    'priority': 'High',
                    'files': null,
                    'parentId': 21,
                    'currentStatus': 'Development'
                    
                }

            ]
        },
        {

            'id': 19,
            'title': 'problem2',
            'description': 'problem2 problem2',
            'dateCreated': '11/29/2022',
            'timeWork': null,
            'dateEnd': null,
            'priority': 'High',
            'files': null,
            'parentId': null,
            'currentStatus': 'Queue',
            'comments':[],
            'nestedTodo': []
        }

        ]
    },
]