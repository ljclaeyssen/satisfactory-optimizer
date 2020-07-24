# satisfactory-optimizer

to run the project, you need to clone the repository and run it using docker

```
git clone https://github.com/NotUltiko/satisfactory-optimizer.git
cd satisfactory-optimizer
#npm install #only if you want to contribute
#cd front    #only if you want to contribute
#npm install #only if you want to contribute
docker-compose up -d
```

a database dump is available at the project root `data-backup.sql` to have some datas to enjoy the app

to update generated code, you can go to front file and type `npm run graphql-codegen -- --watch`
