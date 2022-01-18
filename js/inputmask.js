/*
data-mask ="значение,подзначение"
*/

class InputMask {
	constructor(props, data = null) {
		let defaultConfig = {
			init: true,
			logging: false,
		}
		this.config = Object.assign(defaultConfig, props);

		this.masks = {
			phone: {
				ua: "+38(999)999-99-99"
			}
		}
		// Запуск инициализации
		if (this.config.init) {
			// Получение всех масок на странице
			const maskItems = data ? document.querySelectorAll(data) : document.querySelectorAll(`[data-mask]`);
			if (maskItems.length) {
				this.initMasks(maskItems);
				this.setLogging(`Проснулся, построил масок: (${maskItems.length})`);
				document.querySelector(`._mask-init`) ? this.setActions() : null;
			} else {
				this.setLogging('Нет ни одной маски. Сплю...zzZZZzZZz...');
			}
		}
	}
	setActions() {
		document.addEventListener("input", this.maskActions.bind(this));
		document.addEventListener("focusin", this.maskActions.bind(this));
		document.addEventListener("focusout", this.maskActions.bind(this));
		document.addEventListener("keydown", this.maskActions.bind(this));
	}
	initMasks(maskItems) {
		maskItems.forEach(maskItem => {
			this.initMask(maskItem);
		});
	}
	initMask(maskItem) {
		const maskValue = this.getMask(maskItem);
		maskValue ? this.setMask(maskItem, maskValue) : null;
	}
	getMask(maskItem) {
		const maskData = maskItem.dataset.mask ? maskItem.dataset.mask.split(',') : "";
		const maskName = maskData[0] ? maskData[0] : null;

		if (!maskName) {
			this.setLogging(`Маска для ${maskItem} не заполнена!`);
			return;
		}

		let maskValue = maskData[1] ? maskData[1] : null;

		if (maskName === "phone") {
			!maskValue ? maskValue = "ua" : null;
			this.masks[maskName][maskValue] ? maskValue = this.masks[maskName][maskValue] : null;
		}

		return maskValue;
	}
	setMask(maskItem, maskValue) {
		maskValue = maskValue.replace(/9/g, "_");
		maskItem.classList.add('_mask-init');
		maskItem.value = maskValue;
	}
	maskActions(e) {
		const targetElement = e.target;
		if (targetElement.closest('._mask-init')) {
			const input = targetElement;
			const inputValue = input.value;
			const inputMask = this.getMask(input);
			console.log(input.selectionStart);
			if (input.selectionStart > inputMask.length) {
				e.preventDefault();
				//input.value = inputValue.slice(0, inputMask.length);
			}
		}
	}
	// Логгинг в консоль
	setLogging(message) {
		this.config.logging ? console.log(`[Elton Mask]: ${message}`) : null;
	}
}
