(function () {
  function mark(btn, state) {
    btn.setAttribute("data-state", state);
  }

  document.querySelectorAll("[data-quiz]").forEach(function (quiz) {
    var answered = false;
    var buttons = quiz.querySelectorAll("button[data-correct]");
    var fb = quiz.querySelector(".quiz-fb");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var ok = btn.getAttribute("data-correct") === "true";
        buttons.forEach(function (other) {
          if (other.getAttribute("data-correct") === "true") mark(other, "right");
          else if (other === btn) mark(other, "wrong");
        });
        if (fb) {
          fb.textContent = ok
            ? quiz.getAttribute("data-ok") || "Correct."
            : quiz.getAttribute("data-no") || "Not that one — look at the highlighted answer.";
        }
      });
    });
  });
})();
