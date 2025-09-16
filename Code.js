function onOpen() {
  DocumentApp.getUi()
    .createMenu('My React App')
    .addItem('Open Sidebar', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('My React Sidebar')
    .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

function showCustomDialog() {
  const html = HtmlService.createHtmlOutputFromFile('Dialog')
    .setWidth(400)
    .setHeight(300);
  DocumentApp.getUi().showModalDialog(html, 'Custom Dialog');
}

