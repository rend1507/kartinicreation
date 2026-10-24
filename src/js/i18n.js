(function () {
  const STORAGE_KEY = "kartini-lang";

  const dict = {
    id: {
      "meta.title": "Kartini Creations | Rajutan handmade · Malang",
      "meta.description":
        "Kartini Creations, Malang: rajutan handmade. Stok siap di Shopee/Tokopedia (topi dari Rp75rb, sweater dari Rp550rb). Pesanan sesuai permintaan via WhatsApp.",
      "nav.home": "Beranda",
      "nav.collection": "Koleksi",
      "nav.product": "Produk",
      "nav.order": "Pesan",
      "nav.faq": "FAQ",
      "nav.contact": "Kontak",
      "nav.about": "Tentang",
      "nav.aria": "Navigasi utama",
      "hero.eyebrow": "Kartini Creations",
      "hero.title": "Rajutan handmade, dikerjakan dengan teliti di Malang.",
      "hero.body":
        "Rajutan tangan untuk momen sehari-hari. Pilih stok siap pakai, atau buat yang unik dengan ukuran dan warna sesuai Anda.",
      "hero.cta": "Lihat Koleksi",
      "hero.ctaHref": "#collection",
      "hero.imgAlt": "Model memakai sweater dan topi rajut lavender dari Kartini Creations",
      "collection.eyebrow": "Yang kami buat",
      "collection.title": "Topi, sweater, setelan",
      "collection.cap1": "Topi rajut hijau",
      "collection.cap2": "Topi merah & sweater turtleneck abu",
      "collection.cap3": "Setelan sweater dan topi lavender",
      "collection.cta": "Lihat galeri",
      "why.title": "Kenapa kami",
      "why.1":
        "<strong>Dikerjakan Putri Kapandeyan:</strong> Setiap pesanan dirajut atau dikrochet oleh pendiri di Malang.",
      "why.2":
        "<strong>Detail disepakati dulu:</strong> Ukuran, warna, benang, dan motif dikonfirmasi sebelum mulai.",
      "why.3":
        "<strong>Benang untuk dipakai sehari-hari:</strong> Dipilih agar nyaman dipakai rutin.",
      "why.4":
        "<strong>Dibuat setelah ada pesanan:</strong> Kami mulai setelah Anda pesan, jadi stok sisa tetap rendah.",
      "why.cta": "Ikuti Instagram",
      "why.imgAlt": "Putri Kapandeyan bersama produk Kartini Creations",
      "about.title": "Tentang kami",
      "about.p1":
        "Kartini Creations adalah brand rajut dan crochet rumahan di Malang, Indonesia. Putri Kapandeyan mengerjakan setiap potongan dengan tangan: topi, sweater, aksesori, atau setelan lengkap.",
      "about.p2":
        "Sampaikan ukuran, warna, benang, dan motif yang Anda mau. Kami konfirmasi brief sebelum mulai merajut.",
      "about.cta": "Lihat cara pesan",
      "video.title": "Proses di balik Kartini Creations",
      "video.sub": "Nyaman terasa di setiap helai rajutan",
      "product.title": "Harga stok siap",
      "product.lead":
        "Harga mulai dari listing Tokopedia (Oktober 2026). Stok dan total bayar cek di toko. Pesanan sesuai permintaan lewat WhatsApp atau Instagram.",
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
        "Stok siap: Shopee / Tokopedia. Pesanan sesuai permintaan: WhatsApp atau Instagram.",
      "order.1.title": "Pilih jalur",
      "order.1.body":
        "Ambil stok siap di toko online, atau pesan sesuai permintaan lewat chat.",
      "order.2.title": "Konfirmasi detail",
      "order.2.body":
        "Untuk pesanan khusus: ukuran, warna, benang, dan motif disepakati dulu.",
      "order.3.title": "Bayar",
      "order.3.body":
        "Stok siap dibayar di toko. Pesanan khusus: ikuti instruksi uang muka di chat.",
      "order.4.title": "Terima pesanan",
      "order.4.body":
        "Dikirim ke alamat Anda, atau diambil di Malang jika disepakati.",
      "order.cta": "Chat WhatsApp",
      "order.wa":
        "https://wa.me/6281805185485?text=Halo%20Kartini%20Creations%2C%20saya%20ingin%20pesan%20rajutan.",
      "faq.title": "FAQ",
      "faq.1.q": "Bisa pesan ukuran dan warna khusus?",
      "faq.1.a":
        "Ya. Sampaikan ukuran, warna, jenis benang, dan motif. Kami konfirmasi dulu sebelum dikerjakan.",
      "faq.2.q": "Berapa lama pengerjaan?",
      "faq.2.a":
        "Tergantung antrian dan seberapa khusus pesanannya. Tanya estimasi terkini lewat WhatsApp sebelum bayar.",
      "faq.3.q": "Harga di situs sudah final?",
      "faq.3.a":
        "Angka “mulai” mengikuti harga terendah stok siap di Tokopedia saat dicek (Oktober 2026). Harga di toko bisa berubah. Pesanan khusus bisa beda; total ditulis di chat sebelum bayar.",
      "faq.4.q": "Bisa kirim luar kota?",
      "faq.4.a":
        "Ya. Stok siap ikut pengiriman Shopee/Tokopedia. Pesanan khusus dikirim setelah selesai, atau diambil di Malang jika disepakati.",
      "faq.5.q": "Pesan lewat mana?",
      "faq.5.a":
        "Stok siap: Shopee atau Tokopedia. Pesanan sesuai permintaan: WhatsApp atau katalog Instagram. Semua link: linktr.ee/KartiniCreations",
      "cta.eyebrow": "Siap pesan?",
      "cta.title": "Stok siap di toko online.<br />Pesanan khusus lewat WhatsApp.",
      "cta.shopee": "Shopee · stok siap",
      "cta.tokopedia": "Tokopedia · stok siap",
      "cta.instagram": "Instagram · pesan dulu",
      "cta.linktree": "Linktree · semua tautan",
      "cta.wa": "WhatsApp",
      "cta.waHref":
        "https://wa.me/6281805185485?text=Halo%20Kartini%20Creations%2C%20saya%20ingin%20tanya%20produk.",
      "footer.by": "Dibuat oleh",
      "lang.label": "Bahasa",
    },
    en: {
      "meta.title": "Kartini Creations | Hand-knit & crochet · Malang",
      "meta.description":
        "Kartini Creations, Malang: handmade knitwear. Ready stock on Shopee/Tokopedia (hats from Rp75k, sweaters from Rp550k). Custom pre-order via WhatsApp.",
      "nav.home": "Home",
      "nav.collection": "Collection",
      "nav.product": "Pieces",
      "nav.order": "Order",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.about": "About",
      "nav.aria": "Primary",
      "hero.eyebrow": "Kartini Creations",
      "hero.title": "Handmade knitwear, made with care in Malang.",
      "hero.body":
        "Thoughtfully handcrafted knitwear for your everyday moments. Discover ready-to-wear pieces or create something uniquely yours with custom sizes and colors.",
      "hero.cta": "Explore Our Collection",
      "hero.ctaHref": "#collection",
      "hero.imgAlt":
        "Model wearing a lavender hand-knit sweater and beanie from Kartini Creations",
      "collection.eyebrow": "What we make",
      "collection.title": "Hats, sweaters, sets",
      "collection.cap1": "Hand-knit beanie (green)",
      "collection.cap2": "Red beanie & grey turtleneck sweater",
      "collection.cap3": "Sweater and beanie set (lavender)",
      "collection.cta": "See gallery",
      "why.title": "Why us",
      "why.1":
        "<strong>Handmade by Putri Kapandeyan:</strong> Each order is knit or crocheted by the founder in Malang.",
      "why.2":
        "<strong>Details first:</strong> Size, color, yarn, and pattern are agreed before we start.",
      "why.3":
        "<strong>Everyday yarns:</strong> Chosen for comfort in regular wear.",
      "why.4":
        "<strong>Made on demand:</strong> We start after you order, so leftover stock stays low.",
      "why.cta": "Follow on Instagram",
      "why.imgAlt": "Putri Kapandeyan with Kartini Creations knitwear",
      "about.title": "About us",
      "about.p1":
        "Kartini Creations is a home-based knit and crochet brand in Malang, Indonesia. Putri Kapandeyan makes each piece by hand: hat, sweater, accessory, or full set.",
      "about.p2":
        "Share the size, color, yarn, and pattern you want. We confirm the brief before knitting starts.",
      "about.cta": "See how to order",
      "video.title": "Process behind Kartini Creations",
      "video.sub": "Real comfort in every hand-knit piece",
      "product.title": "Ready stock prices",
      "product.lead":
        "Starting prices from Tokopedia listings (October 2026). Check the shop for stock and the final total. Custom pre-orders go through WhatsApp or Instagram.",
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
      "order.title": "How to order",
      "order.lead":
        "Ready stock: Shopee / Tokopedia. Custom pre-order: WhatsApp or Instagram.",
      "order.1.title": "Choose a path",
      "order.1.body":
        "Buy ready stock in the online shop, or start a custom pre-order in chat.",
      "order.2.title": "Confirm details",
      "order.2.body":
        "For custom orders: agree size, color, yarn, and pattern first.",
      "order.3.title": "Pay",
      "order.3.body":
        "Ready stock: pay at checkout. Custom: follow the deposit steps in chat.",
      "order.4.title": "Receive your order",
      "order.4.body":
        "Shipped to your address, or pickup in Malang if agreed.",
      "order.cta": "Chat on WhatsApp",
      "order.wa":
        "https://wa.me/6281805185485?text=Hi%20Kartini%20Creations%2C%20I%20would%20like%20to%20order%20knitwear.",
      "faq.title": "FAQ",
      "faq.1.q": "Can I customize size and color?",
      "faq.1.a":
        "Yes. Share size, color, yarn type, and pattern. We confirm before work starts.",
      "faq.2.q": "How long does it take?",
      "faq.2.a":
        "It depends on the queue and how custom the piece is. Ask for the current estimate on WhatsApp before you pay.",
      "faq.3.q": "Are site prices final?",
      "faq.3.a":
        "“From” prices follow the lowest ready-stock prices on Tokopedia when checked (October 2026). Shop prices can change. Custom pre-orders may differ; the total is written in chat before payment.",
      "faq.4.q": "Do you ship outside the city?",
      "faq.4.a":
        "Yes. Ready stock follows Shopee/Tokopedia shipping. Custom pieces ship when finished, or pickup in Malang if agreed.",
      "faq.5.q": "Where do I order?",
      "faq.5.a":
        "Ready stock: Shopee or Tokopedia. Pre-order / custom: WhatsApp or the Instagram catalog. All links: linktr.ee/KartiniCreations",
      "cta.eyebrow": "Ready to order?",
      "cta.title": "Ready stock in the online shops.<br />Custom via WhatsApp.",
      "cta.shopee": "Shopee · ready stock",
      "cta.tokopedia": "Tokopedia · ready stock",
      "cta.instagram": "Instagram · pre-order",
      "cta.linktree": "Linktree · all links",
      "cta.wa": "WhatsApp",
      "cta.waHref":
        "https://wa.me/6281805185485?text=Hi%20Kartini%20Creations%2C%20I%20have%20a%20product%20question.",
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
      // format: attr:key;attr2:key2
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
