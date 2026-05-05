function change() {
    var modelCbs = document.querySelectorAll(".models input[type='checkbox']");
    var processorCbs = document.querySelectorAll(".categories input[type='checkbox']");
    var filters = {
      models: getClassOfCheckedCheckboxes(modelCbs),
      categories: getClassOfCheckedCheckboxes(processorCbs)
    };
  
    filterResults(filters);
  }
  
  function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];
  
    if (checkboxes && checkboxes.length > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("rel"));
        }
      }
    }
  
    return classes;
  }
  
  function filterResults(filters) {
    var rElems = document.querySelectorAll(".result div");
    console.log(rElems);
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];
  
      if (filters.models.length > 0) {
        var isHidden = true;
  
        for (var j = 0; j < filters.models.length; j++) {
          var filter = filters.models[j];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }
  
      if (filters.categories.length > 0) {
        var isHidden = true;
  
        for (var j = 0; j < filters.categories.length; j++) {
          var filter = filters.categories[j];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }
    }
  
    for (var i = 0; i < rElems.length; i++) {
      rElems[i].style.display = "block";
    }

    var allLabels = document.querySelectorAll(".result h3.rs-label");
    for (var i = 0; i < allLabels.length; i++) {
      allLabels[i].style.display = "";
    }

    if (hiddenElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < hiddenElems.length; i++) {
      hiddenElems[i].style.display = "none";
    }

    // Hide rs-label headings that have no visible entries beneath them
    var resultEl = document.querySelector(".result");
    if (resultEl) {
      var children = resultEl.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.tagName === "H3" && child.classList.contains("rs-label")) {
          var hasVisible = false;
          for (var j = i + 1; j < children.length; j++) {
            if (children[j].tagName === "H3" && children[j].classList.contains("rs-label")) break;
            if (children[j].tagName === "DIV" && children[j].style.display !== "none") {
              hasVisible = true;
              break;
            }
          }
          child.style.display = hasVisible ? "" : "none";
        }
      }
    }
  }
  