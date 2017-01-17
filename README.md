# Demo-Angular2-NodeJS
This is derived from following [Maximilian Schwarzmüller's](https://github.com/mschwarzmueller) Udemy course: [Angular2 and NodeJS - The Practical Guide to the MEAN Stack 2.0](https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/)

Initial setup:
```
git clone https://github.com/HunterGerlach/Demo-Angular2-NodeJS.git
cd Demo-Angular2-NodeJS
git submodule update --init --recursive
```

Instead of Installing MongoDB, Use Docker:
```
# Run Mongo daemon
docker-compose up -d
# Run Mongo client
docker-compose -f docker-compose.run.yml up -d
# Want to query the db?
docker exec -it dockermongodb_mongo_1 sh -c 'mongo mongod:27017'
# Now you should have an active terminal session to query MongoDB to your heart's content
```

To Begin Angular/Node Application:
```
npm install
npm run build
# In a separate terminal window:
npm start
```
