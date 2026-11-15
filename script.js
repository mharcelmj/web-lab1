  // Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Expandable lesson cards
document.querySelectorAll(".lesson-card").forEach((card) => {
  card.addEventListener("click", () => {
    const expanded = card.getAttribute("aria-expanded") === "true";
    card.setAttribute("aria-expanded", String(!expanded));
    const label = card.querySelector(".lesson-open");
    label.textContent = expanded ? "OPEN NOTE +" : "CLOSE NOTE −";
  });
});

// Story finder: each result opens its own scrollable story detail page.
const storyData = {
  reply: {
    title: "Reply 1988", meta: "2015–2016 · SOUTH KOREAN DRAMA", tagline: "The beauty of ordinary days.",
    intro: "A warm story about childhood friends, their families, and the everyday moments that slowly become unforgettable memories.",
    summary: "Set in the neighborhood of Ssangmun-dong in 1988, the series follows five friends and the families living around them. As the young people grow up, they experience friendship, first love, family struggles, and the changes that come with time.",
    context: "The story finds meaning in ordinary routines: sharing food, helping neighbors, arguing, laughing, and being there for one another. It reminds us that a familiar day can become precious when we look back on it.",
    themes: ["Friendship", "Family sacrifices", "Growing up", "Everyday memories"],
    themeNote: "The neighborhood feels like one big family. The story shows how care can be expressed through small actions, even when people do not always say what they feel.",
    reflection: "This story reminds me that some of life's most meaningful memories are created in the simplest moments. It made me appreciate family, friendship, and the people who quietly make life feel special.",
    takeaway: "Do not wait for a special occasion to appreciate an ordinary day. The little moments may become the memories you miss most.",
    trailer: "", // paste a YouTube link or video ID here to show a clip on this story page
    specifics: [["Theme", "The alley is a family", "Five families share food, worries and good news. I used to think family meant only the people under one roof. This showed me a neighborhood can raise you too."], ["Characters", "The parents", "They rarely say “I love you,” yet they show it by cooking a favorite dish or waiting up. It made me look at my own parents’ small gestures differently."], ["Lesson", "Every alley empties one day", "Friends grow up and move on. It reminds me to be fully present now, because today is already someone’s “old days” later."]],
    image: "https://i.pinimg.com/736x/a7/83/b5/a783b5ad936f2904953f0afffd70ecaf.jpg",
    gallery: [
      { src: "https://i.pinimg.com/1200x/b8/e6/bf/b8e6bf59ad5e58ce8cf1a3fa34cd79c4.jpg", caption: "A QUIET NEIGHBORHOOD" },
      { src: "https://i.pinimg.com/736x/8c/ae/bc/8caebcd52efa2bf9bf2bce4a24b1c5a7.jpg", caption: "PEOPLE WHO FEEL LIKE HOME" },
      { src: "https://i.pinimg.com/736x/95/a0/48/95a048b43897c9bb3e98de210c9d4230.jpg", caption: "FRIENDSHIP" },
      { src: "https://i.pinimg.com/1200x/5b/d9/86/5bd98694c3a1746345aa5d919759c3d4.jpg", caption: "ORDINARY DAYS" },
      { src: "https://i.pinimg.com/736x/ac/04/b8/ac04b8afa5ef88149aaa2876e9564b9f.jpg", caption: "GROWING UP" },
      { src: "https://i.pinimg.com/1200x/12/03/85/1203853332caeafd81a6310cac7846e4.jpg", caption: "SHARED MEMORIES" },
      { src: "https://i.pinimg.com/1200x/9d/06/aa/9d06aa47e347896f0057ab49bc519f23.jpg", caption: "TOGETHER" },
      { src: "https://i.pinimg.com/736x/60/7d/44/607d4445c6559cee922ca93ffb642880.jpg", caption: "A MOMENT TO KEEP" },
      { src: "https://i.pinimg.com/736x/6e/fa/5d/6efa5d0b1b77acce780d9a7ed611f715.jpg", caption: "THE NEIGHBORHOOD" }
    ]
  },
  idiots: {
    title: "3 Idiots", meta: "2009 · INDIAN COMEDY-DRAMA", tagline: "Finding your own definition of success.",
    intro: "A funny and heartfelt story about friendship, academic pressure, and having the courage to follow what truly matters to you.",
    summary: "The film follows three engineering students as they deal with college life, competition, expectations, and the pressure to succeed. Their experiences challenge the idea that a person's future should be decided only by grades or social expectations.",
    context: "Through humor and difficult moments, the story asks viewers to think about why they learn and what success really means. It values curiosity, understanding, and passion instead of studying only out of fear.",
    themes: ["Passion for learning", "Academic pressure", "Friendship", "Personal growth"],
    themeNote: "The film encourages students to understand what they are learning instead of simply memorizing answers. It also shows how supportive friendships can help people face difficult times.",
    reflection: "This movie reminds me that success should not be measured only by grades or achievements. It taught me that learning should come from curiosity and passion, not just fear of failure or the expectations of others.",
    takeaway: "Your path does not have to look like everyone else's. Keep learning, keep trying, and give yourself room to discover what you love.",
    trailer: "", // paste a YouTube link or video ID here to show a clip on this story page
    specifics: [["Character", "Rancho", "He learns because he loves to understand things, not to win. Watching him made me want to stay curious even when the exam is tomorrow."], ["Character", "Farhan", "He studies engineering to please others while dreaming of wildlife photography. His story makes me ask whether my choices are mine or just expected of me."], ["Quote", "“All is well”", "Telling my heart to stay calm does not fix everything, but it gives me a steady mind to keep working. I use it before presentations and deadlines."]],
    image: "https://i.pinimg.com/736x/a7/7a/93/a77a9392c5da978aa014c40ebd949ab9.jpg",
    gallery: [
      { src: "https://i.pinimg.com/736x/6d/fc/54/6dfc54e7c349cc6092e52ed66b7e6da3.jpg", caption: "CAMPUS DAYS" },
      { src: "https://clip.cafe/img800/sir-i-wasnt-teaching-engineering.jpg", caption: "LEARNING TOGETHER" },
      { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhR4iNBfyZJakdNEyFAM5SjSpMRseBFRld3SkqNfybYXYo8DgV1bUF_c5abBL3gxTOWLiz91UrIXoiUC0-r42npoOfydwbNt-q6xzQplIdabeRkBkkrt2HL2_lH13gNjHov9AjGkn3ilv3/s320/4.png", caption: "THE STUDY HOURS" },
      { src: "https://mxp-media.ilnmedia.com/media/content/2018/Sep/millimetre-from-3-idiots-looks-unrecognizable-now-740x500-2-1536073883.jpg?w=938&h=507&cc=1", caption: "NEW IDEAS" },
      { src: "https://i.pinimg.com/1200x/03/d8/75/03d875a32b0b7970ea64dc988f19c696.jpg", caption: "FRIENDSHIP" },
      { src: "https://images.openai.com/static-rsc-4/sH_fQhITKEBsU9XvavmEaafCU9p0c5DoVOuqMSbn6e06ap2z0NdMyWezdNKIDVX6KGEgg3SQIGerKqbtm4uysH88zWY5Dk9CNikkL6pRal5Him-Z_GX4fVhV2DPKoeNo4fp5xSsy3cEUMZPPuJA9ya5v2N7jv5-cVD6CeMl3uQ9_JP4hU8WarzqrQMsWcjiL?purpose=fullsize", caption: "THE LIBRARY" },
      { src: "https://images.openai.com/static-rsc-4/xgmMqGqDy2ZgwwGDiZOwrovw-Mux0D4JH5VNoQPlYrVEirvpso1mO3c9Rj89L8t8Cm0braI3vERJyMUZ_KF0viIfxaHSQxdlkeGBDBgvYWwUugJK-nvMYpEJiPFVVindJk8-5vtf8nHkAFL3em1H8-op2zNUVwIaj5V5e3dGsQJrclXhlktjRAxfbMWx3YzS?purpose=fullsize", caption: "NOTES & DREAMS" },
      { src: "https://images.openai.com/static-rsc-4/utCW6HjRotIpPXnHUbCfTJ8Th-AONB5W0WWLQE2K4qzL4ZbLIvMqn18e5Go5ZFyNGFd7JeJ_X_6v91mJygQrci-ImXb_aHajL0a3VWaTYZ5Yr1KtqDs5tP41vn_yufiD4VcG-GiOEb4gIUJ3tDEzt5EwAzi_HQTAdeiHJTeC_eI7XzvxVMV_OBzFiNVJRpeY?purpose=fullsize", caption: "FIND YOUR WAY" },
      { src: "https://i.pinimg.com/736x/ba/ae/b1/baaeb1b6ea33c651c001545cc811ceb2.jpg", caption: "THE NEXT CHAPTER" }
    ]
  },
  bridge: {
    title: "Bridge to Terabithia", meta: "2007 · FANTASY-DRAMA", tagline: "Where imagination becomes an escape.",
    intro: "A moving story about two young friends who create an imaginary kingdom and discover how friendship can change the way they see the world.",
    summary: "Jess and Leslie form a close friendship and imagine a magical kingdom called Terabithia. Their made-up world gives them a place to be brave, creative, and free from the difficulties they face in everyday life.",
    context: "The film celebrates childhood imagination and the importance of being understood. It also deals with grief and the way memories of someone important can remain with us.",
    themes: ["Imagination", "Friendship", "Childhood", "Love and loss"],
    themeNote: "Terabithia represents the freedom to imagine something beyond what we see. The friendship at the center of the story shows how deeply another person can affect our lives.",
    reflection: "This story reminds me how powerful imagination can be. It also taught me that the people who enter our lives can leave something meaningful behind, even when circumstances change.",
    takeaway: "Keep your imagination alive. The people who inspire us can continue to shape us through the memories and courage they leave behind.",
    trailer: "", // paste a YouTube link or video ID here to show a clip on this story page
    specifics: [["Scene", "Building the kingdom", "Two kids turn a patch of woods into a place where they matter. It reminds me why I love making things: a blank canvas can feel like home."], ["Character", "Leslie", "She sees wonder where others see nothing and invites Jess to see it too. I want to be that kind of friend."], ["Theme", "Passing the kingdom on", "After loss, Jess shares Terabithia with his little sister. Grief becomes something you give forward. That ending still moves me."]],
    image: "https://i.pinimg.com/736x/7e/84/46/7e844636d73baf705517776ab6d15043.jpg",
    gallery: [
      { src: "https://images.openai.com/static-rsc-4/dc0f8dPZZ7e5EcgvE93lGSaHloY-MiDkmZH4cSmvF8NguqQhFraFXvNGhNfv4ekF4MTvve5IyM_IGeWdcFmXVt9kGw5px_SltGi1z0yAh3VMbcdH_Tob9AqFp-_iIgEO4ZRYiEWs8dMoycmj7MfZHrIrRsc3OYUWI1wxPI3-qO8?purpose=inline", caption: "A WORLD OF WONDER" },
      { src: "https://images.openai.com/static-rsc-4/yWxkmXisDNYSCF8n0nIJ2_OU_uvdTDH5HBBWiRSXbdg1nvCBAS6MEsB5WFfEcb0A-j28MFO2AKo0W6uBf-klYFS9t3vAWPERZxWhLamnyuvlFl7rUGze2x9Av-IvTgCKKjSuKvZ4rtk9yC5mogQMSvRhlTVzRgQV4MO9bXfai6aoVKOk_0gwP4KFto_mVw5c?purpose=fullsize", caption: "THE FOREST" },
      { src: "https://images.openai.com/static-rsc-4/_M3IKFt_4jXDMihHR248-Ygn3xRvJVYxgCdSd-3inVAz8A75ghiMar4cGjSE518ZsSa6Gb1hP7Li0fWPiJxK5f_HHGzXSVSbHDTne5F51rTUB3G2rhtqH_f0VG44asQTmMEMUdtrJ3zhnG_CdcLAHMNwGVJJuLmOXdz9V55_6ncWbevmJvP_4r1o0ssN8VMc?purpose=fullsize", caption: "HIDDEN PATHS" },
      { src: "https://images.openai.com/static-rsc-4/HjrWZvmMbeID3v2tz0RGsQXNbDSrCHk4VhoCxTTrtuIqTXkM64YhUGAl8SU1lydy3tnKK8TE4LzpFc3jTz_fBYIg7BIV85V5Ir8Adfze4TgoYSAJVA4DMJPxMSeHONZIV0HhbE6tYGhXXqZR6zMOui969KJVexl5pGzv9SkoQA4?purpose=inline", caption: "IMAGINATION" },
      { src: "https://images.openai.com/static-rsc-4/OxHYa12YxNQLN5vCH5kHkIzwkofUwy-8SWAvvmhP7CfNYzSy74dreOYc1rVQImsC0iH-0uZBEQnBnNF8IBVcOMyeRt7L0iFOHOn-8jgxiMId9HBn6BIZHUn3h7uBk8gkVNN4h1X0DQ0wI8li8WncKnFSpEtU_iywR-SVGgCNDee5dftU7zI7ur8C0mjWRbCB?purpose=fullsize", caption: "SUNLIGHT & MEMORIES" },
      { src: "https://images.openai.com/static-rsc-4/gVG7VR-Qqo44EfszocJQKUqzNA1r6Qn3oZRJPQtqFhH3OUc5oxDGkgApoqZxvuGz2cjUJk5lDQUf3P1Zesh3i5c5wyXdGGvZI2TSnUYDXbtVe_PlIK1ifg9ZoyHn3boE7yAuEf_tcGHwWmgxsYckhBTDYrCDCC_7T6YvdgRTQHsqHml6kqFgXJ8QYclqO6lZ?purpose=fullsize", caption: "A PLACE TO ESCAPE" },
      { src: "https://images.openai.com/static-rsc-4/8bRsRzn8gNueZXczKujxSGXJqlabP-jLoFZAq-8_sXXcItRd9Cr3y6bh5pj8Sjxsfg_iB5n94LuVJVhhv9FhzDLflMSlanoxsoTXyyiK-PGQUFYTwSc7k2uDqGCtUoSZIbSircbHFCrNcOWFUXp0KyjRYOQhpFU3FlkO7b6GO7kP9UqxxhLIhrlSjl4nWwJT?purpose=fullsize", caption: "NATURE'S QUIET" },
      { src: "https://images.openai.com/static-rsc-4/d82qGFwFBXlh8T0V4nne0ATDIYkvnQ42XLo6QrW3HBrFBJz_enxMiMoiEFgkWaERfa5MJD2B45xWC0RNcqD80-wtiJYUDuwSg2fCjA1z1rPUavPPhdZpI0YEACrYCQyglIrDVYRIJyVjvFmJev8mzbybv9xaJmILf_WtVEOGXPb81GeJpwS_rsQeIsRFwQ1G?purpose=fullsize", caption: "A DIFFERENT WORLD" },
      { src: "https://i.pinimg.com/1200x/48/ec/d8/48ecd8f9b06be8e62164c54fac8fd92b.jpg", caption: "KEEP WONDER ALIVE" }
    ]
  },
  sundays: {
    title: "Seven Sundays", meta: "2017 · FILIPINO FAMILY COMEDY-DRAMA", tagline: "The people we call home.",
    intro: "A Filipino family story about siblings, old misunderstandings, forgiveness, and the importance of making time for the people we love.",
    summary: "Four adult siblings come together after learning that their father is seriously ill. Their time together brings old family issues and unresolved feelings to the surface, giving them a chance to understand one another again.",
    context: "The film shows that families can disagree and carry hurt, but honest conversations and shared time can help rebuild relationships. It encourages viewers not to take their loved ones for granted.",
    themes: ["Family bonds", "Forgiveness", "Understanding", "Appreciation"],
    themeNote: "The siblings' experiences show that family relationships need patience and effort. Love is not always perfect, but it can grow when people choose to listen and make time for one another.",
    reflection: "This movie reminds me that family relationships are not always perfect. Sometimes, misunderstandings and pride create distance. But it is important to appreciate the people we love while we still have the chance.",
    takeaway: "Make time for the people who matter. A simple conversation, a shared meal, or saying thank you can mean more than we realize.",
    trailer: "", // paste a YouTube link or video ID here to show a clip on this story page
    specifics: [["Theme", "Seven weeks", "A clear deadline turns every Sunday into something precious. I try to treat ordinary Sundays the same way, without waiting for a deadline."], ["Characters", "The four siblings", "Old grudges and pride kept them apart. Watching them soften made me think about who I should reach out to first."], ["Lesson", "What a father really wants", "He does not ask for gifts or perfect behavior. He wants his children in the same room. Presence is the best thing I can give."]],
    image: "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/560021979_1230135759132629_5772421243337445649_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s960x960&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEajz-_DKRGD1G3vFD_PMA22-YoAz10DRnb5igDPXQNGRm-HQH2Nq-ikXXjSofFIPuRSMz9TIaUwx5uOtxXU1q4&_nc_ohc=9IGHRz0xARwQ7kNvwFgCOL_&_nc_oc=AdrDxoERhq87B8nAHqAAYcLzf1P-Ls9O6jgljYGS7S-OYxxixF1UYivHOL1XQsj6cEdyMs_AKekTtX1KR2xjil9E&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=zv6RqVf3z5jSw3V-4RhaJg&_nc_ss=7b2a8&oh=00_AQTECPki4Mot4lQDJsI5G1Coa6QiTp4GNoujjuWRAQkeXw&oe=6AFFB055",
    gallery: [
      { src: "https://images.openai.com/static-rsc-4/m-d_OJvYbibknp5AIWKF950AKiYOYYvRhNhYRaoTbV6J4P21GtrLb4yQ307xgMccWfPw8kJf3fl8pT0jdg56sYM8L70lq3tCNwSRUkjrL0EPYJ9otKl6UhvMhJC3-aADnEHL37Sr3Us-8dc1cnYW3whNXWXa0Wn0ZrKvS31AJZoyYvo1bHYpTNo2G8kl2XQa?purpose=fullsize", caption: "FAMILY MOMENTS" },
      { src: "https://images.openai.com/static-rsc-4/ZGfnvrsxV5g0zHupcyUN2xg_5bAaIGlKUHwFRr9Eb1oLe1CPQNHdyPhhVZ6ood5FsGUnPabRBH0pKhTrOX8uYlizQNKd_N_OeVadAy6h-uBI3zaFtT-cfQE1doGIS2BVurMeHoMvpj-USjEwpCbnxcPNiYOroNqZiURWG0465HkBpb0extfyxRKj0GqRyCqN?purpose=fullsize", caption: "TOGETHER AT HOME" },
      { src: "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/560021979_1230135759132629_5772421243337445649_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s960x960&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEajz-_DKRGD1G3vFD_PMA22-YoAz10DRnb5igDPXQNGRm-HQH2Nq-ikXXjSofFIPuRSMz9TIaUwx5uOtxXU1q4&_nc_ohc=9IGHRz0xARwQ7kNvwFgCOL_&_nc_oc=AdrDxoERhq87B8nAHqAAYcLzf1P-Ls9O6jgljYGS7S-OYxxixF1UYivHOL1XQsj6cEdyMs_AKekTtX1KR2xjil9E&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=zv6RqVf3z5jSw3V-4RhaJg&_nc_ss=7b2a8&oh=00_AQTECPki4Mot4lQDJsI5G1Coa6QiTp4GNoujjuWRAQkeXw&oe=6AFFB055", caption: "SHARED LAUGHTER" },
      { src: "https://images.openai.com/static-rsc-4/pglB8behx1zMNQuVGlD6NFDxeTbAaTge85i9gMn_3BvQNeoGwPvgrmWSmKZ3zICmf21pV3Qh7gcXUBQjWkqBbh69zheSofweIVqTMeJTQj_KCsBWHdXHS2qFkQCIxzbciczgzi3QrXc_Mz68EInEM8XE8Ksvp8MYol9oJN99K40vtSO9nxknQ-4-gT0DXSXe?purpose=fullsize", caption: "SIBLINGS" },
      { src: "https://images.openai.com/static-rsc-4/o1AB4p8zhvVk7XMhiu5SsSekaPHZyYGgeznIp-8U6-gFYY-n8rBdtaO9sQoNd8N4Cq9ax28XPTryjgX6UvrxRYGAnY_QtlF8b3ozRRJV0WHvsjdCp95v08jt50r_lx4VcLIrj1xQLNBLsaiwaqUaSQB4LUCprq8736nLt8sefuLlb6hNGXZOyGWfzps3KV1w?purpose=fullsize", caption: "THE PEOPLE WE LOVE" },
      { src: "https://images.openai.com/static-rsc-4/F9voAL4LoXT1pOcdU4jMd31WBYxmzegPfLWTmq5Zm8zeECqTPR94Avh0AxgKB0mYyuO8WLFDAhcZMAA3PXPPs1cbxgXipUp053tqSm4YX2AUdiAZU0-Fufh0NJfpAdiITgfqML0ksb_3RxpSpbBuQUwscrhGXsiiHak103b1XchsDr1zsqLa66UVmtHgt6ah?purpose=fullsize", caption: "OLD MEMORIES" },
      { src: "https://images.openai.com/static-rsc-4/-ltmJJUfIJNf_EgPWwdUSwYkd5BxTW3CgTYrehOHsG_6gP8XFAAENvPgmafe_N_MWQ1fCaKUFR39EIgkWQoaDZEjUhGADfQgWexAu8iTNJ4LJIu_ahCQFFYe1CfcYgR2tpHHT5tlKuNI-5LKLLGqHgHXuUROczqkqqAunbbX1sw?purpose=inline", caption: "FORGIVENESS" },
      { src: "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/759834031_1440296467863123_7388823301272670457_n.jpg?stp=dst-jpg_tt6&cstp=mx1612x720&ctp=s1612x720&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGz-W_1wMZ0rsZsfhHAPqoWkHui38pwhp-Qe6LfynCGn9HdBhM6TA--4QC7yPnVh6Id3Uc76NUq3nugAlvDujwd&_nc_ohc=H3cedikXZUkQ7kNvwGVY_jA&_nc_oc=Adp3ubQerNYv7l8rMTm_c08E1qQjOx7OcFhVQI6IOHoZk45rZo-4LAVPPHm6sKyRgTklZn0k8K8vO6M9bmaTryKE&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=Piwwb3_DnNhnZiN1k-eCtQ&_nc_ss=7b2a8&oh=00_AQRmqTXOiLlO5trI1InszhqfzcTHR-YBAz3rn2wdWNyklA&oe=6AFFC675", caption: "TIME TOGETHER" },
      { src: "https://images.openai.com/static-rsc-4/2hBmK7pLAaDA2xrDLPGpwFt_1Ema7h3FwMP27Q33bm_PERSIUHmBtSVsqrpJ2E7WCvze2EUZra400mI0LcmxmULTkNpWgxs1pTdNa51VLpmSLVjv97NcclvDYrH9we70lZ9o-qg7qEsl-Dz6PVtTBMI_gyk-h8ew57aPQNdyCoKp0xZZ5ZqZuWhVVE8pyWD0?purpose=fullsize", caption: "HOME" }
    ]
  }
};

const feelingCards = [...document.querySelectorAll(".feeling-card")];
const findButton = document.querySelector("#find-button");
const finderHint = document.querySelector("#finder-hint");
const resultCard = document.querySelector("#result-card");
const detailPage = document.querySelector("#story-detail-page");
let selectedStory = null;

feelingCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectedStory = card.dataset.story;
    feelingCards.forEach((item) => item.setAttribute("aria-pressed", String(item === card)));
    findButton.disabled = false;
    finderHint.textContent = "Your feeling is selected. Find the story that matches it.";
    resultCard.hidden = true;
  });
});

