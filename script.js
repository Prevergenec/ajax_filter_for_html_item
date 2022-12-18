var arr = [],
			arrColor = [],
			arrSize = [];

		document.querySelectorAll('.check input[type="checkbox"]').forEach(function(s){
			s.addEventListener('change', function(){  
				var colorChecked = document.querySelectorAll('.check input[type="checkbox"][data-prop="color"]:checked').length,
					sizeChecked = document.querySelectorAll('.check input[type="checkbox"][data-prop="size"]:checked').length;
				arr = [];
				arrColor = [];
				arrSize = [];
				
				if(document.querySelector('.list-item .nothingfound') != null)
					document.querySelector('.list-item .nothingfound').remove();
				
				document.querySelectorAll('.check input[type="checkbox"]:checked').forEach(function(i){
					document.querySelectorAll('.list-item .item [data-color="'+i.dataset.value+'"]').forEach(function(c){
						if(!arrColor.includes(c.closest('.item')))
							arrColor.push(c.closest('.item'));
					});

					document.querySelectorAll('.list-item .item [data-size="'+i.dataset.value+'"]').forEach(function(c){
						if(!arrSize.includes(c.closest('.item')))
							arrSize.push(c.closest('.item'));
					});
				});

				if(colorChecked != 0 && sizeChecked != 0){
					arr = arrColor.filter(x => arrSize.indexOf(x) !== -1);
				}else if(colorChecked != 0){
					arr = arrColor;
				}else if(sizeChecked != 0){
					arr = arrSize;
				}

				if(document.querySelector('.check input[type="checkbox"]:checked') != null){
					document.querySelectorAll('.list-item .item').forEach(function(i){i.style.display = 'none';});
					if(arr.length >= 1){
						arr.forEach(function(i){i.style.display = 'block';});
					}else{
						document.querySelector('.list-item').insertAdjacentHTML('beforeend', '<div class="nothingfound">Nothing found</div>')
					}
				}else{
					document.querySelectorAll('.list-item .item').forEach(function(i){i.style.display = 'block';});
				}
			});
		});