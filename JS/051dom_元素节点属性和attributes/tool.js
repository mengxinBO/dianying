 function removeSpaceNode(nodes){
			   var result = []; //用来存放不是空白节点的节点
			   for(var i = 0;i<nodes.length;i++){
				   //判断是否为空白节点
				   if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
					   continue;
				   }
				   result.push(nodes[i]);
			   }
			   return result;
		   }
		   
function removeSpaceNode2(parent){
			   var nodes = parent.childNodes;
			   for(var i = nodes.length-1;i>=0;i--){
				 if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
					 parent.removeChild(nodes[i]);
				 }  
			   }
		   }