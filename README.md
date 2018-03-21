#wi-etl (Export-Transform-Load)

_npm i --save wi-etl_

```javascript
let wiETL = require('wi-etl');
let sourceDB = {};
let destitantionDb = {};
let tablesQueue = ['project','well','dataset'];
wiETL.configSourceDb(sourceDB);
wiETL.configDestinationDb(destitantionDb);
wiETL.executeJob(tablesQueue, function(err, success) {
    console.log("Done!")
});
```

