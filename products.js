// ===== SHARED SUPABASE CONNECTION (for products/orders) =====
const SUPABASE_URL = "https://zxylnqmopokqmqomfmmz.supabase.co";
const SUPABASE_KEY = "sb_publishable_YxhoRW9CoiDIYl5Pxdy4ng_wk1qQOkI";

const productsClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== Fetch all active products =====
async function fetchAllProducts() {
  const { data, error } = await productsClient
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Could not load products:", error);
    return [];
  }

  return data;
}

// ===== Fetch a single product by its product_id =====
async function fetchProductById(productId) {
  const { data, error } = await productsClient
    .from("products")
    .select("*")
    .eq("product_id", productId)
    .single();

  if (error) {
    console.error("Could not load this product:", error);
    return null;
  }

  return data;
}