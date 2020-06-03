 /*
				【注】创建一个带文本的元素节点呢？
		   */
		  function createElementWithTxt(tagName,Txt){
			  var node = document.createElement(tagName);
			  var OText = document.createTextNode(Txt);
			  node.appendChild(OText);
			  return node;
		  }