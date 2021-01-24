#!/usr/bin/env bash

sudo cp -R . /usr/local/bin/ticker && \
cd /usr/local/bin/ticker && \
sudo npm install && \
sudo cp ./ticker.service /etc/systemd/system/ && \
sudo systemctl enable ticker.service && \
sudo systemctl start ticker.service && \
systemctl status ticker.service