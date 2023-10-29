// script.js

var translations = {
    'en': {
        'title': 'Bitcoin Trading Calculator',
        'btcAmountLabel': 'Enter Bitcoin Amount:',
        'buyPriceLabel': 'Enter Buy Price (USD):',
        'sellPriceLabel': 'Enter Sell Price (USD):',
        'commissionLabel': 'Enter Commission (%):',
        'calculateButton': 'Calculate Profit',
        'supportButton': 'Support the Author',
        'result': 'Profit: ${{profit}}'
    },
    'ru': {
        'title': 'Калькулятор торговли биткоином',
        'btcAmountLabel': 'Введите количество биткоинов:',
        'buyPriceLabel': 'Введите цену покупки (USD):',
        'sellPriceLabel': 'Введите цену продажи (USD):',
        'commissionLabel': 'Введите комиссию (%):',
        'calculateButton': 'Рассчитать прибыль',
        'supportButton': 'Поддержать автора',
        'result': 'Прибыль: ${{profit}}'
    },
    'es': {
        'title': 'Calculadora de comercio de Bitcoin',
        'btcAmountLabel': 'Ingrese la cantidad de Bitcoin:',
        'buyPriceLabel': 'Ingrese el precio de compra (USD):',
        'sellPriceLabel': 'Ingrese el precio de venta (USD):',
        'commissionLabel': 'Ingrese la comisión (%):',
        'calculateButton': 'Calcular beneficio',
        'supportButton': 'Apoyar al autor',
        'result': 'Beneficio: ${{profit}}'
    },
    'fr': {
        'title': 'Calculateur de trading Bitcoin',
        'btcAmountLabel': 'Entrez la quantité de Bitcoin :',
        'buyPriceLabel': 'Entrez le prix d\'achat (USD) :',
        'sellPriceLabel': 'Entrez le prix de vente (USD) :',
        'commissionLabel': 'Entrez la commission (%) :',
        'calculateButton': 'Calculer le profit',
        'supportButton': 'Soutenir l\'auteur',
        'result': 'Profit : ${{profit}}'
    },
    // Добавьте еще языки по аналогии
    'de': {
        'title': 'Bitcoin Handelsrechner',
        'btcAmountLabel': 'Geben Sie die Menge an Bitcoin ein:',
        'buyPriceLabel': 'Geben Sie den Kaufpreis ein (USD):',
        'sellPriceLabel': 'Geben Sie den Verkaufspreis ein (USD):',
        'commissionLabel': 'Geben Sie die Handelsprovision ein (%):',
        'calculateButton': 'Gewinn berechnen',
        'supportButton': 'Autor unterstützen',
        'result': 'Gewinn: ${{profit}}'
    },
    'it': {
        'title': 'Calcolatore di trading di Bitcoin',
        'btcAmountLabel': 'Inserisci la quantità di Bitcoin:',
        'buyPriceLabel': 'Inserisci il prezzo di acquisto (USD):',
        'sellPriceLabel': 'Inserisci il prezzo di vendita (USD):',
        'commissionLabel': 'Inserisci la commissione di trading (%):',
        'calculateButton': 'Calcola il profitto',
        'supportButton': 'Sostieni l\'autore',
        'result': 'Profitto: ${{profit}}'
    },
    'ja': {
        'title': 'Bitcoinトレード計算機',
        'btcAmountLabel': 'Bitcoinの量を入力してください：',
        'buyPriceLabel': '購入価格を入力してください（USD）：',
        'sellPriceLabel': '売却価格を入力してください（USD）：',
        'commissionLabel': '取引手数料を入力してください（％）：',
        'calculateButton': '利益を計算する',
        'supportButton': '作者をサポートする',
        'result': '利益：$ {{profit}}'
    },
    'ko': {
        'title': '비트코인 트레이딩 계산기',
        'btcAmountLabel': '비트코인 양을 입력하세요:',
        'buyPriceLabel': '구매 가격을 입력하세요 (USD):',
        'sellPriceLabel': '판매 가격을 입력하세요 (USD):',
        'commissionLabel': '거래 수수료를 입력하세요 (%):',
        'calculateButton': '이익 계산',
        'supportButton': '저자 지원하기',
        'result': '이익: ${{profit}}'
    },
    'pt': {
        'title': 'Calculadora de Negociação de Bitcoin',
        'btcAmountLabel': 'Digite a quantidade de Bitcoin:',
        'buyPriceLabel': 'Digite o preço de compra (USD):',
        'sellPriceLabel': 'Digite o preço de venda (USD):',
        'commissionLabel': 'Digite a comissão de negociação (%):',
        'calculateButton': 'Calcular lucro',
        'supportButton': 'Apoiar o autor',
        'result': 'Lucro: ${{profit}}'
    },
    'zh': {
        'title': '比特币交易计算器',
        'btcAmountLabel': '输入比特币数量：',
        'buyPriceLabel': '输入购买价格（美元）：',
        'sellPriceLabel': '输入卖出价格（美元）：',
        'commissionLabel': '输入交易佣金（％）：',
        'calculateButton': '计算利润',
        'supportButton': '支持作者',
        'result': '利润：$ {{profit}}'
    },
    // Добавьте другие языки по аналогии
};

function setLanguage(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (element) {
        var key = element.getAttribute('data-i18n');
        element.innerHTML = translations[lang][key];
    });
}

function changeLanguage(lang) {
    setLanguage(lang);
}

function calculateProfit() {
    // Реализация расчета прибыли
    var btcAmount = parseFloat(document.getElementById('btcAmount').value);
    var buyPrice = parseFloat(document.getElementById('buyPrice').value);
    var sellPrice = parseFloat(document.getElementById('sellPrice').value);
    var commission = parseFloat(document.getElementById('commission').value);

    var profit = (sellPrice - buyPrice) * btcAmount * (1 - commission / 100);

    document.getElementById('result').innerHTML = translations['en']['result'].replace('{{profit}}', profit.toFixed(2));
}

function supportAuthor() {
    // Здесь можно добавить код для обработки поддержки автора
    alert('Thank you for supporting the author!');
}

// Установка языка по умолчанию
setLanguage('en');
