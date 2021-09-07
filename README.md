# Pathly

For Pathly Web we use the CMS [Statamic V3](https://www.statamic.com). The project is based on Statamic V3 Starter.

Statamic Starter is a Docker development environment to make Statamic development even more fun and easy. It's all you need to easily build a Statamic website using Apache and PHP 7.4. No more XAMP and so on needed.

## Requirements

* Docker Engine >= 20.10.3
* Docker Compose >= 1.28.5

[Download Docker](https://docs.docker.com/get-docker/)

## Installation

First open your shell and go to the directory where you want to have the project located.
Now you can run the following commands:

``` 
git clone git@github.com:pathly/pathly-web-statamic.git
cd pathly-web-statamic
docker-compose up -d
```

Wait until you see the output `Statamic is ready`, which indicates that statamic is working as intended.
To finish the installation, run the following commands:

```
docker-compose exec statamic composer install
docker-compose exec statamic cp -n /app/.env.docker /app/.env
docker-compose stop
```

Now everything is installed.

## Running Pathly

To start the Statamic Docker container run the following command in the root folder of the project:

```
docker-compose up
```

Now open up a browser of your choice and access the local Statamic website:

```
http://localhost:8080
```

To stop the process just press `CTRL + C` in your shell.

Instead you can also use following commands to run and stop the docker (as you did during the installation phase):

```
docker-compose up -d
docker-compose stop
```

This has the advantage that the process runs in the background and you don't have to open another window for more commands.

## Start Development

To get all the used assets and resources, you need to update your public folder.  
This requires you to have a [NodeJS](https://nodejs.org/) installation.

Go into the directory pathly-web-statamic/statamic and run the following commands:

```
npm install
npm run dev
```

## Advanced Statamic Development

To run [CLI](https://statamic.dev/cli) get an interactive prompt first:

```
docker-compose exec statamic bash
```

Run `php artisan` or `php please` inside the statamic service.

Alternatively, the commands can also be executed directly on the host:

```
docker-compose exec statamic php please
```

## Build Images
Of course you can modify the existing `Dockerfile`. These are located inside `images/*/Dockerfile`. To build the images you can run the `build.sh` script using [npm](https://www.npmjs.com/).

```
npm run build
```
