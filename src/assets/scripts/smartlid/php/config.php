<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . 'data/htdocs/penguintour/src/assets/scripts/smartlid/php/phpmailer/phpmailer.php');

    // Основные настройки для отправки письма

    // *********** Если используете SMTP

    // ** Пример для SMTP-YANDEX.
    // const HOST = 'ssl://smtp.yandex.ru';
    // const LOGIN = 'sender';
    // const PASS = 'XXXXXXXXXX';
    // const PORT = 465;


    /// ** Пример для SMTP-MAIL.RU
    // const HOST = 'ssl://smtp.mail.ru';
    // const LOGIN = 'sender@mail.ru';
    // const PASS = 'XXXXXXXXXXX';
    // const PORT = 465;




    // ** Раскомментируйте (уберите слеши) и заполните данные, как в примере выше, а также не забудьте раскоментировать строку с require_once...

    const HOST = 'smtp.gmail.com';
    const LOGIN = 'nikita090587@gmail.com';
    const PASS = 'ikb22ste';
    const PORT = 465;
    require_once($_SERVER['DOCUMENT_ROOT'] . 'data/htdocs/penguintour/src/assets/scripts/smartlid/php/phpmailer/smtp.php');

    const SENDER = 'nikita090587@gmail.com';
    const CATCHER = 'pingvintour@gmail.com';
    // const CATCHER2 = 'catcher2@list.ru';
    const SUBJECT = 'Обращение от посетителя penguintour';
    const SUCCESSMSGS = 'Спасибо за обращение. Сообщение успешно отправлено';
    const FAILMSGS = 'Сообщение не отправлено, попробуйте еще раз';
    const FAILFILE = 'Ошибка отправки файла, попробуйте еще раз';
    const ATTENTION = 'Внимание! Вы заполнили не все обязательные поля';
    const AGREMENTATTANTION = 'Вы не приняли условия пользовательского соглашения';
    const CHARSET = 'UTF-8';

    $nameIsRequired = true;
    $telIsRequired = true;
    $emailIsRequired = true;
    // $textIsRequired = false;