function openStoryPage(storyKey) {
  const story = storyData[storyKey];
  if (!story) return;
  document.querySelector("#detail-meta").textContent = story.meta;
  document.querySelector("#detail-title").textContent = story.title;
  document.querySelector("#detail-tagline").textContent = story.tagline;
  document.querySelector("#detail-intro").textContent = story.intro;
  document.querySelector("#detail-summary").textContent = story.summary;
  document.querySelector("#detail-context").textContent = story.context;
  document.querySelector("#detail-theme-note").textContent = story.themeNote;
  document.querySelector("#detail-reflection-text").textContent = story.reflection;
  document.querySelector("#detail-takeaway-text").textContent = story.takeaway;
  document.querySelector("#detail-hero-image").style.backgroundImage = `url("${story.image}")`;
  document.querySelector("#detail-poster").style.backgroundImage = `url("${story.image}")`;
  document.querySelector("#detail-number").textContent = String(Object.keys(storyData).indexOf(storyKey) + 1).padStart(2, "0");
  const galleryGrid = document.querySelector("#detail-gallery-grid");
  galleryGrid.replaceChildren(...story.gallery.map((item) => {
    const tile = document.createElement("div");
    tile.className = "detail-gallery-tile";
    const photo = document.createElement("img");
    photo.src = item.src;
    photo.alt = item.caption.toLowerCase();
    photo.loading = "lazy";
    const caption = document.createElement("span");
    caption.textContent = item.caption;
    tile.append(photo, caption);
    return tile;
  }));
  const themeList = document.querySelector("#detail-themes");
  themeList.replaceChildren(...story.themes.map((theme) => {
    const tag = document.createElement("span");
    tag.textContent = theme;
    return tag;
  }));

  document.querySelector("#detail-specifics-grid").replaceChildren(...story.specifics.map(([type, title, why]) => {
    const card = document.createElement("div"); card.className = "spec-card";
    const small = document.createElement("small"); small.textContent = type;
    const h = document.createElement("h4"); h.textContent = title;
    const p = document.createElement("p"); p.textContent = why;
    card.append(small, h, p); return card;
  }));
  const vBox = document.querySelector("#detail-video"), vFrame = document.querySelector("#video-frame");
  const vid = ((story.trailer || "").match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/) || [, (story.trailer || "").trim()])[1];
  vFrame.replaceChildren(); vFrame.style.backgroundImage = "";
  if (vid && vid.length === 11) {
    vBox.hidden = false; vFrame.style.backgroundImage = `url("https://i.ytimg.com/vi/${vid}/hqdefault.jpg")`;
    const play = document.createElement("button"); play.className = "play"; play.type = "button"; play.textContent = "▶"; play.setAttribute("aria-label", "Play the clip");
    play.addEventListener("click", () => {
      const f = document.createElement("iframe"); f.src = `https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0`;
      f.title = "Clip from " + story.title; f.allow = "autoplay; encrypted-media; picture-in-picture"; f.allowFullscreen = true; vFrame.replaceChildren(f);
    });
    vFrame.append(play);
  } else vBox.hidden = true;
  document.body.classList.add("detail-mode");
  detailPage.hidden = false;
  history.pushState({ story: storyKey }, "", `#story-${storyKey}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeStoryPage() {
  document.body.classList.remove("detail-mode");
  detailPage.hidden = true;
  if (location.hash.startsWith("#story-")) history.pushState({}, "", "#find-story");
  document.querySelector("#find-story").scrollIntoView({ behavior: "smooth" });
}

findButton.addEventListener("click", () => {
  if (!selectedStory) return;
  openStoryPage(selectedStory);
});

document.querySelector("#back-to-finder").addEventListener("click", closeStoryPage);
document.querySelector("#detail-back-bottom").addEventListener("click", closeStoryPage);
document.querySelector("#detail-home-link").addEventListener("click", () => {
  document.body.classList.remove("detail-mode");
  detailPage.hidden = true;
});

window.addEventListener("popstate", () => {
  if (!location.hash.startsWith("#story-")) {
    document.body.classList.remove("detail-mode");
    detailPage.hidden = true;
  }
});

document.querySelector("#reset-button").addEventListener("click", () => {
  selectedStory = null;
  feelingCards.forEach((card) => card.setAttribute("aria-pressed", "false"));
  findButton.disabled = true;
  resultCard.hidden = true;
  finderHint.textContent = "Choose one feeling to begin.";
});

// Reveal elements as they enter the screen
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".info-inner, .info-card, .hero-copy, .hero-art, .intro-grid, .story, .carry-heading, .lesson-card, .heart-intro, .closing-content").forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// Polaroids and envelopes: tap to open or close
document.querySelectorAll(".envelope").forEach((b) => b.addEventListener("click", () => b.setAttribute("aria-expanded", String(b.getAttribute("aria-expanded") !== "true"))));
// A little reminder
const reminders = ["“You don’t have to be ahead. You just have to keep going.”","“Call someone you love today.”","“Ordinary days are the ones you’ll miss most.”","“It’s okay to take the long way to who you’re becoming.”","“Make room for a little wonder today.”","“Success is not a grade. It’s a life you can call your own.”","“You are allowed to rest, then begin again.”","“Some stories end. Their lessons stay.”"];
let lastReminder = -1;
document.querySelector("#reminder-btn").addEventListener("click", () => {
  let i; do { i = Math.floor(Math.random() * reminders.length); } while (i === lastReminder);
  lastReminder = i; const rt = document.querySelector("#reminder-text"); typeInto(rt, reminders[i]); burst(document.querySelector("#reminder-btn"));
});

// ---- Motion and play ----
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
// scroll progress and hero parallax
const bar = document.querySelector("#progress"), hero = document.querySelector(".info-hero");
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  if (!calm && hero && scrollY < innerHeight * 1.5) hero.style.backgroundPosition = `center calc(50% + ${scrollY * 0.25}px)`;
}, { passive: true });
// hero title types in letter by letter
const heroTitle = document.querySelector(".info-hero h1");
if (heroTitle && !calm) {
  let n = 0;
  heroTitle.setAttribute("aria-label", heroTitle.textContent);
  (function split(node) {
    [...node.childNodes].forEach((kid) => {
      if (kid.nodeType === 3) {
        const frag = document.createDocumentFragment();
        [...kid.textContent].forEach((ch) => {
          if (ch === " ") { frag.append(" "); return; }
          const sp = document.createElement("span"); sp.className = "ch"; sp.setAttribute("aria-hidden", "true");
          sp.style.animationDelay = (0.2 + n++ * 0.06) + "s"; sp.textContent = ch; frag.append(sp);
        });
        kid.replaceWith(frag);
      } else split(kid);
    });
  })(heroTitle);
}
// floating light motes in the hero
if (hero && !calm) {
  for (let i = 0; i < 18; i++) {
    const m = document.createElement("span"); m.className = "mote";
    const size = 3 + Math.random() * 6;
    m.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;animation-duration:${9 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s;--dx:${(Math.random() - 0.5) * 140}px`;
    hero.append(m);
  }
}
// gentle 3D tilt on collection photos
if (!calm && matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".info-img").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(700px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) scale(1.02)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}
// scrapbook polaroids: tap to flip, drag to rearrange
document.querySelectorAll(".polaroid").forEach((p) => {
  let sx, sy, ox = 0, oy = 0, moved = false, down = false;
  p.addEventListener("pointerdown", (e) => { down = true; moved = false; sx = e.clientX; sy = e.clientY; p.setPointerCapture(e.pointerId); });
  p.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (!moved && Math.hypot(dx, dy) > 6) { moved = true; p.classList.add("dragging"); }
    if (moved) p.style.translate = `${ox + dx}px ${oy + dy}px`;
  });
  const end = (e) => {
    if (!down) return; down = false; p.classList.remove("dragging");
    if (moved) { ox += e.clientX - sx; oy += e.clientY - sy; } else p.setAttribute("aria-expanded", String(p.getAttribute("aria-expanded") !== "true"));
  };
  p.addEventListener("pointerup", end);
  p.addEventListener("pointercancel", () => { down = false; p.classList.remove("dragging"); });
  p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); p.setAttribute("aria-expanded", String(p.getAttribute("aria-expanded") !== "true")); } });
});
// little hearts rise from a button
function burst(el) {
  if (calm) return;
  const r = el.getBoundingClientRect();
  for (let i = 0; i < 10; i++) {
    const h = document.createElement("span"); h.className = "heart-pop"; h.textContent = "♡";
    h.style.left = r.left + Math.random() * r.width + "px"; h.style.top = r.top + r.height / 2 + "px";
    h.style.setProperty("--dx", (Math.random() - 0.5) * 120 + "px"); h.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.append(h); setTimeout(() => h.remove(), 2200);
  }
}
document.querySelector("#find-button").addEventListener("click", (e) => burst(e.currentTarget));
// soft music box, generated in the browser (no audio files)
const musicBtn = document.querySelector("#music-btn"), scale = [523.25, 587.33, 659.25, 783.99, 880, 659.25, 523.25, 392];
let actx, musicTimer, playing = false;
function ping() {
  const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
  o.type = "sine"; o.frequency.value = scale[Math.floor(Math.random() * scale.length)];
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.08, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0008, t + 2.4);
  o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 2.5);
  musicTimer = setTimeout(ping, 900 + Math.random() * 1500);
}
musicBtn.addEventListener("click", () => {
  if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
  playing = !playing; musicBtn.setAttribute("aria-pressed", String(playing));
  musicBtn.textContent = playing ? "♪ Music on" : "♪ Soft music";
  if (playing) { actx.resume(); ping(); } else clearTimeout(musicTimer);
});

