
document.addEventListener("click", documentActions);

const subMenuCatalogBlock = document.querySelectorAll('.sub-menu-catalog__block');
if (subMenuCatalogBlock.length) {
	subMenuCatalogBlock.forEach(menuBlock => {
		const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
		menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
	});
}

function documentActions(e) {
	const targetElemnt = e.target;
	if (targetElemnt.closest('[data-parent]')) {
		const subMenuId = targetElemnt.dataset.parent ? targetElemnt.dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		if (subMenu) {
			const activeLink = document.querySelector('._sub-menu-active');
			const activeBlock = document.querySelector('._sub-menu-open');


			if (activeLink && activeLink !== targetElemnt) {
				activeLink.classList.remove('_sub-menu-active');
				activeBlock.classList.remove('_sub-menu-open');
				document.documentElement.classList.remove('sub-menu-open');
			}
			document.documentElement.classList.toggle('sub-menu-open');
			targetElemnt.classList.toggle('_sub-menu-active');
			subMenu.classList.toggle('_sub-menu-open');
		} else {
			console.log('Ой ой, такого подменю нет :(');
			
		}
		e.preventDefault();
	}
	if (targetElemnt.closest('.menu-top-header__link_catalog')) {
		document.documentElement.classList.add('catalog-open');
		e.preventDefault();
	}
	if (targetElemnt.closest('.menu-catalog__back')) {
		document.documentElement.classList.remove('catalog-open');

		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
	if (targetElemnt.closest('.sub-menu-catalog__back')) {
		document.documentElement.classList.remove('sub-menu-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
}
//==========================
function initTippy() {
	tippy('[data-tippy-content]', {

	});
}
initTippy();
