// JavaScript Document
function header(rootDir){
	$.ajax({
		url: rootDir + "include/header.html", // 繝�ぅ繝ｬ繧ｯ繝医Μ繝ｼ螟画峩
		cache: false,
		async: false,
		dataType: 'html',
		success: function(html){
			html = html.replace(/\{\$root\}/g, rootDir); 
			document.write(html);
		}
	});
}
function footer(rootDir){
	$.ajax({
		url: rootDir + "include/footer.html", // 繝�ぅ繝ｬ繧ｯ繝医Μ繝ｼ螟画峩
		cache: false,
		async: false,
		dataType: 'html',
		success: function(html){
			html = html.replace(/\{\$root\}/g, rootDir); 
			document.write(html);
		}
	});
}
