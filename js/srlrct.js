/* Модуль работы с select */
function formSelect(logging) {
	formsModules.selectModule = new SelectConstructor({
		logging: logging
	});
};

formSelect(false);