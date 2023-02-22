let nexusBotBtn = document.querySelector(".chatbot");
let chatBotChat = document.querySelector("section-4_chatbot");
let chatBotClose = document.querySelector(".chatbot-cut_icon");
let chatTextArea = document.querySelector(".chat-textarea");
let chatPara = document.querySelector(".chat-paragraphes");
let chatBoxHtml = "";
let nexusBotHidden = false;
let nexusBotStrictClose = false;

chatBotClose.addEventListener("click", () => {
  nexusBotHidden = true;
  nexusBotStrictClose = true;
  nexusBotBtn.classList.add("chatbot_js");
  console.log("clicked");
});

nexusBotBtn.addEventListener("click", () => {
  if (!nexusBotHidden) {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    nexusBotBtn.classList.add("chatbot_js");
    nexusBotHidden = true;
  }
});

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("resize scroll", function () {
  if (!nexusBotStrictClose) {
    if ($("#chat-bot-chat").isInViewport()) {
      $(".chatbot").addClass("chatbot_js2");
      // nexusBotHidden = true;
    } else {
      $(".chatbot").removeClass("chatbot_js2 chatbot_js");
      nexusBotHidden = false;
    }
  }
});

$(window).on("load", function () {
  if ($("#chat-bot-chat").isInViewport()) {
    $(".chatbot").addClass("chatbot_js");
    nexusBotHidden = true;
  }
});

$(".chat-submit").on("click", function () {
  if (chatTextArea.value !== "" && chatTextArea.value !== null) {
    console.log(chatTextArea.value);

    chatBoxHtml +=
      `<div class="chat-paragraph">
      <p>` +
      chatTextArea.value +
      `</p>
    </div>`;
    $(".chat-paragraphes").html(chatBoxHtml);
  }
});

$(".tool-name").on("click", function () {
  var toolId = $(this).attr("id");
  console.log(toolId);
  $(".tool-name").removeClass("active-tool");
  $(this).addClass("active-tool");

  $(".blog").each(function () {
    if ($(this).hasClass(toolId)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

});

