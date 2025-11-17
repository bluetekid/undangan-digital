import { saveOrder } from "./action";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export default function AdminPage() {
  const templatePath = path.join(process.cwd(), "data", "templates.json");
  const templates = JSON.parse(fs.readFileSync(templatePath, "utf8") || "[]");

  return (
    <main style={{ 
      padding: '40px 20px', 
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 1rem',
            background: 'linear-gradient(135deg, #fb7185 0%, #ec4899 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(251, 113, 133, 0.3)',
            fontSize: '32px'
          }}>
            ❤️
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #e11d48 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.5rem',
            fontWeight: '700',
            margin: '0 0 0.5rem 0'
          }}>
            Admin - Tambah Order (Demo)
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', margin: 0 }}>
            Buat undangan digital yang sempurna untuk pasangan spesial
          </p>
        </div>

        {/* Form Card */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #ffe4e6'
        }}>
          <form action={saveOrder} style={{ 
            display: 'grid', 
            gap: '1.5rem', 
            maxWidth: '100%' 
          }}>

            <label style={{
              display: 'block'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem',
                fontSize: '0.9rem'
              }}>
                <span style={{ fontSize: '1rem' }}>✨</span>
                Slug
              </div>
              <input name="slug" required style={{
                width: '100%',
                padding: '0.875rem 1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }} 
              placeholder="contoh: wedding-john-jane" />
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.375rem', margin: '0.375rem 0 0 0' }}>
                URL unik untuk undangan (tanpa spasi)
              </p>
            </label>

            {/* Couple Section */}
            <div style={{
              background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #ffe4e6'
            }}>
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                color: '#be123c',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}>
                <span>👥</span>
                Data Mempelai
              </h3>

              <label style={{ display: 'block', marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  <span>🤵</span>
                  Nama Pria
                </div>
                <input name="nama_pria" required style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid #fce7f3',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  background: 'white',
                  boxSizing: 'border-box'
                }}
                placeholder="Masukkan nama lengkap pria" />
              </label>

              <label style={{ display: 'block', margin: 0 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  <span>👰</span>
                  Nama Wanita
                </div>
                <input name="nama_wanita" required style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid #fce7f3',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  background: 'white',
                  boxSizing: 'border-box'
                }}
                placeholder="Masukkan nama lengkap wanita" />
              </label>
            </div>

            <label style={{ display: 'block' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem',
                fontSize: '0.9rem'
              }}>
                <span>🎨</span>
                Template
              </div>
              <select name="template" style={{
                width: '100%',
                padding: '0.875rem 1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                background: 'white',
                cursor: 'pointer',
                boxSizing: 'border-box'
              }}>
                {templates.map(t => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.375rem', margin: '0.375rem 0 0 0' }}>
                Pilih desain yang sesuai dengan tema pernikahan
              </p>
            </label>

            <button type="submit" style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, #fb7185 0%, #ec4899 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(251, 113, 133, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <span>💾</span>
              Simpan
            </button>
          </form>

          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#64748b'
          }}>
            💡 <strong>Tips:</strong> Pastikan semua data sudah benar sebelum menyimpan
          </div>
        </div>

        {/* Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            border: '1px solid #ffe4e6'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Proses Cepat</div>
          </div>
          <div style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            border: '1px solid #ffe4e6'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Template Premium</div>
          </div>
          <div style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            border: '1px solid #ffe4e6'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Desain Modern</div>
          </div>
        </div>
      </div>
    </main>
  );
}