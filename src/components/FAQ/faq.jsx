import React from "react";
import "./faq.css";

function faqCollapse() {
  var coll = document.querySelectorAll(".collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

function DropDown(props) {
  return (
    <div className="faq">
      <button type="button" class="collapsible">
        {props.q}
      </button>
      <div class="content">
        <p>{props.ans}</p>
      </div>
    </div>
  );
}

export {DropDown, faqCollapse};
