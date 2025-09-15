function onOpen() {
  DocumentApp.getUi()
    .createMenu('My App')
    .addItem('Open Sidebar', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('My React Sidebar');
  DocumentApp.getUi().showSidebar(html);
}

