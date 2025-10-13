export class DOMHelpers {
  static getElementById(id) {
    const element = document.getElementById(id);
    if(!element) {
      throw new Error(`The element ID ${id} provided is invalid!`);
    }
    return element;
  }

  static createOption(text, value) {
    return new Option(text, value)
  }

  static createListItem(text, liClassName="", svgClassName="") {
    const li = document.createElement("li");
    li.innerHTML = `
      <svg class="${svgClassName} w-3.5 h-3.5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
      </svg>
      ${text}
    `;
    if(liClassName) {
      li.className = liClassName;
    }
    return li;
  }

  static clearElement(element) {
    while(element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }

  static appendFragment(parent, items, createItemFn) {
    const fragment = document.createDocumentFragment();

    items.forEach(item => {
      fragment.appendChild(createItemFn(item));
    });

    parent.appendChild(fragment);
  }

  static createElement(elementName, text="", className="") {
    const element = document.createElement(elementName);
    
    if(text) {
      element.textContent = text;
    }
    if(className) {
      element.className = className;
    }

    return element;
  }

  static addClassName(element, className) {
    if(element  && className) {
      element.classList.add(className)
    }
  }

  static removeAttribute(element, attributeName) {
    element.removeAttribute(attributeName)
  }

}