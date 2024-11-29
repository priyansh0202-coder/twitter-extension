document.getElementById("follow-all").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const switchToForYouTab = () => {
          const forYouTab = document.querySelector('a[aria-label="For you"]');
          if (forYouTab) forYouTab.click();
        };

        const followAllUsers = async () => {
          const users = document.querySelectorAll('[data-testid="UserCell"]');
          if (users.length === 0) {
            alert("No users to follow.");
            return;
          }

          for (const user of users) {
            const avatar = user.querySelector('[data-testid="UserAvatar"]');
            if (avatar) avatar.dispatchEvent(new MouseEvent("mouseover"));

            await delay(1000);

            const followButton = user.querySelector(
              '[role="button"]:not([aria-label*="Following"])'
            );
            if (followButton) {
              followButton.click();
              console.log("Followed a user!");
            } else {
              console.log("Already following this user.");
            }

            await delay(Math.random() * (3000 - 1000) + 1000);
          }
          alert("Followed all visible users!");
        };

        switchToForYouTab();
        followAllUsers();
      },
    });
  });
});
