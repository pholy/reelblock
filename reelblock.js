function removeDivsWithAttribute(attr, value = null) {
    const selector = value ? `div[${attr}="${value}"]` : `div[${attr}]`;
    const removeMatches = (root = document) => {
        root.querySelectorAll(selector).forEach(div => div.remove());
    }

    removeMatches();

    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.matches(selector)) {
                        node.remove();
                        return;
                    }
                    removeMatches(node);
                }
            })
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

removeDivsWithAttribute('aria-label', 'Reels');
