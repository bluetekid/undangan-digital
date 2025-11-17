import fs from 'fs';
import path from 'path';
import data from '../../../data/orders.json';

export default function UndanganPage({ params }) {
  const slug = params.slug;
  const order = data.find(o => o.slug === slug);

  if (!order) {
    return <main style={{ padding: 20, fontFamily: 'system-ui, sans-serif' }}><h1>Undangan tidak ditemukan</h1></main>;
  }

  // Load the template HTML from public/templates/<template>/index.html
  const templatePath = path.join(process.cwd(), 'public', 'templates', order.template, 'index.html');
  let html = '';
  try {
    html = fs.readFileSync(templatePath, 'utf8');
  } catch (e) {
    html = '<h1>Template tidak ditemukan</h1>';
  }

  // Replace simple placeholders like {{nama_pria}} and {{nama_wanita}}
  const finalHTML = html.replace(/{{nama_pria}}/g, order.nama_pria).replace(/{{nama_wanita}}/g, order.nama_wanita);

  return <div dangerouslySetInnerHTML={{ __html: finalHTML }} />;
}
