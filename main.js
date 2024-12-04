let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    
    // Скрыть текущий слайд
    slides[currentSlide].classList.remove('active');
    
    // Изменить индекс текущего слайда
    currentSlide += direction;

    // Обработать границы
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Перейти к последнему слайду
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Перейти к первому слайду
    }

    // Показать новый слайд
    slides[currentSlide].classList.add('active');
}

/*document.addEventListener('DOMContentLoaded', function() {
    const numberDisplay = document.getElementById('numberDisplay');
    let currentValue = parseInt(numberDisplay.value); // Получаем текущее значение

    // Обработчик для кнопки "+"
    document.querySelector('input[name="plus"]').addEventListener('click', function() {
        currentValue += 1; // Увеличиваем значение на 1
        numberDisplay.value = currentValue; // Обновляем отображаемое значение
    });

    // Обработчик для кнопки "-"
    document.querySelector('input[name="minus"]').addEventListener('click', function() {
        currentValue -= 1; // Уменьшаем значение на 1
        numberDisplay.value = currentValue; // Обновляем отображаемое значение
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом "regulation"
    const regulationContainers = document.querySelectorAll('.regulation');

    regulationContainers.forEach(container => {
        const numberDisplay = container.querySelector('.regulation-input');
        let currentValue = parseInt(numberDisplay.value); // Получаем текущее значение

        // Обработчик для кнопки "+"
        container.querySelector('input[name="plus"]').addEventListener('click', function() {
            currentValue += 1; // Увеличиваем значение на 1
            numberDisplay.value = currentValue; // Обновляем отображаемое значение
        });

        // Обработчик для кнопки "-"
        container.querySelector('input[name="minus"]').addEventListener('click', function() {
            if (currentValue > 0) { // Проверяем, что значение больше 0
                currentValue -= 1; // Уменьшаем значение на 1
                numberDisplay.value = currentValue; // Обновляем отображаемое значение
            }
        });

        // Обработчик для изменения значения через клавиатуру
        numberDisplay.addEventListener('input', function() {
            const inputValue = parseInt(numberDisplay.value);
            if (!isNaN(inputValue) && inputValue >= 0) {
                currentValue = inputValue; // Обновляем текущее значение
            } else {
                numberDisplay.value = 0; // Если введено некорректное значение, устанавливаем 0
                currentValue = 0;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Функция для обновления значения в соответствующем span
    function updateValue(spanId, value) {
        document.getElementById(spanId).textContent = value;
    }

    // Обработчик для длины
    const lengthButtons = document.querySelectorAll('input[name="length"]');
    lengthButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateValue('lengthValue', this.value);
        });
    });

    // Обработчик для изгиба
    const bendButtons = document.querySelectorAll('input[name="bend"]');
    bendButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateValue('bendValue', this.value);
        });
    });

    // Обработчик для толщины
    const widthButtons = document.querySelectorAll('input[name="width"]');
    widthButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateValue('widthValue', this.value);
        });
    });
});

function updateTotal() {
    const tovars = document.querySelectorAll('.tovar');
    let total = 0;

    tovars.forEach(tovar => {
        const price = parseFloat(tovar.querySelector('.price').textContent.replace(' руб.', ''));
        const quantity = parseInt(tovar.querySelector('input[name=number]').value);
        total += price * quantity;
    });

    document.getElementById('totalAmount').textContent = total;
}

function clearBasket() {
    const inputs = document.querySelectorAll('.regulation input[name=number]');
    inputs.forEach(input => {
        input.value = 0;
    });
    updateTotal();
}


function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Закрытие модального окна при отправке формы
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    alert('Форма отправлена!'); // Здесь вы можете добавить свою логику для обработки входа
    document.getElementById('loginModal').style.display = 'none'; // Закрываем модальное окно
};