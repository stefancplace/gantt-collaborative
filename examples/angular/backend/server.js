const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
        credentials: false
    }
});

let taskStore =
    [
        {
            "id": "0",
            "parentIndex": 0,
            "startDate": "2019-01-02T00:00:00+01:00",
            "endDate": "2019-01-05T00:00:00+01:00",
            "duration": 3,
            "durationUnit": "day",
            "cls": "",
            "name": "Launch SaaS Product",
            "direction": "Forward",
            "manuallyScheduled": false,
            "constraintType": null,
            "constraintDate": null,
            "percentDone": 36.666666666666664,
            "effort": 360,
            "effortUnit": "hour",
            "effortDriven": false,
            "schedulingMode": "Normal",
            "baselines": [],
            "parentId": null,
            "expanded": true,
            "children": [
                {
                    "id": 1,
                    "parentIndex": 0,
                    "startDate": "2019-01-02T00:00:00+01:00",
                    "endDate": "2019-01-05T00:00:00+01:00",
                    "duration": 3,
                    "durationUnit": "day",
                    "cls": "",
                    "name": "Setup web server",
                    "direction": "Forward",
                    "manuallyScheduled": false,
                    "constraintType": null,
                    "constraintDate": null,
                    "percentDone": 36.666666666666664,
                    "effort": 360,
                    "effortUnit": "hour",
                    "effortDriven": false,
                    "schedulingMode": "Normal",
                    "baselines": [],
                    "parentId": "0",
                    "expanded": true,
                    "children": [
                        {
                            "id": 11,
                            "parentIndex": 0,
                            "startDate": "2019-01-02T00:00:00+01:00",
                            "endDate": "2019-01-05T00:00:00+01:00",
                            "duration": 3,
                            "durationUnit": "day",
                            "cls": "",
                            "name": "Install Apache",
                            "direction": "Forward",
                            "manuallyScheduled": false,
                            "constraintType": null,
                            "constraintDate": null,
                            "percentDone": 50,
                            "effort": 72,
                            "effortUnit": "hour",
                            "effortDriven": false,
                            "schedulingMode": "Normal",
                            "baselines": [],
                            "parentId": 1
                        },
                        {
                            "id": 12,
                            "parentIndex": 1,
                            "startDate": "2019-01-02T00:00:00+01:00",
                            "endDate": "2019-01-05T00:00:00+01:00",
                            "duration": 3,
                            "durationUnit": "day",
                            "cls": "",
                            "name": "Configure firewall",
                            "direction": "Forward",
                            "manuallyScheduled": false,
                            "constraintType": null,
                            "constraintDate": null,
                            "percentDone": 50,
                            "effort": 72,
                            "effortUnit": "hour",
                            "effortDriven": false,
                            "schedulingMode": "Normal",
                            "baselines": [],
                            "parentId": 1
                        },
                        {
                            "id": 13,
                            "parentIndex": 2,
                            "startDate": "2019-01-02T00:00:00+01:00",
                            "endDate": "2019-01-05T00:00:00+01:00",
                            "duration": 3,
                            "durationUnit": "day",
                            "cls": "",
                            "name": "Setup load balancer",
                            "direction": "Forward",
                            "manuallyScheduled": false,
                            "constraintType": null,
                            "constraintDate": null,
                            "percentDone": 50,
                            "effort": 72,
                            "effortUnit": "hour",
                            "effortDriven": false,
                            "schedulingMode": "Normal",
                            "baselines": [],
                            "parentId": 1
                        },
                        {
                            "id": 14,
                            "parentIndex": 3,
                            "startDate": "2019-01-02T00:00:00+01:00",
                            "endDate": "2019-01-04T00:00:00+01:00",
                            "duration": 2,
                            "durationUnit": "day",
                            "cls": "",
                            "name": "Configure ports",
                            "direction": "Forward",
                            "manuallyScheduled": false,
                            "constraintType": null,
                            "constraintDate": null,
                            "percentDone": 50,
                            "effort": 48,
                            "effortUnit": "hour",
                            "effortDriven": false,
                            "schedulingMode": "Normal",
                            "baselines": [],
                            "parentId": 1
                        },
                        {
                            "id": 15,
                            "parentIndex": 5,
                            "startDate": "2019-01-02T00:00:00+01:00",
                            "endDate": "2019-01-04T00:00:00+01:00",
                            "duration": 2,
                            "durationUnit": "day",
                            "cls": "",
                            "name": "Run tests",
                            "direction": "Forward",
                            "manuallyScheduled": false,
                            "constraintType": null,
                            "constraintDate": null,
                            "percentDone": 0,
                            "effort": 48,
                            "effortUnit": "hour",
                            "effortDriven": false,
                            "schedulingMode": "Normal",
                            "baselines": [],
                            "parentId": 1
                        }
                    ]
                }
            ]
        }
    ]


io.on('connection', socket => {
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
    }

    socket.on('getDoc', docId => {
        safeJoin(docId);
        io.emit('documents', taskStore);
    });

    socket.on('addDoc', doc => {
        tasks[doc.id] = doc;
        safeJoin(doc.id);
        io.emit('documents', Object.keys(taskStore));
        socket.emit('document', doc);
    });

    socket.on('editDoc', doc => {
        taskStore = doc;
        io.emit('documents', taskStore);
    });


    console.log(`Socket ${socket.id} has connected`);
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});
