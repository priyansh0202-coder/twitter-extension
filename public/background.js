chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension successfully installed.");
});

chrome.action.onClicked.addListener((tab) => {
  console.log("Action button clicked!");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => alert("Button clicked on tab: " + tabs[0].url),
    });
  });
});
