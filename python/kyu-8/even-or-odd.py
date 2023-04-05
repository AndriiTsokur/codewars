def even_or_odd(number):
		return 'Нечётное' if number % 2 else 'Чётное'

number = eval(input('Введи целое число:'))
print(even_or_odd(number))