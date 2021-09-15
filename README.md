# Pathly

For Pathly Web we use the CMS [Statamic V3](https://www.statamic.com). The project is based on Statamic V3 Starter.

Statamic Starter is a Docker development environment to make Statamic development even more fun and easy. It's all you need to easily build a Statamic website using Apache and PHP 7.4. No more XAMP and so on needed.

## Requirements

* Docker Desktop >= 3.4.0

[Download Docker](https://docs.docker.com/get-docker/)

## Start the development environment

First open your shell and go to the directory where you want to have the project located.
Now you can run the following commands to prepare the project:

``` 
git clone git@github.com:pathly/pathly-web-statamic.git
cd pathly-web-statamic
```

To start the Statamic Docker container run the following command in the root folder of the project:

```
docker compose up
```

Wait until you see the output `Statamic is ready`, which indicates that statamic is working as intended.


Now open up a browser of your choice and access the local Statamic website:

```
http://localhost:8080
```

To stop the container just press `CTRL + C` in your shell.

## Start the development environment in detached mode

An alternative way to start the development environment is using the detached mode:

```
docker compose up -d
docker compose stop
```

This mode has the advantage that the containers run in the background and you don't have to open another window for more commands. The downside is you don't see any logs from the container for further debugging anymore. 

To attach to logs in detached mode you can use `docker compose logs -f statamic`.

## Start Frontend Development

To get all the used assets and resources, you need to update your public folder.  
This requires you to have a [NodeJS](https://nodejs.org/) installation.

Go into the directory pathly-web-statamic/statamic and run the following commands:

```
npm install
npm run dev
```

## Advanced Statamic Development

### How do I run `please` or `artisan`?

To run [please](https://statamic.dev/cli) get a bash shell in the container first:

```
docker compose exec statamic bash
```

Now you can run `php artisan` or `php please`.


An alternative way to run `please` or `artisan` commands in your container is:

```
docker compose exec statamic php please
docker compose exec statamic php artisan
```

###  How do I create a new Statamic User?
The easiest way to create your first user is by running

```
docker compose exec statamic php please make:user
```

###  Where should I put my `.env` variables for local development?
You should put your environment variables for local development into your `.env` file. Whenever you change that file, the php server will perform a reload. 

However, you should not commit your local `.env` into your project. Instead use the file `.env.docker`, which we create during the initial Statamic installation.

###  How do I update Statamic?
In your `composer.json`, change the `statamic/cms` version to the version number of your choice, e.g:

```
"statamic/cms": "3.2.*"
```

Then run:
```
docker compose exec statamic composer update statamic/cms --with-dependencies
```
