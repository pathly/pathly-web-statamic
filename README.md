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
docker-compose up
```

Wait until you see the output `Statamic is ready`. Now everything is installed.

Open a browser of your choice and access the local Statamic website:

```
http://localhost:8080
```

To stop the process just press `CTRL + C` in your shell.