# currency_converter_with_use_promise
Конвертер валют с использованием promise.

Создал новую функцию function catchData.

При помощи return new Promise создал новое ОБЕЩАНИЕ(promise) и вернул его во внешний мир при помощи метода return.

Оставил отслеживание по статусам readyState === 4(операция полностью завершена) и request.status == 200 (все ОК), иначе в REJECT.

Восопльзовался методом JSON.parse(response), чтобы расшифровать JSON в обычный объект.

inputUsd.value = inputRub.value / data.usd данной строчкой собственно вычисляем курс.

Каждый раз когда создается объект ОБЕЩАНИЕ становятся доступны 2 метода THEN и CATCH(только на ошибки) 
