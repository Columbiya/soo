export const enum Constants {
	PROJECT_NAME = 'граддиалог.рб',
	PROJECT_NAME_HIGHLIGHTED_PART = 'град',
	PROJECT_NAME_REST_PART = 'диалог.рб',
	PROJECT_HEADER_TITLE = 'Общественные обсуждения',
	BASE_URL = 'https://soo.wptt.ru/api',
	UPLOAD_URL = 'https://soo.wptt.ru'
}

export const enum ButtonType {
	None = 'none',
	Green = 'green',
	Blue = 'blue',
	OutlinedBlue = 'outlined-blue',
	White = 'white'
}

export const enum ButtonKind {
	None = 'none',
	SlightRounded = 'slight-rounded',
	Rounded = 'rounded'
}

export const enum ButtonSize {
	None = 'none',
	Default = 'default',
	Small = 'small'
}

export const enum ValidationError {
	REQUIRED = 'Заполните поле',
	WRONG_FORMAT = 'Неправильный формат'
}

export type EntityId = number | string

export enum Months {
	JANUARY = 'января',
	FEBRUARY = 'февраля',
	MARCH = 'марта',
	APRIL = 'апреля',
	MAY = 'мая',
	JUNE = 'июня',
	JULY = 'июля',
	AUGUST = 'августа',
	SEPTEMBER = 'сентября',
	OCTOBER = 'октября',
	NOVEMBER = 'ноября',
	DECEMBER = 'декабря'
}
