#!/usr/bin/env bash

sudo systemctl disable ticker.service && \
sudo systemctl stop ticker.service && \
sudo rm /etc/systemd/system/ticker.service && \
sudo rm -rf /usr/local/bin/ticker && \
systemctl status ticker.service \