// ---- Even more motion ----
document.documentElement.classList.add("js");
const seen = (cb, threshold = 0.25) => new IntersectionObserver((es, ob) => es.forEach((e) => { if (e.isIntersecting) { cb(e.target); ob.unobserve(e.target); } }), { threshold });
["#memories .polaroid", ".info-card", ".lesson-card"].forEach((sel) => document.querySelectorAll(sel).forEach((el, i) => el.style.setProperty("--n", i)));
const wallObs = seen((w) => w.classList.add("in"), 0.2);
document.querySelectorAll(".polaroid-wall").forEach((w) => wallObs.observe(w));
if (!calm) {
  // headings rise word by word
  const headObs = seen((h) => h.classList.add("words-in"), 0.4);
  document.querySelectorAll(".section-heading, .closing-content h2, .heart-intro h2").forEach((el) => {
    el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
    let i = 0;
    (function walk(node) {
      [...node.childNodes].forEach((k) => {
        if (k.nodeType === 3) {
          const f = document.createDocumentFragment();
          k.textContent.split(/(\s+)/).forEach((t) => {
            if (!t) return;
            if (/^\s+$/.test(t)) { f.append(" "); return; }
            const m = document.createElement("span"); m.className = "wm"; m.setAttribute("aria-hidden", "true");
            const x = document.createElement("span"); x.className = "wi"; x.style.setProperty("--i", i++); x.textContent = t;
            m.append(x); f.append(m);
          });
          k.replaceWith(f);
        } else if (k.nodeName !== "BR") walk(k);
      });
    })(el);
    headObs.observe(el);
  });
  // number in the hero ring counts up
  const ringNum = document.querySelector(".info-ring text");
  if (ringNum) { let n = 0; ringNum.textContent = "0"; setTimeout(() => { const t = setInterval(() => { ringNum.textContent = ++n; if (n >= 4) clearInterval(t); }, 450); }, 700); }
  // glowing motes drift through the story-finder section too
  const finder = document.querySelector(".heart-section");
  if (finder) for (let i = 0; i < 14; i++) {
    const m = document.createElement("span"); m.className = "mote"; const size = 3 + Math.random() * 6;
    m.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;animation-duration:${10 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s;--dx:${(Math.random() - 0.5) * 120}px`;
    finder.append(m);
  }
}

// typewriter for the reminder, falling petals
let typeTimer;
function typeInto(el, text) {
  clearInterval(typeTimer);
  if (calm) { el.textContent = text; return; }
  el.textContent = ""; let k = 0;
  typeTimer = setInterval(() => { el.textContent = text.slice(0, ++k); if (k >= text.length) clearInterval(typeTimer); }, 32);
}
if (!calm) {
  for (let i = 0; i < 10; i++) {
    const p = document.createElement("span"); p.className = "petal";
    p.style.cssText = `left:${Math.random() * 100}%;animation-duration:${16 + Math.random() * 14}s;animation-delay:${-Math.random() * 25}s;--dx:${(Math.random() - 0.5) * 260}px;transform:scale(${0.7 + Math.random() * 0.7})`;
    document.body.append(p);
  }
}
