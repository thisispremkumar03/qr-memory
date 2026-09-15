<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>All Gifts — Our Memories</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body class="landing-body">

  <section class="page-header">
    <p class="brand-name">OUR MEMORIES</p>
    <h1>All Gifts</h1>
    <p class="hero-sub">Browse personalized gifts for every story.</p>
  </section>

  <section class="section" style="padding-bottom:0;">
    <div id="occasion-filters" class="filter-row">
      <button class="filter-btn active" data-occasion="all">All</button>
      <button class="filter-btn" data-occasion="couples">Couples</button>
      <button class="filter-btn" data-occasion="birthday">Birthday</button>
      <button class="filter-btn" data-occasion="anniversary">Anniversary</button>
      <button class="filter-btn" data-occasion="best-friends">Best Friends</button>
      <button class="filter-btn" data-occasion="long-distance">Long Distance</button>
    </div>
  </section>

  <section class="section">
    <div id="all-products" class="product-grid">
      <p style="color:#999;">Loading gifts...</p>
    </div>
  </section>

  <footer class="footer">
    <p>Our Memories · Vijayawada · Made with ❤️</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="products.js"></script>
  <script>
    let allProductsData = [];

    async function loadAllProducts() {
      const container = document.getElementById("all-products");
      allProductsData = await fetchAllProducts();

      if (allProductsData.length === 0) {
        container.innerHTML = `<p style="color:#999;">No gifts available right now — check back soon.</p>`;
        return;
      }

      renderProducts(allProductsData);
    }

    function renderProducts(products) {
      const container = document.getElementById("all-products");

      if (products.length === 0) {
        container.innerHTML = `<p style="color:#999;">No gifts match this filter yet.</p>`;
        return;
      }

      container.innerHTML = "";

      products.forEach(product => {
        const card = document.createElement("a");
        card.href = `product.html?id=${product.product_id}`;
        card.className = "product-card product-card-link";
        card.innerHTML = `
          <div class="product-img-placeholder">🎁</div>
          <p class="product-name">${product.name}</p>
          <p class="product-desc">${product.short_description || ""}</p>
          <p class="product-price">₹${product.price}</p>
        `;
        container.appendChild(card);
      });
    }

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const occasion = btn.getAttribute("data-occasion");

        if (occasion === "all") {
          renderProducts(allProductsData);
        } else {
          const filtered = allProductsData.filter(p =>
            (p.occasion_tags || "").split(",").map(t => t.trim()).includes(occasion)
          );
          renderProducts(filtered);
        }
      });
    });

    loadAllProducts();
  </script>
</body>
</html>
