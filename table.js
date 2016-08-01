function tableFun()
{
	this.create_table=function(table_tr,table_td)
	{
		var tr,td,table,tbody,i,j,inText,a;
		table=document.createElement("table");
		table.setAttribute("border",1);
		tbody=document.createElement("tbody");
		for(i=0;i<table_tr;i++)
		{
			tr=document.createElement("tr");
			for(j=0;j<table_td;j++)
			{
				td=document.createElement("td");
				inText=document.createTextNode(i*table_td+j);
				td.appendChild(inText);
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		return table;
	}
	
	this.create_span=function(row,col,num,rowNum,colNum,type)// -,|,格數,|個數,類型
	{
		var td,i,j,k,targetNum,content,parent;
	
		k=1;
		td=document.getElementsByTagName("td");
		targetNum=row*colNum+col;
		for(i=0;i<=td.length;i++)
		{
			content=td[i].firstChild.nodeValue;
			if(content==targetNum)
			{
				for(j=i;j<=td.length;j++)
				{
					content=td[j].firstChild.nodeValue;
					if(type=="rowSpan")
					{
						if(targetNum+k*colNum==content)
						{
							parent=td[j].parentNode;
							parent.removeChild(td[j]);
							k++;
							j--;
						}
					}else if(type=="colSpan"){
						parent=td[i].parentNode;
						if(targetNum+k==content)
						{
							parent.removeChild(td[j]);
							k++;
							j--;
						}
					}
					if(k>=num)
					{
						td[i].setAttribute(type,num);
						break;
					}
				}
				break;
			}
		}
	}
	
	this.create_text=function(inputText,isLink,link)
	{
		var text,i,id,a,oldText;
	
		id=document.getElementsByTagName("td");
		for(i=0;i<id.length;i++)
		{
			oldText=id[i].firstChild;
			text=document.createTextNode(inputText[i]);
			if(isLink==true && link[i]!="")
			{
				text=this.create_a(link[i],text);
			}
			id[i].replaceChild(text,oldText);
		}
	}
	
	this.create_a=function(href,inputText)
	{
		var a,text;
		
		a=document.createElement("a");
		a.setAttribute("target","_blank");
		a.setAttribute("href",href);
		a.appendChild(inputText);
		
		return a;
	}
}	