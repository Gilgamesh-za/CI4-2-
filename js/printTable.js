var printBtn = document.getElementById("print");
var style = "<style>";
style = style + "table {width: 100%; font: 17px Calibri;}";
style = style + "table, th, td {border: solid 1px black;";
style = style + "text-align: center;padding: 0;}";
style = style + "</style>";

printBtn.onclick = function() {
	var printContent = document.getElementById("tab");
	var windowUrl = 'about:blank';

	var num;
	var uniqueName = new Date();

	var windowName = 'Print' + uniqueName.getTime();var printWindow = window.open(num, windowName, 'left=50000,top=50000,width=0,height=0');
	printWindow.document.write(printContent.outerHTML);
	printWindow.document.write(style);
	printWindow.document.close();

	printWindow.focus();

	printWindow.print();

	printWindow.close();
  
}