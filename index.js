#!/usr/bin/env node

'use strict'

// Импорт зависимостей
const argv = require('yargs').argv;
const SimpleNodeLogger = require('simple-node-logger');
const request = require('request');

// Настройка логера
const opts = {
    timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

// Параметры запроса
const reqOptions = {
    method: 'POST',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAApcEbDUo:APA91bGT5kz1952X9CPJW2cizL0a6lnQM9mFRfR2-Ctip6XXqHB35Y9TlKr05GqyEmWPIj1yX6KIvw4qitPkaCFscOGk1A379XUOyqUP--7gr0Ynv_wm4_z678-amN-XDAxLqmF0l227'
    },
    body: JSON.stringify({
        "condition": "('testTopic' in topics)",
        "content_available":true,
        "apns-priority":5,
        "data":{
            "some-key":"some-value"}
    })
};


(async () => {

    log.info('Начало выполнения скрипта');

    setInterval(() => {

        log.info('Делаем POST-запрос');

        request(reqOptions, (err, res) => {
            if (err) {
                log.error(`Запрос закончился ошибкой: ${err}`);
                // throw new Error(err);
            } else {
                log.info(`Ответ получен: ${res.body}`);
            }
        })

    }, parseInt(argv.interval));

})();