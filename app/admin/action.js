"use server";

import fs from "fs";
import path from "path";

export async function saveOrder(formData) {
    const slug = formData.get("slug") || "";
    const nama_pria = formData.get("nama_pria") || "";
    const nama_wanita = formData.get("nama_wanita") || "";
    const template = formData.get("template") || "brown";

    const dataPath = path.join(process.cwd(), "data", "orders.json");

    let orders = [];
    try {
        orders = JSON.parse(fs.readFileSync(dataPath, "utf8") || "[]");
    } catch (e) {
        // ignore
    }

    orders.push({ slug, nama_pria, nama_wanita, template });

    fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2), "utf8");

    return { success: true };
}
