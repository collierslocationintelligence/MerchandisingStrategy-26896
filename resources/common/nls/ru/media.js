define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Медиа",
      "lblSelect2": "Ресурсы",
      "lblMap": "Карта",
      "lblImage": "Изображение",
      "lblVideo": "Видео",
      "lblExternal": "Веб-страница",
      "lblUpload": "Загрузить",
      "lblLink": "Ссылка",
      "disabled": "Функция была отключена администратором",
      "userLookup": "Загрузить альбомы",
      "notImplemented": "Еще не реализовано.",
      "noData": "Общедоступных альбомов не найдено"
    },
    "imageSelector": {
      "lblStep1": "Выберите услугу",
      "lblStep2": "Выберите ваши средства массовой информации",
      "lblStep3": "Настроить"
    },
    "imageSelectorHome": {
      "explain": "Загрузка изображения из социальных средств массовой информации,<br>или прямо из URL-адреса"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "поиск изображения",
      "lblDrop": "Перетащить изображение сюда или",
      "infoUpload": "Изображения будут сохранены в вашей учетной записи ArcGIS и будут доступны только в этой истории.",
      "warningFileTypes": "Изображение может быть в формате .jpg, .png, .gif или .bmp",
      "warningOneFile": "Одновременно доступен только один файл.",
      "warningFileSize": "Файл превышает максимально допустимый размер для загрузки. Выберите другой файл.",
      "tooltipRemove": "Удалите изображение, которое не используется, из учетной записи ArcGIS. <br> (Если вы захотите использовать его позднее, придется загрузить его заново.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Имя пользователя",
      "signInMsg2": "Пользователь не найден",
      "loadingFailed": "Загрузка не удалась"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Пользователь Facebook",
      "rightHeader": "Страница Facebook",
      "pageExplain": "Страница Facebook - это публичный продукт, как <b>esrigis</b>. Вы можете использовать имя страницы, расположенное после первой косой черты '/' в URL-адресе страницы.",
      "pageInputLbl": "Имя страницы",
      "lookupMsgError": "Страница не найдена",
      "warning": "Поддержка Facebook отменена, ${learn}.",
      "learn": "более подробно"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Email или Google ID",
      "signInMsg2": "Учетная запись не найдена",
      "howToFind": "Как найти Picasa ID",
      "howToFind2": "Скопируйте цифры, расположенные между первой и второй косой чертой '/' любой страницы Picasa"
    },
    "videoSelectorCommon": {
      "check": "Проверить",
      "notFound": "Видео не найдено",
      "found": "Видео найдено",
      "select": "Выбрать это видео"
    },
    "videoSelectorHome": {
      "other": "Другие"
    },
    "videoSelectorYoutube": {
      "url": "Ссылка на видео на YouTube",
      "pageInputLbl": "Имя пользователя",
      "lookupMsgError": "Пользователь не найден",
      "howToFind": "Как найти имя пользователя YouTube",
      "howToFind2": "Имя пользователя отображается под видео",
      "found": "Найдено",
      "noData": "Общедоступных видео не найдено",
      "videoNotChecked": "Это видео не было проверено на YouTube, но его адрес выглядит пригодным.",
      "checkFailedAPI": "Проверка на YouTube не удалась, проверьте ключ YouTube API."
    },
    "videoSelectorVimeo": {
      "url": "Ссылка на видео Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "История не может проигрывать необработанное видео (например, формата avi, mpeg), но он может проигрывать размещенные видео-файлы с помощью встроенных видео-плейеров (YouTube или Vimeo).",
      "explain2": "Большинство сервисов для размещения видео-роликов позволяют использовать эту функцию. Вам необходимо найти соответствующую опцию для встраивания видео, скопировать предлагаемый код и добавить его в историю с помощью опции %WEBPAGE%.",
      "explain3": "Или вы можете разместить видео самостоятельно, как и страницу HTML, которая использует видео-плейер, например %EXAMPLE%. Затем вы добавите ссылку на страницу HTML в свою историю как %WEBPAGE%.",
      "webpage": "Веб-страница"
    },
    "webpageSelectorHome": {
      "lblUrl": "Ссылка на веб-страницу",
      "lblEmbed": "Встроенный код",
      "lblOR": "ИЛИ",
      "lblError1": "Ошибка, очистите одно из двух входных полей.",
      "lblError2": "Внедренный код может содержать только один %IFRAMETAG%",
      "configure": "Настроить"
    },
    "mediaConfigure": {
      "lblURL": "Ссылка на изображение",
      "lblURLPH": "Ссылка должна оканчиваться на .jpg, .png, .gif или .bmp",
      "lblURLError": "Возможно изображение некорректно. Укажите прямую ссылку на файл изображения (URL скорей всего будет заканчиваться на .jpg или .png). Ссылка на веб-страницу, содержащую изображение, может не работать.",
      "lblURLCheck": "Проверка изображения...",
      "lblLabel": "Подпись изображения",
      "lblLabel1": "Заголовок",
      "lblLabel2": "Наведите курсор на текст",
      "lblLabel3": "Нет",
      "lblLabelPH": "Введите текст...",
      "lblMaximize": "Добавить кнопку увеличения размера до максимального в угол изображения",
      "lblMaximizeHelp": "Рекомендуется только для фотографий высокого качества",
      "lblPosition": "Положение",
      "lblPosition1": "По центру",
      "lblPosition2": "Заполнение",
      "lblPosition3": "Разместить",
      "lblPosition4": "Растяжка",
      "lblPosition5": "Настраиваемый",
      "lblURLHelp": "Для получения наилучшего результата, объем изображения должен быть менее 400 Кб. Используйте сжатые изображения JPG с 80% качества и рекомендуемую ширину изображения: 2000 пикселов для основной сцены или описательной панели с кнопкой развёртывания окна, 1000 пикселов для описательной панели без кнопки развёртывания окна.<br><br>Если изображение из ссылки отображается медленно, загрузите его в вашу историю для получения лучшего результата.",
      "tooltipDimension": "Значение можно задать в 'пикс.' или '%'",
      "tooltipDimension2": "Значение можно задать в 'пикс.'",
      "lblPosition2Explain": "(может быть урезано)",
      "lblPosition3Explain": "(не будет урезаться)",
      "lblPosition3Explain2": "(ширина всегда будет соответствовать панели)",
      "lblPosition4Explain": "(может исказиться)",
      "unloadLbl": "Выгрузить, когда читатель уйдет",
      "unloadHelp": "Если веб-страница содержит аудио или видео медиа файлы, оставьте эту опцию включенной, чтобы проигрывание ресурса выключалось, когда читатель уйдет со страницы. Отключите ее, если хотите, например, чтобы фонограмма звучала, пока читатель изучает историю.<br />Если веб-страницы является приложением, отключите эту опцию, чтобы история не перезагружалась при возращении у ней читателя.",
      "embedProtocolLabel": "Загрузить страницу через безопасное подключение (HTTPS)",
      "embedProtocolWarning1": "Если данная страница не загружена в вашу историю, ее нельзя встроить по соображениям веб-безопасности. В качестве альтернативы добавьте ссылку в ваше описание, чтобы открыть страницу в новой вкладке браузера. <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Более подробно</a>",
      "embedProtocolWarning2": "Если данная страница не загружена в вашу историю, отключите эту опцию и попробуйте снова. Если страница все еще не загружена, ее невозможно встроить по соображениям веб-безопасности. В качестве альтернативы добавьте ссылку в ваше описание, чтобы открыть страницу в новой вкладке браузера. <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Более подробно</a>"
    },
    "editorActionGeocode": {
      "lblTitle": "Найдите адрес или место",
      "mapMarkerExplain": "При нажатии на ссылку пользователь увидит маркер карты"
    },
    "editorActions": {
      "remove": "Действие Удалить",
      "preview": "Действие Предварительный просмотр"
    },
    "editorActionMedia": {
      "lblTitle": "Изменить ресурсы основной площадки"
    },
    "editorInlineMedia": {
      "lblTitle": "Вставить изображение, видео или веб-страницу"
    }
  }
});