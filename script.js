function rodar(event) {
    event.preventDefault();
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');
    
    // Oculta todos os itens da lista
    var listItems = document.querySelectorAll('li');
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.add('hidden');
    }
  
    var foundItems = []; // Array para armazenar os itens encontrados
  
    // Percorre todos os itens da lista
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      var itemName = listItem.textContent.toLowerCase(); // Obtém o nome do item em letras minúsculas
  
      if (itemName.includes(input.toLowerCase())) {
        // Se o nome do item contiver a sequência de caracteres digitada
        listItem.classList.remove('hidden');
        foundItems.push(listItem);
      }
    }
  
    if (foundItems.length > 0) {
      // Destaca o primeiro item encontrado
      foundItems[0].classList.add('highlight');
      output.textContent = "Você digitou: " + input;
    } else {
      output.textContent = "Nenhum resultado encontrado para: " + input;
    }
  }
  
  