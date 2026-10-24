(function () {
  const STORAGE_KEY = "kartini-lang";

  const dict = {
    id: {
      "meta.title": "Kartini Creations | Rajutan handmade · Malang",
      "meta.description":
        "Kartini Creations, Malang: rajutan handmade. Stok siap di Shopee dan Tokopedia. Pesanan khusus via Instagram dan WhatsApp.",
      "nav.home": "Beranda",
      "nav.collection": "Koleksi",
      "nav.product": "Stok siap",
      "nav.order": "Cara pesan",
      "nav.faq": "FAQ",
      "nav.contact": "Pesan Sekarang",
      "nav.about": "Cerita kami",
      "nav.aria": "Navigasi utama",
      "hero.eyebrow": "Kartini Creations",
      "hero.title": "Rajutan handmade, dikerjakan dengan teliti di Malang.",
      "hero.body":
        "Setiap jahitan punya cerita. Temukan rajutan handmade favorit Anda—dibuat dengan teliti untuk kehangatan, kenyamanan, dan sentuhan personal di gaya sehari-hari.",
      "hero.cta": "Lihat Koleksi",
      "hero.ctaHref": "#collection",
      "hero.imgAlt":
        "Model memakai sweater dan topi rajut lavender dari Kartini Creations",
      "collection.title": "Koleksi",
      "collection.cap1": "Topi rajut hijau",
      "collection.cap2": "Topi merah & sweater turtleneck abu",
      "collection.cap3": "Setelan sweater dan topi lavender",
      "collection.cta": "Lihat galeri",
      "why.title": "Kenapa kami",
      "why.1":
        "<strong>Kreatifitas owner:</strong> Setiap pesanan dirajut atau dikrochet oleh <a href=\"https://www.instagram.com/putri_kapandeyan/\" target=\"_blank\" rel=\"noopener noreferrer\">Putri Kapandeyan</a>.",
      "why.2":
        "<strong>Transparansi:</strong> Ukuran, warna, benang, dan motif dikonfirmasi sebelum mulai.",
      "why.3":
        "<strong>Kenyamanan:</strong> Benang untuk dipakai sehari-hari. Dipilih agar nyaman dipakai rutin.",
      "why.4":
        "<strong>Request-based:</strong> Kami mulai setelah Anda pesan, jadi stok selalu ada (pesanan khusus).",
      "why.cta": "Ikuti Instagram",
      "why.imgAlt": "Putri Kapandeyan bersama produk Kartini Creations",
      "about.title": "Cerita kami",
      "about.p1":
        "Kartini Creations adalah brand rajut dan crochet rumahan di Malang. <a href=\"https://www.instagram.com/putri_kapandeyan/\" target=\"_blank\" rel=\"noopener noreferrer\">Putri Kapandeyan</a> mengerjakan setiap potongan dengan tangan: topi, sweater, aksesori, atau setelan lengkap.",
      "about.cta": "Lihat cara pesan",
      "video.title": "Proses di balik Kartini Creations",
      "video.sub": "Nyaman terasa di setiap helai",
      "product.title": "Stok siap",
      "product.lead": "Berdasar listing Tokopedia (Oktober 2026).",
      "product.hats": "Topi & kupluk",
      "product.sweater": "Sweater",
      "product.set": "Setelan lengkap",
      "product.amigurumi": "Amigurumi",
      "product.amigurumiAlt": "Boneka rajut amigurumi Kartini Creations",
      "product.from": "Mulai",
      "product.tokopedia": "Tokopedia",
      "product.shopee": "Shopee",
      "product.instagram": "Instagram",
      "gallery.title": "Galeri",
      "order.title": "Cara pesan",
      "order.lead":
        "Stok siap di Shopee atau Tokopedia. Pesanan khusus lewat Instagram atau WhatsApp.",
      "order.1.title": "Pilih jalur",
      "order.1.body":
        "Beli stok siap di toko online, atau chat untuk pesanan khusus.",
      "order.2.title": "Konfirmasi detail",
      "order.2.body":
        "Untuk pesanan khusus: sepakati ukuran, warna, benang, dan motif.",
      "order.3.title": "Bayar",
      "order.3.body":
        "Stok siap dibayar di toko. Pesanan khusus: ikuti instruksi di chat.",
      "order.4.title": "Terima pesanan",
      "order.4.body":
        "Dikirim ke alamat Anda, atau diambil di Malang jika disepakati.",
      "order.cta": "Chat WhatsApp",
      "order.wa":
        "https://wa.me/6281805185485?text=Halo%20Kartini%20Creations%2C%20saya%20ingin%20pesan%20rajutan.",
      "faq.title": "FAQ",
      "faq.1.q": "Bagaimana cara beli stok siap?",
      "faq.1.a":
        "Langsung di Shopee atau Tokopedia Kartini Creations.",
      "faq.2.q": "Bisa pesan ukuran dan warna khusus?",
      "faq.2.a":
        "Ya. Sampaikan ukuran, warna, benang, dan motif. Kami konfirmasi sebelum dikerjakan.",
      "faq.3.q": "Bagaimana cek ketersediaan?",
      "faq.3.a":
        "Lihat listing toko, atau tanya via Instagram dan WhatsApp.",
      "faq.4.q": "Harga di situs sudah final?",
      "faq.4.a":
        "Angka “mulai” mengikuti harga terendah stok siap di Tokopedia (Oktober 2026). Harga toko bisa berubah; pesanan khusus dikonfirmasi di chat.",
      "faq.5.q": "Bisa kirim luar kota?",
      "faq.5.a":
        "Ya. Stok siap ikut pengiriman Shopee/Tokopedia. Pesanan khusus dikirim setelah selesai, atau diambil di Malang jika disepakati.",
      "faq.6.q": "Hubungi lewat mana?",
      "faq.6.a":
        "Instagram untuk katalog, WhatsApp untuk chat cepat.",
      "cta.eyebrow": "Pesan Sekarang",
      "cta.title":
        "Silakan cek katalog kami atau pesan khusus lewat Instagram dan WhatsApp.",
      "cta.shopee": "Shopee",
      "cta.tokopedia": "Tokopedia",
      "cta.instagram": "Instagram",
      "cta.wa": "WhatsApp",
      "cta.waHref":
        "https://wa.me/6281805185485?text=Halo%20Kartini%20Creations%2C%20saya%20ingin%20tanya%20produk.",
      "footer.blurb": "Rajutan handmade dari Malang.",
      "footer.by": "Dibuat oleh",
      "lang.label": "Bahasa",
    },
    en: {
      "meta.title": "Kartini Creations | Handmade knitwear · Malang",
      "meta.description":
        "Kartini Creations, Malang: handmade knitwear. Ready-stock on Shopee and Tokopedia. Custom orders via Instagram and WhatsApp.",
      "nav.home": "Home",
      "nav.collection": "Collection",
      "nav.product": "Ready-stock",
      "nav.order": "How to Order",
      "nav.faq": "FAQ",
      "nav.contact": "Order Now",
      "nav.about": "Our Story",
      "nav.aria": "Primary navigation",
      "hero.eyebrow": "Kartini Creations",
      "hero.title": "Handmade knitwear, made with care in Malang.",
      "hero.body":
        "Every stitch tells a story. Find your favorite handmade knitwear, crafted with care to bring warmth, comfort, and a personal touch to your everyday style.",
      "hero.cta": "Explore Our Collection",
      "hero.ctaHref": "#collection",
      "hero.imgAlt":
        "Model wearing a lavender hand-knit sweater and beanie from Kartini Creations",
      "collection.title": "Collection",
      "collection.cap1": "Hand-knit green beanie",
      "collection.cap2": "Red beanie & grey turtleneck sweater",
      "collection.cap3": "Lavender sweater and beanie set",
      "collection.cta": "View gallery",
      "why.title": "Why us",
      "why.1":
        "<strong>Owner creativity:</strong> Each order is knit or crocheted by <a href=\"https://www.instagram.com/putri_kapandeyan/\" target=\"_blank\" rel=\"noopener noreferrer\">Putri Kapandeyan</a>.",
      "why.2":
        "<strong>Transparency:</strong> Size, color, yarn, and pattern are confirmed before we start.",
      "why.3":
        "<strong>Comfort:</strong> Yarns made for everyday wear. Chosen to feel good in regular use.",
      "why.4":
        "<strong>Request-based:</strong> We start after you order, so custom pieces stay available on request.",
      "why.cta": "Follow on Instagram",
      "why.imgAlt": "Putri Kapandeyan with Kartini Creations knitwear",
      "about.title": "Our Story",
      "about.p1":
        "Kartini Creations is a home-based knit and crochet brand in Malang. <a href=\"https://www.instagram.com/putri_kapandeyan/\" target=\"_blank\" rel=\"noopener noreferrer\">Putri Kapandeyan</a> makes each piece by hand: hats, sweaters, accessories, or full sets.",
      "about.cta": "See how to order",
      "video.title": "The process behind Kartini Creations",
      "video.sub": "Comfort in every hand-knit piece",
      "product.title": "Ready-stock",
      "product.lead": "Based on Tokopedia listings (October 2026).",
      "product.hats": "Hats & beanies",
      "product.sweater": "Sweater",
      "product.set": "Full set",
      "product.amigurumi": "Amigurumi",
      "product.amigurumiAlt": "Hand-crocheted amigurumi from Kartini Creations",
      "product.from": "From",
      "product.tokopedia": "Tokopedia",
      "product.shopee": "Shopee",
      "product.instagram": "Instagram",
      "gallery.title": "Gallery",
      "order.title": "How to Order",
      "order.lead":
        "Ready-stock on Shopee or Tokopedia. Custom orders via Instagram or WhatsApp.",
      "order.1.title": "Choose a path",
      "order.1.body":
        "Buy ready-stock in the online shop, or chat for a custom order.",
      "order.2.title": "Confirm details",
      "order.2.body":
        "For custom orders: agree size, color, yarn, and pattern.",
      "order.3.title": "Pay",
      "order.3.body":
        "Ready-stock: pay at checkout. Custom: follow the steps in chat.",
      "order.4.title": "Receive your order",
      "order.4.body":
        "Shipped to your address, or pickup in Malang if agreed.",
      "order.cta": "Chat on WhatsApp",
      "order.wa":
        "https://wa.me/6281805185485?text=Hi%20Kartini%20Creations%2C%20I%20would%20like%20to%20order%20knitwear.",
      "faq.title": "FAQ",
      "faq.1.q": "How do I buy ready-stock?",
      "faq.1.a":
        "Order directly on Kartini Creations’ Shopee or Tokopedia shop.",
      "faq.2.q": "Can I request custom sizes or colors?",
      "faq.2.a":
        "Yes. Share size, color, yarn, and pattern. We confirm before work starts.",
      "faq.3.q": "How do I check availability?",
      "faq.3.a":
        "Check the shop listings, or ask on Instagram and WhatsApp.",
      "faq.4.q": "Are site prices final?",
      "faq.4.a":
        "“From” prices follow the lowest ready-stock prices on Tokopedia (October 2026). Shop prices can change; custom totals are confirmed in chat.",
      "faq.5.q": "Do you ship outside the city?",
      "faq.5.a":
        "Yes. Ready-stock follows Shopee/Tokopedia shipping. Custom pieces ship when finished, or pickup in Malang if agreed.",
      "faq.6.q": "How do I contact you?",
      "faq.6.a":
        "Instagram for the catalog, WhatsApp for a quick chat.",
      "cta.eyebrow": "Order Now",
      "cta.title":
        "Please browse our catalog or place a custom order on Instagram and WhatsApp.",
      "cta.shopee": "Shopee",
      "cta.tokopedia": "Tokopedia",
      "cta.instagram": "Instagram",
      "cta.wa": "WhatsApp",
      "cta.waHref":
        "https://wa.me/6281805185485?text=Hi%20Kartini%20Creations%2C%20I%20have%20a%20product%20question.",
      "footer.blurb": "Handmade knitwear from Malang.",
      "footer.by": "Site by",
      "lang.label": "Language",
    },
  };

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") return saved;
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("id") ? "id" : "en";
  }

  function applyLang(lang) {
    const pack = dict[lang] || dict.id;
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!pack[key]) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = pack[key];
      } else {
        el.textContent = pack[key];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(";").forEach(function (part) {
        const bits = part.split(":");
        if (bits.length < 2) return;
        const attr = bits[0].trim();
        const key = bits.slice(1).join(":").trim();
        if (pack[key]) el.setAttribute(attr, pack[key]);
      });
    });

    if (pack["meta.title"]) document.title = pack["meta.title"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && pack["meta.description"]) {
      metaDesc.setAttribute("content", pack["meta.description"]);
    }

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      const active = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  window.KartiniI18n = {
    apply: applyLang,
    detect: detectLang,
    dict: dict,
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(detectLang());
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang-btn"));
      });
    });
  });
})();
