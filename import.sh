#!/bin/bash

SSH_HOST="statamic-brklo.servivum.app"
SSH_PORT="22701"
SSH_USER="sshuser_zeibzc"
SSH_PATH="/var/www/releases/current/"

rsync -avz -e "ssh -p $SSH_PORT" \
    --exclude=".env" \
    --exclude="vendor/" \
    --exclude="node_modules/" \
    --exclude="package-lock.json" \
    $SSH_USER@$SSH_HOST:$SSH_PATH statamic/

echo "Done"