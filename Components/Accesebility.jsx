import React from "react";

const accessibilityQuestions = [
    {
      question: "Erişilebilir bir web sayfasında kullanıcıların klavye kısayollarını kullanabilmesini sağlamak için hangi HTML özelliği kullanılır?",
      choices: ["keyboard", "shortcuts", "accesskey", "hotkeys"],
      correctAnswer: "accesskey",
    },
    {
      question: "Ekranda görüntülenen bir resmin alternatif metnini belirlemek için hangi HTML özelliği kullanılır?",
      choices: ["alt", "description", "image-text", "caption"],
      correctAnswer: "alt",
    },
    {
      question: "Web sayfasındaki bağlantıların açıklamalarını sağlamak ve ek bilgiler sunmak için hangi HTML etiketi kullanılır?",
      choices: ["<desc>", "<linkdesc>", "<details>", "<figcaption>"],
      correctAnswer: "<figcaption>",
    },
    {
      question: "Bir sayfadaki metni büyütmek ve küçültmek için tarayıcıda genellikle hangi tuş kombinasyonu kullanılır?",
      choices: ["Ctrl + \"+\"", "Ctrl + \"-\"", "Alt + \"=\"", "Alt + \"-\""],
      correctAnswer: "Ctrl + \"+\"",
    },
    {
      question: "Erişilebilir bir form oluştururken, her bir form elemanına etiket atamak neden önemlidir?",
      choices: ["SEO için", "JavaScript'le uyumluluk için", "Ekstra stillendirme seçenekleri için", "Ekran okuyucuları ve tarayıcı uyumluluğu için"],
      correctAnswer: "Ekran okuyucuları ve tarayıcı uyumluluğu için",
    },
    {
      question: "Bir sayfadaki düğmeler, bağlantılar ve formlar gibi etkileşimli öğelerin sıralı bir şekilde odaklanılmasını sağlamak için hangi HTML özelliği kullanılır?",
      choices: ["tabindex", "focusorder", "sequence", "orderfocus"],
      correctAnswer: "tabindex",
    },
    {
      question: "Erişilebilir bir web sayfasında metin içindeki renkleri kullanırken nelere dikkat edilmelidir?",
      choices: ["Yazı tipine", "Kontrasta", "Font boyutuna", "İtalik veya kalın kullanımına"],
      correctAnswer: "Kontrasta",
    },
    {
      question: "Bir sayfadaki bağlantıların hedefini belirlemek için hangi HTML özelliği kullanılır?",
      choices: ["target", "linktarget", "href_target", "link_dest"],
      correctAnswer: "target",
    },
    {
      question: "Ekran okuyucular için sayfadaki başlıkları, paragrafları ve diğer yapıları anlamlı bir sırayla sıralamak için hangi HTML etiketi kullanılır?",
      choices: ["<structure>", "<outline>", "<semantic>", "<heading>"],
      correctAnswer: "<heading>",
    },
    {
      question: "Sayfadaki bir resmin üzerine geldiğinde açıklama metnini görüntülemek için hangi HTML özelliği kullanılır?",
      choices: ["tooltip", "description", "alt", "title"],
      correctAnswer: "title",
    },
    {
      question: "Bir sayfadaki metni sadece görsel olarak değil, aynı zamanda metinsel olarak deklare etmek için hangi CSS özelliği kullanılır?",
      choices: ["text-hidden", "visuallyhidden", "hide-text", "text-display-none"],
      correctAnswer: "visuallyhidden",
    },
    {
      question: "Web sayfalarında renk kullanımının renk körlüğüne sahip kullanıcılar için daha erişilebilir olması için hangi tasarım prensipleri uygundur?",
      choices: ["Monokromatik renk şemaları", "Dikatometik renk şemaları", "Triadik renk şemaları", "Analog renk şemaları"],
      correctAnswer: "Monokromatik renk şemaları",
    },
    {
      question: "Bir sayfadaki sesli içeriği kontrol etmek ve açıklamalar eklemek için kullanılan HTML etiketi hangisidir?",
      choices: ["<sound>", "<audio>", "<voice>", "<caption>"],
      correctAnswer: "<audio>",
    },
    {
      question: "Sayfadaki bir form elemanının yanındaki hata mesajını göstermek için kullanılan HTML etiketi hangisidir?",
      choices: ["<errormessage>", "<error>", "<errortext>", "<label>"],
      correctAnswer: "<label>",
    },
    {
      question: "Bir sayfadaki metin boyutunu artırmak ve küçültmek için kullanıcıya izin veren, erişilebilirlik açısından önemli bir araç hangisidir?",
      choices: ["VoiceOver", "Screen Reader", "Zoom Text", "Magnifier"],
      correctAnswer: "Zoom Text",
    },
  ];
  
  export default accessibilityQuestions;
  