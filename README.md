# Тестирование API профилей пользователей

Этот репозиторий содержит тесты для API, которое работает с профилями пользователей. Он использует библиотеки Express и supertest для написания и запуска тестов.

## Установка

1. Установите Node.js и npm, если они еще не установлены на вашем компьютере.
2. Выполните команду `npm install` в корне проекта, чтобы установить supertest и другие зависимости, необходимые для тестирования.

## Использование

1. Запустите свой сервер Express, если у вас есть один. Это можно сделать, запустив ваше приложение.
2. Запустите тесты, выполните команду `npm test`.
3. После запуска тестов ожидайте результатов в консоли. Вы увидите информацию о том, успешно ли прошли тесты или возникли ошибки.
4. Убедитесь, что все тесты прошли успешно. Если есть ошибки, вам будет сообщено, в каких тестах они возникли.
5. После завершения этих шагов вы сможете использовать этот код для автоматизированного тестирования вашего API, который работает с профилями пользователей.

## Описание тестов

- `test_create_user_profile`: Проверяет создание нового профиля пользователя.
- `test_get_user_profile`: Проверяет получение профиля пользователя.
- `test_update_user_profile`: Проверяет обновление профиля пользователя.
- `test_delete_user_profile`: Проверяет удаление профиля пользователя.
- `test_invalid_registration_data`: Проверяет, что при передаче неверных данных при регистрации профиля возвращается код ошибки 400.
- `test_invalid_route_access`: Проверяет, что при обращении к несуществующему маршруту возвращается код ошибки 404.
- `test_invalid_profile_update_data`: Проверяет, что при попытке обновить профиль с неверными данными возвращается код ошибки 400.
