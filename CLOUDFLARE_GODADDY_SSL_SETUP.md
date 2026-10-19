# Cloudflare + GoDaddy Domain SSL Handshake Failed (Error 525) Fix Guide

## 📌 Problem Kya Hai? (Why Error 525 Happens)
Cloudflare Workers URL (`roy-plumbingservices.royplumbingservices.workers.dev`) perfectly open ho raha hai, lekin GoDaddy custom domain add karne par **"SSL handshake failed" (Error 525)** aa raha hai.

### Iske 2 Main Reasons hote hain:
1. **GoDaddy me Direct CNAME add karna**: Agar aapne GoDaddy ke DNS me direct `*.workers.dev` ka CNAME daal diya hai, to GoDaddy ka domain Cloudflare ke SSL certificate me include nahi hota, jisse browser SSL handshake reject kar deta hai.
2. **Cloudflare SSL/TLS Encryption Mode**: Cloudflare me SSL mode agar **"Full (Strict)"** set hai, to Cloudflare origin server se SSL certificate maangta hai jo worker me alag se nahi hota.

---

## 🚀 100% Working Step-by-Step Fix

### Step 1: GoDaddy ke Nameservers Cloudflare par change karein (Sabse Zaroori)
1. **Cloudflare Dashboard** ([dash.cloudflare.com](https://dash.cloudflare.com)) me login karein.
2. Top right me **"+ Add a Site"** (ya Add Domain) par click karein.
3. Apna GoDaddy domain enter karein (example: `royplumbingservices.com`) aur **Free Plan** select karein.
4. Cloudflare aapke purane DNS records scan karega -> Click **Continue**.
5. Cloudflare aapko **2 Nameservers** dega:
   - Example: `xxxx.ns.cloudflare.com`
   - Example: `yyyy.ns.cloudflare.com`
6. Ab **GoDaddy** ([godaddy.com](https://godaddy.com)) me login karein:
   - **My Products** -> apne domain ke samne **DNS** ya **Manage** par click karein.
   - **Nameservers** section me jayein -> **Change Nameservers** par click karein.
   - **"I'll use my own nameservers (advanced)"** select karein.
   - Cloudflare ke dono nameservers paste karein aur **Save** karein.
7. Cloudflare me wapas aakar **"Done, check nameservers"** par click karein. (Nameservers update hone me 5-30 minute lagte hain).

---

### Step 2: Cloudflare Worker me "Custom Domain" add karein
*Note: Manually CNAME add karne ki jagah Cloudflare Workers ka native Custom Domain feature use karein.*

1. Cloudflare dashboard me left menu se **Compute (Workers & Pages)** par click karein.
2. Apne worker **`roy-plumbingservices`** par click karein.
3. **Settings** tab par jayein.
4. Left side me **Domains & Routes** par click karein.
5. **Add** button par click karke **Custom Domain** select karein.
6. Apna domain type karein:
   - Example: `royplumbingservices.com`
   - Aur dobara add karke `www.royplumbingservices.com` bhi daal sakte hain.
7. **Add Custom Domain** button dabayein.
8. ✨ Cloudflare automatically required DNS record add kar dega aur free **Universal SSL certificate** generate kar dega.

---

### Step 3: Cloudflare SSL/TLS Encryption Mode Check Karein
1. Cloudflare me apne domain ke dashboard par jayein.
2. Left menu me **SSL/TLS** -> **Overview** par click karein.
3. Encryption mode ko **"Full"** ya **"Flexible"** par set karein:
   - ⚠️ Agar yeh **"Full (Strict)"** par hai to ise **"Full"** par switch karein.
   - Agar phir bhi handshake error aaye to temporarily **"Flexible"** karke check karein.

---

### Step 4: Edge Certificate & Always Use HTTPS
1. Cloudflare me **SSL/TLS** -> **Edge Certificates** par jayein.
2. **"Always Use HTTPS"** ko **ON** karein.
3. **"Automatic HTTPS Rewrites"** ko **ON** karein.
4. **Universal SSL Status** check karein:
   - Agar status **"Active"** hai -> SSL ready hai.
   - Agar status **"Pending Validation"** ya **"Authorizing"** hai -> 10-15 minute wait karein, Cloudflare automatically issue kar dega.

---

### ⏱️ Propagation Time (Wait Time)
- Nameserver change hone me **15 minute se 1-2 ghante** lag sakte hain.
- SSL Certificate issue hone me **10-20 minute** lagte hain.
- Tab tak browser cache clear karke ya Incognito window / Mobile data par check karein:
  `https://yourdomain.com`
