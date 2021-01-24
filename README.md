### FCM ticker

Можно либо запустить скрипт из текущего каталога, либо установить как сервис для SystemD

#### Запуск скрипта
1. ```npm install```
2. ```node index.js --interval 5000```

#### Установка скрипта как сервиса SystemD
1. ```sudo ./bin/install.sh```
2. Просмотр логов: ```journalctl --pager-end --follow --unit=ticker.service```

#### Удаление сервиса SystemD
1. ```sudo ./bin/uninstall.sh```