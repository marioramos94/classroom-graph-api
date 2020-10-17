# Services

### Prerequisites
+ [Docker](https://docs.docker.com/install/)
+ [Docker compose](https://docs.docker.com/compose/install/)

### Gettting Started

Create file '.dev.env' on base directory
include follow enviroments on this file:

TZ=America/Lima

SENDGRID_API_KEY=INSERTWORD...

POSTGRES_USER=user
POSTGRES_PASSWORD=userpw
POSTGRES_DB=dbname
POSTGRES_HOST=db
CDN=https://cdn.new.project
NODE_PORT_APP=3003
NODE_PORT_SERVER=3003

TERM=xterm
NODE_ENV=development
JWT_LIFE_TIME =1h
JWT_SECRET=CLASSROOM
NODE_PORT_APP=3003
NODE_PORT_SERVER=3003
TERM=xterm
NODE_ENV=development


### Let's setup your host

Add these subdomains in '/etc/hosts'
```sh
127.0.0.1       localhost
```
### Run project

Just run follow command
```sh
$ docker-compose up -d
```

### Debugging with VS Code

For debugging with docker we have to setup the following configuration on 'launch.json'

```sh
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Clasroom Docker: Attach to node",
            "type": "node",
            "request": "attach",
            "port": 9229,
            "address": "localhost",
            "localRoot": "${workspaceFolder}",
            "remoteRoot": "/usr/src/app",
            "protocol": "inspector",
            "sourceMapPathOverrides": {
                "/usr/src/app/*": "${workspaceRoot}/*",
            },
            "restart": true,
        },
    ]
}
```

### Postgres CLI

> there are many tools for connecting to postgress database, it's recommend to use [PgAdmin](https://www.pgadmin.org)

### Seeds

To run seeds, we need to install [sequelize-cli](https://sequelize.org/master/manual/migrations.html)

```sh
npx sequelize-cli db:seed:all --url 'postgres://user:userpw@0.0.0.0/dbname'
```


## Happy Coding

Now, your workspace is ready to development
Server ready at http://localhost:8080/
